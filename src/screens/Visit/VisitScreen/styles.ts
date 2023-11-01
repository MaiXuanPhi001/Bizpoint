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
    menuContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    text: {
      color: colors.white,
      fontSize: 17,
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
      marginVertical: 10,
    },
    bgInfo1: {
      // flex: 1,
      alignItems: 'center',
    },
    text2: {
      color: colors.white,
      fontSize: 22,
      fontWeight: '600',
      textAlign: 'center',
    },
    title1: {
      fontSize: 17,
      fontWeight: '700',
      fontFamily: font.fontFamily,
      color: colors.white,
    },
    title: {
      fontSize: 16,
      fontWeight: '500',
      fontFamily: font.fontFamily,
      color: colors.white,
    },
    avatar: {
      height: 60,
      width: 60,
      borderRadius: 100,
      marginBottom: 10,
    },
    menuItem: {
      height: ITEM_WIDTH,
      width: ITEM_WIDTH,
      backgroundColor: colors.white,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.border,
      marginBottom: 5,
      marginHorizontal: PADDING_HORIZONTAL_ICON,
    },
    label: {
      fontSize: 13,
      textAlign: 'center',
      marginBottom: 20,
      fontWeight: '500',
    },
    button: {
      padding: 0,
      margin: 0,
      backgroundColor: 'transparent',
      marginHorizontal: 20,
      height: 50,
    },
    buttonLogout: {
      padding: 0,
      margin: 0,
      backgroundColor: 'red',
      marginHorizontal: 20,
      height: 50,
      paddingHorizontal: 50,
      borderRadius: 10,
    },
    buttonContainer: {
      alignItems: 'center',
      marginTop: 15,
    },
    backgroundButton: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: colors.primary,
      borderRadius: 30,
      opacity: 0.2,
    },
    textButton: {
      color: colors.primary,
      fontSize: 18,
      fontWeight: '700',
      marginLeft: 10,
    },
  };
});

export default useStyles;
