import { useEffect } from 'react';
import { BackHandler } from 'react-native';

interface IParams {
  enabled?: boolean;
  callback: () => void;
}

const useBackHandler = ({ enabled, callback }: IParams) => {
  useEffect(() => {
    const backHandler = () => {
      callback();
      return true;
    };
    if (enabled) {
      BackHandler.addEventListener('hardwareBackPress', backHandler);
    } else {
      BackHandler.removeEventListener('hardwareBackPress', backHandler);
    }
    return () => BackHandler.removeEventListener('hardwareBackPress', backHandler);
  }, [enabled, callback]);
};

export default useBackHandler;
