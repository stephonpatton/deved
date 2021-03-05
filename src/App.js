import logo from './logo.svg';
import './App.css';
import Tweet from './components/Tweet';
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";
import React, {useState} from "react";

function App() {

    const [textInput, setTextInput] = useState("");
    const [tweets, setTweets] = useState([]);

    const message = "I went to sleep today";
    const time = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
        + "\n" + new Date().toDateString();
    const textStyle = {color: 'red', fontSize: 20};
    const [name, setName] = useState("Stephon ");
    const sayHelloHandler = (user) => {
        if(name !== "JON JONES BONES") {
            setName("JON JONES BONES");
        } else {
            setName("Stephon Patton");
        }
        // alert(`Hello ${user}`);
    }

    const secondName = "Dev Ed";
    return (

    <div className="App">
      <header className="App-header">
          <CreateTweet textInput = {textInput} setTextInput={setTextInput} tweets ={tweets} setTweets={setTweets}/>
          <Tweet name={name} message = {message}/>
          <button onClick={() => setName("JOHN JONSSSSS")}></button>
          <h1 style={textStyle}>{time}</h1>
          <h1>Hello {name}</h1>
          {/*//Callback with () => in order to not invoke immediately*/}
          <button onClick={() => sayHelloHandler("Stephon")}>
              CLICK THIS
          </button>
          <TweetList name={name} tweets={tweets} setTweets={setTweets}/>
      </header>

    </div>
  );
}

export default App;
