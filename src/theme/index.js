// Fonts
import '@fontsource/jost';
import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    white: '#ffffff',
    black: '#000000',
    darkblue: {
      brOne: '#242B47',
      brTwo: '#252B46',
      bgOne: '#1F2335',
      bgTwo: '#181C2E',
      bgThree: '#1C2031',
    },
    yellow: '#e5b805',
  },
  fonts: {
    body: 'Jost, sans-serif',
    heading: 'Jost, sans-serif',
  },
});
