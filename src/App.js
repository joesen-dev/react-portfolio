import React from 'react';
import PortfolioContainer from './components/PortfolioContainer';
import { DarkModeProvider } from './context/DarkModeContext';

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
