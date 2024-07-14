import '@mui/material';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    violet?: PaletteOptions['primary'];
  }

  interface Palette {
    violet: Palette['primary'];
  }
}
