import React, { useState } from 'react';
import ReactGA from 'react-ga';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkSide from '../../utils/useDarkSide';

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === 'light' ? true : false
  );

  const toggleDarkMode = checked => {
    setTheme(colorTheme);
    setDarkSide(checked);

    ReactGA.event({
      category: 'Dark Mode',
      action: checked ? 'Enabled' : 'Disabled',
    });
  };

  return (
    <>
      <div>
        <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} />
      </div>
    </>
  );
}
