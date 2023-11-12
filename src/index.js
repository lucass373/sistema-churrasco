import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './routes/App';
import Pedido from './routes/Pedido';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router history={history} basename="/sistema-churrasco">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pedido" element={<Pedido />} />
    </Routes>
  </Router>
);
