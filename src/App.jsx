import logo from './logo.svg';
import './App.css';
import Calendar from './Calendar/Calendar.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        < Calendar />
      </body>
    </div>
  );
}

export default App;
