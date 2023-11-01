import { makeStyles, normalize } from '@rneui/themed';
import { StyleSheet } from 'react-native';

const useStyles = makeStyles(({ colors, font }) => ({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: font.fontFamily,
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    fontFamily: font.fontFamily,
    marginTop: 20,
    alignItems: 'center',
    color: '#707070',
    textAlign: 'center',
    paddingHorizontal: 30,
  },
  button: {
    width: 310,
    borderRadius: 8,
    backgroundColor: '#03801F',
    height: 50,
  },
  buttonContainer: {
    alignItems: 'center',
    borderRadius: 8,
  },
}));

export default useStyles;
