import { useEffect, useState } from "react"

const Themebuttondual = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const pageElement = document.documentElement;

  function onWindowMatch(){
    if (localStorage.theme === 'dark') {
      pageElement.classList.add("dark");
    } else {
      pageElement.classList.remove("dark");
    }
  }
  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case 'dark':
        pageElement.classList.add('dark');
        localStorage.setItem("theme", "dark");
        break;

      case 'light':
        pageElement.classList.remove('dark');
        localStorage.setItem("theme", "light");
        break;
    
      default:
        localStorage.removeItem("theme");
        break;
    }
  }, [theme])

  return (
    <div className="theme-buttons-dual">
      <div className={`icons-theme-dual`}>
        <div className={`back-theme-btn-dual ${theme === "dark" && "theme-change" }`}></div>
        <i className={`fa-solid fa-sun ${theme === "light" && "theme-active" }`} onClick={() => setTheme('light')}></i>
        <i className={`fa-solid fa-moon ${theme === "dark" && "theme-active" }`} onClick={() => setTheme('dark')}></i>
      </div>
    </div>
  )
}

export default Themebuttondual