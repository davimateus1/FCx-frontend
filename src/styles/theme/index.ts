import { extendTheme } from '@chakra-ui/react';
import foundations from './foundations';
import { styles } from './chakra-styles';

export const theme = extendTheme({
  styles,
  ...foundations,
});

export * from './ScrollbarStyle';
