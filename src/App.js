import React from 'react';
import ReactGA from 'react-ga';
import PortfolioContainer from './components/PortfolioContainer';
import { DarkModeProvider } from './context/DarkModeContext';

// initialize Google Analytics
const TRACKING_ID = process.env.REACT_APP_TRACKING_ID;
ReactGA.initialize(TRACKING_ID);

const App = () => {
  return (
    <div className='App'>
      <DarkModeProvider>
        <PortfolioContainer />
      </DarkModeProvider>
    </div>
  );
};

export default App;
