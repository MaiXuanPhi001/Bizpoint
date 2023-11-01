import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors, font }) => ({
  container: {
    backgroundColor: 'white',
    paddingTop: 30,
    paddingHorizontal: 10,
    borderWidth: 3,
    borderColor: colors.grey3,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 40,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: '300',
    marginLeft: 15,
    marginBottom: 5,
  },
  optionText: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: 'red',
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

  inputs1: {
    fontSize: 15,
    color: colors.grey2,
    padding: 0,
    textAlignVertical: 'top',
    borderBottomColor: colors.grey4,
    borderBottomWidth: 1,
  },
  buttonCancel: {
    borderRadius: 10,
    backgroundColor: 'red',
    height: 40,
    paddingHorizontal: 40,
    marginTop: 20,
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
  bgImg: {
    alignItems: 'center',
    height: 90,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.grey4,
    justifyContent: 'center',
    backgroundColor: '#fff',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 4,
      width: 5,
    },
  },
}));

export default useStyles;
