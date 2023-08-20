import { Button, Flex, Icon, Image } from '@chakra-ui/react';

import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { MenuItem } from './MenuItem';

import { TbUsersGroup } from 'react-icons/tb';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FiUserPlus } from 'react-icons/fi';

import FcxLogo from '~/assets/fcx-logo.webp';

import { MenuFooter } from './MenuFooter';

const sidebarItems = [
  { icon: TbUsersGroup, text: 'Usuários', path: '/usuarios' },
  { icon: FiUserPlus, text: 'Adicionar usuário', path: '/adicionar-usuario' },
];

export const Sidebar = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <Flex
      bg='black.0'
      w={isMenuOpen ? '25rem' : '7rem'}
      h='87.5%'
      borderRadius='lg'
      align='center'
      direction='column'
      transition='all 0.3s ease-in-out'
      backdropFilter='blur(1.5rem)'
      position='fixed'
      zIndex={isMenuOpen ? 10 : 0}
      ml='5rem'
    >
      <Image src={FcxLogo} w='5rem' h='5rem' mt='2rem' mb='4rem' />
      <Button
        h='3rem'
        w='3rem'
        p='0'
        borderRadius='3xl'
        bg='secondary.50'
        top='8rem'
        right='-1.5rem'
        pos='absolute'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        _hover={{}}
        _active={{}}
      >
        <Icon as={isMenuOpen ? IoIosArrowBack : IoIosArrowForward} color='white' fontSize='xl' />
      </Button>
      <Flex w='100%' h='100%' direction='column' align='center' mt='5.5rem' mb='4rem' gap='2rem'>
        {sidebarItems.map((item, index) => {
          return (
            <MenuItem
              key={index}
              menuIndex={index}
              item={item}
              activeIcon={pathname.includes(item.path)}
              isMenuOpen={isMenuOpen}
            />
          );
        })}
      </Flex>
      <Flex h='100%' align='flex-end'>
        <MenuFooter isMenuOpen={isMenuOpen} />
      </Flex>
    </Flex>
  );
};
