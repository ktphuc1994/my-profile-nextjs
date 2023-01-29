import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    darkMBlue: {
      main: '#26547D',
      contrastText: '#fff',
    },
    brightRed: {
      main: '#EF436B',
      contrastText: '#fff',
    },
    lightOrange: {
      main: '#FFCE5C',
      contrastText: '#000',
    },
    limeGreen: {
      main: '#05C793',
      contrastText: '#000',
    },
    darkPink: {
      main: '#810561',
      contrastText: '#fff',
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    darkMBlue: Palette['primary'];
    brightRed: Palette['primary'];
    lightOrange: Palette['primary'];
    limeGreen: Palette['primary'];
    darkPink: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    darkMBlue?: PaletteOptions['primary'];
    brightRed?: PaletteOptions['primary'];
    lightOrange?: PaletteOptions['primary'];
    limeGreen?: PaletteOptions['primary'];
    darkPink?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    darkMBlue: true;
    brightRed: true;
    lightOrange: true;
    limeGreen: true;
    darkPink: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    darkMBlue: true;
    brightRed: true;
    lightOrange: true;
    limeGreen: true;
    darkPink: true;
  }
}
