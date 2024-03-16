import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Introduction(){
    return(
        <>
        <div className='introduction'>
          <div className='intro-content'>
            <div className="intro-details">
            Enthusiastic Computer Science student specializing in Artificial Intelligence, currently pursuing a Bachelor's degree. 
            </div>
            <div className="intro-details">
            Eager to apply theoretical knowledge and gain practical experience in Machine Learning engineering and Artificial Intelligence development. 
            </div>
            <div className="intro-details">
            Passionate about leveraging technology to solve complex problems and contribute to innovative projects.
            </div>
            <Link to={require('../document/resume.pdf')} target="_blank" rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: 'white',
              }}
            >
              <div className="download-pdf">Resume</div>
            </Link>
          </div>
        </div>
        </>
    )
}

function Project(){
    return(
        <>
        <div className="project">
            <div className="project-content">
                <div className="project-container">
                  <div className="project-row">
                  <Link className="project-details" to='https://github.com/midnightplayer1412' target="_blank" rel="noopener noreferrer"
                  style={{
                    backgroundImage:`url('${require('../img/proj-1.png')}')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}>
                    <div className="project-title" >Portfolio</div>
                    <div className="project-desc"></div>
                  </Link>
                  <Link className="project-details" to='https://github.com/midnightplayer1412/Diploma-Final-Year-Project' target="_blank" rel="noopener noreferrer"
                  style={{
                    backgroundImage:`url('${require('../img/proj-2.png')}')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}>
                    <div className="project-title" >Bakery</div>
                    <div className="project-desc"></div>
                  </Link>
                  
                  </div>
                  <div className="project-row">
                  <div className="project-details">
                    <div className="project-title">Coming Soon...</div>
                    <div className="project-desc"></div>
                  </div>
                  {/* <div className="project-details">Project 4</div> */}
                  </div>
                </div>
            </div>
        </div>
        </>
    )
}

function Contact(){
    return(
        <>
        <div className="contact">
            <div className="contact-content">
              <div className="contact-details">
                <Link to={'mailto:ponyuxuan13@gmail.com'}
                  className="email"
                >
                  <div className="contact-title">EMAIL</div>
                  <div>ponyuxuan13@gmail.com</div>
                </Link>
                <Link to={'https://wa.me/+601111412124'} target='_blank' rel="noopener noreferrer"
                  className="phone-no"
                >
                  <div className="contact-title">PHONE</div>
                  <div>+60 11-1141 2124</div>
                </Link>
              </div>
            </div>
        </div>
        </>
    )
}

function Content({viewContent, onClose}) {
  const [contentPage, setPage] = useState('Introduction');
  // const [showContent, setShowContent] = useState(true);

  const setContent = (contentPage) =>{
    setPage(contentPage);
  }

  const handleBackClick = () => {
    onClose(); // Call viewContent (which is now toggleContent) to toggle the state
    console.log('viewContent is :', viewContent);
    // console.log('showContent is :', showContent);
    console.log('onClose is :', onClose);
  };

  useEffect(()=>{
    const navbarItems = document.querySelectorAll('.navbar-list .navbar-bg');

    navbarItems.forEach((item, index) => {
      const leftValue = index * 38;
      item.style.left = leftValue - 16 + 'px';
    });

    // Add event listener to the document object
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        onClose(); // Call onClose when the Escape key is pressed
      }
    }

    document.addEventListener('keydown', handleEscapeKey);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      onClose();
    }
  }, [onClose]);

  return(
    <>
      <div className='show-content'>
        <div className='content-bg'>
          <div className="esc-title">Press ESC or Click -&gt;</div>
          <div className="back-component" onClick={handleBackClick}>
            <div className="back-title">Back</div>
            <div className="square1"></div>
            <div className="square2"></div>
            <div className="square3"></div>
          </div>
          <div className='navbar'>
            <div className='navbar-content'>
              <div className='parallelogram'></div>
              <div className='navbar-title'>
                <div className="title-box1">PON YU XUAN</div>
                <div className="title-box2"></div>
              </div>
              <div className='navbar-list'>
                <div className='navbar-bg'>
                  <div className={`navbar-items ${contentPage==='Introduction'?'nav-active':''}`} onClick={() => setContent('Introduction')}>Introduction</div>
                </div>
                <div className='navbar-bg'>
                  <div className={`navbar-items ${contentPage==='Project'?'nav-active':''}`} onClick={() => setContent('Project')}>Project</div>
                </div>
                <div className='navbar-bg'>
                  <div className={`navbar-items ${contentPage==='Contact'?'nav-active':''}`} onClick={() => setContent('Contact')}>Contact</div>
                </div>
              </div>
            </div>
          </div>
          {contentPage === 'Introduction' && <Introduction />}
          {contentPage === 'Project' && <Project />}
          {contentPage === 'Contact' && <Contact />}
        </div>
      </div>
    </>
  )
}

export default Content; 