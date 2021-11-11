import logo from './logo.svg';
import './App.css';

import List from './components/List'
import Agregar from './components/Agregar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p><b> Agregar </b></p>
        <Agregar />
        <p><b> Contactos </b></p>
        <List />
      </header>
    </div>
  );
}

export default App;
