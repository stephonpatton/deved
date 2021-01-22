import logo from './logo.svg';
import './App.css';

function App() {
    const time = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
        + "\n" + new Date().toDateString();
    const textStyle = {color: 'red', fontSize: 20};
    const alertHandler = () => {
        alert('Hello');
    }
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <h1 style={textStyle}>{time}</h1>
          <button onClick={alertHandler}>
              CLICK THIS
          </button>
      </header>

    </div>
  );
}

const sayHello = (name) => {
  console.log("Hey");
  console.log(`Hey ${name}`);
}

sayHello("Stephon");

const user = {
  name: 'Stephon',
  lastName: 'Patton',
  age: 25
};

console.log(user);
//Deconstruct
const {name, lastName, age} = user;
console.log(name,lastName, age);

const numbers = [1,2,3,4,5];
const [one, two] = numbers;
console.log(one,two);

const users = [
    { name: "Stephon", age: 25},
    { name: "Khalil", age: 24},
    { name: "Led Zepp", age: 21}
]

//Map and Filter
const modifiedUser = users.map((user) => user.age);
console.log(modifiedUser);

export default App;
