import { deviceWidth } from '@/configs';
import { makeStyles } from '@rneui/themed';
import { StyleSheet } from 'react-native';

const useStyles = makeStyles(theme => ({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 9999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: '60%',
  },
}));

export default useStyles;
