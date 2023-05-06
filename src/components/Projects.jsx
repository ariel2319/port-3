import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projects/ecommerceReact.webp";
import projImg2 from "../assets/img/projects/box shadow.webp";
import projImg3 from "../assets/img/projects/pokemon.webp";
import projImg4 from "../assets/img/projects/weather.webp";
import projImg5 from "../assets/img/projects/101.webp";
import projImg6 from "../assets/img/projects/ecommerceJS.webp";
import projImg7 from "../assets/img/projects/rick and morty.webp";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "E-Commerce React",
      description: "Design & Development",
      imgUrl: projImg1,
      "url": "https://e6-e-commerce-maldonadoaa.netlify.app/"
    },
    {
      title: "Rick & Morty DEX",
      description: "Design & Development",
      imgUrl: projImg7,
      "url": "https://e3-wikirandm-arielm.netlify.app/"
    },
    {
      title: "Box Shadow Generator",
      description: "Design & Development",
      imgUrl: projImg2,
      "url": "https://maldonadoaa-boxshados-generator.netlify.app/"
    },
    {
      title: "Pokédex",
      description: "Design & Development",
      imgUrl: projImg3,
      "url": "https://e5-pokedex-maldonadoaa.netlify.app/"
    },
    {
      title: "Weather",
      description: "Design & Development",
      imgUrl: projImg4,
      "url": "https://e2-weather-arry.netlify.app/"
    },
    {
      title: "101 Quotes",
      description: "Design & Development",
      imgUrl: projImg5,
      "url": "https://e1-101inspirationalquotes-maldonado.netlify.app/"
    },
    {
      title: "E-Commerce JS",
      description: "Design & Development",
      imgUrl: projImg6,
      "url": "https://e-commerce-lapalanca-aam.netlify.app/"
    },
  ];

  return (
    <section className="project" id="project">
      <Container className="project_cont">
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Proyectos</h2>
                  <p>Aquí algunos proyectos personales, donde utilizo algunas de las tecnologías para desarrollo Web </p>
                  <Row className="center">
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
