import { useState } from "react";
import Images from "../../assets";
import BackImage from "../../components/BackImage"
import SocialsBtn from "../../components/SocialsBtn"

const Socials = () => {
  const [backShow, setBackshow] = useState("");

  const resetShow = () => {
    setBackshow("")
  }

  const handleWhatsapp = () => {
    setBackshow("whatsapp")
  }

  return (
    <section id="socials" className="section-test section-socials" onMouseLeave={resetShow}>
      <BackImage img={Images.whatsapp} show={backShow === "whatsapp"} />
      <SocialsBtn 
        reset={resetShow}
        showWhatsapp={handleWhatsapp}
      />
    </section>
  )
}

export default Socials