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
      brThree: '#393C4A',
      bgOne: '#1F2335',
      bgTwo: '#181C2E',
      bgThree: '#1C2031',
      bgFour: '#1b1f30',
    },
    red: '#E30325',
    green: '#449352',
    yellow: '#e5b805',
    purple: '#A163BE',
    violet: '#6D769D',
    blue: '#2249D1',
    teal: '#018796 ',
  },
  fonts: {
    body: 'Jost, sans-serif',
    heading: 'Jost, sans-serif',
  },
});
