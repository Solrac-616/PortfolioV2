import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const [typeState, setTypeState] = useState("start");

  return (
    <section id="bannerHome" className="banner-home">
      <div className="row-default-v1 banner-content">
        <p>Hi!! this is my</p>
        <h2>PORTFOLIO</h2>
        <div className="typed-banner">
          <p>I&apos;m Carlos Brito</p>
          <TypeAnimation
            sequence={[
              "Full-Stack Developer",
              1000,
              "How can we do?",
              1000,() => {
                setTypeState("React");
                console.log('===============STATE=============');
                console.log(typeState);
                console.log('====================================');
              },
              "How can we do? React",
              1000,
              "How can we do? React - MERN?",
              1000,() => {
                setTypeState("Angular");
                console.log('===============Rotate=============');
                console.log(typeState);
                console.log('====================================');
              },
              "How can we do? Angular",
              1000,
              "How can we do? Angular + Node?",
              1000,() => {
                setTypeState("Next");
                console.log('===============Rotate=============');
                console.log(typeState);
                console.log('====================================');
              },
              "How can we do? Next",
              1000,
              "Alright",
              1000,
              "Alright let's do it",
              1000,() => {
                setTypeState("start");
                console.log('===============Rotate=============');
                console.log(typeState);
                console.log('====================================');
              },
            ]}
            wrapper="span"
            speed={200}
            deletionSpeed={100}
            repeat={Infinity}
          />
        </div>
      </div>
      <div className="profession-container">
        <div className="profession-box font-raleway">
          <div className="profession" style={{"--i": 0}}>
            <i className="fa-solid fa-laptop-code"></i>
            <h3>Full-Stack Developer</h3>
          </div>
          <div className="profession" style={{"--i": 1}}>
            <i className="fa-brands fa-js"></i>
            <h3>Next</h3>
          </div>
          <div className="profession" style={{"--i": 2}}>
            <i className="fa-brands fa-angular"></i>
            <h3>Angular</h3>
          </div>
          <div className="profession" style={{"--i": 3}}>
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

export default Hero