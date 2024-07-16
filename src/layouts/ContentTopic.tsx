import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faPencil } from '@fortawesome/free-solid-svg-icons';
import { Chip, styled } from '@mui/material';

import Input from '../components/Input';
import Button from '../components/Button';
import { ContentContainer } from '../components/ContentContainer';

import { useTopicFetchers } from '../hooks/useTopicFetchers';

export type ContentTopicProps = {
  handleSubmit: (topic: string) => void;
};

const ContentTopic = ({ handleSubmit }: ContentTopicProps) => {
  const [value, suggestion, setValue] = useTopicFetchers('');

  return (
    <ContentContainer>
      <h2>What do you want to write about today?</h2>
      <Wrapper>
        <Input
          value={value}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value);
          }}
          type="text"
          placeholder="Type your Input"
        />
        <Button
          variant="contained"
          startIcon={<FontAwesomeIcon icon={faPencil} />}
          disabled={value.length === 0}
          onClick={() => handleSubmit(value)}
          sx={{ width: '200px' }}>
          Start Writing
        </Button>
      </Wrapper>

      <h3>
        Try writing <FontAwesomeIcon icon={faInfoCircle} />
      </h3>

      <SuggestionContainer>
        {suggestion.map(suggest => (
          <Chip
            key={suggest}
            label={suggest}
            variant="outlined"
            onClick={() => handleSubmit(suggest)}
          />
        ))}
      </SuggestionContainer>
    </ContentContainer>
  );
};

export default ContentTopic;

const Wrapper = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 16,

  '.MuiTextField-root': {
    width: 'calc(100% - 220px)',
  },
});

const SuggestionContainer = styled('div')({
  width: '80%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: 12,
});
