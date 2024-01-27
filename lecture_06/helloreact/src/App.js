import React from "react";

function Appold() {
  return (
    <h1> Hello from app.js</h1>
  );
}

//function is same as

function App2() {
 let element =  React.createElement('h1',null,"hello from appjs function");
  return element;
}

// function increaseCount(count,setCount){
//   setCount(count+1);
// }

function App() {

  let [count, setCount] = React.useState(0);
  let increaseCount = () => {
    setCount(count+1);
  }
  return (
    <div>
    <h1> Counter : {count}</h1>
    <button onClick={() =>increaseCount(setCount,count)}>+1</button>
    </div>
  );
}

export default App;
