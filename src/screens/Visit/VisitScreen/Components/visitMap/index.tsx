import { AppSearchBar, Logo, Wrapper } from '@/components';
import { Image, Input, Text, useTheme } from '@rneui/themed';
import { FunctionComponent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Platform, TouchableOpacity, View } from 'react-native';
import Mapbox, { PointAnnotation } from '@rnmapbox/maps';
import Geolocation from '@react-native-community/geolocation';
import GeolocationAndroid from 'react-native-geolocation-service';

import useStyles from './styles';
import { Button, Divider, Icon } from '@rneui/base';
import BottomSheet from '@gorhom/bottom-sheet';
import { useAppDispatch, useAppSelector } from '@/redux/store/customReduxHook';
import { getFeatureLocations, getLocationNearMe, getSearchLocation } from '@/redux/slices/visitSlice/visitSlice';
import { FlatList } from 'react-native';
import { usePaginationV2 } from '@/hooks';
import { VISIT } from '@/services/uris';
import ModalDetalProminent from '../ModalDetalProminent';
import { KEY_TOKEN_MAPBOX, bwsLocationLauncher, calcCrow } from './funtions';
import { Visit } from '@/assets/images/auth';
import { IconLogoXanh } from '@/assets/images/visit';
import Animated from 'react-native-reanimated';
import { hideLoading, showLoading } from '@/redux/slices/loadingSlice';
import { showToastBottom } from '@/functions';
import { searchLocationApi } from '@/services/api/visit';

type visitMapProps = {};
type paramsData = {
  limit: 1;
  page: 2;
};

type valueDetailType = {
  address: string;
  createdAt: string;
  description: string;
  districtId: string;
  id: number;
  isBlocked: number;
  isFeature: number;
  latitude: number;
  longitude: number;
  name: string;
  provinceId: string;
  status: string;
  typeId: number;
  userId: number;
  visitCount: number;
  visited: number;
  wardId: string;
};

const VisitMap: FunctionComponent<visitMapProps> = () => {
  const styles = useStyles();
  const tokenmapbox = 'sk.eyJ1IjoiaGh1dXRoaWVuMiIsImEiOiJjbG9jY2gxeGMxN3A2MmtxcWFuMnAxeGN1In0.9aXcjtgUdKzswfp8Hagaug';
  Mapbox.setAccessToken(KEY_TOKEN_MAPBOX);
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  const { dataLocationNearMe } = useAppSelector(state => state.visitSlice);

  //////////
  const [coords, setCoords] = useState<[number, number]>([106.62087550808585, 10.782789506158016]);
  const [listAround, setListAround] = useState<any[]>([]);
  const { isLoading, fetchData, onRefresh, onSearch, listItem } = usePaginationV2<paramsData>(VISIT.FEATURELOCATIONS);

  const [searchValue, setSearchValue] = useState<string>('');
  const [dataSearch, setDataSearch] = useState();

  // modal ModalDetalProminent
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [dataModal, setDataShowModal] = useState<any>();
  const [isChoose, setIsChoose] = useState<string>('VRShopnoibat');
  //
  const [valueDetail, setValueDetail] = useState<valueDetailType>();

  //
  async function getPermissionLocation() {
    try {
      // const checkLocation = await bwsLocationLauncher();
      // handleGetLocationNearMe(10.782789506158016, 106.62087550808585);
      const geo = await Geolocation.getCurrentPosition(
        location => {
          setCoords([location.coords.longitude, location.coords.latitude]),
            handleGetLocationNearMe(location.coords.latitude, location.coords.longitude);
        },
        err => console.log(err),
        { enableHighAccuracy: true },
      );
    } catch (error) {
      console.error('Error getting location', error);
    }
  }

  useEffect(() => {
    getPermissionLocation();
  }, []);
  //
  useEffect(() => {
    if (dataLocationNearMe) {
      setListAround(dataLocationNearMe);
    }
  }, [dataLocationNearMe]);

  const handleGetLocationNearMe = (latitude: number, longitude: number) => {
    dispatch(
      getLocationNearMe({
        limit: 10,
        page: 1,
        latitude: latitude,
        longitude: longitude,
      }),
    );
  };

  // funtion LOCATIONS
  const onMarkerPress = (item: any) => {
    // console.log('da vaoday', item);
    handleShowModalBottom();
    setIsChoose('chitiet');
    setValueDetail(item);
  };
  const onPresLocaltion = (item: any) => {
    // console.log('🚀 ~-------- tìm kiếm xung quanh khi user vuốt');
  };
  const handleShowModalBottom = () => {
    bottomSheetRef.current.expand();
  };

  // funtion modal sheet
  const bottomSheetRef: any = useRef<BottomSheet>(null);
  // variables
  const snapPoints = useMemo(() => ['5%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  //
  const handleSearch = async () => {
    const data = {
      limit: 10,
      page: 1,
      keyword: searchValue,
    };
    dispatch(showLoading());
    searchLocationApi(data)
      .then((res: any) => {
        if (res.status === 200) {
          const { array } = res.data?.data;
          if (array.length > 0) {
            setDataSearch(array);
          } else {
            showToastBottom('Không tìm thấy ');
          }
        } else {
          showToastBottom('Tìm kiếm thất bại');
        }
      })
      .catch((err: any) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(hideLoading());
      });
  };

  //BOTTOM SHEET DETAIL

  const handleClosePress = () => bottomSheetRef.current.close();
  //
  const _renderITem = (item: any, index: number) => {
    const { name, address, description } = item;
    return (
      <TouchableOpacity
        onPress={() => {
          setIsShowModal(true), setDataShowModal(item);
        }}
        style={{ marginTop: 10 }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
          <Icon name={'location-pin'} type="entypo" color={'#FF4B55'} size={30} />
          <Text style={{ marginRight: 20, marginLeft: 10, color: theme.colors.grey2 }}>{name}</Text>
        </View>
        <Text style={{ color: theme.colors.grey4, marginLeft: 10 }}>{description}</Text>
        <Text style={{ color: theme.colors.grey4, marginLeft: 10 }}>Địa chỉ: {address}</Text>
        <Divider style={{ marginVertical: 10 }} />
      </TouchableOpacity>
    );
  };

  //RENDER
  return (
    <Wrapper isSafe>
      <View style={styles.container}>
        <Mapbox.MapView
          style={styles.map}
          zoomEnabled={true}
          styleURL="mapbox://styles/mapbox/navigation-night-v1"
          rotateEnabled={true}
          onDidFinishLoadingMap={async () => {}}
          onCameraChanged={item => onPresLocaltion(item)}
        >
          <View
            style={{
              position: 'absolute',
              top: 10,
              right: 0,
              left: 0,
              paddingHorizontal: 10,
            }}
          >
            <AppSearchBar
              onEndEditing={() => handleSearch()}
              value={searchValue}
              placeholder="Tìm kiếm VR Shop"
              onChangeText={setSearchValue}
            />
          </View>
          <Mapbox.Camera
            zoomLevel={13}
            //
            centerCoordinate={coords}
            animationMode={'flyTo'}
            animationDuration={3000}
            ////
          />
          {listAround &&
            listAround.map((item: any, index: string) => {
              return (
                <Mapbox.PointAnnotation
                  key={index}
                  id="destinationPoint"
                  coordinate={[item?.longitude, item?.latitude]}
                  // onSelected={item => onMarkerPress(item)}
                  onSelected={() => onMarkerPress(item)}
                >
                  <View style={styles.destinationIcon}>
                    <Icon name="location-pin" type="entypo" size={24} color={'red'} />
                  </View>
                </Mapbox.PointAnnotation>
              );
            })}

          {/* ------------------ */}
          <Mapbox.UserLocation animated={true} androidRenderMode={'gps'} showsUserHeadingIndicator={true} />
        </Mapbox.MapView>
        {/* VR shop nổi bật */}
        <TouchableOpacity
          onPress={() => {
            handleShowModalBottom();
          }}
          style={styles.bgProminent}
        >
          <Text style={styles.textProminent}>VR shop nổi bật</Text>
        </TouchableOpacity>

        {/* modal bottom sheet */}

        <BottomSheet
          ref={bottomSheetRef}
          //
          index={-1} // lần đầu 0 sẽ nằm ẩn còn cho 1 thì hiện còn -1 thì ẩn luôn
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View style={styles.contentContainer}>
            {isChoose === 'VRShopnoibat' && (
              <FlatList
                style={{ flex: 1 }}
                data={listItem || []}
                keyExtractor={(_, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                  <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 100 }}>
                    <Text style={styles.notTextNoti}>Không có VR Shop nổi bật</Text>
                  </View>
                )}
                renderItem={({ item, index }) => _renderITem(item, index)}
                onRefresh={() => {
                  onRefresh();
                }}
                onEndReached={fetchData}
                refreshing={isLoading}
              />
            )}
            {/*  */}
            {isChoose === 'chitiet' && (
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 18, fontWeight: '500' }}>{valueDetail?.name || ''}</Text>
                <Text style={{ fontSize: 14, color: theme.colors.grey3 }}>{valueDetail?.address || ''}</Text>
                <Text style={{ fontSize: 14, color: theme.colors.grey3 }}>{valueDetail?.description || ''}</Text>

                <View style={{ flexDirection: 'row' }}>
                  <Button
                    title={'Visit'}
                    containerStyle={styles.buttonStyle}
                    buttonStyle={[{ backgroundColor: '#03801F' }]}
                    onPress={() => {}}
                  />
                  <Button
                    title={'Check-in'}
                    titleStyle={{ color: theme.colors.primary }}
                    containerStyle={styles.buttonStyle}
                    buttonStyle={[styles.button, { backgroundColor: 'white' }]}
                    onPress={() => {}}
                  />
                  <Button
                    title={'Lưu'}
                    titleStyle={{ color: theme.colors.primary }}
                    containerStyle={styles.buttonStyle}
                    buttonStyle={[styles.button, { backgroundColor: 'white' }]}
                    onPress={() => {}}
                  />
                </View>
              </View>
            )}
          </View>
        </BottomSheet>
        {/*  */}
        <ModalDetalProminent
          isVisible={isShowModal}
          onRequestClose={() => {
            setIsShowModal(false);
          }}
          dataModal={dataModal}
        />
      </View>
    </Wrapper>
  );
};

export default VisitMap;
