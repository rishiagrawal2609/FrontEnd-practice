import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GitHub from './github';
let element = document.getElementById("root")
const root = ReactDOM.createRoot(element);

let reactelement = React.createElement('h1',null,'Hello World from skillsash')//this can get tedious
root.render(
//<h1>Hello World</h1> //this is JSX ,shorthand notation
//reactelement
//<Header />
//<App />
<GitHub/>
);


function Header(){
  return (
    //<h1>Hello World from function</h1>
    <div>
      <h1> Hello from Function</h1>
      <p> Best place to learn coding</p>
    </div>
  )
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
