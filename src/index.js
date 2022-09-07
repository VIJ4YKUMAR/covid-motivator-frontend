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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <BrowserRouter>
    <div className="App">

      {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
      <Routes>
        <Route path="post_messages" element={<App />} />
        <Route path="/" element={<ShowMessages />} />
      </Routes>
    </div>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
