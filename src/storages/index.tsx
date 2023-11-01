import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_PREFIX = 'Bizpoint_';

const storeStringData = async (key, value) => {
  try {
    let storeKey = STORAGE_PREFIX + key;
    await AsyncStorage.setItem(storeKey, value);
  } catch (e) {
    console.log(`error storeString ${key}`, e);
  }
};

const storeObjectData = async (key, value) => {
  try {
    let storeKey = STORAGE_PREFIX + key;
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storeKey, jsonValue);
  } catch (e) {
    console.log(`error storeObject ${key}`, e);
  }
};

const getStringData = async key => {
  try {
    let storeKey = STORAGE_PREFIX + key;
    const value = await AsyncStorage.getItem(storeKey);
    if (value !== null) {
      return value;
    } else {
      return null;
    }
  } catch (e) {
    console.log(`error getString ${key}`, e);
    return null;
  }
};

const getObjectData = async key => {
  try {
    let storeKey = STORAGE_PREFIX + key;
    const jsonValue = await AsyncStorage.getItem(storeKey);
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(`error getObject ${key}`, e);
    return null;
  }
};

const removeValue = async key => {
  try {
    let storeKey = STORAGE_PREFIX + key;
    await AsyncStorage.removeItem(storeKey);
  } catch (e) {
    console.log('error remove .', key);
  }
};

const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log('error clearAll .', e);
  }
};

const removeMultiValues = async keys => {
  try {
    await AsyncStorage.multiRemove(keys);
    return { success: true };
  } catch (e) {
    return { error: e };
  }
};

const getAllKeys = async () => {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
    return keys;
  } catch (e) {
    // read key error
    return keys;
  }
  //console.log(keys)
  // example console.log result:
  // ['@MyApp_user', '@MyApp_key']
};

const getMultiple = async (arrKey = []) => {
  let results = [];
  try {
    results = await AsyncStorage.multiGet(arrKey);
  } catch (e) {
    // read error
  }
  return results;
  // example console.log output:
  // [ ['@MyApp_user', 'myUserValue'], ['@MyApp_key', 'myKeyValue'] ]
};

const removeFew = async (keys = []) => {
  //   const keys = ['@MyApp_USER_1', '@MyApp_USER_2'];
  try {
    await AsyncStorage.multiRemove(keys);
  } catch (e) {
    console.log('error removeFew ', e);
    // remove error
  }
};

export {
  STORAGE_PREFIX,
  storeStringData,
  getStringData,
  storeObjectData,
  getObjectData,
  removeValue,
  clearAll,
  removeMultiValues,
  getAllKeys,
  getMultiple,
  removeFew,
};
