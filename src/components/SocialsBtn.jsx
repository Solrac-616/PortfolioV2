import '../customcss/socialsbtn.css'

const SocialsBtn = () => {
  return (
    <>
      <div className="socials-btn">
        <div className="up">
          <button className="socials-btn-card card1">
            <i className="fa-brands fa-whatsapp whatsapp"></i>
          </button>
          <button className="socials-btn-card card2">
            <i className="fa-brands fa-linkedin linkedin"></i>
          </button>
        </div>
        <div className="down">
          <button className="socials-btn-card card3">
            <i className="fa-brands fa-github github"></i>
          </button>
          <button className="socials-btn-card card4">
            <i className="fa-brands fa-google google"></i>
          </button>
        </div>
      </div>
    </>
  )
}

export default SocialsBtn