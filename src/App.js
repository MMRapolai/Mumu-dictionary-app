import './App.css';
import Dictionary from "./Dictionary"

function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header"> 
      </header>
      <main>
        <Dictionary defaultKeyword="sunset"/>
      </main>
      <footer className='text-center'>
        Coded by<a href='https://github.com/MMRapolai' target='_blank' rel='noreferrer'> Matshelane Rapolai</a> and is <a href='https://github.com/MMRapolai/Mumu-dictionary-app' target='_blank' rel='noreferrer'>open-sourced on GitHub</a> and hosted on <a href='https://muriel-dictionary-app.netlify.app/' target='_blank' rel='noreferrer'>Netlify</a>
      </footer>
      </div>
    </div>
  );
}

export default App;
