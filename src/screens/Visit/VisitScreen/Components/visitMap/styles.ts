import { deviceWidth } from '@/configs';
import { theme } from '@/theme';
import { makeStyles, normalize } from '@rneui/themed';
import { Dimensions } from 'react-native';
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
    map: {
      flex: 1,
    },
    backButton: {
      position: 'absolute',
      top: 20,
      left: 20,
      zIndex: 1,
      backgroundColor: 'rgba(0, 0 ,0 , 0.5)',
      borderRadius: 20,
      padding: 8,
    },
    loadingIndicator: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      zIndex: 2,
    },
    cardContainer: {
      position: 'absolute',
      top: 20,
      right: 20,
      zIndex: 1,
    },
    destinationIcon: {
      width: 30,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    routeProfileList: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      backgroundColor: 'transparent',
      zIndex: 1,
    },
    flatList: {
      position: 'absolute',
      bottom: 20,
      left: Dimensions.get('window').width / 2 - 40,
      right: 0,
      backgroundColor: 'transparent',
      zIndex: 1,
    },
    routeProfileButton: {
      width: 80,
      height: 80,
      borderRadius: 40,
      marginHorizontal: 8,
      borderColor: '#fff',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    selectedRouteProfileButton: {
      backgroundColor: '#FA9E14',
      borderColor: '#FA9E14',
    },
    routeProfileButtonText: {
      color: '#fff',
      marginTop: 5,
    },
    selectedRouteProfileButtonText: {
      color: 'white',
    },
    contentContainer: {
      flex: 1,
      alignItems: 'flex-start',
      paddingLeft: 15,
    },
    bgProminent: {
      backgroundColor: '#0DA02D',
      position: 'absolute',
      bottom: 110,
      right: 0,
      padding: 10,
      borderTopLeftRadius: 50,
      borderBottomLeftRadius: 50,
    },
    textProminent: {
      fontWeight: '500',
      fontSize: 16,
    },
    notTextNoti: {
      fontSize: normalize(18),
      fontFamily: font.fontFamily,
      fontWeight: '600',
      color: colors.grey4,
    },
    buttonStyle: {
      borderRadius: 10,
      marginHorizontal: 15,
      width: 100,
      marginTop: 10,
    },
    button: {
      borderWidth: 1,
      borderColor: colors.grey4,
      borderRadius: 10,
    },
  };
});

export default useStyles;
