import React from 'react';
import { IconButton as MUIIconButton, IconButtonProps } from '@mui/material';

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  return <MUIIconButton ref={ref} {...props} />;
});

export default IconButton;
