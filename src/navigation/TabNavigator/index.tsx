import React from 'react';
import screenList from '@/screens';
import { Platform, View } from 'react-native';
import CustomTabBar from './CustomTabBar/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { homeTabRoute, menuTabRoute, ordersTabRoute, visitTabRoute, walletTabRoute } from '@/constants/route_key';
import { useTheme } from '@rneui/themed';

const Tab = createBottomTabNavigator();
const StackHome = createNativeStackNavigator();
const StackVisit = createNativeStackNavigator();
const StackMenu = createNativeStackNavigator();

function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName={homeTabRoute.homeScreen}>
      {Object.values(homeTabRoute).map(item => {
        return (
          <StackHome.Screen
            key={item}
            name={item}
            component={screenList[item as keyof typeof screenList]}
            options={{
              headerShown: false,
            }}
          />
        );
      })}
    </StackHome.Navigator>
  );
}

function VisitStack() {
  return (
    <StackVisit.Navigator initialRouteName={visitTabRoute.visitScreen}>
      {Object.values(visitTabRoute).map(item => {
        return (
          <StackVisit.Screen
            key={item}
            name={item}
            component={screenList[item as keyof typeof screenList]}
            options={{
              headerShown: false,
            }}
          />
        );
      })}
    </StackVisit.Navigator>
  );
}

function WallerStack() {
  return (
    <StackHome.Navigator initialRouteName={walletTabRoute.walletScreen}>
      {Object.values(walletTabRoute).map(item => {
        return (
          <StackHome.Screen
            key={item}
            name={item}
            component={screenList[item as keyof typeof screenList]}
            options={{
              headerShown: false,
            }}
          />
        );
      })}
    </StackHome.Navigator>
  );
}

function MenuStack() {
  return (
    <StackMenu.Navigator initialRouteName={menuTabRoute.menuScreen}>
      {Object.values(menuTabRoute).map(item => {
        return (
          <StackHome.Screen
            key={item}
            name={item}
            component={screenList[item as keyof typeof screenList]}
            options={{
              headerShown: false,
            }}
          />
        );
      })}
    </StackMenu.Navigator>
  );
}

export function AppTab() {
  const {
    theme: { colors },
  } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <Tab.Navigator
        screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}
        tabBar={props => <CustomTabBar {...props} />}
      >
        <Tab.Screen name={'HomeTab'} component={HomeStack} />
        <Tab.Screen name={'SocialTab'} component={HomeStack} />
        <Tab.Screen name={'VisitTab'} component={VisitStack} />
        <Tab.Screen name={'WalletTab'} component={WallerStack} />
        <Tab.Screen name={'MenuTab'} component={MenuStack} />
      </Tab.Navigator>
    </View>
  );
}
