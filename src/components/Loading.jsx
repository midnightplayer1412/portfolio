import { useEffect, useState } from "react";

function LoadingScreen({onLoadingComplete}){
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setLoadingProgress(prev=>{
        if(prev<100){
          const randomIncrement = Math.floor(Math.random() * 8) + 3;
          return Math.min(prev + randomIncrement, 100);
        }else{
          clearInterval(interval);
          setLoadingComplete(true);
          return 100;
        }
      })
    }, 300);

    return ()=> clearInterval(interval);
  }, []);

  const handleClick = () =>{
    onLoadingComplete();
  }

  return(
    <>
      <div className="loading-screen">
        {!loadingComplete ? (
          <>
            <div className="loader"></div>
            <div className="loading-progress">{loadingProgress}%</div>
          </>) : (<><div className="play-button" onClick={handleClick}>Feel The Music</div></>)}
      </div>
    </>
  )
}

export default LoadingScreen;