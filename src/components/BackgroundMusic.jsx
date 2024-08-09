import React, {useState} from 'react';
import ReactHowler from 'react-howler';
import backgroundMusic from '../audio/music.mp3';

const BackgroundMusic = ({onPauseChange}) => {
  const [volume, setVolume] = useState(0.3);
  const [muted, setMuted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlayed] = useState(true);

  const handlePlayToggle = () => {
    setPlayed(!playing);
    onPauseChange(true);
  }

  const handleVolumeChange = (event) => {
    console.log(event.target.value);
    if(event.target.value === 0){
      // onMuteChange(true);
      setMuted(true);
      setVolume(event.target.value);
    }else{
      setVolume(event.target.value);
      // onMuteChange(false);
      setMuted(false);
    }
  };

  const handleMuteToggle = () => {
    // onMuteChange(true);
    setMuted(true);
    setVolume(0);
    // console.log("Muted: ", muted);
  };

  const handleLoadError = (id, err) => {
    console.error('Error Loading Audio: ', err);
    // console.log(backgroundMusic);
  };

  return (
    <>
    <div className='volume-content'>
      <ReactHowler
        src={backgroundMusic}
        playing={playing}
        volume={muted ? 0 : volume}
        loop={true}
        preload={true}
        onLoad={()=>setLoaded(true)}
        onLoadError={handleLoadError}
      />
      {/* <div className="play-button" onClick={handlePlayToggle}>{playing ? 'Pause' : 'Play'}</div> */}
      <label class="slider">
        <input 
          type="range" 
          class="level"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          title='Volume'
        />
        <svg className="volume" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 24 24" style={{ enableBackground: "new 0 0 512 512" }} onClick={handleMuteToggle}>
          <title>Mute/Unmute</title>
            <g>
                <path d="M18.36 19.36a1 1 0 0 1-.705-1.71C19.167 16.148 20 14.142 20 12s-.833-4.148-2.345-5.65a1 1 0 1 1 1.41-1.419C20.958 6.812 22 9.322 22 12s-1.042 5.188-2.935 7.069a.997.997 0 0 1-.705.291z" fill="currentColor" data-original="#000000"></path>
                <path d="M15.53 16.53a.999.999 0 0 1-.703-1.711C15.572 14.082 16 13.054 16 12s-.428-2.082-1.173-2.819a1 1 0 1 1 1.406-1.422A6 6 0 0 1 18 12a6 6 0 0 1-1.767 4.241.996.996 0 0 1-.703.289zM12 22a1 1 0 0 1-.707-.293L6.586 17H4c-1.103 0-2-.897-2-2V9c0-1.103.897-2 2-2h2.586l4.707-4.707A.998.998 0 0 1 13 3v18a1 1 0 0 1-1 1z" fill="currentColor" data-original="#000000"></path>
            </g>
        </svg>
        <svg className='play-pause' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 74.82" width="32" height="32" x="0" y="0" onClick={handlePlayToggle}>
          <title>Play/Pause</title>
          <path class="cls-1" d="M51.93,43.9c5.49-3.55,5.47-7.5,0-10.64L9,1.86C4.55-.94-.12.71,0,6.55L.18,68.23c.38,6.34,4,8.07,9.33,5.14L51.93,43.9ZM105.84,0h13.1a4,4,0,0,1,3.94,3.94V70.88a4,4,0,0,1-3.94,3.94h-13.1a4,4,0,0,1-3.94-3.94V3.94A4,4,0,0,1,105.84,0ZM71.94,0H85A4,4,0,0,1,89,3.94V70.88A4,4,0,0,1,85,74.82H71.94A4,4,0,0,1,68,70.88V3.94A4,4,0,0,1,71.94,0Z"/>
        </svg>
    </label>
  </div>
    </>
  );
};

export default BackgroundMusic;