import { logout, setToken } from '@/redux/slices/authSlice/authSlice';
import { store } from '@/redux/store/store';

class TokenService {
  getLocalRefreshToken() {
    return store.getState().authReducer.user?.refreshToken;
  }

  getLocalAccessToken() {
    return store.getState().authReducer.user?.accessToken;
  }

  updateToken(token: object) {
    store.dispatch(setToken(token));
  }
  logout() {
    store.dispatch(logout());
  }
}

export default new TokenService();
