import { alaradoIcon, alaradoIconDark, moonFill, moonFillLight, sunFill, sunFillLight } from "../../assets"
import { setMode } from "../../hooks/setMode";
import { showNavbar } from "../../hooks/showNavbar";
import { handleResizing } from "../../hooks/handleResizing";
import './css/Navbar.css'
import './css/NavbarMedia.css'
import './css/MobileNavbar.css'

export const Navbar = () => {

  const {darkMode, changeMode} = setMode();
  const {isActive, activeNavbar} = showNavbar();
  const {isMobile} = handleResizing();


  return (
    <>
      <div className={`logo-menu ${isMobile ? 'active' : ''}`}>
			  <img
			  	src={alaradoIcon}
			  	alt="alarado-logo"
			  	style={{opacity: `${!darkMode ? 1 : 0}`}}
			  />
			  <img
			  	src={alaradoIconDark}
			  	alt="alarado-logo"
			  	style={{opacity: `${darkMode ? 1 : 0}`}}
			  	className="alarado-dark-mobile"
			  />
			  <label className="burger" htmlFor="burger" >
			  	<input type="checkbox" id="burger" onClick={activeNavbar}/>
			  	<span className={`${darkMode ? 'dark' : ''}`}></span>
			  	<span className={`${darkMode ? 'dark' : ''}`}></span>
			  	<span className={`${darkMode ? 'dark' : ''}`}></span>
			  </label>
		  </div>

      <nav className={`${isActive ? 'active': ''} ${darkMode ? 'dark' : ''}`}>
        <div className="logo">
          <img 
            src={alaradoIcon} 
            alt="alarado-logo" 
            style={{opacity:`${!darkMode ? 1 : 0}`}}
          />
          <img 
            src={alaradoIconDark} 
            alt="alarado-logo" 
            style={{opacity:`${darkMode ? 1 : 0}`}} 
            className="alarado-dark"
            />
        </div>
        <div className="menu-options">
          <a href="#" className={`link ${darkMode ? 'active' : ''}`}>About us</a>
          <a href="#" className="link">Product</a>
          <a href="#" className="link">Resource</a>
          <a href="#" className="link">Contact</a>
        </div>
        <div className="mode">
          <div className={`container ${darkMode ? 'active' : ''}`} onClick={changeMode}>
            <img 
              src={moonFillLight} 
              style={{opacity:`${!darkMode ? 1 : 0}`}}
              className="moon-fill-light"
            />
            <img 
              src={moonFill} 
              style={{opacity:`${darkMode ? 1 : 0}`}}
              className="moon-fill"
            />
            <img 
              src={sunFill} 
              style={{
                fill:`${darkMode ? '#fff' : ''}`,
                opacity:`${!darkMode ? 1 : 0}`
              }}
              className="sun-fill"
            />
            <img 
              src={sunFillLight} 
              style={{
                fill:`${darkMode ? '#fff' : ''}`,
                opacity:`${darkMode ? 1 : 0}`
              }}
              className="sun-fill-light"
            />
            <div className={`toggle-background ${darkMode ? 'active' : ''}`}>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
