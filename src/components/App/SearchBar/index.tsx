// import { QRCodeSearch } from '@/utils/svg';
import { Icon, SearchBar, useTheme } from '@rneui/themed';
import React, { ForwardedRef, forwardRef, useState } from 'react';
import { View } from 'react-native';
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import ScanQRCode from '../ScanQRCode';
import useStyles from './styles';

interface appSearchBarProps extends TextInputProps {
  isQRCode?: boolean;
  onScan?: (qrCode: string) => void;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  onClear?: () => void;
  value?: string;
  content?: boolean;
}

type searchBarRef = ForwardedRef<TextInputProps>;

const AppSearchBar = (props: appSearchBarProps, ref: searchBarRef | any): JSX.Element => {
  const { placeholder, onSubmitEditing, onClear, content, isQRCode, onScan, ...args } = props;
  const styles = useStyles();
  const { theme } = useTheme();
  const [isScanCode, setIsScanCode] = useState<boolean>(false);
  const [valueSearch, setValueSearch] = useState('');
  if (isQRCode) {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <SearchBar
          ref={ref}
          placeholder={placeholder}
          onClear={() => {
            setValueSearch('');
            onClear && onClear();
          }}
          round
          containerStyle={[styles.container, { flex: 1, marginRight: 10 }]}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.input}
          searchIcon={<Icon name="search" type="ionicons" size={30} color={theme.colors.border} />}
          value={valueSearch}
          {...args}
          onChangeText={text => {
            setValueSearch(text);
            if (args.onChangeText) {
              args.onChangeText(text);
            }
          }}
        />
        {/* <QRCodeSearch
          height={40}
          width={40}
          onPress={() => {
            setIsScanCode(true);
          }}
        />
        <ScanQRCode
          isShow={isScanCode}
          onScan={data => {
            onScan && onScan(data);
          }}
          setIsShow={() => {
            setIsScanCode(false);
          }}
        /> */}
      </View>
    );
  }
  return (
    <SearchBar
      ref={ref}
      placeholder={placeholder}
      onClear={() => {
        setValueSearch('');
        onClear && onClear();
      }}
      round
      containerStyle={styles.container}
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.input}
      onSubmitEditing={onSubmitEditing}
      searchIcon={<Icon name="search" type="ionicons" size={30} color={theme.colors.border} />}
      value={valueSearch}
      {...args}
      onChangeText={text => {
        setValueSearch(text);
        if (args.onChangeText) {
          args.onChangeText(text);
        }
      }}
    />
  );
};

export default forwardRef(AppSearchBar);
