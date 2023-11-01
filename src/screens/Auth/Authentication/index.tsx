import { Wrapper, Logo } from '@/components';
import { Image, Text } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import useStyles from './styles';
import Header from '@/components/App/Header';
import { heightPercentageToDP, images } from '@/configs';
import { Button } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { mainStackParamList } from '@/navigation/types';
import { authRoute, mainRoute } from '@/constants/route_key';

const AuthenticationScreen: React.FC = () => {
  const styles = useStyles();
  const navigation = useNavigation<StackNavigationProp<mainStackParamList>>();

  return (
    <Wrapper isBg isSafe>
      <View style={styles.container}>
        <Logo style={styles.heading} />
        <View style={{ marginTop: 150, marginBottom: 20 }}>
          <Button
            title="ĐĂNG KÝ"
            buttonStyle={[styles.button, { backgroundColor: 'white' }]}
            containerStyle={styles.buttonContainer}
            titleStyle={{
              color: 'black',
              fontSize: 14,
            }}
            onPress={() => {
              navigation.navigate(authRoute.registerScreen as never);
            }}
          />
          <Button
            title="ĐĂNG NHẬP"
            buttonStyle={[styles.button, { backgroundColor: '#03801F' }]}
            containerStyle={styles.buttonContainer}
            titleStyle={{
              fontSize: 14,
            }}
            onPress={() => {
              navigation.navigate(authRoute.LoginScreen as never);
            }}
          />
        </View>
      </View>
    </Wrapper>
  );
};

export default AuthenticationScreen;
