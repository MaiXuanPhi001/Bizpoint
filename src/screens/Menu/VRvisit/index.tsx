import { Header, Wrapper, AppSearchBar } from '@/components';
import { useAppSelector } from '@/redux/store/customReduxHook';
import { Icon, Text, useTheme } from '@rneui/themed';
import { FunctionComponent, useRef, useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { Button } from '@rneui/themed';
import { usePaginationV2 } from '@/hooks';
import { Announce } from '@/redux/slices/announceSlice/types';
import { Row } from '@/utils';
import { Divider } from '@rneui/base';

type VRShopVisitProps = {
  handleGoBack: () => void;
};

const VRShopVisit: FunctionComponent<VRShopVisitProps> = ({ handleGoBack }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { theme } = useTheme();
  //
  const { isLoading, listItem, fetchData, onRefresh, onSearch, updateList } = usePaginationV2();
  //
  const [searchValue, setSearchValue] = useState<string>('');

  //
  const otpRef = useRef(null);

  const _renderRecentTimes = () => {
    return (
      <View>
        <Row between style={styles.rowStyles}>
          <Text style={{ fontWeight: '600' }}>Gần đây</Text>
          <Icon name="info" type="feather" size={22} color={theme.colors.black} />
        </Row>
        <Row around>
          <Icon
            name="access-time"
            type="MaterialIcons"
            size={22}
            backgroundColor={theme.colors.grey5}
            style={{ padding: 5, borderRadius: 50, marginBottom: 10 }}
            color={theme.colors.black}
          />
          <View
            style={{
              flex: 2,
              paddingLeft: 20,
            }}
          >
            <Text style={{ fontWeight: '500' }}>Sao Hàng Hospital</Text>
            <Text numberOfLines={1} style={{ color: theme.colors.grey2, marginVertical: 2 }}>
              Đường Nguyễn Huệ, quận bến Ngé, Tân bình
            </Text>
            <Text>Đóng cửa lúc: 8:30</Text>
            <Divider style={{ marginTop: 10 }} />
          </View>
        </Row>
      </View>
    );
  };

  return (
    <Wrapper isSafe>
      <Header title={'VR shop đã visit'} goBack={handleGoBack} />
      <View style={styles.container}>
        <AppSearchBar
          value={searchValue}
          placeholder="Tìm kiếm ở đây"
          onChangeText={setSearchValue}
          onEndEditing={({ nativeEvent }) => {
            onSearch(nativeEvent.text);
          }}
          onClear={() => {
            onSearch('');
          }}
        />
        {_renderRecentTimes()}
      </View>
    </Wrapper>
  );
};
export default VRShopVisit;
