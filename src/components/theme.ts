import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#8F47FF',
      light: '#F1ECFE',
      dark: '#853FE7',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#2343A9',
      light: '#DDE4F8',
    },
    error: {
      main: '#D52F25',
      light: '#D93026',
    },
    warning: {
      main: '#FFE715',
    },
    grey: {
      50: '#F9FAFC',
      100: '#F4F4F4',
      200: '#A1A1A1',
      300: '#737373',
      700: '#434343',
      800: '#27303F',
      900: '#1D1D1D',
    }
  },
  spacing: 4,
});
