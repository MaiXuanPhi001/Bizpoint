import VectorIcon from '@/components/VectorIcon';
import { iconType } from '@/constants';
import { normalize, Text, useTheme } from '@rneui/themed';
import { View, StatusBar, TouchableOpacity } from 'react-native';
import useStyles from './styles';
import { goBack as GoBack } from '@/navigation/RootNavigation';
// import CountDown from 'react-native-countdown-component';

type headerProps = {
  title?: string;
  goBack?: boolean | Function;
  leftComponent?: React.ReactNode;
  centerComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  customerTitle?: boolean;
};

const Header: React.FC<headerProps> = ({
  customerTitle,
  title,
  goBack = true,
  leftComponent,
  centerComponent,
  rightComponent,
}) => {
  const styles = useStyles();
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <View style={[styles.leftSide]}>
        {goBack && !leftComponent ? (
          <TouchableOpacity
            hitSlop={{ top: 50, bottom: 10, left: 40, right: 40 }}
            onPress={() => {
              if (typeof goBack === 'function') {
                goBack();
              } else {
                GoBack();
              }
            }}
          >
            <VectorIcon name={'arrowleft'} origin={iconType.ANT_ICON} color={theme.colors.black} size={normalize(22)} />
          </TouchableOpacity>
        ) : null}
        {leftComponent && leftComponent}
      </View>

      <View style={[styles.centerSide]}>
        {title && !centerComponent ? <Text style={styles.title}>{title}</Text> : null}
        {centerComponent && centerComponent}
      </View>

      <View style={[styles.rightSide]}>{rightComponent && rightComponent}</View>
    </View>
  );
};

export default Header;
