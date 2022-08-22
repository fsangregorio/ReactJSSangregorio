import './App.css';
import './components/NavBar.jsx'
import './components/Tienda.jsx'
import './components/Footer.jsx'
import NavBar from './components/NavBar.jsx';
import Tienda from './components/Tienda.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <NavBar/>
      <Tienda/>
      <Footer/>
    </>
  );
}

export default App;
