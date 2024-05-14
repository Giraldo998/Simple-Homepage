import { Navbar } from './components/ui/Navbar'
import { doneRing, heroImage } from './assets'
import { handleResizing } from './hooks/handleResizing';
import './assets/css/App.css'
import './assets/css/media.css'

function App() {

  
  return (
    <>
      <Navbar/>
      <div className="content">
        <section className="left-content">
          <header>
            <p className='slogan' 
              style={{textTransform:'uppercase'}}>
                😎  Simple way to communicate
            </p>
            <h1 className='title' >Actions for Accessibility in Design</h1>
            <p className="description" 
              style={{color:'#909193'}}>
              The fastest way to build and deploy websites with resusable components.
            </p>
          </header>
          <div className="buttons">
            <div className='button1'>Get started</div>
            <div className='button2'>Get live demo</div>
          </div>
          <footer>
            <p>
              <img src={doneRing} alt="doneRing" />
              No credit card required
            </p>
            <p>
              <img src={doneRing} alt="doneRing" />
              No software to install
            </p>
          </footer>
        </section>
        <section className="right-content">
          <img src={heroImage} alt="heroImage" className='heroImage' />
        </section>
      </div>
    </>
  )
}

export default App
