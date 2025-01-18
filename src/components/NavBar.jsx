import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import linkedin from "../assets/img/linkedin_icon.png";
import github from "../assets/img/github_icon.png";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Inicio
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Destrezas
            </Nav.Link>
            <Nav.Link
              href="#technologies"
              className={
                activeLink === "technologies" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("technologies")}
            >
              Tecnologías
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Proyectos
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://linkedin.com/in/edri-villagrán-98a747340">
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a href="https://github.com/Edriplx">
                <img src={github} alt="GitHub" />
              </a>
            </div>
            <button className="vvd" onClick={() => onUpdateActiveLink("connect")}>
              <a href="#connect" style={{ textDecoration: "none", color: "inherit" }}>
                <span>Contáctame</span>
              </a>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
