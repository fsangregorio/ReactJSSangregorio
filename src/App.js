import './App.css';
import './components/NavBar.jsx'
import './components/Tienda.jsx'
import './components/Footer.jsx'
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import Tienda from './components/Tienda.jsx';
import Footer from './components/Footer.jsx';
import ItemCount from './components/ItemCount.jsx';
import Items from './components/Items.jsx';

function App() {
  const saludo = 'Bienvenido/a a la Aplicación Web de Vizzentino Picadas.'
  function onAdd() {alert('El producto fue agregado correctamente.')}

  return (
    <>
      <NavBar/>
      <ItemListContainer saludo = {saludo}/>
      <Tienda/>
      <ItemCount stock= {'20'} initial= {'1'} onAdd= {onAdd}/>
      <br/>
      <Items/>
      <Footer/>
    </>
  );
}

export default App;
