import PropTypes from 'prop-types';
import React from 'react';

import { Container, Text } from './button-style.js';

export default function Button({ children }) {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
};
