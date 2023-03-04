import React from 'react';
// Chakra UI
import { Container } from '@chakra-ui/react';

export default function container({ children }) {
  return (
    <Container maxW="1280px" w="100%" mx="auto" p={[0.5, 0.5, 3, 0, 0]}>
      {children}
    </Container>
  );
}
