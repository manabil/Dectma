import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";

export const Navigation = () => {
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
    <Router>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#Home">Dectma</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
                <i className="ri-home-4-line"></i>
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={
                  activeLink === "about" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("about")}
              >
                About
                <i className="ri-eject-line"></i>
              </Nav.Link>
              <Nav.Link
                href="#features"
                className={
                  activeLink === "features"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("features")}
              >
                Features
                <i className="ri-settings-3-line"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
