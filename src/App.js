import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from './pages/Start';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import GameOver from './pages/GameOver';

function App() {
  return (
    <>

      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Start />} />;
            <Route exact path='/about' element={<About />} />;
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/gameover' element={<GameOver />} />;
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
