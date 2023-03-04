import React from 'react';
//Components
import Container from 'layouts/container';
// Chakra UI
import { Stack, Box, Text, Heading, Image } from '@chakra-ui/react';
// Images
import Logo from 'assets/images/logo.svg';
import Instagram from 'assets/images/instagram.svg';
import Whatsapp from 'assets/images/whatsapp.svg';
import Twitter from 'assets/images/twitter.svg';

export default function footer() {
  return (
    <Box w="100%" bg="#FFFFFF1A" pt="80px" pb="64px" position="relative" bottom="0">
      <Container>
        <Stack direction="row" justify="space-between">
          <Box>
            <img src={`${Logo}`} alt="" />
            <Text mt="10px" fontSize="16px" textTransform="capitalize" color="#ffffff">
              Isale Eko Avenue, Dolphin Estate, Ikoyi, Lagos, Nigeria
            </Text>
            <Text mt="10px" fontSize="16px" textTransform="capitalize" color="#ffffff">
              © 2022 Hernalytics
            </Text>
          </Box>
          <Stack direction="column" gap="24px">
            <Heading fontWeight="700" fontSize="16px" textTransform="capitalize" color="#ffffff">
              About
            </Heading>
            <Text fontSize="16px" textTransform="capitalize" color="#ffffff">
              Our Story
            </Text>
            <Text fontSize="16px" textTransform="capitalize" color="#ffffff">
              Blog
            </Text>
            <Text fontSize="16px" textTransform="capitalize" color="#ffffff">
              About Hernalytics
            </Text>
            <Text fontSize="16px" textTransform="capitalize" color="#ffffff">
              Videos
            </Text>
          </Stack>
          <Stack direction="column" gap="24px">
            <Heading fontWeight="700" fontSize="16px" textTransform="capitalize" color="#ffffff">
              Support
            </Heading>
            <Text fontSize="16px" textTransform="capitalize" color="#ffffff">
              FAQs
            </Text>
            <Text fontSize="16px" textTransform="capitalize" color="#ffffff">
              Privacy Policy
            </Text>
            <Text fontSize="16px" textTransform="capitalize" color="#ffffff">
              Terms Of Service
            </Text>
          </Stack>
          <Stack direction="column" gap="24px">
            <Heading fontWeight="700" fontSize="16px" textTransform="capitalize" color="#ffffff">
              Let's Chat
            </Heading>
            <Text fontSize="16px" textTransform="capitalize" color="#ffffff">
              hernalytics@gmail.com
            </Text>
            <Text fontSize="16px" textTransform="capitalize" color="#ffffff">
              +234 801 234 5678
            </Text>
            <Stack direction="row" gap="24px">
              <Image h="24px" w="24px" src={`${Instagram}`} alt="" />
              <Image h="24px" w="24px" src={`${Twitter}`} alt="" />
              <Image h="24px" w="24px" src={`${Whatsapp}`} alt="" />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
