import PropTypes from 'prop-types';
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { normalize, fonts } from '@/configs';
import { Input, Text, useTheme } from '@rneui/themed';
import useStyles from './styles';

const OTPCustom = forwardRef(
  (
    {
      containerStyle,
      contentContainerStyle,
      cellStyle,
      cellFocusedStyle,
      cellFilledStyle,
      textStyle,
      textFocusedStyle,
      value,
      onValueChange,
      onFocus,
      onBlur,
      codeLength,
      password,
      placeholder,
      restrictToNumbers,
      cellSize,
      cellSpacing,
      mask,
      maskDelay,
      animationType,
      ...props
    }: any,
    forwardedRef,
  ) => {
    const styles = useStyles();
    const { theme } = useTheme();
    const animatableRef: any = useRef();
    const inputRef: any = useRef();
    const previousInputRef = useRef(value);

    const [focused, setFocused] = useState(false);
    const [doMask, setDoMask] = useState(false);

    useImperativeHandle(forwardedRef, () => ({
      shake: () => {
        animatableRef.current.shake(650);
      },
      clear: () => {
        inputRef.current.clear();
      },
      focus: () => {
        inputRef.current.focus();
      },
      blur: () => {
        inputRef.current.blur();
      },
    }));

    useEffect(() => {
      const timeout = setTimeout(() => {
        setDoMask(false);
      }, maskDelay);

      return () => clearTimeout(timeout);
    }, [doMask, maskDelay]);

    const onChange = useCallback(
      (code: any) => {
        const input = restrictToNumbers ? (code.match(/[0-9]/g) || []).join('') : code;
        if (onValueChange) {
          onValueChange(input, { isFulfilled: input.length >= codeLength });
        }

        if (password && previousInputRef.current.length < input.length) {
          setDoMask(true);
        }

        previousInputRef.current = input;
      },
      [password, restrictToNumbers, onValueChange, codeLength],
    );

    const onFocused = useCallback(
      (...args: any) => {
        setFocused(true);
        if (onFocus) {
          onFocus(...args);
        }
      },
      [onFocus],
    );

    const onBlurred = useCallback(
      (...args: any) => {
        setFocused(false);
        if (onBlur) {
          onBlur(...args);
        }
      },
      [onBlur],
    );

    return (
      <Animatable.View
        ref={animatableRef}
        style={StyleSheet.flatten([
          styles.container,
          {
            width: cellSize * codeLength + cellSpacing * (codeLength - 1),
            height: cellSize,
          },
          containerStyle,
        ])}
      >
        <View style={StyleSheet.flatten([styles.viewContainer, contentContainerStyle])}>
          {Array.apply(null, Array(codeLength)).map((_, idx) => {
            const cellFocused = focused && idx === value.length;
            const filled = idx < value.length;
            const last = idx === value.length - 1;
            const showMask = filled && password && (!doMask || !last);
            const isPlaceholderText = typeof placeholder === 'string';
            const isMaskText = typeof mask === 'string';
            const pinCodeChar = value.charAt(idx);

            let cellText = null;
            if (filled || placeholder !== null) {
              if (showMask && isMaskText) {
                cellText = mask;
              } else if (!filled && isPlaceholderText) {
                cellText = placeholder;
              } else if (pinCodeChar) {
                cellText = pinCodeChar;
              }
            }

            const placeholderComponent = !isPlaceholderText ? placeholder : null;
            const maskComponent = showMask && !isMaskText ? mask : null;
            const isCellText = typeof cellText === 'string';

            return (
              <Animatable.View
                key={idx}
                style={StyleSheet.flatten([
                  styles.cell,
                  {
                    width: cellSize - 5,
                    height: cellSize + normalize(5),
                    marginLeft: cellSpacing / 2,
                    marginRight: cellSpacing / 2,
                  },
                  cellStyle,
                  cellFocused ? StyleSheet.flatten([styles.cellFocused, cellFocusedStyle]) : {},
                  filled ? cellFilledStyle : {},
                ])}
                animation={idx === value.length && focused ? animationType : null}
                iterationCount="infinite"
                duration={500}
              >
                {isCellText && !maskComponent && (
                  <Text
                    h5
                    style={StyleSheet.flatten([
                      styles.text,
                      textStyle,
                      cellFocused ? StyleSheet.flatten([styles.textFocused, textFocusedStyle]) : {},
                    ])}
                  >
                    {cellText}
                  </Text>
                )}

                {!isCellText && !maskComponent && placeholderComponent}
                {isCellText && maskComponent}
              </Animatable.View>
            );
          })}
        </View>
        <TextInput
          ref={inputRef}
          value={value}
          onChangeText={onChange}
          onFocus={onFocused}
          onBlur={onBlurred}
          spellCheck={false}
          numberOfLines={1}
          caretHidden
          maxLength={codeLength}
          keyboardType="numeric"
          returnKeyType="done"
          selection={{
            start: value.length,
            end: value.length,
          }}
          style={styles.textInput}
          {...props}
        />
      </Animatable.View>
    );
  },
);

OTPCustom.propTypes = {
  containerStyle: PropTypes.object,
  contentContainerStyle: PropTypes.object,
  cellStyle: PropTypes.object,
  cellFocusedStyle: PropTypes.object,
  cellFilledStyle: PropTypes.object,
  textStyle: PropTypes.object,
  textFocusedStyle: PropTypes.object,
  value: PropTypes.string,
  onValueChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  codeLength: PropTypes.number,
  password: PropTypes.bool,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  restrictToNumbers: PropTypes.bool,
  cellSize: PropTypes.number,
  cellSpacing: PropTypes.number,
  mask: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  maskDelay: PropTypes.number,
  animationType: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

OTPCustom.defaultProps = {
  containerStyle: {},
  contentContainerStyle: {},
  cellStyle: {},
  cellFocusedStyle: {},
  cellFilledStyle: {},
  textStyle: {},
  textFocusedStyle: {},
  value: '',
  onValueChange: null,
  onFocus: null,
  onBlur: null,
  codeLength: 4,
  password: false,
  placeholder: '',
  restrictToNumbers: false,
  cellSize: 40,
  cellSpacing: normalize(20),
  mask: '*',
  maskDelay: 200,
  animationType: 'pulse',
};

export default OTPCustom;
