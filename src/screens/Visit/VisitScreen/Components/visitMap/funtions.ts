import { isIOS } from '@/configs';
import { Platform } from 'react-native';
import { PERMISSIONS, RESULTS, check, request } from 'react-native-permissions';

export const checkPermissionLocation = async () => {
  return check(Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
    .then(result => {
      return result;
    })
    .catch(error => {
      return error;
    });
};

export const bwsLocationLauncher = async () => {
  const result = await checkPermissionLocation();
  switch (result) {
    case RESULTS.UNAVAILABLE:
      return {
        isSuccess: false,
        imgRes: null,
        msg: 'Vị trí không khả dụng trên thiết bị này!',
      };
    case RESULTS.DENIED:
      return request(isIOS ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(
        res => {
          if (res === RESULTS.GRANTED) {
            return { isSuccess: true, msg: '' };
          } else {
            return {
              isSuccess: false,
              msg: 'Vị trí không khả dụng trên thiết bị này!',
            };
          }
        },
      );
    case RESULTS.GRANTED:
      return { isSuccess: true, msg: '' };
    case RESULTS.LIMITED:
    // return showCamera();
    case RESULTS.BLOCKED:
      // alertForLocationPermission();
      return { isSuccess: false, msg: '' };
    default:
      return { isSuccess: false, msg: '' };
  }
};

export function calcCrow(lat1: number, lon1: number, lat2: number, lon2: number) {
  var R = 6371; // km
  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}

// Converts numeric degrees to radians
function toRad(Value: any) {
  return (Value * Math.PI) / 180;
}

export const KEY_TOKEN_MAPBOX =
  'sk.eyJ1IjoiaGh1dXRoaWVuMiIsImEiOiJjbG9jY2gxeGMxN3A2MmtxcWFuMnAxeGN1In0.9aXcjtgUdKzswfp8Hagaug';
