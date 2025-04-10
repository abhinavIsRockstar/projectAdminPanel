// src/theme.ts
import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { withRTL } from '@chakra-ui/rtl-plugin';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  cssVarPrefix: 'ck',
};

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
});

const baseTheme = extendTheme({ config, breakpoints });

export const theme = withRTL(baseTheme);
