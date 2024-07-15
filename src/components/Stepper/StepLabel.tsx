import React from 'react';
import { StepLabel as MUIStepLabel, StepLabelProps } from '@mui/material';

const StepLabel = React.forwardRef<HTMLDivElement, StepLabelProps>((props, ref) => {
  return <MUIStepLabel ref={ref} {...props} />;
});

export default StepLabel;
