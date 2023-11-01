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
    marginTop: 10,
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
    marginTop: 15,
  },
  rowTitle1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 0,
  },
  text: {
    color: colors.black,
    fontSize: 15,
  },
  textForgotPassword: {
    fontSize: 14,
    textAlign: 'center',
    color: '#03801F',
    marginBottom: 12,
  },
  checkIcon: {
    color: '#03801F',
    fontWeight: '600',
  },
  button: {
    width: 400,
    borderRadius: 20,
    backgroundColor: '#03801F',
    height: 50,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 50,
    borderRadius: 10,
  },
  textCheckBox: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.textGray3,
  },
}));

export default useStyles;
