import { useState } from 'react';
import { styled, ThemeProvider } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

import './App.css';
import { theme } from './components/theme';
import IconButton from './components/IconButton';

import keoniLogo from './assets/Keoni-logo.svg';
import keoniLogoSmall from './assets/icon.svg';
import { CreateBlogPost } from './pages/CreateBlogPost';

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

      <CreateBlogPost />
    </ThemeProvider>
  );
}

export default App;
