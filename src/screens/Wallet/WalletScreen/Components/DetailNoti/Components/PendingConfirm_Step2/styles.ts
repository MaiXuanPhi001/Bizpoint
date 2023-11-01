import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors, font }) => ({
  container: {
    backgroundColor: 'white',
    paddingTop: 30,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: colors.grey3,
    marginHorizontal: 5,
  },

  optionText: {
    fontSize: 20,
    fontWeight: '600',
    marginHorizontal: 100,
    textAlign: 'center',
    color: colors.primary,
  },
  buttonCancel: {
    borderRadius: 10,
    backgroundColor: 'red',
    height: 50,
    paddingHorizontal: 40,
  },
  buttonConfirm: {
    borderRadius: 12,
    backgroundColor: '#03801F',
    height: 50,
    paddingHorizontal: 40,
  },
  buttonContainer: {
    alignItems: 'center',
  },
}));

export default useStyles;
