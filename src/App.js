
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Router, Routes, Route } from "react-router-dom";
import Inicio from "./componentes/inicio";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
