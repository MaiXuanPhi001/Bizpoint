import SimpleToast from 'react-native-simple-toast';

export const showToastBottom = (message: string, duration?: number) => {
  SimpleToast.showWithGravity(message, duration ? duration : SimpleToast.SHORT, SimpleToast.BOTTOM);
};
