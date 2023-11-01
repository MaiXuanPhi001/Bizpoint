import { Header, Wrapper, AppSearchBar } from '@/components';
import { useAppSelector } from '@/redux/store/customReduxHook';
import { Icon, Text, useTheme } from '@rneui/themed';
import { FunctionComponent, useRef, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { Button } from '@rneui/themed';
import { usePaginationV2 } from '@/hooks';
import { Announce } from '@/redux/slices/announceSlice/types';
import { Row } from '@/utils';
import { Divider } from '@rneui/base';

type ReferralListProps = {
  handleGoBack: () => void;
};

const ReferralList: FunctionComponent<ReferralListProps> = ({ handleGoBack }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { theme } = useTheme();
  //
  //

  //
  const otpRef = useRef(null);

  return (
    <Wrapper isSafe>
      <Header title={'Danh sách đã giới thiệu:'} goBack={handleGoBack} />
      <View style={styles.container}>
        <ScrollView>
          {/* check xanh */}
          <View style={{ flex: 1, paddingLeft: 20, marginBottom: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View>
                <Text style={{ fontSize: 18, fontWeight: '300' }}>HIỀN THỤC</Text>
                <Text style={{ fontSize: 14, fontWeight: '300', marginTop: 4 }}>
                  Số tài khoản:
                  <Text style={{ fontSize: 16, fontWeight: '500' }}> 123456</Text>
                </Text>
              </View>
              <Icon style={{ width: 50 }} name="checkcircle" type="antdesign" size={22} color={'rgba(56, 242, 6, 1)'} />
            </View>
            <Divider color={theme.colors.primary} />
          </View>
          {/* check vang */}
          <View style={{ flex: 1, paddingLeft: 20, marginBottom: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View>
                <Text style={{ fontSize: 18, fontWeight: '300' }}>HIỀN THỤC</Text>
                <Text style={{ fontSize: 14, fontWeight: '300', marginTop: 4 }}>
                  Số tài khoản:
                  <Text style={{ fontSize: 16, fontWeight: '500' }}> 123456</Text>
                </Text>
              </View>
              <Icon
                style={{ width: 50 }}
                name="checkcircle"
                type="antdesign"
                size={22}
                color={'rgba(254, 199, 3, 0.8)'}
              />
            </View>
            <Divider color={theme.colors.primary} />
          </View>
          {/* check white */}
          <View style={{ flex: 1, paddingLeft: 20, marginBottom: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View>
                <Text style={{ fontSize: 18, fontWeight: '300' }}>HIỀN THỤC</Text>
                <Text style={{ fontSize: 14, fontWeight: '300', marginTop: 4 }}>
                  Số tài khoản:
                  <Text style={{ fontSize: 16, fontWeight: '500' }}> 123456</Text>
                </Text>
              </View>
              <Icon style={{ width: 50 }} name="checkcircle" type="antdesign" size={22} color={'#898A8D'} />
            </View>
            <Divider color={theme.colors.primary} />
          </View>
        </ScrollView>
      </View>
    </Wrapper>
  );
};
export default ReferralList;
