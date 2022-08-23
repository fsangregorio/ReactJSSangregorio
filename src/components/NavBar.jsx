import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo1 from '../logo1.jpg';
import CartWidget from '../components/CartWidget.jsx';


function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
            <img src={logo1} alt="Logo" width = '10%'/>
          <Nav className="me-auto">
            <Nav.Link href="#Inicio">Inicio</Nav.Link>
            <Nav.Link href="#Productos">Productos</Nav.Link>
            <Nav.Link href="#Galeria">Galeria</Nav.Link>
            <Nav.Link href="#Sobre Nosotros">Sobre Nosotros</Nav.Link>
            <Nav.Link href="#Contacto">Contacto</Nav.Link>
            <Nav.Link href="#Tienda">Tienda</Nav.Link>
            <div>
              <CartWidget/>
            </div>
          </Nav>
        </Container>
      </Navbar> 
    </>
);
}
export default NavBar;