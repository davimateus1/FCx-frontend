import { Box, Flex, Icon, Text } from '@chakra-ui/react';

import { useState } from 'react';
import { IconType } from 'react-icons/lib';
import { useNavigate } from 'react-router-dom';
import { useDelayedMenuOpen } from '~/hooks';

type MenuItemProps = {
  item: { icon: IconType; text: string; path: string };
  activeIcon: boolean;
  menuIndex: number;
  isMenuOpen: boolean;
};

export const MenuItem = ({ item, menuIndex, isMenuOpen, activeIcon }: MenuItemProps) => {
  const [menuOpen, setMenuOpen] = useState(isMenuOpen);
  const navigate = useNavigate();
  useDelayedMenuOpen({ isMenuOpen, setMenuOpen });

  return (
    <Flex
      key={menuIndex}
      w='100%'
      justify={isMenuOpen ? 'flex-start' : 'center'}
      mx='5rem'
      pos='relative'
      align='center'
      as='button'
      h='4rem'
      onClick={() => navigate(item.path)}
    >
      <Box
        pos='absolute'
        bg='secondary.100'
        w='0.6rem'
        h='100%'
        left='0'
        borderRadius='0 2rem 2rem 0'
        opacity={activeIcon ? 1 : 0}
        transition='opacity 0.5s, transform 0s'
      />
      <Flex
        key={menuIndex}
        minW='3rem'
        maxW='3rem'
        h='3rem'
        p='0'
        justify='center'
        ml={isMenuOpen ? '3rem' : '0'}
        align='center'
      >
        <Icon
          as={item.icon}
          fontSize='3xl'
          opacity={activeIcon ? 1 : 0.6}
          color={activeIcon ? 'secondary.100' : 'white'}
        />
      </Flex>
      {menuOpen && (
        <Text
          ml='2rem'
          fontSize='lg'
          opacity={activeIcon ? 1 : 0.6}
          fontWeight={400}
          color={activeIcon ? 'primary.100' : 'white'}
        >
          {item.text}
        </Text>
      )}
    </Flex>
  );
};
