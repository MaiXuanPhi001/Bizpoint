import { deviceWidth } from '@/configs';
import { makeStyles, normalize } from '@rneui/themed';
const PADDING_CONTAINER = 20;
const PADDING_HORIZONTAL_ICON = 5;
const NUM_ICON = 4;
const ITEM_WIDTH = (deviceWidth - PADDING_CONTAINER * 2 - PADDING_HORIZONTAL_ICON * NUM_ICON * 2) / NUM_ICON;

const useStyles = makeStyles(({ colors, font }) => {
  return {
    container: {
      flex: 1,
    },
    form: {
      flex: 1,
    },
    bordershadow: {
      marginTop: 15,
      justifyContent: 'flex-start',
      borderRadius: 8,
      borderTopWidth: 1,
      borderLeftWidth: 1,
      borderColor: colors.grey4,
      padding: 10,
      paddingVertical: 15,
      backgroundColor: '#fff',
      shadowColor: '#18731D',
      shadowOpacity: 0.2,
      shadowRadius: 2,
      shadowOffset: {
        height: 4,
        width: 5,
      },
    },
    rowStyles: {
      paddingVertical: 20,
    },
    backgroundError: {
      backgroundColor: '#FAE6E6',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12,
      height: 40,
      marginHorizontal: 4,
    },
    textError: {
      color: colors.error,
      fontSize: normalize(14),
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
    title: {
      fontSize: 18,
      fontFamily: font.fontFamily,
      color: colors.grey2,
    },
    titleInput: {
      fontSize: 16,
      fontWeight: '500',
      fontFamily: font.fontFamily,
    },
    formController: {
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 4,
      height: 50,
      paddingHorizontal: 20,
    },

    formContainerController: {
      height: 40,
      marginTop: 10,
      paddingHorizontal: 0,
    },
    rowTitle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15,
    },
    rowTitle1: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 0,
    },
    text: {
      color: colors.grey3,
      fontSize: 14,
      fontWeight: '300',
    },
    textForgotPassword: {
      fontSize: 14,
      textAlign: 'center',
      color: '#03801F',
      marginBottom: 12,
    },
    checkIcon: {
      color: '#03801F',
      fontWeight: '600',
    },
    textCheckBox: {
      fontSize: 15,
      fontWeight: '400',
      color: colors.textGray3,
    },
    border1: {
      borderColor: '#84868C',
      borderRadius: 50,
      width: 33,
      alignItems: 'center',
      paddingVertical: 3,
      borderWidth: 1,
      marginTop: 10,
    },
  };
});

export default useStyles;
