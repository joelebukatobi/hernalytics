import React from 'react';
// Chakra UI
import { HStack, Icon, Stack, Box, Text, Heading } from '@chakra-ui/react';

export default function zones() {
  return (
    <Box w="50%" border="1px" borderColor="darkblue.brThree" borderRadius="13px" p="32px">
      <Text textTransform="uppercase" color="white" fontWeight="400" fontSize="14px">
        Candidates by Geopolitical Zones
      </Text>
    </Box>
  );
}
