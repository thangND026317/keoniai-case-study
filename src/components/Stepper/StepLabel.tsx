import React from 'react';
import { StepLabel as MUIStepLabel, StepLabelProps, styled } from '@mui/material';

const StyledStepLabel = styled(MUIStepLabel)(({ theme }) => ({
  '.MuiStepLabel-label': {
    '&.Mui-active': {
      color: theme.palette.primary.main,
      fontWeight: 600,
    },
    '&.Mui-completed': {
      color: theme.palette.primary.main,
      fontWeight: 600,
    },
  },
}));

const StepLabel = React.forwardRef<HTMLDivElement, StepLabelProps>((props, ref) => {
  return <StyledStepLabel ref={ref} {...props} />;
});

export default StepLabel;
