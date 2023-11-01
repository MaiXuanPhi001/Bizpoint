import { useEffect } from 'react';
import { deviceWidth } from '@/configs';
import AnimatedLottieView from 'lottie-react-native';
import { Button, ThemeProvider, Text } from '@rneui/themed';
import { persistor, store } from '@/redux/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced';
import { theme } from '@/theme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RootNavigator } from '@/navigation';
import SplashScreen from 'react-native-splash-screen';
import { StyleSheet, View } from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import { Provider } from 'react-redux';
import { webhookErrorBoundaryApi } from '@/services/webhook';

function App(): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }, []);

  return (
    <ErrorBoundary onError={errorHandler} FallbackComponent={CustomFallback}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <FlipperAsyncStorage />
            <GestureHandlerRootView style={{ flex: 1 }}>
              <RootNavigator />
            </GestureHandlerRootView>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;

const errorHandler = (error: Error, stackTrace: string) => {
  webhookErrorBoundaryApi({ message: error.message, stackTrace });
};

const CustomFallback = (props: { error: Error; resetError: Function }) => {
  return (
    <View style={styles.errorContainer}>
      <View style={{ height: deviceWidth, width: deviceWidth }}>
        <AnimatedLottieView source={require('@/utils/lottie-json/error_boundary.json')} loop autoPlay />
      </View>
      <Text style={styles.title}>Đã có lỗi xảy ra!!!</Text>
      <Text style={styles.content}>
        {`Chúng tôi đã báo cáo lỗi nào cho lập trình viên và sẽ khắc phục trong thời gian sớm nhất.\nXin lỗi về sự bất tiện này.`}
      </Text>
      <Button title={'Quay lại'} containerStyle={styles.buttonBack} onPress={() => props.resetError()} />
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: { flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 25, fontWeight: '600' },
  content: {
    padding: 20,
    textAlign: 'center',
    fontSize: 18,
  },
  buttonBack: {
    borderRadius: 20,
    width: deviceWidth - 60,
  },
});
