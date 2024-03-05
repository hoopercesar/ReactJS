import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

function Ofertas() {
    return (
      <div>
        <h2>Ofertas del día</h2>
        <Navbar sticky="top" />
        <p>
            Aquí se incluyen los productos que se pongan en oferta por el día. 
        </p>
        <Button variant="success">Success</Button>{' '}
        

      </div>
    );
  }
  
  export default Ofertas;