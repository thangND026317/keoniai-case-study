import { useState } from 'react';
import ContentTopic from './ContentTopic';
import ContentTitle from './ContentTitle';

export type ContentProps = {
  step: string;
  onNextStep: () => void;
};

const ContentSwitcher = ({ step, onNextStep }: ContentProps) => {
  const [topic, setTopic] = useState<string>('');
  const handleSelectATopic = (selected: string) => {
    setTopic(selected);
    onNextStep()
  }

  switch (step) {
    case 'Topic':
      return <ContentTopic handleSubmit={handleSelectATopic} />;

    case 'Title':
      return <ContentTitle topic={topic} handleSubmit={onNextStep} />;
    default:
      break;
  }
};

export default ContentSwitcher;
