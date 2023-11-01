// ModalConfirm

import { Divider, Text } from '@rneui/base';
import { useTheme } from '@rneui/themed';
import React, { FC } from 'react';
import { FlatList, SafeAreaView, TouchableOpacity, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import useStyles from './styles';

interface ModalNotiProps {
  isVisible: boolean;
  onRequestClose: () => void;
  //   onBackdropPress: () => void;
  onConfirm: () => void;
}
const ModalNoti: FC<ModalNotiProps> = props => {
  const { isVisible, onRequestClose, onConfirm } = props;
  const styles = useStyles();
  const { theme } = useTheme();

  const _renderITem = (item: any, index: number) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onRequestClose(), onConfirm();
        }}
      >
        <Text style={{ color: 'rgba(0, 0, 0, 0.63)', fontWeight: '300' }}>
          Bạn có Giao dịch chuyển 200 point từ NGUYEN VAN NGUYEN vào lúc 13:13 vui lòng xác nhận giao dịch trong vòng 30
          phút
        </Text>
        <Divider style={{ marginVertical: 20 }} />
      </TouchableOpacity>
    );
  };

  return (
    <ReactNativeModal
      isVisible={isVisible}
      style={{ margin: 0 }}
      useNativeDriver={true}
      hideModalContentWhileAnimating={true}
      animationIn={'fadeIn'}
      animationOut={'slideOutLeft'}
      onBackdropPress={() => onRequestClose()}
    >
      <SafeAreaView style={[styles.container, { alignItems: 'center' }]}>
        <View style={styles.containerModal}>
          <FlatList
            style={{}}
            data={[1, 2, 3]}
            keyExtractor={(_, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <View style={{ alignItems: 'center' }}>
                <Text style={styles.notTextNoti}>Không có tin tức</Text>
              </View>
            )}
            renderItem={({ item, index }) => _renderITem(item, index)}
          />
        </View>
      </SafeAreaView>
    </ReactNativeModal>
  );
};
export default ModalNoti;
