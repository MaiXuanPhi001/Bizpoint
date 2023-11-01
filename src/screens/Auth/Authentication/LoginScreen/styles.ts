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
  titleInput: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: font.fontFamily,
  },
  backgroundError: {
    backgroundColor: '#FAE6E6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    height: 40,
    marginHorizontal: 4,
  },
  textError: {
    color: colors.error,
    fontSize: normalize(14),
  },
  formController: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 4,
    height: 50,
    paddingHorizontal: 20,
  },
  formInputText: {
    color: colors.textGray4,
    fontSize: 15,
    textAlignVertical: 'center',
  },
  formContainerController: {
    height: 40,
    marginTop: 10,
    paddingHorizontal: 0,
  },
  rowTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    marginBottom: 40,
  },
  textForgotPassword: {
    fontSize: 15,
    textAlign: 'center',
    color: '#03801F',
    marginBottom: 30,
  },

  button: {
    width: 250,
    borderRadius: 8,
    backgroundColor: '#03801F',
    height: 50,
  },
  buttonContainer: {
    alignItems: 'center',
  },
}));

export default useStyles;
