import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles(theme => ({
  container: {
    height: 50,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  leftSide: {
    flex: 1,
    alignItems: 'flex-start',
  },
  centerSide: {
    flex: 7,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'SF Pro Display',
    fontWeight: '500',
    fontSize: 18,
  },
  rightSide: {
    flex: 2,
    alignItems: 'flex-end',
  },
}));

export default useStyles;
