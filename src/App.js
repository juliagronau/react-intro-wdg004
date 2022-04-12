import './App.css';
import Hallo from './components/Hallo';

export default function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hallo WDG#004</h1>
        <Hallo name="Philipp"/>
        <Hallo name="Ivana"/>
        <Hallo name="Noro"/>
        <Hallo name="Rainer"/>
      </header>
    </div>
  );
}


