import { useState } from 'react';
import BackgroundMusic from './components/BackgroundMusic';
import SoundWave from './components/SoundWave';
import Content from './components/Content';
import './components/light.css';
import './App.css';

function Album({ muted, toggleViewContent }) {
  const [showContent, setShowContent] = useState(false);
  const showContentHandler = () => {
    setShowContent(true);
    toggleViewContent(); // Call toggleViewContent when the album is clicked
  };
  console.log("Album showContent: ", showContent);
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
  const [viewContent, setViewContent] = useState(false); // Add this line
  console.log("viewContent : ", viewContent);
  console.log("setViewContent : ", setViewContent);
  const handleMuteChange = (newMutedState) => {
    console.log(newMutedState);
    setMuted(newMutedState);
  };

  const toggleViewContent = () => {
    setViewContent((prevState) => !prevState); // Add this function
  };

  return (
    <>
      <div className="main">
        {/* <div className='theme'>Change Theme</div> */}
        <BackgroundMusic onMuteChange={handleMuteChange} />
        <SoundWave muted={muted} />
        <Album muted={muted} toggleViewContent={toggleViewContent} />
        {viewContent && <Content viewContent={viewContent} onClose={() => setViewContent(false)} />}
      </div>
    </>
  );
}

export default App;