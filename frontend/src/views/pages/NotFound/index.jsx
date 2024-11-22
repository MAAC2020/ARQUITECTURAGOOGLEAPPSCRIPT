import { Container, Row, Col, Button } from "react-bootstrap"; // Importamos componentes de Bootstrap
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para redirigir

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // Redirige a la ruta principal
  };

  return (
    <>
      <Container
        fluid
        className="vh-100 d-flex justify-content-center align-items-center"
      >
        <Row className="text-center">
          <Col>
            <div className="error-page">
              <h1 className="display-1 text-danger">404</h1>
              <h2 className="mb-4">Página no encontrada</h2>
              <p className="lead mb-4">
                Lo sentimos, la página que estás buscando no existe.
              </p>
              <Button variant="primary" onClick={handleGoHome} className="mt-3">
                Regresar al Inicio
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NotFound;
