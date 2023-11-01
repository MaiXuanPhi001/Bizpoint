import { device } from '@/theme';
import { makeStyles, normalize } from '@rneui/themed';
import { StyleSheet } from 'react-native';

const useStyles = makeStyles(({ colors, font }) => ({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  form: { flex: 1 },
  title: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: font.fontFamily,
    color: colors.white,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    fontFamily: font.fontFamily,
    alignItems: 'center',
    color: '#707070',
  },
  text1: {
    marginTop: 4,

    fontSize: 12,
    fontFamily: font.fontFamily,
    alignItems: 'center',
    color: '#707070',
    textAlign: 'center',
    paddingHorizontal: 30,
    marginBottom: 50,
  },
  button: {
    width: 340,
    borderRadius: 8,
    backgroundColor: '#03801F',
    height: 50,
  },
  buttonContainer: {
    alignItems: 'center',
    borderRadius: 8,
  },
  bgBottom: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomWidth: 0,
    borderTopColor: colors.grey3,
    backgroundColor: 'white',
  },
  bottom: {
    // width: '100%',
    // borderTopRightRadius: 20,
    // padding: 20,
    // overflow: 'hidden',
  },
  backgroundCheckIn: {
    ...StyleSheet.absoluteFillObject,
    height: device.height,
    width: device.width,
  },
  camera: {
    width: '100%',
    height: normalize(350),
    borderRadius: 20,
    borderColor: colors.grey5,
    borderWidth: 6,
    backgroundColor: colors.white,
    overflow: 'hidden',
  },
  bottomTime: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: normalize(20),
    backgroundColor: 'transparent',
  },
  bottomTimeNow: {
    color: colors.green,
    fontSize: 37,
    marginRight: 20,
  },
  bottomTimeDay: {
    flex: 1,
  },
  bottomTimeDayDetail: {
    fontSize: 17,
    color: colors.textMain,
  },
  address: {
    color: colors.textGray3,
  },
  titleQuestion: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    color: colors.textMain,
  },
  optionAfterTakePhoto: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonAfterTakePhoto: {
    flex: 1,
  },
  textGroup: {
    marginBottom: normalize(60),
  },
  titleTextAfterTakePhoto: {
    fontSize: 16,
    color: colors.textMain,
  },
  subTextAfterTakePhoto: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: 10,
  },
  textRequest: {
    fontSize: 14,
    marginVertical: 10,
    color: colors.textGray3,
  },
}));

export default useStyles;
