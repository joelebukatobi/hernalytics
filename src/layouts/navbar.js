import React from 'react';
import { Link } from 'react-router-dom';
//Components
import Container from 'layouts/container';
// Chakra UI
import { Stack, Text, Flex, Button } from '@chakra-ui/react';
// Images
import Logo from 'assets/images/logo.svg';

export default function navbar({ navList }) {
  return (
    <Container>
      <Stack direction="row" justifyContent="space-between" py="10" alignItems="center" w="100%">
        <Flex>
          <a href="/">
            <img src={`${Logo}`} alt="" />
          </a>
        </Flex>
        <Flex alignItems="center" gap="12">
          {navList.map((item, index) => (
            <Text
              key={index}
              fontSize="sm"
              color="#ffffff"
              textTransform="uppercase"
              fontWeight="600"
              // fontFamily="Jost"
            >
              <Link href="/#">{item.name}</Link>
            </Text>
          ))}
          <Stack direction="row" gap="4">
            <Button
              size="md"
              height="48px"
              width="99px"
              bg="transparent"
              borderRadius="4px"
              textTransform="uppercase"
              color="white"
              fontWeight="600"
              _hover={{ color: 'black', bg: 'white' }}
            >
              Login
            </Button>

            <Button
              size="md"
              height="48px"
              width="129px"
              bg="yellow"
              borderRadius="4px"
              textTransform="uppercase"
              color="black"
              fontWeight="600"
              _hover={{ color: 'black', bg: 'white' }}
            >
              Sign Up
            </Button>
          </Stack>
        </Flex>
      </Stack>
    </Container>
  );
}
