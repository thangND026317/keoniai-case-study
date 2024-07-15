import React from 'react';
import { Step as MUIStep, StepProps } from '@mui/material';

const Step = React.forwardRef<HTMLDivElement, StepProps>((props, ref) => {
  return <MUIStep ref={ref} {...props} />;
});

export default Step;
