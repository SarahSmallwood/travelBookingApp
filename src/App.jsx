import {Route, Routes} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import PhotoGallery from './pages/PhotoGallery'


function App() {
  return (
    
      
    <div className="App">
      <NavBar />

      <Routes>
        {/* <Route path="/AboutUs" element={<AboutUs/>} /> */}
        <Route path="/PhotoGallery" element={<PhotoGallery/>} />

      </Routes>
      
    </div>
  
  );
}

export default App;
