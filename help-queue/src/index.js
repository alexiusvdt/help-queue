import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

//insert  the React component tree into the DOM allowing us to render react elements to the DOM.
// create the container, targeting the div id "root" in index.
// then we pass that into ReactDOM to create the root DOM node inside of that div for react to render components to
const root = ReactDOM.createRoot(document.getElementById('root'));
// here we actually insert react components into the dom. we must pass in a single element (eg <h1>'hello world!'</h1>)
// we've nested our <app> element wrapped in <strictmode> to perform additional checks 
root.render(
  <React.StrictMode>
    {/* this is the parent component of our application, containing all the code printing to the DOM */}
    <App />
  </React.StrictMode>
);

//this is functionally the same thing, just broken out differently:
// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
