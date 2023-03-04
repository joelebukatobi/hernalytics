import React from 'react';
// Chakra UI
import { HStack, Stack, Box, Text } from '@chakra-ui/react';
// Components
import Svg from 'elements/mapSvg';

export default function map() {
  return (
    <Box
      gap="16px"
      border="1px"
      borderColor="darkblue.brThree"
      w="100%"
      px="32px"
      py="48px"
      borderRadius="13px"
      bg="darkblue.bgFour"
    >
      <Svg />
    </Box>
  );
}
