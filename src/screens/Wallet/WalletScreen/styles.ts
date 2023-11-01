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
      padding: 10,
    },
    menuContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    text: {
      color: colors.black,
      fontSize: 14,
      fontWeight: '300',
    },
    bgInfo: {
      // flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#rgba(217, 217, 217, 0.5)',
      borderRadius: 10,
      marginHorizontal: 10,
      alignItems: 'center',
      paddingHorizontal: 30,
      paddingVertical: 20,
    },
    bgInfo1: {
      // flex: 1,
      alignItems: 'center',
    },
    text2: {
      color: colors.primary,
      fontSize: 22,
      fontWeight: '600',
      textAlign: 'center',
    },
    title1: {
      fontSize: 17,
      fontWeight: '700',
      fontFamily: font.fontFamily,
      color: colors.black,
    },
    title: {
      fontSize: 16,
      fontWeight: '500',
      fontFamily: font.fontFamily,
      color: colors.black,
    },
    avatar: {
      height: 60,
      width: 60,
      borderRadius: 100,
    },
  };
});

export default useStyles;
