import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home /> } />
        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App
