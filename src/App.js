import './App.css';
import { Routes, Route } from "react-router-dom"
import CustomHeader from './components/header/header.compponent';
import HomePage from './pages/home.page';

function App() {
  return (
    <div className="App">
      <CustomHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<div>No Match</div>} />
      </Routes>
    </div>
  );
}

export default App;
