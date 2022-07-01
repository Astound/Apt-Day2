import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Student from './Pages/Students/Student';
function App() {
  return (
    <div className="App">
      <Router>     
          <Routes>
          <Route exact path="/" element={<Student/>}/>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
