import { deviceWidth } from '@/configs';
import { makeStyles } from '@rneui/themed';
const TAB_ITEM_HEIGHT = 50;
const TABS_ITEM_MARGIN_BOTTOM = 5;
const useStyles = makeStyles(({ colors }) => ({
  tabBarItemContainer: {
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    paddingHorizontal: 20,
    marginBottom: TABS_ITEM_MARGIN_BOTTOM,
    height: TAB_ITEM_HEIGHT,
    borderWidth: 1,
  },
  tabBarItemContainerChosen: {
    backgroundColor: colors.primary,
    borderRadius: 50,
    paddingHorizontal: 40,
    paddingVertical: 5,
    height: TAB_ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarItem: {
    width: deviceWidth / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarItemText: {
    fontSize: 16,
    fontWeight: '500',
  },
  tabViewContainer: {
    flex: 1,
  },
}));

export default useStyles;
