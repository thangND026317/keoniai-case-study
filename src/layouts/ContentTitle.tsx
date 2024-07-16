// import React from 'react';
import { InputAdornment, styled } from '@mui/material';
import KeoniEmpty from '../assets/Keoni_Empty.svg';
import Button from './../components/Button';
import Input from '../components/Input';

import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type ContentTitleProps = {
  topic: string;
  handleSubmit: () => void;
};

const ContentTitle = ({ topic }: ContentTitleProps) => {
  return (
    <>
      <h2>
        Writing <TopicText>"{topic}"</TopicText>
      </h2>

      <TwoSidesContainer>
        <HalfSide>
          <PromptInput sx={{ borderColor: '#8F47FF' }}>
            <h3>Article Input</h3>
            <h4>
              Primary Keyword(s) <FontAwesomeIcon icon={faInfoCircle} />
            </h4>
            <Input fullWidth placeholder="Press “Enter” to Add Keyword" />
          </PromptInput>

          <PromptInput sx={{ borderColor: '#D52F25' }}>
            <h3>Business References</h3>
            <Helper>
              <h4>Get more specific.</h4>
              <p>
                Keoni.ai considers proprietary knowledge shared and will weave it into your content.
              </p>
            </Helper>
            <Input fullWidth />
          </PromptInput>

          <PromptInput sx={{ borderColor: '#FFE715' }}>
            <h3>Article References</h3>
            <Helper>
              <h4>Do you want Keoni.ai to refer to any article?</h4>
              <p>
                Keoni.ai will take reference to the title, primary keywords, content structure and
                content.
              </p>
            </Helper>
            <Input
              fullWidth
              InputProps={{
                startAdornment: <InputAdornment position="start">https://</InputAdornment>,
              }}
            />
          </PromptInput>
          <Button variant="contained" color="primary" size="large">
            Generate Titles 🪄
          </Button>
        </HalfSide>

        <RightSide>
          <img src={KeoniEmpty} className="logo" alt="Keoni.ai logo" />
          <h3>No title generated</h3>
          <p>Fill out all the fields, we wil craft a title for you</p>
        </RightSide>
      </TwoSidesContainer>
    </>
  );
};

export default ContentTitle;

const TopicText = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 600,
}));

const TwoSidesContainer = styled('div')({
  display: 'flex',
  height: '100%',
  gap: 24,
  alignItems: 'stretch',
});

const HalfSide = styled('div')({
  flex: '50%',
  display: 'flex',
  flexDirection: 'column',
});

const RightSide = styled(HalfSide)(({ theme }) => ({
  justifyContent: 'center',
  textAlign: 'center',
  background: theme.palette.grey[50],
  borderRadius: theme.spacing(4),
  padding: theme.spacing(10),
  color: theme.palette.grey[700],

  img: {
    height: 160,
  },

  p: {
    color: theme.palette.grey[300],
  },
}));

const PromptInput = styled('div')(({ theme }) => ({
  borderRadius: theme.spacing(2),
  marginBottom: theme.spacing(6),
  padding: theme.spacing(5),
  borderWidth: `${theme.spacing(0.5)} ${theme.spacing(0.5)} ${theme.spacing(0.5)} ${theme.spacing(
    2
  )}`,
  borderStyle: 'solid',
}));

const Helper = styled('div')(({ theme }) => ({
  background: theme.palette.grey[100],
  margin: `${theme.spacing(5)} 0px`,
  padding: theme.spacing(2),
  color: theme.palette.grey[700],

  h4: {
    margin: 0,
  },

  p: {
    margin: 0,
    color: theme.palette.grey[300],
  },
}));
