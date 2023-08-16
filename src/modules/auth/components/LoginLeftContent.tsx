import { Box } from '@chakra-ui/react';
import FerreiraCosta from '~/assets/ferreira-costa.webp';

export const LoginLeftContent = (): JSX.Element => {
  return (
    <Box
      overflow='hidden'
      w='55%'
      bgImage={FerreiraCosta}
      bgSize='cover'
      bgPosition='center'
      bgRepeat='no-repeat'
      borderRadius='1rem 0 0 1rem'
    />
  );
};
