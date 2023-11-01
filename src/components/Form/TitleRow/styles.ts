import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
  container: { minHeight: 20, justifyContent: 'center', marginBottom: 7 },
  title: {
    marginHorizontal: 5,
    fontSize: 18,
    fontWeight: '300',
  },
  children: {},
  error: {
    color: colors.error,
  },
}));

export default useStyles;
