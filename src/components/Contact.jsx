import { Container, Row, Col, Card } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  return (
    <>
      {/* Sección de Contacto */}
      <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            {/* Imagen a la izquierda */}
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <img
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                    src={contactImg}
                    alt="Contact Us"
                  />
                )}
              </TrackVisibility>
            </Col>

            {/* Cards con información estática a la derecha */}
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    {/* Contenedor para título y tarjetas */}
                    <div className="cards-container">
                      <h2 className="contact-title">Datos de contacto</h2>
                      <Card className="text-center my-3 transparent-card">
                        <Card.Body>
                          <Card.Title>Teléfono</Card.Title>
                          <Card.Text>+593 098 458 3242</Card.Text>
                        </Card.Body>
                      </Card>
                      <Card className="text-center my-3 transparent-card">
                        <Card.Body>
                          <Card.Title>Correo electrónico</Card.Title>
                          <Card.Text>edripl31@gmail.com</Card.Text>
                        </Card.Body>
                      </Card>
                      <Card className="text-center my-3 transparent-card">
                        <Card.Body>
                          <Card.Title>Dirección</Card.Title>
                          <Card.Text>Latacunga - Ecuador</Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
