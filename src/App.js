import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Student from './Pages/Students/Student';
import Instructor from './Pages/Instructor/Instructor';
function App() {
  return (
    <div className="App">
      <Router>     
          <Routes>
          <Route exact path="/" element={<Student/>}/>
          <Route exact path="/ins" element={<Instructor/>}/>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
