import React, { Suspense, useEffect, useState } from 'react';
import { Image, ImageProps, ImageURISource, View, ViewStyle } from 'react-native';
import AppLoading from '../AppLoading';

const checkValidUrlImage = (url: string) => {
  var types = ['jpg', 'jpeg', 'tiff', 'png', 'gif', 'bmp'];
  var parts = url.split('.');
  var extension = parts[parts.length - 1];
  if (types.indexOf(extension) !== -1) {
    return true;
  }
};

interface AppImage extends ImageProps {
  mainStyle?: ViewStyle;
}
const defaultSource = require('@/assets/images/Logo.png');

const AppImage: React.FC<AppImage> = ({ mainStyle, ...args }) => {
  const { uri } = args.source as ImageURISource;
  const [error, setError] = useState(false);

  return (
    <Suspense
      fallback={
        <View style={[mainStyle, { position: 'relative' }, args.style]}>
          <AppLoading />
        </View>
      }
    >
      <View style={[mainStyle]}>
        {error || !uri ? (
          <Image
            {...args}
            style={[{ borderRadius: 10, borderWidth: 0.2, borderColor: 'grey' }, args.style]}
            defaultSource={defaultSource}
            source={defaultSource}
          />
        ) : (
          <Image
            onError={err => {
              if (err) {
                setError(true);
              }
            }}
            {...args}
            defaultSource={defaultSource}
            source={{ uri }}
          />
        )}
      </View>
    </Suspense>
  );
};

export default AppImage;
