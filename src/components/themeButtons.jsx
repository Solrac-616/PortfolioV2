import { useEffect, useState } from "react"

const ThemeButtons = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const pageElement = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-schema: dark)");
  console.log('====================================');
  console.log(darkQuery);
  console.log('====================================');

  function onWindowMatch(){
    if (localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)) {
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
        onWindowMatch();
        break;
    }
  }, [theme])
  
  return (
    <div className="theme-buttons">
        <div className="icons-theme">
            <i className={`fa-solid fa-sun ${theme === "light" && "theme-active" }`} onClick={() => setTheme('light')}></i>
            <i className={`fa-solid fa-moon ${theme === "dark" && "theme-active" }`} onClick={() => setTheme('dark')}></i>
            <i className={`fa-solid fa-display ${theme === "system" && "theme-active" }`} onClick={() => setTheme('system')}></i>
        </div>
    </div>
  )
}

export default ThemeButtons