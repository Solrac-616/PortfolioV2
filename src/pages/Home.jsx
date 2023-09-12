import "../Home.css"

import Banner from "../sections/Home/Banner"
import About from "../sections/Home/About"
import Skills from "../sections/Home/Skills"
import Projects from "../sections/Home/Projects"
import Footer from "../sections/Footer"

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}

export default Home