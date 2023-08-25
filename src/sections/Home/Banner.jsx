import Typed from 'react-typed';

const Banner = () => {
  return (
    <section id="bannerHome" className="banner-home">
      <div className="row-default-v1 banner-content">
        <p>Hi!! this is my</p>
        <h2>PORTFOLIO</h2>
        <div className="typed-banner">
          <p>I&apos;m Carlos Brito</p>
          <Typed
              strings={["Full-Stack Developer", "How can we do?", "How can we do? React", "How can we do? React - MERN?", "How can we do? Angular", "How can we do? Angular + Node?", "How can we do? Next", "Alright", "Alright let's do it"]}
              typeSpeed={100}
              backSpeed={20}
              backDelay={1000}
              loop
              smartBackspace
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

export default Banner