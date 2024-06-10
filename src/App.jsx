import './App.scss'
import NavBar from './components/NavBar'
import VideoSection from './components/VideoSection'
import InfoSection from './components/InfoSection'
import { sections } from './data/sections'
import Menu from './components/Menu'
import { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <NavBar isMenuOpen={isMenuOpen} onMenuOpen={setIsMenuOpen}/>
      <div className={`nav-bar-blank-space ${isMenuOpen ? 'menu-opened' : 'menu-closed'}`}/>
      <Menu isMenuOpen={isMenuOpen} onMenuClose={setIsMenuOpen}/>{
        !isMenuOpen &&
        <main>
          <VideoSection />
          <div className='content'>
            {
              sections.map(section => {
                return (
                  <InfoSection
                    key={section?.title}
                    title={section?.title}
                    subtitle={section?.subtitle}
                    color={section?.color}
                    topInfo={section?.topInfo}
                    bottomInfo={section?.bottomInfo}
                  />)
              })
            }
          </div>
          <div className='page-footer'>
            <p className='p-small' style={{width: 570, textAlign: 'center'}}>LEGO, the LEGO logo and the Brick and Knob configurations are trademarks of the LEGO Group. ©2022 The LEGO Group.</p>
          </div>
        </main>
      }
    </>
  )
}

export default App
