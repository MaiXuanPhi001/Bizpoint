import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors, font }) => ({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  placeholder: {
    flex: 1,
    fontSize: 15,
    textAlign: 'right',
    marginRight: 5,
  },
}));

export default useStyles;
