import React from 'react';
import { Image, View } from 'react-native';
import useStyles from './styles';

const AppLoading = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/app/loading.gif')} style={styles.icon} resizeMode="contain" />
    </View>
  );
};

export default AppLoading;
