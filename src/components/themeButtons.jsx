import { useEffect, useState } from "react"

const ThemeButtons = () => {
  const [theme, setTheme] = useState("system");
  const pageElement = document.documentElement;

  useEffect(() => {
    switch (theme) {
      case 'dark':
        pageElement.classList.add('dark');
        break;

      case 'light':
        pageElement.classList.remove('dark');
        break;
    
      default:
        break;
    }
  }, [theme])
  
  return (
    <div className="theme-buttons">
        <div className="icons-theme">
            <i className="fa-solid fa-sun" onClick={() => setTheme('light')}></i>
            <i className="fa-solid fa-moon" onClick={() => setTheme('dark')}></i>
            <i className="fa-solid fa-display" onClick={() => setTheme('system')}></i>
        </div>
    </div>
  )
}

export default ThemeButtons