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
      <Routes>
        <Route path='/madrid1' Component={Cmadrid}/>
        <Route path='/madrid2' Component={Cmadrid2}/>
        <Route path='/madrid3' Component={Cmadrid3}/>
        <Route path='/madrid4' Component={Cmadrid4}/>
        <Route path='/madrid5' Component={Cmadrid5}/>
        <Route path='/madrid6' Component={Cmadrid6}/>
        <Route path='/madrid7' Component={Cmadrid7}/>
        <Route path='/madrid8' Component={Cmadrid8}/>
        <Route path='/madrid9' Component={Cmadrid9}/>
        <Route path='/madrid10' Component={Cmadrid10}/>
      </Routes>
      <Navigation />
    </Router>

  );
}

export default App;
