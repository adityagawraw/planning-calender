
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Planning from './pages/Planning/Planning';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Planning/>}/>
      </Routes>
    </div>
  );
}

export default App;
