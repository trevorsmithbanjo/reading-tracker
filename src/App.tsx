import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Header from './components/header/header';
import SignIn from './components/sign-in-and-sign-up/sign-in';

const App: React.FC = () => {
  const FIREBASE = process.env.REACT_APP_FIREBASE_API_KEY;
  console.log(FIREBASE);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default App;
