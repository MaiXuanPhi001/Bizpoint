import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export const Row = (props: any) => {
  const { style, start, center, between, around, end } = props;
  return (
    <View
      style={StyleSheet.flatten([
        styles.default,
        center && styles.center,
        start && styles.start,
        between && styles.between,
        around && styles.around,
        end && styles.end,
        style,
      ])}
    >
      {props.children}
    </View>
  );
};

const styles = {
  default: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  start: {
    justifyContent: 'flex-start',
  },
  center: {
    justifyContent: 'center',
  },
  between: {
    justifyContent: 'space-between',
  },
  around: {
    justifyContent: 'space-around',
  },
  end: {
    justifyContent: 'flex-end',
  },
};

Row.propTypes = {
  start: PropTypes.bool,
  center: PropTypes.bool,
  between: PropTypes.bool,
  around: PropTypes.bool,
  end: PropTypes.bool,
};

Row.defaultProps = {
  start: false,
  center: true,
  between: false,
  around: false,
  end: false,
};
