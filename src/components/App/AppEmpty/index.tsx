import React from 'react';
import { View } from 'react-native';
import useStyles from './styles';
import AnimatedLottieView from 'lottie-react-native';

const AppEmpty = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <AnimatedLottieView source={require('@/utils/lottie-json/empty.json')} autoPlay={true} loop />
    </View>
  );
};

export default AppEmpty;
