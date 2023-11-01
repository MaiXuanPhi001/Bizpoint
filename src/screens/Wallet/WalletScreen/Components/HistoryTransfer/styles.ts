import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors, font }) => ({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: '300',
    marginLeft: 15,
    marginBottom: 5,
  },
  boderContainer: {
    flex: 1,
    borderRadius: 8,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: colors.grey4,
    padding: 10,
    paddingBottom: 8,
    backgroundColor: '#rgba(0, 0, 0, 0.08)',
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
  notTextNoti: {
    fontSize: normalize(18),
    fontFamily: font.fontFamily,
    fontWeight: '600',
    color: colors.grey4,
  },
}));

export default useStyles;
