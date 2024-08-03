import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StarGalaxy from './components/StarGalaxy';
import LoadingScreen from './components/Loading';
import { ThemeProvider } from './components/ThemeProvider';

const MainContent = () => (
  <>
    <StarGalaxy/>
    <App />
  </>
);

const RootComponent = () => {
  // const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [isLoadingComplete, setIsLoadingComplete] = useState(true);
  console.log("isLoadingComplete is : ", isLoadingComplete)
  const handleLoadingComplete = () => {
    setIsLoadingComplete(true);
  };
  return(
    isLoadingComplete ? <MainContent/> : <LoadingScreen onLoadingComplete={handleLoadingComplete}/>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <RootComponent/>
    </ThemeProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
