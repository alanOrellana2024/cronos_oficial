import logo from './logo.svg';
import './App.css';
 
function App() {
  return (
    <div className="App">
      
      <header className="App-header">
    
        <img src={`${process.env.PUBLIC_URL}/logo CRONOS2.2.2.00.png`} className="App-logo" alt="logo" />
      
        <button type="button" class="btn my-first-btn btn-lg" onclick="window.location.href=''">Empezar</button>

      </header>
    </div>
  );
}

export default App;

