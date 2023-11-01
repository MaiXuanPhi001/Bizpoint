// ModalDetalProminent

import { Header } from '@/components';
import { useAppDispatch } from '@/redux/store/customReduxHook';
import { Icon, useTheme } from '@rneui/themed';
import React, { FC } from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import useStyles from './styles';
import { Text } from '@rneui/base';

interface ModalDetalProminentProps {
  isVisible: boolean;
  onRequestClose: () => void;
  dataModal?: any;
}
const ModalDetalProminent: FC<ModalDetalProminentProps> = props => {
  const { isVisible, onRequestClose, dataModal } = props;
  const styles = useStyles();
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  return (
    <ReactNativeModal
      isVisible={isVisible}
      style={{ margin: 0 }}
      useNativeDriver={true}
      hideModalContentWhileAnimating={true}
      animationIn={'fadeIn'}
      onBackdropPress={onRequestClose}
      animationOut={'slideOutLeft'}
    >
      <SafeAreaView style={[styles.container, { alignItems: 'center', backgroundColor: 'white' }]}>
        <Header
          leftComponent={
            <TouchableOpacity onPress={onRequestClose}>
              <Icon name="close" type="ionicons" size={30} color={theme.colors.black} />
            </TouchableOpacity>
          }
        />
        <View>
          <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 30 }}>{dataModal?.name || ''}</Text>
          <View
            style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-start', marginBottom: 10 }}
          >
            <Icon name={'location-pin'} type="entypo" color={theme.colors.grey2} size={30} />
            <Text style={{ marginRight: 20, marginLeft: 10, color: theme.colors.grey2, fontSize: 16 }}>
              {dataModal?.address}
            </Text>
          </View>
          {/*  */}
          <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-start' }}>
            <Icon name={'store'} type="FontAwesome5" color={theme.colors.grey2} size={24} />
            <Text style={{ marginRight: 20, marginLeft: 10, color: theme.colors.grey2, fontSize: 16 }}>
              {dataModal?.description}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ReactNativeModal>
  );
};
export default ModalDetalProminent;
