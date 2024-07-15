import React from 'react';
import { Stepper as MUIStepper, StepperProps, styled } from '@mui/material';

const StyledStepper = styled(MUIStepper)(({ theme }) => ({
  padding: theme.spacing(6),

  '.MuiStepConnector-root .MuiStepConnector-line': {
    borderColor: 'unset',
  },

  '.Mui-disabled': {
    color: theme.palette.grey[200],
    fontWeight: 500,

    '.MuiSvgIcon-root': {
      color: theme.palette.primary.contrastText,
      border: `1px solid ${theme.palette.grey[200]}`,
      borderRadius: '50%',
    },

    '.MuiStepIcon-text': {
      fill: theme.palette.grey[300],
    },
  },
}));

const Stepper = React.forwardRef<HTMLDivElement, StepperProps>((props, ref) => {
  return <StyledStepper ref={ref} {...props} />;
});

export default Stepper;
