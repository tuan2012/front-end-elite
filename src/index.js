import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TopBar from './component/js/TopBar';
import Footer from './component/js/Footer';
import Categories from './component/js/Categories';
import Features from './component/js/Features';
import NavBar from './component/js/NavBar';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'toastr/build/toastr.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
