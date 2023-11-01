import { Icon, normalize, useTheme, Text } from '@rneui/themed';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import useStyles from './styles';

interface props {
  value?: string;
  placeholder?: string;
  onPress?(): void;
  disabled?: boolean;
  iconRight?: boolean;
}

const ButtonInput: React.FC<props> = ({ value, placeholder, onPress, disabled, iconRight = true }) => {
  const styles = useStyles();
  const {
    theme: { colors },
  } = useTheme();
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress} disabled={disabled}>
      <Text style={[styles.placeholder, { color: value === '' || !value ? colors.textGray4 : colors.textGray1 }]}>
        {value === '' || !value ? placeholder : value}
      </Text>
      {iconRight ? <Icon size={35} name="chevron-right" color={colors.primary} /> : null}
    </TouchableOpacity>
  );
};

export default ButtonInput;
