import { IconImg } from '@/assets/images/visit';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/base';
import { Text, useTheme } from '@rneui/themed';
import React, { forwardRef } from 'react';
import { TextInput, View } from 'react-native';
import useStyles from './styles';
import { transferPointProps } from './types';

interface infoProps {
  //   onPressContinue: (data: any) => void;
}

const ComplainComponents: React.ForwardRefRenderFunction<transferPointProps, infoProps> = ({}, ref) => {
  const styles = useStyles();
  const { theme } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, {}]}>
      <Text style={styles.optionText}>KHIẾU NẠI GIAO DỊCH</Text>
      <Text style={{ marginTop: 10, textAlign: 'center' }}>
        Vui lòng mô tả chi tiết vấn đề của bạn và gửi kèm hình ảnh bằng chứng giao dịch. Đại diện công ty sẽ hỗ trợ xử
        lý
      </Text>
      <View style={{ paddingHorizontal: 10 }}>
        <Text style={[styles.textTitle, { marginTop: 20 }]}>Hình ảnh</Text>
        <View style={styles.bgImg}>
          <IconImg />
        </View>
        <Text style={{ fontSize: 10, color: 'rgba(0, 0, 0, 0.63)', marginVertical: 10 }}>
          Gửi tất cả hình ảnh liên quan tới giao dịch thỏa thuận giữa 2 bên
        </Text>
        <Text style={[styles.textTitle, { marginTop: 20 }]}>Nội dung</Text>
        <View style={[styles.boderContainer, { padding: 20 }]}>
          <TextInput
            style={[styles.inputs1, { marginBottom: 10 }]}
            placeholder="Nội dung(không dấu)"
            multiline
            onPressIn={() => {}}
            returnKeyType="done"
          />
        </View>
      </View>

      <Button
        title="Gửi"
        buttonStyle={styles.buttonCancel}
        containerStyle={styles.buttonContainer}
        onPress={() => {}}
        titleStyle={{
          fontSize: 14,
          fontWeight: '600',
        }}
      />

      <Text style={{ color: theme.colors.grey3, marginTop: 12, fontSize: 10 }}>
        *Số Point giao dịch sẽ bị khóa trong thời gian chờ giải quyết khiếu nại
      </Text>
    </View>
  );
};

export default forwardRef(ComplainComponents);
