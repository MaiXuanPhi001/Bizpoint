import { makeStyles, normalize } from '@rneui/themed';
import { StyleSheet } from 'react-native';

const useStyles = makeStyles(({ colors, font }) => ({
  container: {
    flex: 1,
  },
  form: { flex: 1 },
  title: {
    fontSize: 50,
    fontWeight: '600',
    fontFamily: font.fontFamily,
    color: colors.white,
  },
  text: {
    fontSize: 16,
    fontFamily: font.fontFamily,
    marginTop: 6,
    alignItems: 'center',
    color: '#707070',
    textAlign: 'center',
    paddingHorizontal: 30,
  },
  text1: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
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
  },
  inputs: {
    fontSize: 15,
    color: colors.grey2,
    padding: 0,
    textAlignVertical: 'top',
  },
  boderContainer: {
    borderRadius: 8,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: colors.grey4,
    padding: 10,
    paddingBottom: 8,
    backgroundColor: '#fff',
    shadowColor: '#18731D',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 4,
      width: 5,
    },
    marginHorizontal: 20,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: '300',
    marginLeft: 15,
    marginBottom: 5,
    marginTop: 20,
  },
}));

export default useStyles;
