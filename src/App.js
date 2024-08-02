import { useState } from 'react';
import BackgroundMusic from './components/BackgroundMusic';
import SoundWave from './components/SoundWave';
import Content from './components/Content';
import {ThemeProvider, ThemeComponent} from './components/ThemeProvider';
import './App.css';
// import './components/light.css';
// import './components/dark.css';

function Album({ muted, toggleViewContent }) {
  const showContentHandler = () => {
    toggleViewContent();
  };
  return (
    <>
       <div className='album' onClick={showContentHandler}>
           <div className='album-cover'>
             <div className='album-disc' style={{animationPlayState: muted ? 'paused' : 'running'}}>
             </div>
           </div>
       </div>
     </>
  );
}

function App() {
  const [muted, setMuted] = useState(false);
  const [viewContent, setViewContent] = useState(false);

  const handleMuteChange = (newMutedState) => {
    setMuted(newMutedState);
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
      <div className="main">
        <ThemeComponent/>
        <BackgroundMusic onMuteChange={handleMuteChange} />
        <SoundWave muted={muted} />
        <Album muted={muted} toggleViewContent={toggleViewContent} />
        {viewContent && <Content viewContent={viewContent} onClose={() => setViewContent(false)} />}
      </div>
    </>
  );
}

export default App;