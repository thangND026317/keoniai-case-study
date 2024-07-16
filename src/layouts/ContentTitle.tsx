// import React from 'react';
import { styled } from '@mui/material';
import Button from '../components/Button';

export type ContentTitleProps = {
  topic: string;
  handleSubmit: () => void;
};

const ContentTitle = ({ topic, handleSubmit }: ContentTitleProps) => {
  return (
    <>
      <h2>Writing "{topic}"</h2>

      <TwoSidesContainer>
        <HalfSide>
          <div>Form one</div>
          <div>Form 2</div>
          <div>Form 3</div>
        </HalfSide>
        <HalfSide>
          <div>Form one</div>
          <div>Form 2</div>
          <div>Form 3</div>
          <Button onClick={handleSubmit}></Button>
        </HalfSide>
      </TwoSidesContainer>
    </>
  );
};

export default ContentTitle;

const TwoSidesContainer = styled('div')({
  display: 'flex',
});

const HalfSide = styled('div')({
  flex: '50%',
});
