import { makeStyles, normalize } from '@rneui/themed';
import { StyleSheet } from 'react-native';

const useStyles = makeStyles(({ colors, font }) => ({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#0C1442',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  heading: {
    marginBottom: 40,
    marginTop: 80,
    alignItems: 'center',
  },
  form: { flex: 1 },
  icon: {
    width: '100%',
    height: '100%',
  },
  button: {
    width: 270,
    borderRadius: 8,
    height: 40,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
}));

export default useStyles;
