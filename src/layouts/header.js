import React from 'react';
//Components
import Container from 'layouts/container';
// Chakra UI
import { Stack, Text, Flex, Badge, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider } from '@chakra-ui/react';
import { BiChevronDown } from 'react-icons/bi';
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
        <Flex>
          <Menu>
            <MenuButton
              w="260px"
              borderRadius="6px"
              border="1px"
              borderColor="darkblue.brTwo"
              bg="darkblue.bgThree"
              color="white"
              fontWeight="400"
              fontSize="14px"
              as={Button}
              textAlign="left"
              px="10px"
              py="12px"
              _hover={{ bg: 'transparent' }}
              _focus={{ boxShadow: 'none', bg: 'darkblue.bgThree' }}
              _active={{ boxShadow: 'none', bg: 'darkblue.bgThree' }}
              rightIcon={<BiChevronDown />}
            >
              Election Data
            </MenuButton>
            <MenuList borderRadius="6px" bg="darkblue.bgTwo" borderColor="darkblue.brTwo" w="260px">
              <MenuItem
                bg="transparent"
                fontSize="14px"
                px="10px"
                color="white"
                _focus={{ boxShadow: 'none', bg: 'transparent' }}
              >
                Download
              </MenuItem>
              <MenuDivider mx="10px" />
              <MenuItem
                bg="transparent"
                px="10px"
                fontSize="14px"
                color="white"
                _focus={{ boxShadow: 'none', bg: 'transparent' }}
              >
                Download
              </MenuItem>
              <MenuDivider mx="10px" />
            </MenuList>
          </Menu>
        </Flex>
      </Stack>
    </Container>
  );
}
