import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from 'emailjs-com';

export const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    /* emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY') */
    emailjs.sendForm('service_dhku58c', 'template_qgdzvvh', form.current, 'C1Rz2JHdiGLYzvsGG')

      .then(() => {
        alert('Your email was sent successfully! ')
      }, (error) => {
        alert(error.text);
      });
  };

  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Enviando...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully' });
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Contáctame</h2>
                  <form onSubmit={sendEmail} ref={form}>
                    <Row>

                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="user_name" placeholder="Nombre" />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input type="email" name="user_email" placeholder="Email" />
                      </Col>

                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Mensaje" ></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {/* {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      } */}
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
