import { useState } from "react";
import Images from "../../assets";
import BackImage from "../../components/BackImage"
import SocialsBtn from "../../components/SocialsBtn"
import NavObserver from "../../components/NavObserver";

const Socials = () => {
  const [backShow, setBackshow] = useState("");

  const resetShow = () => {
    setBackshow("")
  }

  const handleBack = (select) => {
    setBackshow(select)
  }

  return (
    <section id="socials" className="section-test section-socials" onMouseLeave={resetShow}>
      <BackImage img={Images.whatsapp} show={backShow === "whatsapp"} />
      <BackImage img={Images.linkedin} show={backShow === "linkedin"} />
      <BackImage img={Images.github1} show={backShow === "github"} />
      <BackImage img={Images.gmail} show={backShow === "gmail"} />
      <NavObserver name="socials" config={0.4}>
        <SocialsBtn 
          reset={resetShow}
          showWhatsapp={() => handleBack("whatsapp")}
          showLinkedin={() => handleBack("linkedin")}
          showGithub={() => handleBack("github")}
          showGmail={() => handleBack("gmail")}
        />
      </NavObserver>
    </section>
  )
}

export default Socials