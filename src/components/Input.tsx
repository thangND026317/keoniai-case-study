import React from 'react';
import { styled, TextField, TextFieldProps } from '@mui/material';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '.MuiInputBase-root': {
    height: 44,
    borderRadius: theme.spacing(2),
    borderColor: theme.palette.grey[200],
  },

  '.MuiInputBase-input': {
    padding: `${theme.spacing(3)} ${theme.spacing(2)}`,
    background: theme.palette.grey[50],
  },
}));

const Input = React.forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  return <StyledTextField ref={ref} {...props} />;
});

export default Input;
