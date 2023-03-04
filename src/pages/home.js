import React from 'react';
//Components
import Layout from 'layouts/layout';
import Container from 'layouts/container';
import ProgressBar from 'components/progressBar';
import Members from 'components/members';
import Zones from 'components/zones';
import Map from 'components/map';

// Chakra UI
import { Stack } from '@chakra-ui/react';

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

  const color = {
    red: '#E30325',
    green: '#449352',
    yellow: '#e5b805',
    purple: '#A163BE',
    grey: '#6D769D',
    blue: '#2249D1',
    teal: '#018796 ',
  };

  const data = [
    {
      name: 'North East',
      amount: '3000',
      color: color.green,
    },
    {
      name: 'North West',
      amount: '3000',
      color: color.grey,
    },
    {
      name: 'North Central',
      amount: '3000',
      color: color.purple,
    },
    {
      name: 'South East',
      amount: '3000',
      color: color.teal,
    },
    {
      name: 'South West',
      amount: '3000',
      color: color.red,
    },
    {
      name: 'South South',
      amount: '3000',
      color: color.blue,
    },
  ];

  return (
    <>
      <Layout navList={navList}>
        <Container className="container">
          <Map />
        </Container>
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
            <Zones data={data} color={color} />
            <Members totalElectedMembers={'10,000'} male="9000" female="1000" />
          </Stack>
        </Container>
      </Layout>
    </>
  );
}
