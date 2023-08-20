import { Avatar, Flex, Icon, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useAuthContext } from '~/modules/auth';

type FooterSectionProps = {
  isMenuOpen: boolean;
};

export const MenuFooter = ({ isMenuOpen }: FooterSectionProps): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(isMenuOpen);
  const { user, logout } = useAuthContext();

  useEffect(() => {
    if (isMenuOpen) {
      setTimeout(() => {
        setMenuOpen(true);
      }, 200);
    } else {
      setMenuOpen(false);
    }
  }, [isMenuOpen]);

  const handleSignOut = () => {
    logout();
  };

  return (
    <Flex
      direction={menuOpen ? 'row' : 'column'}
      justify={menuOpen ? 'space-between' : 'center'}
      align='center'
      pb='4rem'
      gap='5rem'
      transition='all 0.3s ease-in-out'
    >
      <Avatar size='md' name={user?.name} />
      <Flex gap='1rem' align='center' as='button' onClick={handleSignOut}>
        {menuOpen && (
          <Text ml='3rem' fontSize='xl' fontWeight={400} color='white'>
            Sair
          </Text>
        )}
        <Icon as={FiLogOut} fontSize='xl' color='white' />
      </Flex>
    </Flex>
  );
};
