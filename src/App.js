
import './App.css';
import Display from './Components/Display';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/display/:pinCode" element={<Display />}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
