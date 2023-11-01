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
    text: {
      color: 'rgba(0, 0, 0, 0.5)',
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
      width: 300,
      borderRadius: 8,
      backgroundColor: '#03801F',
      height: 50,
    },
    buttonContainer: {
      alignItems: 'center',
    },
  };
});

export default useStyles;
