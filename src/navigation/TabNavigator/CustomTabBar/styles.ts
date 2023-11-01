import { makeStyles } from '@rneui/themed';
import { deviceWidth } from '@/configs';
import { Platform } from 'react-native';

const TAB_BAR_PADDING_BOTTOM = Platform.OS === 'ios' ? 20 : 0;
const TAB_BAR_HEIGHT: number = 60 + TAB_BAR_PADDING_BOTTOM;
export const ITEM_WIDTH: number = deviceWidth / 5;

const useStyles = makeStyles(theme => ({
  container: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    height: TAB_BAR_HEIGHT,
    borderTopWidth: 0.5,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.white,
    paddingBottom: TAB_BAR_PADDING_BOTTOM,
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: ITEM_WIDTH,
  },
  sliderTab: {
    backgroundColor: theme.colors.primary,
    position: 'absolute',
    width: ITEM_WIDTH,
    height: TAB_BAR_HEIGHT - 10,
    opacity: 0.3,
    borderRadius: 10,
  },
  itemContainerFloat: {
    width: ITEM_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  test: {
    position: 'absolute',
    backgroundColor: theme.colors.blue,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: ITEM_WIDTH - 10,
    height: ITEM_WIDTH - 10,
    bottom: -20,
  },
}));

export default useStyles;
