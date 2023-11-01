import { makeStyles, normalize } from '@rneui/themed';
import { StyleSheet } from 'react-native';

const useStyles = makeStyles(({ colors, font }) => ({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  form: { flex: 1 },
  title: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: font.fontFamily,
  },
  text: {
    fontSize: 16,
    fontFamily: font.fontFamily,
    marginTop: 20,
    alignItems: 'center',
    color: '#707070',
    textAlign: 'center',
    paddingHorizontal: 30,
    marginBottom: 50,
  },
  button: {
    width: 300,
    borderRadius: 8,
    backgroundColor: '#03801F',
    height: 50,
  },
  buttonContainer: {
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 90,
  },
}));

export default useStyles;
