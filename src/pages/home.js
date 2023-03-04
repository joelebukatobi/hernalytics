import React from 'react';
//Components
import Layout from 'layouts/layout';
import Container from 'layouts/container';
import ProgressBar from 'components/progressBar';
import Members from 'components/members';
import Zones from 'components/zones';

// Chakra UI
import { Stack, Box } from '@chakra-ui/react';

export default function home() {
  const navList = [
    {
      icon: false,
      name: 'about us',
    },
    {
      icon: false,
      name: 'our communities',
    },
    {
      icon: false,
      name: 'election data',
    },
    {
      icon: false,
      name: 'e-buddy',
    },
    {
      icon: false,
      name: 'veo platform',
    },
  ];
  return (
    <>
      <Layout navList={navList}>
        <Container className="container"></Container>
        <Container>
          <Stack
            gap="16px"
            border="1px"
            borderColor="darkblue.brThree"
            w="100%"
            px="32px"
            py="48px"
            borderRadius="13px"
            bg="darkblue.bgFour"
            direction="row"
            my="32px"
          >
            <ProgressBar progress={20} totalVotes={'168,912,222'} />
            <Zones />
            <Members totalElectedMembers={'10,000'} male="9000" female="1000" />
          </Stack>
        </Container>
      </Layout>
    </>
  );
}
