import React from 'react';
//Components
import Container from 'layouts/container';
import Select from 'elements/select';
// Chakra UI
import { Divider, Stack, Text, Flex, Badge } from '@chakra-ui/react';

export default function header() {
  return (
    <Container>
      <Stack direction="row" alignItems="center" gap="2.5">
        <Text fontWeight="700" fontSize="30px" color="white">
          Post Election Data
          <Badge ml="10px" colorScheme="darkblue.bgTwo" border="1px" borderColor="darkblue.brOne">
            Presidential / Race
          </Badge>
        </Text>
      </Stack>
      <Stack direction="row" justify="space-between" my="14">
        <Text textTransform="capitalize" fontWeight="500" fontSize="24px" color="white">
          Presidential Race
        </Text>
        <Flex gap="16px">
          <Select
            placeholder={'Election Data'}
            options={['Pre-Election', 'Election Day Live Updates', 'Post-Election Analysis']}
          />
          <Select
            placeholder={'Presidential'}
            options={['Presidential', 'Gubernatorial', 'Senate', 'House of Representatives']}
          />
          <Select
            placeholder={'2023'}
            options={['2023', '2019', '2015', '2011', '2007', '2003', '1999', '1995', '1991', '1987']}
          />
        </Flex>
      </Stack>
      <Divider my="32px" borderColor="darkblue.brThree" />
    </Container>
  );
}
