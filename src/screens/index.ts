import * as authScreenList from './Auth';
import * as homeScreenList from './Home';
import * as visitScreenList from './Visit';
import * as walletScreenList from './Wallet';
import * as menuScreenList from './Menu';
const screenList = {
  ...authScreenList,
  ...homeScreenList,
  ...visitScreenList,
  ...walletScreenList,
  ...menuScreenList,
};

export default screenList;
