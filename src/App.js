import './App.css';
import './components/NavBar.jsx'
import './components/Tienda.jsx'
import './components/Footer.jsx'
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import Tienda from './components/Tienda.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const saludo = 'Bienvenido/a a la Aplicación Web de Vizzentino Picadas.'

  return (
    <>
      <NavBar/>
      <ItemListContainer saludo = {saludo}/>
      <Tienda/>
      <Footer/>
    </>
  );
}

export default App;
