import React, { useState } from "react";
import { Container, Row, Col, Card, Carousel, Modal, Button } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import Vr1 from "../assets/img/proyectos/Vr1_img.png";
import Vr2 from "../assets/img/proyectos/Vr2_img.png";
import Vr3 from "../assets/img/proyectos/Vr3_img.png";
import Terror1 from "../assets/img/proyectos/Terror1_img.png";
import Terror2 from "../assets/img/proyectos/Terror2_img.png";
import Terror3 from "../assets/img/proyectos/Terror3_img.png";
import Cal1 from "../assets/img/proyectos/Cal1_img.png";
import Cal2 from "../assets/img/proyectos/Cal2_img.png";
import Cal3 from "../assets/img/proyectos/Cal3_img.png";
import Laravel1 from "../assets/img/proyectos/Laravel1_img.png";
import Laravel2 from "../assets/img/proyectos/Laravel2_img.png";
import Laravel3 from "../assets/img/proyectos/Laravel3_img.png";
import Soporte1 from "../assets/img/proyectos/Soporte1_img.png";
import Soporte2 from "../assets/img/proyectos/Soporte2_img.png";
import Soporte3 from "../assets/img/proyectos/Soporte3_img.png";
import git from "../assets/img/github_icon.png";
import 'animate.css';

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleShowModal = (images, index) => {
    setSelectedImages(images);
    setActiveIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const projects = [
    {
      title: "Juegos tradicionales en VR",
      subtitle: "Unity - VR",
      description: "Juegos tradicionales ecuatorianos recreados en Unity VR, diseñados para preservar y compartir experiencias culturales a través de la realidad virtual. Trabajo en conjunto con el Gad de Latacunga.",
      images: [Vr1, Vr2, Vr3],
      link: "https://github.com/Edriplx/GamesTraEcu",
    },
    {
      title: "Juego de terror",
      subtitle: "Unity",
      description: "Juego de terror desarrollado en Unity para una expoferia, con eventos dinámicos que se desencadenan a medida que el jugador avanza en la historia.",
      images: [Terror1, Terror2, Terror3],
      link: "https://github.com/Edriplx/TerrorGame",
    },
    {
      title: "Calculadora MRU",
      subtitle: "React",
      description: "Proyecto en React diseñado para ayudar a los estudiantes a calcular resultados relacionados con el Movimiento Rectilíneo Uniforme (MRU), proporcionando también información educativa sobre este concepto físico.",
      images: [Cal1, Cal2, Cal3],
      link: "https://github.com/Edriplx/CalculadoraMRU",
    },
    {
      title: "GamerFest",
      subtitle: "Laravel - Tailwind - Jetstream - MySql - AdminLTE",
      description: "Proyecto desarrollado en Laravel para facilitar a los organizadores del Gamerfest una gestión eficiente de la información, incluyendo formularios dinámicos para el registro de juegos y jugadores.",
      images: [Laravel1, Laravel2, Laravel3],
      link: "https://github.com/Edriplx/GamerFest",
    },
    {
      title: "Información UAR ESPE",
      subtitle: "HTML - JavaScript - CSS",
      description: "Proyecto desarrollado para apoyar a los estudiantes de la ESPE en su proceso de titulación. A través de una interfaz amigable ayuda a los estudiantes a conocer los requisitos necesarios para completar su carrera.",
      images: [Soporte1, Soporte2, Soporte3],
      link: "https://github.com/Edriplx/ProyectUAR",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row className="justify-content-center">
          <h2>Proyectos</h2>
          {projects.map((project, projectIndex) => (
            <Col key={projectIndex} md={4} className="d-flex justify-content-center mb-4">
              <Card style={{ width: '30rem' }}>
                <Carousel>
                  {project.images.map((image, imgIndex) => (
                    <Carousel.Item key={imgIndex}>
                      <img className="d-block w-100" src={image} alt={`Slide ${imgIndex + 1} for ${project.title}`} 
                      style={{ cursor: "pointer" }} onClick={() => handleShowModal(project.images, imgIndex)} />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Subtitle className="card-subtitle mb-2">{project.subtitle}</Card.Subtitle>
                  <Card.Text>{project.description}</Card.Text>
                  <Card.Link href={project.link}  target="_blank" rel="noopener noreferrer">
                  <img 
                    src={git} 
                    alt="Ver Proyecto" 
                    style={{ width: '40px', height: '40px', marginRight: '8px' }}/>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <Col>
            <img className="background-image-right" src={colorSharp2} alt="Background" />
          </Col>
        </Row>
      </Container>

      {/* Modal with Carousel */}
      <Modal show={showModal} onHide={handleCloseModal} size="xl" centered>
        <Modal.Body>
          <Carousel activeIndex={activeIndex} onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}>
            {selectedImages.map((image, imgIndex) => (
              <Carousel.Item key={imgIndex}>
                <img className="d-block w-100" src={image} alt={`Slide ${imgIndex + 1}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </section>
  );
};
