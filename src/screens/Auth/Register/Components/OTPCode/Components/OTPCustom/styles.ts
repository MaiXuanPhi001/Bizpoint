import { makeStyles, normalize } from '@rneui/themed';
import { StyleSheet } from 'react-native';

const useStyles = makeStyles(({ colors, font }) => ({
  container: {
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
  },
  viewContainer: {
    position: 'absolute',
    margin: 0,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cell: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 1,
  },
  cellFocused: {
    borderColor: '#00B388',
    borderWidth: 2,
  },
  text: {
    color: 'gray',
    fontSize: 24,
  },
  textFocused: {
    color: 'black',
  },
  textInput: {
    flex: 1,
    opacity: 0,
    textAlign: 'center',
  },
}));

export default useStyles;
