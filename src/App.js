import { useState } from 'react';
import BackgroundMusic from './components/BackgroundMusic';
import SoundWave from './components/SoundWave';
import Content from './components/Content';
import MobileNavbar from './components/MobileView';
import {ThemeComponent} from './components/ThemeProvider';
import './App.css';
// import './components/light.css';
// import './components/dark.css';

function Album({ paused, toggleViewContent }) {
  const showContentHandler = () => {
    toggleViewContent();
  };
  return (
    <>
       <div className='album' onClick={showContentHandler}>
           <div className='album-cover'>
             <div className='album-disc' style={{animationPlayState: paused ? 'paused' : 'running'}}>
             </div>
           </div>
       </div>
     </>
  );
}

function App() {
  const [muted, setMuted] = useState(false);
  const [viewContent, setViewContent] = useState(false);
  const [paused, setPaused] = useState(false);

  const handlePauseToggle = () => {
    setPaused(!paused);
  };

  const toggleViewContent = () => {
    setViewContent((prevState) => !prevState);
  };

  // const SomeComponent = () => {
  //   const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  
  //   return (
  //     <div>
  //       <p>Current theme: {isDarkMode ? 'Dark' : 'Light'}</p>
  //       <button onClick={() => setIsDarkMode(!isDarkMode)}>
  //         Toggle Theme
  //       </button>
  //     </div>
  //   );
  // };

  return (
    <>
      <div className="main-desktop">
        <ThemeComponent/>
        <BackgroundMusic onPauseChange={handlePauseToggle} />
        <SoundWave paused={paused} />
        <Album paused={paused} toggleViewContent={toggleViewContent} />
        {viewContent && <Content viewContent={viewContent} onClose={() => setViewContent(false)} />}
      </div>
      <div className="main-mobile">
        <MobileNavbar/>
      </div>
    </>
  );
}

export default App;