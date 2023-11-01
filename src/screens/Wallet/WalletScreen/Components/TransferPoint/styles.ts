import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors, font }) => ({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: '300',
    marginLeft: 15,
    marginBottom: 5,
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
  },
  inputs: {
    fontSize: 15,
    color: colors.grey2,
    padding: 0,
    textAlignVertical: 'top',
  },
  inputs1: {
    fontSize: 15,
    color: colors.grey2,
    padding: 0,
    textAlignVertical: 'top',
    borderBottomColor: colors.grey4,
    borderBottomWidth: 1,
  },
  button: {
    marginTop: 70,
    width: 300,
    borderRadius: 8,
    backgroundColor: '#03801F',
    height: 50,
    marginBottom: 40,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  formInputText: {
    color: colors.textGray4,
    fontSize: 15,
    textAlignVertical: 'center',
  },
  inputContainer: {
    borderColor: colors.grey4,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
  },
}));

export default useStyles;
