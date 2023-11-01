import { check, PERMISSIONS, openSettings } from 'react-native-permissions';
import { Platform, Alert } from 'react-native';

export const checkPermissionMicrophone = async () => {
  return check(Platform.OS === 'ios' ? PERMISSIONS.IOS.MICROPHONE : PERMISSIONS.ANDROID.RECORD_AUDIO)
    .then(result => {
      return result;
    })
    .catch(error => {
      return error;
    });
};

export const checkPermissionCamera = async () => {
  return check(Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA)
    .then(result => {
      return result;
    })
    .catch(error => {
      return error;
    });
};

export const checkPermissionPhoto = async () => {
  return check(Platform.OS === 'ios' ? PERMISSIONS.IOS.PHOTO_LIBRARY : PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE)
    .then(result => {
      return result;
    })
    .catch(error => {
      return error;
    });
};

export const checkPermissionLocation = async () => {
  return check(Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
    .then(result => {
      return result;
    })
    .catch(error => {
      return error;
    });
};
