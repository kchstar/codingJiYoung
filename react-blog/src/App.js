import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/navbar/Navigation';
import LectureOne from './pages/lecture1/LectureOne';
import LectureTwo from './pages/lecture1/LectureTwo';
function App() {
  return (
    <div className="App">
     <Router>
      <Navigation />
      <Routes>
        <Route path="/" element ={<HomePage />} />
        <Route path='/lectureOne' element={<LectureOne />} />
        <Route path='/lectureTwo' element={<LectureTwo />} />
      </Routes>
     </Router>  
    </div>
  );
}

export default App;
