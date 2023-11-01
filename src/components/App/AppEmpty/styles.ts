import { makeStyles } from '@rneui/themed';
import { StyleSheet } from 'react-native';

const useStyles = makeStyles(({ colors }) => ({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    backgroundColor: colors.white,
    zIndex: 1000,
  },
}));

export default useStyles;
