
import './App.css';
import { WordCount} from './components/counter';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <WordCount/>
  </div>
    // <Router>
    //   <Routes>
    //     <Route path="/Counter" element={
         
    //     } />
    //   </Routes>
    // </Router>
  );
}

export default App;
