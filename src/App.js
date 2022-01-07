
import './App.css';
import { WordCount} from './components/counter';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Counter" element={
         <WordCount />
        } />
      </Routes>
    </Router>
  );
}

export default App;
