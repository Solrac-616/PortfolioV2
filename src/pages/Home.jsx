import "../Home.css"

import Banner from "../sections/Home/Banner"
import About from "../sections/Home/About"
import Skills from "../sections/Home/Skills"
import Test3D from "../components/Test3D"
import Projects from "../sections/Home/Projects"

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Skills />
      <Projects />
    </>
  )
}

export default Home