import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';

const FormularioPago = () => {
    const { Formik } = formik;

    const schema = yup.object().shape({
      nombre: yup.string().required(),
      apellido: yup.string().required(),
      username: yup.string().required(),
      ciudad: yup.string().required(),
      region: yup.string().required(),
      terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
    });
  
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
          file: null,
          terms: false,
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
                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
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
  
                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
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
  
                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
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
                    isInvalid={!!errors.direccion}
                    />  
                    <Form.Control.Feedback type="invalid" tooltip>
                    {errors.direccion}
                    </Form.Control.Feedback>
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
                    <Form.Control.Feedback type="invalid" tooltip>
                    {errors.numero}
                    </Form.Control.Feedback>
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
                    <Form.Control.Feedback type="invalid" tooltip>
                    {errors.telefono}
                    </Form.Control.Feedback>
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
  
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.ciudad}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="3"
                controlId="validationFormik104"
                className="position-relative"
              >
                <Form.Label>Region</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="region"
                  name="region"
                  value={values.region}
                  onChange={handleChange}
                  isInvalid={!!errors.region}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.region}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="3"
                controlId="validationFormik105"
                className="position-relative"
              >
  
              </Form.Group>
            </Row>

            <Form.Group className="position-relative mb-3">
              <Form.Check
                required
                name="terms"
                label="Agree to terms and conditions"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                feedbackType="invalid"
                id="validationFormik106"
                feedbackTooltip
              />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        )}
      </Formik>
      </>
    );
  
}

export default FormularioPago