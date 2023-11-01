import { makeStyles } from '@rneui/themed';

const STATUSBAR_HEIGHT = 40;

const useStyles = makeStyles(({ colors, font }) => ({
  container: {
    backgroundColor: colors.white,
    padding: 0,
    margin: 0,
    borderWidth: 1,
    borderColor: colors.border,
    borderTopColor: colors.border,
    borderBottomColor: colors.border,
    borderRadius: 10,
  },
  inputContainer: {
    height: STATUSBAR_HEIGHT,
    backgroundColor: 'transparent',
    padding: 0,
  },
  input: {
    fontSize: 15,
    color: colors.textGray4,
    fontFamily: font.fontFamily,
    marginLeft: 0,
  },
}));

export default useStyles;
