import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { FlatList, ScrollView, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Tab, TabView, Text, useTheme } from '@rneui/themed';
import useStyles from './styles';

type tabViewItem = {
  title: string;
  view: React.ReactElement;
};

interface appTabViewProps {
  tabViewData: tabViewItem[];
  containerStyle?: ViewStyle;
  onChange?: (value: number) => void;
  containerFlistStyle?: ViewStyle;
}

export interface appTabViewRef {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}
const AppTabView: React.ForwardRefRenderFunction<appTabViewRef, appTabViewProps> = (props, ref) => {
  const { tabViewData, containerStyle, onChange = () => {}, containerFlistStyle = {} } = props;
  const { theme } = useTheme();
  const styles = useStyles();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const impRef = {
    index: currentIndex,
    setIndex: setCurrentIndex,
  };
  useImperativeHandle(ref, () => impRef);

  const refScroll = useRef<any>(null);

  useEffect(() => {
    if (refScroll.current && currentIndex) {
      refScroll.current.scrollToIndex({
        animated: true,
        index: Math.min(Math.max(currentIndex - 1, 0), tabViewData.length ? tabViewData.length - 1 : 0),
      });
    }
  }, [currentIndex]);

  return (
    <View style={[{ flex: 1 }, containerStyle]}>
      <Tab
        value={currentIndex}
        indicatorStyle={{ backgroundColor: 'white' }}
        scrollable={false}
        style={{}}
        buttonStyle={{ padding: 0, margin: 0 }}
      >
        <FlatList
          ref={refScroll}
          contentContainerStyle={[containerFlistStyle]}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={tabViewData}
          keyExtractor={item => `${item.title}`}
          renderItem={({ item, index }) => {
            return (
              <Tab.Item
                onPress={() => {
                  setCurrentIndex(index);
                  onChange(index);
                }}
                key={item.title}
                buttonStyle={{
                  padding: 0,
                }}
              >
                <View style={[index === currentIndex ? styles.tabBarItemContainerChosen : styles.tabBarItemContainer]}>
                  <Text
                    style={[
                      styles.tabBarItemText,
                      { color: index === currentIndex ? theme.colors.white : theme.colors.grey2 },
                    ]}
                  >
                    {item.title}
                  </Text>
                </View>
              </Tab.Item>
            );
          }}
        />
      </Tab>
      <TabView
        value={currentIndex}
        onChange={value => {
          setCurrentIndex(value);
          onChange(value);
        }}
        animationType="spring"
      >
        {tabViewData.map(item => (
          <TabView.Item key={item.title} style={styles.tabViewContainer}>
            {item.view}
          </TabView.Item>
        ))}
      </TabView>
    </View>
  );
};

export default forwardRef(AppTabView);
