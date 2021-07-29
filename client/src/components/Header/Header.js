import React from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Button,
  Menu,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';




export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

    return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>HEARO</Box>
           
          </HStack>
          <Flex alignItems={'center'}>
                <Link
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}>
              Signin</Link>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}>
              Signup
            </Button>
           
            <Menu>
            
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            
          </Box>
        ) : null}
      </Box>
    </>
  );
}



