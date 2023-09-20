import React from 'react';
//  import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import MainScreen from './components/MainScreen';
import ModalA from './components/ModalA';
import ModalB from './components/ModalB';

function App() {
  return (
    <div>
    <Routes>
        <Route exact path="/" component={MainScreen} />
        <Route path="/modalA" component={ModalA} />
        <Route path="/modalB" component={ModalB} />
        {/* <Route path="/modalC" component={ModalC} /> */}
       
      </Routes>
      </div>
  );
}

export default App;