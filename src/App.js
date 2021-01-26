import logo from './logo.svg';
import './App.css';
import Tweet from './components/Tweet';
import CreateTweet from "./components/CreateTweet";

function App() {
    const name = "Stephon Patton";
    const message = "I went to sleep today";
    const time = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
        + "\n" + new Date().toDateString();
    const textStyle = {color: 'red', fontSize: 20};
    const alertHandler = () => {
        alert('Hello');
    }
    return (

    <div className="App">
      <header className="App-header">
          <CreateTweet/>
          <Tweet name={name} message = {message}/>
          <h1 style={textStyle}>{time}</h1>
          <h1>{name}</h1>
          <button onClick={alertHandler}>
              CLICK THIS
          </button>
      </header>

    </div>
  );
}

export default App;
