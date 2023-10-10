import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import Content from './component/wrapper/Content';
import Accueil from './component/accueil/Accueil';
import MyCars from './component/MyCars';
import MyModal from './component/MyModal';
import Childcss from './component/Childcss';
import NavBar from './component/NavBar';
import Connexion from './component/pages/connexion';
import Inscription from './component/pages/inscription';
import Footer from './component/Footer';
import Gallery from './component/pages/Gallery';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Accueil />}/>
        <Route path="/cars" element={<MyCars title="Calatogue" />}/>
        <Route path="/modal" element={<MyModal />}/>
        <Route path="/css" element={<Childcss />}/>
        <Route path="/connexion" element={<Connexion />}/>
        <Route path="/inscription" element={<Inscription />}/>
        <Route path="/gallery" element={<Gallery />}/>
        {/* <Route path="/" element={<Content title="toto" />}/> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
