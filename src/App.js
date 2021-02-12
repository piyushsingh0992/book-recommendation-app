
import React,{useState} from 'react';

import './App.css';

function App() {
  var fiction = [
    "The Lord of the Rings",
    "Harry Potter and the Philosopher's Stone",
    "Sita - Warrior of Mithila"
  ];
  var selfHelp = [
    "How to Win Friends and Influence People",
    "The Subtle Art of Not Giving a Fuck",
    "The Secret (book)"
  ];
  var finance = [
    "The Intelligent Investor",
    "The Millionaire Next Door",
    "Think and Grow Rich"
  ];
  var marketing = [
    "Contagious: Why Things Catch On",
    "Hooked: How to Build Habit-Forming Products",
    "Made to Stick"
  ];

  var [listitem, listitemhandler] = useState("");

  function clickHandler(event) {
    var userInput = event.target.innerText;


    switch (userInput) {
      case "fiction":
        listitemhandler(
          fiction.map((item) => {
            return <li>{item}</li>;
          })
        );
        break;
      case "self Help":
        listitemhandler(
          selfHelp.map((item) => {
            return <li>{item}</li>;
          })
        );
        break;
      case "finance":
        listitemhandler(
          finance.map((item) => {
            return <li>{item}</li>;
          })
        );
        break;
      case "marketing":
        listitemhandler(
          marketing.map((item) => {
            return <li>{item}</li>;
          })
        );
        break;
      default:
        break;
    }
  }
  return (
    <div className="app">
      <h1>📚 Goodbooks</h1>
      <p>Checkout my favorite books. Select a genre to get started</p>
      <hr/>
      <button onClick={clickHandler}>fiction</button>
      <button onClick={clickHandler}>self Help</button>
      <button onClick={clickHandler}>finance</button>
      <button onClick={clickHandler}>marketing</button>
      <ul>{listitem}</ul>
    </div>
  );
}

export default App;
