import React from 'react';
//Components
// import Layout from 'layouts/layout';
// import Container from 'layouts/container';

// Chakra UI
import { Box, Stack, Text, Heading, CircularProgress, CircularProgressLabel } from '@chakra-ui/react';

export default function index({ progress, totalVotes }) {
  return (
    <Box w="30%" border="1px" borderColor="darkblue.brThree" borderRadius="13px" p="32px">
      <Stack direction="row">
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
        <Box w="100%">
          <Text textTransform="uppercase" color="white" fontWeight="400" fontSize="12px">
            Rejected Votes
          </Text>
          <Heading color="white" fontWeight="700" fontSize="16px">
            {totalVotes}
          </Heading>
        </Box>
      </Stack>
      <Box mt="8px">
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
