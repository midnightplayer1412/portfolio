import { useState } from 'react';
import BackgroundMusic from './components/BackgroundMusic';
import SoundWave from './components/SoundWave';
import Content from './components/Content';
import './components/dark.css';
import './App.css';

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

  return (
    <>
      <div className="main">
        <BackgroundMusic onMuteChange={handleMuteChange} />
        <SoundWave muted={muted} />
        <Album muted={muted} toggleViewContent={toggleViewContent} />
        {viewContent && <Content viewContent={viewContent} onClose={() => setViewContent(false)} />}
      </div>
    </>
  );
}

export default App;