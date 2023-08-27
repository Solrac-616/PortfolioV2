import Images from "../../assets";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="row-default-v1 font-raleway about-head">
        <h2>ABOUT</h2>
      </div>
      <div className="row-default-v1 about-content">
        <div className="about-picture">
          <img src={Images.pictureA} alt="Developer" className="picture-a" /> 
          <img src={Images.pictureB} alt="Developer" className="picture-b" />
        </div>
        <div className="about-resume font-montserrat">
          <p>
            Venezuelan graduated with a mention in Electronic Technology, with more than 2 years of professional work experience developing Frontend and Backend projects using Wordpress, Divi, Elementor, React, Next, NodeJs, Github, MySql, MongoSB, Tailwind, Bootstrap and Laravel. Expert of HTML, CSS and Javascript, outstanding in PHP, Typescript, C++ and assembler. Experienced in projects such as Frontend layout, Api RESTful, Ecommerce and online learning.
          </p>
          <p>
            My outstanding soft skills are: self-development, negotiation, attention to detail, listening skills, composure, teamwork, self-awareness, creativity, conflict management, customer orientation, perseverance, problem solving, and analytical-critical thinking.
          </p>
          
        </div>
      </div>
    </section>
  )
}

export default About