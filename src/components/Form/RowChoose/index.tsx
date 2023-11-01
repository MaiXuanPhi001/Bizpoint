import React, { FunctionComponent } from 'react';
import { View, TextInput, TextInputProps } from 'react-native';
import { Text, useTheme } from '@rneui/themed';
import useStyles from './styles';
import TitleRow from '../TitleRow';
import ButtonInput from '../ButtonInput';
// import { ButtonInput, TitleRow } from '../Base';
import { SvgProps } from 'react-native-svg';

export enum rowInputType {
  INPUT = 'input',
  BUTTON = 'button',
}
export interface rowInputProps extends TextInputProps {
  key?: string | number;
  title: string;
  type?: 'button';
  border?: boolean;
  disabled?: boolean;
  error?: string;
  renderCustomData?: () => React.ReactElement;
  onPress?: () => void;
  divider?: boolean;
  iconName: React.FC<SvgProps>;
}

const RowChoose: React.FC<rowInputProps> = ({
  key,
  title,
  type = '',
  disabled,
  onPress,
  error,
  border,
  renderCustomData,
  divider,
  iconName,
  ...args
}) => {
  const {
    theme: { colors },
  } = useTheme();
  const styles = useStyles();

  const renderChildren = () => {
    if (renderCustomData) {
      return renderCustomData();
    } else {
      return <ButtonInput value={args.value} placeholder={args.placeholder} onPress={onPress} disabled={disabled} />;
    }
  };

  return (
    <TitleRow key={key} title={title} IconName={iconName} error={error} divider={divider} isOneLine={true}>
      {renderChildren()}
    </TitleRow>
  );
};

export default RowChoose;
