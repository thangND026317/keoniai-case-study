import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import Stepper from '../components/Stepper/Stepper';
import Step from '../components/Stepper/Step';
import StepLabel from '../components/Stepper/StepLabel';
import IconButton from '../components/IconButton';
import ContentSwitcher from '../layouts/ContentSwitcher';

const steps = ['Topic', 'Title', 'Outline', 'Blog Post'];

export function CreateBlogPost() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <main>
      <section className="main__notice">
        Article: 3 of 5 | Current plan: Stater <FontAwesomeIcon icon={faInfoCircle} />
        <IconButton>
          <FontAwesomeIcon icon={faXmark} />
        </IconButton>
      </section>
      <article>
        <h1>Create Blog Post</h1>
        <Stepper activeStep={activeStep}>
          {steps.map(label => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        <div className="main__article__content">
          <ContentSwitcher
            step={steps[activeStep]}
            onNextStep={() => setActiveStep(pre => ++pre)}
          />
        </div>
      </article>
    </main>
  );
}
