import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Header from './components/header/header';
import SignIn from './components/sign-in-and-sign-up/sign-in';

const App: React.FC = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  </>
);

export default App;
