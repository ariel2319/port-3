import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-linkedin.svg";
import navIcon2 from "../assets/img/nav-github.svg";
import navIcon3 from "../assets/img/nav-card.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ariel-alejandro-maldonado-68276224b/" target={'_blank'}><img src={navIcon1} alt="Icon" className="logo2"/></a>
              <a href="https://github.com/ariel2319" target={'_blank'}> <img src={navIcon2} alt="Icon" className="logo2"/></a>
              <a href="https://docs.google.com/document/d/12jyQJqI8lo5VqC_VeA9iFCR5ZR_zT-UM/edit?usp=sharing&ouid=112512721761573156683&rtpof=true&sd=true" target={'_blank'}><img src={navIcon3} alt="Icon" className="logo2"/></a>
            </div>
            <p>Copyright 2023. Los derechos reservados</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
