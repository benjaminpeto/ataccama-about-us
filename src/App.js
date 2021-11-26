import React from 'react';

import NavigationBar from './components/NavigationBar/NavigationBar.components';
import WhoWeAre from './components/Whoweare/Whoweare.components';

import './App.scss';

function App() {
  return (
    <main>
      <NavigationBar />
      <WhoWeAre />
    </main>
  );
}

export default App;
