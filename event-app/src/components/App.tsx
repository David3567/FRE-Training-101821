import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Counter from './Counter/Counter';
import NotFound from './NotFound/NotFound';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
