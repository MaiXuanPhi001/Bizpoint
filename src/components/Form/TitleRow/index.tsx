import { Divider, Icon, Text, useTheme } from '@rneui/themed';
import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';
import useStyles from './styles';
import { SvgProps } from 'react-native-svg';

export interface titleRow {
  title: string;
  error?: string;
  divider?: boolean;
  isOneLine?: boolean;
  IconName?: React.FC<SvgProps>;
}

type props = PropsWithChildren<titleRow>;

const TitleRow: React.FC<props> = ({ title, IconName, error, children, divider = true, isOneLine = false }) => {
  const styles = useStyles();
  const {
    theme: { colors },
  } = useTheme();

  return (
    <View style={styles.container}>
      <View style={isOneLine ? { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' } : {}}>
        {/* <Icon size={35} name={iconName || undefined} color={colors.primary} /> */}
        <View style={{ width: 30 }}>{IconName && <IconName />}</View>
        <Text numberOfLines={1} style={[styles.title, isOneLine ? { flex: 2 } : {}]}>
          {title}
        </Text>
        <View style={[styles.children, isOneLine ? { flex: 1 } : {}]}>{children}</View>
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
      {divider && <Divider width={1} style={{ marginTop: 10 }} color="rgba(47, 140, 51, 0.34)" />}
    </View>
  );
};

export default TitleRow;
