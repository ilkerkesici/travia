import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { Router } from 'containers';


const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <Router />
    </>
  );
};

export default App;


