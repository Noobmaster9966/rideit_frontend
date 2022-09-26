// import logo from './logo.svg';
import './App.css';
import FormText from './components/formtext';
import Maps from './components/maps';
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Navbar from './components/navbar';
import Navbar1 from './components/navbar1';
// import { useJsApiLoader } from '@react-google-maps/api';

function App() {
  return (
    <div className='bgforapp'>
      {/* <img src="./j.jpg" alt="" /> */}
      <Navbar1/>
       <Navbar />
       <FormText/>
       <Maps />
    </div>
  );
  
}

export default App;
