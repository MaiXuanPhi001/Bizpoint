module.exports = {
  project: {
    ios: {},
    android: {},
  },
  dependencies: {
    ...(process.env.NO_FLIPPER ? { 'react-native-flipper': { platforms: { ios: null } } } : {}),
    'react-native-vector-icons': {
      platforms: {
        ios: null,
      },
    },
  },
  iosAssets: ['./src/assets/fonts/ios'],
};
