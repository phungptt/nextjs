import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './styles';
import { Colors } from 'components/theme';

const ButtonComponent = ({
    style,
    color,
    type,
    children,
    ...rest
}) => (
    <Button
        style={style}
        type={type}
        color={color}
        {...rest}
    >
        <span>{children}</span>
    </Button>
);

ButtonComponent.propTypes = {
    type: PropTypes.oneOf([
      'primary',
      'blue',
      'yellow',
      'purple',
      'dark',
    ]),
    color: PropTypes.string,
};

ButtonComponent.defaultProps = {
    type: 'primary',
    color: Colors.greenishTeal
};

export default ButtonComponent;