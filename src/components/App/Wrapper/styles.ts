import { device } from '@/theme';
import { makeStyles, normalize } from '@rneui/themed';
import { StyleSheet } from 'react-native';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
  },
  fullScreen: {
    ...StyleSheet.absoluteFillObject,
  },
}));

export default useStyles;
