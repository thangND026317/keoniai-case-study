import React from 'react';
import { Button as MUIButton, ButtonProps, styled } from '@mui/material';

const StyledButton = styled(MUIButton)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 600,
  fontSize: 16,
  lineHeight: 1.5,
  color: theme.palette.primary.contrastText,
  padding: `${theme.spacing(3)} ${theme.spacing(8)}`,
  borderRadius: theme.spacing(2),
}));

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return <StyledButton ref={ref} {...props} />;
});

export default Button;
