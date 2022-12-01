import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ShowMessages from './ShowMessages/ShowMessages';
import About from './About'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <BrowserRouter>
    <header>
    <div>
    <img className="logo" src="/images/logo.png" id="logo" alt="logo.jpg"/>
    </div>
    </header>
    <div className="define">
      <p>Welcome to Covid Motivator <span role="img" aria-label="welcome">💌</span>. This app lets you to send and view motivational messages.</p>
    </div>
      {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
    <div>
      <Routes>
        <Route path="/post_messages" element={<App />} />
        <Route path="/" element={<ShowMessages />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
