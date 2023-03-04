import React from 'react';
// Chakra UI
import { HStack, Icon, Stack, Box, Text, Heading } from '@chakra-ui/react';
// React Icons
import { CgGenderFemale, CgGenderMale } from 'react-icons/cg';

export default function members({ totalElectedMembers, male, female }) {
  return (
    <Box w="20%" border="1px" borderColor="darkblue.brThree" borderRadius="13px" p="32px">
      <Stack direction="column" gap="40px">
        <Box>
          <Text textTransform="uppercase" color="white" fontWeight="400" fontSize="14px">
            Total Elected Members
          </Text>
          <Heading color="white" fontWeight="700" fontSize="20px">
            {totalElectedMembers}
          </Heading>
        </Box>
        <Box>
          <HStack>
            <Text textTransform="uppercase" color="white" fontWeight="400" fontSize="14px">
              Male
            </Text>
            <Icon as={CgGenderMale} color="yellow" boxSize="6" />
          </HStack>
          <Heading color="white" fontWeight="700" fontSize="20px">
            {male}
          </Heading>
        </Box>
        <Box>
          <HStack>
            <Text textTransform="uppercase" color="white" fontWeight="400" fontSize="14px">
              Female
            </Text>
            <Icon as={CgGenderFemale} color="yellow" boxSize="6" />
          </HStack>
          <Heading color="white" fontWeight="700" fontSize="20px">
            {female}
          </Heading>
        </Box>
      </Stack>
    </Box>
  );
}
