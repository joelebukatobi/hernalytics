import React from 'react';
// Chakra UI
import { Image, Box, Stack, Text, Heading, CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
// Images
import Rejected from 'assets/images/progress-image-one.png';
import Accepted from 'assets/images/progress-image-two.png';

export default function index({ progress, totalVotes }) {
  return (
    <Box w="30%" border="1px" borderColor="darkblue.brThree" borderRadius="13px" p="32px">
      <Stack position="relative" zIndex="2" direction="row">
        <CircularProgress value={progress} trackColor="green" thickness="16px" size="200px" color="red">
          <CircularProgressLabel>
            <Text textTransform="uppercase" color="white" fontWeight="400" fontSize="14px">
              Total Votes
            </Text>
            <Heading color="white" fontWeight="700" fontSize="20px">
              {totalVotes}
            </Heading>
          </CircularProgressLabel>
        </CircularProgress>
        <Stack w="100%" direction="row" position="relative">
          <Image src={Rejected} position="absolute" left="-48px" top="8px" />
          <Box>
            <Text textTransform="uppercase" color="white" fontWeight="400" fontSize="12px">
              Rejected Votes
            </Text>
            <Heading color="white" fontWeight="700" fontSize="16px">
              {totalVotes}
            </Heading>
          </Box>
        </Stack>
      </Stack>
      <Box mt="8px" position="relative">
        <Image src={Accepted} position="absolute" left="40px" bottom="40px" />
        <Text textTransform="uppercase" color="white" fontWeight="400" fontSize="12px">
          Accepted Votes
        </Text>
        <Heading color="white" fontWeight="700" fontSize="16px">
          {totalVotes}
        </Heading>
      </Box>
    </Box>
  );
}
