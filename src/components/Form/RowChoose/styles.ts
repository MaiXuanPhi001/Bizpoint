import { normalize } from '@/configs';
import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles(({ font, colors }) => ({
  container: {
    marginBottom: 15,
  },
  title: {
    marginRight: 5,
    marginBottom: 5,
  },
  error: {
    color: colors.error,
  },
  input: {
    fontSize: 15,
    fontFamily: font.fontFamily,
    color: colors.textMain,
    padding: 0,
    textAlign: 'right',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

export default useStyles;
