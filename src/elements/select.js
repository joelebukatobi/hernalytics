import React from 'react';
// Chakra UI
import { Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider } from '@chakra-ui/react';
import { BiChevronDown } from 'react-icons/bi';

export default function select({ placeholder, options }) {
  return (
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
        {placeholder}
      </MenuButton>
      <MenuList borderRadius="6px" bg="darkblue.bgTwo" borderColor="darkblue.brTwo" w="260px">
        {options.map((option, index) => (
          <>
            <MenuItem
              bg="transparent"
              fontSize="14px"
              px="10px"
              color="white"
              _focus={{ boxShadow: 'none', bg: 'transparent' }}
            >
              {option}
            </MenuItem>
            <MenuDivider mx="10px" />
          </>
        ))}
      </MenuList>
    </Menu>
  );
}
