import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import JS from '../assets/img/technology/JS.png'
import html from '../assets/img/technology/html.svg'
import react from '../assets/img/technology/react.svg'
import redux from '../assets/img/technology/redux.svg'
import router from '../assets/img/technology/router.svg'
import git from '../assets/img/technology/git.svg'
import github from '../assets/img/technology/github.svg'
import bootstrap from '../assets/img/technology/bootstrap.svg'
import node from '../assets/img/technology/nodejs.png'
import express from '../assets/img/technology/express.png'
import colorSharp from "../assets/img/color-sharp.png"
import '../styles/skills-style.css'
import 'animate.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">


              <h3 className='sub-title'> Resumen Académico </h3>
              <div className="animate__animated animate__fadeIn">
                <span className="tagline">Bienvenido a mi Portfolio</span>
              </div>

              <ul>
                <li>
                  <h4 className='title-h4'>
                    <span className='point-span'>📌</span>
                    <a href="https://certificates.academlo.com/en/verify/39296980516484" target={'_blank'}>
                      Desarrollador WEB FULL STACK
                    </a>
                  </h4>
                  <p>Institución: <b> ACADEMLO </b></p>
                </li>

                <li>
                  <h4 className='title-h4'><span className='point-span'> 📌</span> <a href="https://certificates.academlo.com/en/verify/28934805167606" target={'_blank'}>   Desarrollador BACK END</a></h4>
                  <p>Institución: <b> ACADEMLO </b> </p>
                </li>

                <li>
                  <h4 className='title-h4'><span className='point-span'> 📌</span><a href="https://certificates.academlo.com/en/verify/32616498903202" target={'_blank'}> Desarrollador FRONT END</a></h4>
                  <p>Institución: <b> ACADEMLO </b></p>
                </li>

                <li>
                  <h4 className='title-h4'><span className='point-span'>📌 </span> <a href="https://certificates.academlo.com/en/verify/87979266497188" target={'_blank'}>Fundamento en HTML, CSS and JavaScript</a></h4>
                  <p>Institución: <b> ACADEMLO </b></p>
                </li>

                <li>
                  <h4 className='title-h4'><span className='point-span'>📌 </span> <a>Profesorado para Técnicos en Base al Título de Procedencia <br /> (en proceso) </a> </h4>
                  <p>Institución: <b> IES 9-007 </b></p>
                </li>

              </ul>




              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">

                <div className="item">
                  <div className='card js'>
                    <div className='cor__cobertura'></div>
                    <div className='circulo'>
                      <img
                        src={JS}
                        alt={"JS"}
                      />
                    </div>
                    <h5>Java Script</h5>
                  </div>
                </div>

                <div className="item">
                  <div href="" className='card html'>
                    <div className='cor__cobertura'></div>
                    <div className='circulo'>
                      <img src={html} alt="" />
                    </div>
                    <h5>HTML 5</h5>
                  </div>
                </div>

                <div className="item">
                  <div href="" className='card css'>
                    <div className='cor__cobertura'></div>
                    <div className='circulo'>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png" alt="" />
                    </div>
                    <h5>CSS</h5>
                  </div>
                </div>

                <div className="item">
                  <div href="" className='card react'>
                    <div className='cor__cobertura'></div>
                    <div className='circulo'>
                      <img src={react} alt="" />
                    </div>
                    <h5>React</h5>
                  </div>
                </div>

                <div className="item">
                  <div href="" className='card redux'>
                    <div className='cor__cobertura'></div>
                    <div className='circulo'>
                      <img src={redux} alt="" />
                    </div>
                    <h5>Redux</h5>
                  </div>
                </div>

                <div className="item">
                  <div href="" className='card router'>
                    <div className='cor__cobertura'></div>
                    <div className='circulo'>
                      <img src={router} alt="" />
                    </div>
                    <h5>Router</h5>
                  </div>
                </div>

                <div className="item">
                  <div href="" className='card git'>
                    <div className='cor__cobertura'></div>
                    <div className='circulo'>
                      <img src={git} alt="" />
                    </div>
                    <h5>Git</h5>
                  </div>
                </div>

                <div className="item">
                  <div href="" className='card bs'>
                    <div className='cor__cobertura'></div>
                    <div className='circulo'>
                      <img src={bootstrap} alt="" />
                    </div>
                    <h5>BootStrap</h5>
                  </div>
                </div>

                <div className="item">
                  <div href="" className='card github'>
                    <div className='cor__cobertura'></div>
                    <div className='circulo'>
                      <img src={github} alt="" />
                    </div>
                    <h5>Git Hub</h5>
                  </div>
                </div>

                <div className="item">
                  <div href="" className='card node'>
                    <div className='cor__cobertura'></div>
                    <div className='circulo'>
                      <img src={node} alt="" />
                    </div>
                    <h5>Node JS</h5>
                  </div>
                </div>

                <div className="item">
                  <div href="" className='card express'>
                    <div className='cor__cobertura'></div>
                    <div className='circulo'>
                      <img src={express} alt="" />
                    </div>
                    <h5>Express JS</h5>
                  </div>
                </div>

              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
