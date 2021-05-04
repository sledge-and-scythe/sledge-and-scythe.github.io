import './App.css';
import genColors from './colors.js';
import Gradient from './Gradient.js';
import Nav from './Nav.js';

function App() {

  let colors = genColors();

  return (
    <div className="App">
      <Gradient colors={colors} />
      <Nav colors={colors} />
      <header className="App-header">HEYA HIYA HEY</header>
    </div>
  );
}

export default App;
