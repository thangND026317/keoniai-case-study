import { useState } from 'react';
import { styled, ThemeProvider } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faXmark } from '@fortawesome/free-solid-svg-icons';

import './App.css';
import { theme } from './components/theme';
import { Stepper, StepLabel, Step } from './components/Stepper';
import IconButton from './components/IconButton';

import keoniLogo from './assets/Keoni-logo.svg';
import keoniLogoSmall from './assets/icon.svg';
import ContentSwitcher from './layouts/ContentSwitcher';

const steps = ['Topic', 'Title', 'Outline', 'Blog Post'];

const MyButton = styled(IconButton)({
  position: 'absolute',
  right: '-14px',
  padding: 2,
  background: '#D4BBF7',
  color: '#8F47FF',
  borderRadius: '8px',
  border: 'none',
  zIndex: 1,

  ':hover': {
    background: '#a977ef',
    color: '#803fe5',
  },

  ':focus': {
    outline: 'none',
  },
});

function App() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <nav className={`sidenav${isExpanded ? ' expanded' : ''}`}>
        <header className="sidenav__upper">
          <div className="sidenav__header">
            <img
              src={isExpanded ? keoniLogo : keoniLogoSmall}
              className="logo"
              alt="Keoni.ai logo"
            />
            <MyButton onClick={() => setIsExpanded(prev => !prev)}>
              {isExpanded ? <ChevronLeft /> : <ChevronRight />}
            </MyButton>
          </div>
          <p>Home</p>
          <p>Get Inspired</p>
          <p>Manage Creations</p>
          <p>Hire SEO Specialist</p>
        </header>

        <footer className="sidenav__footer">
          <p>Configure</p>
          <p>Steph T</p>
        </footer>
      </nav>
      <main>
        <section className="main__notice">
          Article: 3 of 5 | Current plan: Stater <FontAwesomeIcon icon={faInfoCircle} />
          <IconButton>
            <FontAwesomeIcon icon={faXmark} />
          </IconButton>
        </section>
        <article>
          <h1>Create Blog Post</h1>
          {/* <button onClick={() => setActiveStep(pre => --pre)}>Previous</button>
          <button onClick={() => setActiveStep(pre => ++pre)}>Next</button> */}
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
    </ThemeProvider>
  );
}

export default App;
