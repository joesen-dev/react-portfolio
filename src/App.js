import React from 'react';
import ReactGA from 'react-ga';
import PortfolioContainer from './components/PortfolioContainer';
import { DarkModeProvider } from './context/DarkModeContext';

// initialize Google Analytics
const TRACKING_ID = process.env.React_App_TRACKING_ID;
ReactGA.initialize(TRACKING_ID);

const App = () => {
  return (
    <div className='App'>
      <ReactGA.GoogleAnalyticsProvider>
        <DarkModeProvider>
          <PortfolioContainer />
        </DarkModeProvider>
      </ReactGA.GoogleAnalyticsProvider>
    </div>
  );
};

export default App;
