import React from 'react';
// Components
import Svg from 'elements/zoneSvg';
// Chakra UI
import { HStack, Stack, Box, Text } from '@chakra-ui/react';

export default function index({ data, color }) {
  return (
    <Box w="50%" border="1px" borderColor="darkblue.brThree" borderRadius="13px" p="32px">
      <Text textTransform="uppercase" color="white" fontWeight="400" fontSize="14px">
        Candidates by Geopolitical Zones
      </Text>
      <Stack direction="row" align="end" justify="space-between" mt="24px">
        <Svg
          southWest={color.red}
          southSouth={color.blue}
          southEast={color.teal}
          northCentral={color.purple}
          northEast={color.green}
          northWest={color.grey}
        />
        <Stack direction="column" w="30%" gap="16px">
          {data.map((zone, index) => (
            <Stack key={index} w="100%" direction="row" justify="space-between" align="center">
              <HStack>
                <Box height="14px" width="22px" bg={zone.color} mr="4px"></Box>
                <Text fontWeight="600" color="white" fontSize="12px">
                  {zone.name}
                </Text>
              </HStack>
              <Text fontWeight="600" color="white" opacity=".6" fontSize="12px">
                {zone.amount}
              </Text>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}
