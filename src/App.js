import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Instructor from './Pages/Instructor/Instructor';
import Student from './Pages/Student/Student';
function App() {
  return (
    <div className="App">
      <Router>     
          <Routes>
          <Route exact path="/" element={<Instructor/>}/>
          <Route exact path="/stu" element={<Student/>}/>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
