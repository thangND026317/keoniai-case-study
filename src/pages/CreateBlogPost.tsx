import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Stepper from '../components/Stepper/Stepper';
import Step from '../components/Stepper/Step';
import StepLabel from '../components/Stepper/StepLabel';

const steps = ['Topic', 'Title', 'Outline', 'Blog Post'];

export function CreateBlogPost() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <main>
      <section className="main__notice">
        Article: 3 of 5 | Current plan: Stater <FontAwesomeIcon icon={faInfoCircle} />
      </section>
      <article>
        <header>Create Blog Post</header>
        <button onClick={() => setActiveStep(pre => --pre)}>Previous</button>
        <button onClick={() => setActiveStep(pre => ++pre)}>Next</button>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorum qui cupiditate
        </div>
      </article>
    </main>
  );
}
