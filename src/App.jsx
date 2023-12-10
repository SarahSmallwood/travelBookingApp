import {Route, Routes} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import PhotoGallery from './pages/PhotoGallery';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurTrips from './pages/OurTrips';


function App() {
  return (
    
      
    <div className="App">
      <NavBar />
      
      <Routes>
        <Route path="/Home" element={<Home/>} /> 
        <Route path="OurTrips" element={<OurTrips/>} />    
        <Route path="/AboutUs" element={<AboutUs/>} /> 
        <Route path="/PhotoGallery" element={<PhotoGallery/>} />

      </Routes>
      
    </div>
  
  );
}

export default App;
