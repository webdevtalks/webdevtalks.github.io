import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1c1c17'
    },
    secondary: {
      main: '#3298cc',
    },
    background: {
      default: 'rgba(51,152,203,.9)'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(51,152,203,.9)',
            color: 'white',
          },
          '&.active': {
            backgroundColor: 'rgba(51,152,203,.9)',
            color: 'white',
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: '#1c1c17',
          '&:hover': {
            backgroundColor: 'rgba(51,152,203,.9)',
            color: 'white',
          },
          '&.active': {
            backgroundColor: 'rgba(51,152,203,.9)',
            color: 'white',
          },
        },
      },
    },
  },
});

export default theme