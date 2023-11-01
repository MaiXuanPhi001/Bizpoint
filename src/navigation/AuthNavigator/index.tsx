import { authRoute } from '@/constants/route_key';
import screenList from '@/screens';
import { CardStyleInterpolators, createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

const Stack = createStackNavigator();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={authRoute.authScreen} screenOptions={screenOptions}>
      {Object.values(authRoute).map(item => {
        return (
          <Stack.Screen
            key={item}
            name={item}
            component={screenList[item as keyof typeof screenList]}
            options={{
              headerShown: false,
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
