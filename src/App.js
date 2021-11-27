import React from 'react';

import NavigationBar from './components/NavigationBar/NavigationBar.components';
import WhoWeAre from './components/Whoweare/Whoweare.components';
import Flow from './components/Flow/Flow.components';
import WhereToFind from './components/Wheretofind/Wheretofind.components';
import WhatWeDo from './components/Whatwedo/WhatWeDo.components';

import './App.scss';

function App() {
  return (
    <main>
      <NavigationBar />
      <WhoWeAre />
      <Flow />
      <WhereToFind />
      <WhatWeDo />
    </main>
  );
}

export default App;
