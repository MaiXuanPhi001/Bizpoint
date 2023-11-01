import { APIMESSAGES } from '@/constants';
import DeviceInfo from 'react-native-device-info';
import moment from 'moment';

const videoExts = [
  '3g2',
  '3gp',
  'aaf',
  'asf',
  'avchd',
  'avi',
  'drc',
  'flv',
  'm2v',
  'm3u8',
  'm4p',
  'm4v',
  'mkv',
  'mng',
  'mov',
  'mp2',
  'mp4',
  'mpe',
  'mpeg',
  'mpg',
  'mpv',
  'mxf',
  'nsv',
  'ogg',
  'ogv',
  'qt',
  'rm',
  'rmvb',
  'roq',
  'svi',
  'vob',
  'webm',
  'wmv',
  'yuv',
];

const imgExts = ['jpeg', 'jpg', 'webp', 'png', 'gif'];

const acceptExts = 'apk';
export const checkApk = ext => {
  if (ext.indexOf(acceptExts) > -1) {
    return true;
  }
  return false;
};

export const getAPIErrorMessage = problem => {
  for (const [key, val] of Object.entries(APIMESSAGES)) {
    if (key === problem) {
      return val;
    }
  }
  return 'Something error, try login again!';
};

export const showToast = (toastEl, message, duration = 1000) => {
  if (message !== 'Token invalid') {
    toastEl.current?.show(message, duration);
  }
};

export const isEmptyObj = obj => {
  if (obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return JSON.stringify(obj) === JSON.stringify({});
  }
  return true;
};

export const isEmptyArray = array => {
  return !Array.isArray(array) || !array.length;
};

export const isGifImage = uri => {
  if (uri) {
    let extension = uri.split('.').pop();
    return extension === 'gif';
  }
  return false;
};

export const numFormatter = num => {
  if (!isNaN(num)) {
    if (num > 999) {
      let temp = (num / 1000).toFixed(3);
      let s = temp.toString().split('.');
      if (s[1]) {
        if (parseInt(s[1], 10) === 0) {
          return s[0] + 'K';
        } else {
          return temp + 'K';
        }
      } else {
        return s[0] + 'K';
      }
    } else {
      return num.toString();
    }
  } else {
    return 0; // if value < 1000, nothing to do
  }
};

export const transformEntry = (item, type) => {
  switch (type) {
    case 'phone':
      return item[0] + item[1] + item[2] + item[3] + ' ' + 'x'.repeat(item.length - 7) + ' ' + item.slice(-3);
    default:
      throw new Error('Undefined type: ' + type);
  }
};

export const getURLExtension = url => {
  if (url) {
    let extension = url.split('.').pop().toLowerCase();
    if (imgExts.indexOf(extension) > -1) {
      return 'img';
    }
    if (videoExts.indexOf(extension) > -1) return 'video';
  }
  return '';
};

export const getFileName = url => {
  if (url) {
    let fileName = url.split('/').pop().toLowerCase();
    return fileName;
  }
  return 'xxx';
};

export const isRealDevice = async () => {
  let simulator = await DeviceInfo.isEmulator();
  return !simulator;
};

export const formatDateAgo = value => {
  if (value) {
    const value_replace = moment(value, 'YYYY-MM-DD h:mm:ss').fromNow(true);
    return value_replace.replace(value_replace[0], value_replace[0].toUpperCase()) + ' trước';
  }
  return '';
};

export const changeAlias = val => {
  if (val === null || val === undefined) return '';
  var str = val;
  str = str.trim();
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.toUpperCase();
  return str;
};

export const replaceSpace = str => {
  return str.replace(/\u0020/, '\u00a0');
};

export const replacePlace = (districtName = '', provinceName = '') => {
  let value = districtName || '';
  if (provinceName) {
    if (value) {
      value = value + ', ' + provinceName;
    } else {
      value = provinceName;
    }
  }
  if (value.indexOf('Tỉnh ') !== -1) {
    value = value.replace('Tỉnh ', '');
  }
  if (value.indexOf('TP.') !== -1) {
    value = value.replace('TP.', '');
  }
  if (value.indexOf('Thành phố ') !== -1) {
    value = value.replace('Thành phố ', '');
  }
  if (value.indexOf('Quận ') !== -1) {
    let arrStr = districtName.split(' ');
    if (!isNumeric(arrStr[1])) {
      value = value.replace('Quận ', '');
    }
  }
  if (value.indexOf('Huyện ') !== -1) {
    value = value.replace('Huyện ', '');
  }
  if (value.indexOf('Thị xã ') !== -1) {
    value = value.replace('Thị xã ', '');
  }
  return value;
};

export const isNumeric = str => {
  if (typeof str !== 'string') return false; // we only process strings!
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ); // ...and ensure strings of whitespace fail
};

export const formatMoneyVNDInput = money => {
  let v = money ? money.toString() : '';
  if (v.length > 0) {
    if (v.indexOf(',') !== -1) {
      v = v.replaceAll(',', '');
    }
    return v.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  } else {
    return v;
  }
};

export const getTypeExtension = url => {
  if (url) {
    let extension = url.split('/').pop().toLowerCase();
    if (imgExts.indexOf(extension) > -1) {
      return 'img';
    }
    if (videoExts.indexOf(extension) > -1) return 'video';
  }
  return '';
};
export const isImageBase64 = data => {
  if (!data) return false;
  return (
    data.indexOf('data:image/jpg;base64') != -1 ||
    data.indexOf('data:image/png;base64') != -1 ||
    data.indexOf('data:image/jpeg;base64') != -1
  );
};

export const checkURIImgAPI = imgPath => {
  if (!imgPath) return false;
  if (imgPath.includes('http://')) {
    return true;
  } else {
    return false;
  }
};

export const getUniqueListBy = (arr, key) => {
  return [...new Map(arr.map(item => [item[key], item])).values()];
};

export const errorLog = ({ message, error }) => {
  console.error('=== An error happened', message, error);
};

const secretPhoneNum = (phoneNum = '') => {
  if (!phoneNum) {
    return '';
  }
  const listPN = phoneNum.split('');
  listPN.splice(listPN.length - 3, 3, '***');
  return listPN.join('').toString();
};

export const formatPhoneNumber = (phoneNumberString, isSecret) => {
  if (typeof phoneNumberString === 'string' && phoneNumberString.length >= 10) {
    let cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    let match = cleaned.match(/^(\d{4})(\d{3})(\d{3})$/);
    if (match) {
      const textFormated = match[1] + ' ' + match[2] + ' ' + match[3];
      return isSecret ? secretPhoneNum(textFormated) : textFormated;
    }
  }
  return isSecret ? secretPhoneNum(phoneNumberString) : phoneNumberString;
};

export const statusType = type => {
  switch (type) {
    case 0:
      return 'Chờ nhận ca';
    case 1:
      return 'Chưa hoàn thành';
    case 2:
      return 'Đã hoàn thành';
    default:
      return 'Chờ nhận ca';
  }
};

export const colorType = type => {
  switch (type) {
    case 0:
      return '#225490';
    case 1:
      return '#D24545';
    case 2:
      return '#059C82';
    default:
      return '#225490';
  }
};
