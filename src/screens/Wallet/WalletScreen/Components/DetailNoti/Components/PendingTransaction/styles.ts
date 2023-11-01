import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors, font }) => ({
  container: {
    backgroundColor: 'white',
    paddingTop: 30,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: colors.grey3,
    marginHorizontal: 5,
  },

  optionText: {
    fontSize: 20,
    fontWeight: '600',
    marginHorizontal: 90,
    textAlign: 'center',
    color: colors.primary,
  },
  button: {
    marginTop: 50,
    width: 300,
    borderRadius: 8,
    backgroundColor: 'red',
    height: 50,
    marginBottom: 40,
  },
  buttonContainer: {
    alignItems: 'center',
  },
}));

export default useStyles;
