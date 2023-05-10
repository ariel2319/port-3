import { Container, Row, Col, Navbar } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-linkedin.svg";
import navIcon2 from "../assets/img/nav-github.svg";
import navIcon3 from "../assets/img/nav-card.svg";
import Logo from '../components/Logo'
import '../styles/logo.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>

            <Navbar.Brand href="/">
              <div className="logo_footer">
                <Logo />
              </div>
            </Navbar.Brand>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ariel-alejandro-maldonado-68276224b/" target={'_blank'}><img src={navIcon1} alt="Icon" className="logo2" /></a>
              <a href="https://github.com/ariel2319" target={'_blank'}> <img src={navIcon2} alt="Icon" className="logo2" /></a>
              <a href='../../public/CV - Maldonado Ariel aam.pdf' target={'_blank'} download  ><img src={navIcon3} alt="Icon" className="logo2" /></a>
            </div>
            <p>Copyright 2023. Los derechos reservados</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
