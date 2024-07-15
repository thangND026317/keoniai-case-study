import React from 'react';
import { Button, ContentContainer } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faPencil } from '@fortawesome/free-solid-svg-icons';
import { styled } from '@mui/material';

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
