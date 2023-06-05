import React from 'react';
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import Naslovna from './Components/Naslovna';
import Tecajevi from './Components/Tecajevi';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Statistika from './Components/Statistika';

function App() {
  return (
    
      <div className='App'>
        
        
        
      
        <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Naslovna />} />
          <Route path="/tecajevi" element={<Tecajevi />} />
          <Route path="/statistika" element={<Statistika />} />
        </Routes>
        <Footer/>
        </Router>

        
      </div>
    
  );
}

export default App;