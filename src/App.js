import Home from './pages/home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Kasa/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;