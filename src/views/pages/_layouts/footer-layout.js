import React from 'react';
import { Redirect } from 'react-router-dom';

import { Container } from './footer-layout-style.js';

export default function Footer() {
  return (
    <Container>
      Feito com 🧡 por{' '}
      <a
        href="https://github.com/matheusantonio208?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        Matheus Antonio
      </a>
    </Container>
  );
}
