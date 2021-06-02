import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './styles';
import { Colors, FontFamily } from 'components/theme';

const TextComponent = ({
  style,
  size,
  fontWeight,
  color,
  children,
  lineHeight,
  customSize,
  ...rest
}) => (
  <Text
    style={style}
    size={size}
    color={color}
    customSize={customSize}
    lineHeight={lineHeight}
    fontWeight={fontWeight}
    {...rest}
  >
    {children}
  </Text>
);

TextComponent.propTypes = {
  fontWeight: PropTypes.string,
  size: PropTypes.oneOf([
    'small',
    'normal',
    'medium',
    'big',
    'biggest',
    'bigTitle',
    'smallMedium'
  ]),
  whiteSpace: PropTypes.string,
  color: PropTypes.string,
  fontFamily: PropTypes.string
};

TextComponent.defaultProps = {
  whiteSpace: 'normal',
  size: 'normal',
  fontWeight: 'normal',
  lineHeight: 1.44,
  fontFamily: FontFamily.poppins,
  color: Colors.warmGrey
};

export default TextComponent;
