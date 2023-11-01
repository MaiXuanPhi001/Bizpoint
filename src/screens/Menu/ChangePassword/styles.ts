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
    bordershadow: {
      justifyContent: 'flex-start',
      flex: 1,
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
    text: {
      color: 'rgba(0, 0, 0, 0.5)',
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
      marginBottom: 10,
    },
    buttonContainer: {
      alignItems: 'center',
    },
  };
});

export default useStyles;
