import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
// import useCircle from '../../Hooks/useCircle';
// import Typed from 'react-typed';

const Banner = () => {
  // const { circleState, stateA, stateB, stateC, stateD} = useCircle();
  const [angle, setAngle] = useState(0);
  const [type, setType] = useState(true);

  return (
    <section id="bannerHome" className="banner-home">
      <div className="row-default-v1 banner-content">
        <p>Hi!! this is my</p>
        <h2>PORTFOLIO</h2>
        <div className="typed-banner">
          <p>I&apos;m Carlos Brito</p>
          {/* <Typed
            strings={["Full-Stack Developer", "How can we do?", "How can we do? React", "How can we do? React - MERN?", "How can we do? Angular", "How can we do? Angular + Node?", "How can we do? Next", "Alright", "Alright let's do it"]}
            typeSpeed={100}
            backSpeed={20}
            backDelay={1000}
            loop
            smartBackspace
          /> */}
          <TypeAnimation
            sequence={[
              () => {
                setAngle(0);
              },
              "Full-Stack Developer",
              1000,
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
              "How can we do? Next",
              1000,
              "Alright",
              1000,
              () => {
                setAngle(360);
              },
              "Alright let's do it",
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