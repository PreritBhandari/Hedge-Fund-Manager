import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CustomHeader from './components/header/index.component';
import HomePage from './pages/home.page';
import ExchangePage from './pages/exchanges.page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/exchange" element={<ExchangePage />} />
          <Route path="*" element={<div>No Match</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
