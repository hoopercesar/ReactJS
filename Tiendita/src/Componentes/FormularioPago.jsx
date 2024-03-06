import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';

// context para calcular monto total
import { useContext } from "react";
import { Contexto } from "../Contextos/Contexto";

// función para calcular el monto total
function montoTotal() {
    const { carrito } = useContext(Contexto);
    let total = 0;
    if (carrito.length > 0) {
      carrito.forEach((element) => {
        // console.log(element.cantidad, element.precio);
        total += element.cantidad * element.precio;
      });
      // return total;
    }
  
    return total;
  }



const FormularioPago = () => {
    const { Formik } = formik;

    const schema = yup.object().shape({
      nombre: yup.string().required(),
      apellido: yup.string().required(),
      rut: yup.string().required(),
      direccion: yup.string().required(),
      numero: yup.string().required(),
      telefono: yup.string().required(),
      ciudad: yup.string().required(),
      region: yup.string().required(),
    });
    console.log(yup, schema)
  
    return (
     <>
     <h2>Formulario de Compra</h2>
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          nombre: '',
          apellido: '',
          rut: '',
          direccion: '',
          numero: '', 
          telefono: '', 
          ciudad: '',
          region: '',
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik101"
                className="position-relative"
              >
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  value={values.nombre}
                  onChange={handleChange}
                  isValid={touched.nombre && !errors.nombre}
                />
                
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik102"
                className="position-relative"
              >
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  name="apellido"
                  value={values.apellido}
                  onChange={handleChange}
                  isValid={touched.apellido && !errors.apellido}
                />
  
                
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik102"
                className="position-relative"
              >
                <Form.Label>Rut</Form.Label>
                <Form.Control
                  type="text"
                  name="rut"
                  value={values.rut}
                  onChange={handleChange}
                  isValid={touched.rut && !errors.rut}
                />
  
                
              </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group
                 as={Col}
                 md="6"
                 controlId="validationFormik103"
                 className="position-relative"                
                >
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Calle"
                    name="direccion"
                    value={values.direccion}
                    onChange={handleChange}
                    
                    />  

                </Form.Group>

                <Form.Group
                 as={Col}
                 md="3"
                 controlId="validationFormik103"
                 className="position-relative"                
                >
                    <Form.Label>Número</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Número"
                    name="numero"
                    value={values.numero}
                    onChange={handleChange}
                    isInvalid={!!errors.numero}
                    />  

                </Form.Group>

                <Form.Group
                 as={Col}
                 md="3"
                 controlId="validationFormik103"
                 className="position-relative"                
                >
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Teléfono"
                    name="telefono"
                    value={values.telefono}
                    onChange={handleChange}
                    isInvalid={!!errors.telefono}
                    />  

                </Form.Group>

            </Row>



            <Row className="mb-3">
              <Form.Group
                as={Col}
                md="6"
                controlId="validationFormik103"
                className="position-relative"
              >
                <Form.Label>Ciudad</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ciudad"
                  name="ciudad"
                  value={values.ciudad}
                  onChange={handleChange}
                  isInvalid={!!errors.ciudad}
                />
  

              </Form.Group>
              <Form.Group
                as={Col}
                md="3"
                controlId="validationFormik104"
                className="position-relative"
              >
                <Form.Label>Barrio o Sector</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="region"
                  name="region"
                  value={values.region}
                  onChange={handleChange}
                  isInvalid={!!errors.region}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                md="3"
                controlId="validationFormik105"
                className="position-relative"
              >
                <Form.Label>Total A Pagar</Form.Label>
                <Form.Control
                  type="text"
                  name="total"
                  value={values.total}
                  placeholder={montoTotal()}
                  
                />
  
              </Form.Group>
            </Row>

            <Button type="submit">Enviar</Button>
          </Form>
        )}
      </Formik>
      </>
    );
  
}

export default FormularioPago