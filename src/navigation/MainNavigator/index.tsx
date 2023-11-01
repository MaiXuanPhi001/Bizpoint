import React from 'react';
import { CardStyleInterpolators, StackNavigationOptions, createStackNavigator } from '@react-navigation/stack';
import { AppTab } from '../TabNavigator';
import { mainRoute } from '@/constants/route_key';
import screenList from '@/screens';

const Stack = createStackNavigator();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'AppTabScreen'} screenOptions={screenOptions}>
      <Stack.Screen
        name="AppTabScreen"
        component={AppTab}
        options={{
          headerShown: false,
        }}
      />

      {Object.values(mainRoute).map(item => {
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

export default MainNavigator;
