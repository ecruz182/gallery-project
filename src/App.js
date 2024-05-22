import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cmadrid from './components/Cmadrid';
import Cmadrid2 from './components/Cmadrid2';
import Cmadrid3 from './components/Cmadrid3';
import Cmadrid4 from './components/Cmadrid4';
import Cmadrid5 from './components/Cmadrid5';
import Cmadrid6 from './components/Cmadrid6';
import Cmadrid7 from './components/Cmadrid7';
import Cmadrid8 from './components/Cmadrid8';
import Cmadrid9 from './components/Cmadrid9';
import Cmadrid10 from './components/Cmadrid10';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className='container'>
        <h1 id="title" className='text-center my-3'>Galería</h1>
      </div>
      <Routes>
        <Route path='/madrid1' element={<Cmadrid className="image-size" />}/>
        <Route path='/madrid2' element={<Cmadrid2 className="image-size" />}/>
        <Route path='/madrid3' element={<Cmadrid3 className="image-size" />}/>
        <Route path='/madrid4' element={<Cmadrid4 className="image-size" />}/>
        <Route path='/madrid5' element={<Cmadrid5 className="image-size" />}/>
        <Route path='/madrid6' element={<Cmadrid6 className="image-size" />}/>
        <Route path='/madrid7' element={<Cmadrid7 className="image-size" />}/>
        <Route path='/madrid8' element={<Cmadrid8 className="image-size" />}/>
        <Route path='/madrid9' element={<Cmadrid9 className="image-size" />}/>
        <Route path='/madrid10' element={<Cmadrid10 className="image-size" />}/>
      </Routes>
      <Navigation />
    </Router>

  );
}

export default App;
