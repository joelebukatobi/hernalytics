import React from 'react';
// Chakra UI
import { Box } from '@chakra-ui/react';

export default function wrapper({ children }) {
  return (
    <Box bg="darkblue.bgOne" w="100%" minHeight="100vh" position="relative">
      {children}
    </Box>
  );
}
