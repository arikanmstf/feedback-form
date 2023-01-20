import { ThemeOptions } from '@mui/material/styles/createTheme';

const theme: ThemeOptions = {
  palette: {
    primary: {
      main: '#088080',
      contrastText: '#fff',
    },
    secondary: {
      main: '#edf2ff',
      contrastText: '#fff',
    },
    success: {
      main: '#0b793b',
    },
  },
  typography: {
    fontFamily: [
      'Gill Sans',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
};

export default theme;
