import {
  Home,
  HomeActive,
  Menu,
  MenuActive,
  Social,
  SocialActive,
  Wallet,
  WalletActive,
  // Visit,
  Asd,
} from '@/utils/svg/TabBar';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import useStyles from './styles';
import { mainRoute } from '@/constants/route_key';
import { useTheme } from '@rneui/themed';
import { SvgProps } from 'react-native-svg';
import { useAppDispatch } from '@/redux/store/customReduxHook';
import { Visit, visitActive } from '@/assets/images/auth';
//   import { getAllDataCreateOrder } from '@/redux/slices/createOrderSlice';
const CustomTabBar = (props: BottomTabBarProps) => {
  const dispatch = useAppDispatch();
  const { state, descriptors, navigation } = props;
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    // if (state.index !== 1) {
    // icon thứ 3
    setPrevIndex(state.index);
    // }
  }, [state.index]);

  const styles = useStyles();
  const {
    theme: { colors },
  } = useTheme();
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = prevIndex === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate(route.name, { merge: true });
          }
        };

        if (typeof label === 'string') {
          const Icon = isFocused ? RouteData[label].iconActive : RouteData[label].icon;
          if (label === 'AddTab') {
            return (
              <TouchableOpacity
                key={route.key}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={() => {
                  // dispatch(getAllDataCreateOrder({}));
                }}
                style={[styles.itemContainerFloat]}
              >
                <View style={styles.test}>
                  <Icon />
                </View>
              </TouchableOpacity>
            );
          }
          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={[styles.itemContainer]}
            >
              <Icon />
              <Text style={{ color: isFocused ? colors.primary : '#828282' }}>{RouteData[label].title}</Text>
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );
};

export default CustomTabBar;

const RouteData: {
  [name: string]: { title: string; icon: React.FC<SvgProps>; iconActive: React.FC<SvgProps>; permission: string };
} = {
  HomeTab: { title: 'Home', icon: Home, iconActive: HomeActive, permission: '' },
  SocialTab: { title: 'Social', icon: Social, iconActive: SocialActive, permission: '' },
  VisitTab: { title: 'Visit', icon: visitActive, iconActive: Visit, permission: '' },
  WalletTab: { title: 'Wallet', icon: Wallet, iconActive: WalletActive, permission: '' },
  MenuTab: { title: 'Setting', icon: Menu, iconActive: MenuActive, permission: '' },
};
