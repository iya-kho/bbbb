import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.scss';
import { Home, Apartment, About, Error } from './pages';
import { Header, Footer } from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/apartment/:id" element={<Apartment />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
