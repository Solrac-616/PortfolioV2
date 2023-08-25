import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';


const Banner = () => {
  const [angle, setAngle] = useState(0);
  const [type, setType] = useState(true);

  return (
    <section id="bannerHome" className="banner-home">
      <div className="row-default-v1">
        <div className='banner-content'>
          <p className='greeting font-montserrat'>Hi!! this is my</p>
          <h2 className='font-raleway'>PORTFOLIO</h2>
          <div className="typed-banner font-montserrat">
            <p>I&apos;m Carlos Brito</p>
            <TypeAnimation
              sequence={[
                () => {
                  setAngle(0);
                },
                "Full-Stack Developer",
                1500,
                "How can we do?",
                1000,
                () => {
                  setType(true);
                  setAngle(90);
                },
                "How can we do? React",
                1000,
                "How can we do? React - MERN?",
                1000,
                () => {
                  setAngle(180);
                },
                "How can we do? Angular",
                1000,
                "How can we do? Angular + Node?",
                1000,
                () => {
                  setAngle(270);
                },
                "How can we do? Next??",
                1000,
                "Alright",
                1000,
                () => {
                },
                "Alright let's do it",
                1000,
                () => {
                  setAngle(360);
                },
                "",
                2000,
                () => {
                  setType(false);
                },
              ]}
              wrapper="span"
              speed={200}
              deletionSpeed={150}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
      <div className="banner-inset">

      </div>
      <div className="profession-container">
        <div className={`profession-box font-raleway ${type && "circle-transitions" } `}
        style={{
          transform: `rotate(-${angle}deg)`,
        }}
        >
          <div className="profession">
            <i className="fa-solid fa-laptop-code"></i>
            <h3>Full-Stack Developer</h3>
          </div>
          <div className="profession">
            <i className="fa-brands fa-js"></i>
            <h3>Next</h3>
          </div>
          <div className="profession">
            <i className="fa-brands fa-angular"></i>
            <h3>Angular</h3>
          </div>
          <div className="profession">
            <i className="fa-brands fa-react"></i>
            <h3>React</h3>
          </div>
          <div className="circle">

          </div>
        </div>
        <div className="overlay">
          <div className="figure"></div>
        </div>
      </div>
    </section>
  )
}

export default Banner