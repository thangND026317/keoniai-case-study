import React from 'react';
import { StepLabel as MUIStepLabel, StepLabelProps, styled } from '@mui/material';

const PrivateStepLabel = styled(MUIStepLabel)(({ theme }) => ({
  '.Mui-active': {
    color: theme.palette.primary.main,
    fontWeight: 600,

    '.MuiStepIcon-text': {
      fill: theme.palette.primary.contrastText,
    },
  },

  '.Mui-completed': {
    color: theme.palette.primary.main,
    fontWeight: 600,

    '.MuiStepIcon-text': {
      fill: theme.palette.primary.contrastText,
    },
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

const StepLabel = React.forwardRef<HTMLDivElement, StepLabelProps>((props, ref) => {
  return <PrivateStepLabel ref={ref} {...props} />;
});

export default StepLabel;
