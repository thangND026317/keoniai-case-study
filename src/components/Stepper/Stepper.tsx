import React from 'react';
import { Stepper as MUIStepper, StepperProps } from '@mui/material';

const Stepper = React.forwardRef<HTMLDivElement, StepperProps>((props, ref) => {
  return <MUIStepper ref={ref} {...props} />;
});

export default Stepper;
