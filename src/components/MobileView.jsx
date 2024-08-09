import { useState } from "react"

function MobileContentHome(){
  return(
    <>
      <div className="notice">Currently Working on Mobile View ...</div>
    </>
  )
}

function MobileContentMusic(){
  return(
    <>
      <div className="notice">Currently Working on Mobile View ...</div>
    </>
  )
}

function MobileContentFavor(){
  return(
    <>
      <div className="notice">Currently Working on Mobile View ...</div>
    </>
  )
}

function MobileContentContact(){
  return(
    <>
      <div className="notice">Currently Working on Mobile View ...</div>
    </>
  )
}

function MobileNavbar({mobileContentPage, setContentPage}){

  const setContent = (page) => {
    setContentPage(page);
  }

  return(
    <>
    <div className="navbar-mobile-bg">
      <div className="navbar-mobile">
        <div className={`home ${mobileContentPage === 'Home' ? 'active' : ''}`} onClick={() => setContent('Home')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
            <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
          </svg>
        </div>
        <div className={`music ${mobileContentPage === 'Music' ? 'active' : ''}`} onClick={() => setContent('Music')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-music-note" viewBox="0 0 16 16">
            <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2"/>
            <path fill-rule="evenodd" d="M9 3v10H8V3z"/>
            <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5z"/>
          </svg>
        </div>
        <div className={`favor ${mobileContentPage === 'Favor' ? 'active' : ''}`} onClick={() => setContent('Favor')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
          </svg>
        </div>
        <div className={`contact ${mobileContentPage === 'Contact' ? 'active' : ''}`} onClick={() => setContent('Contact')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
          </svg>
        </div>
      </div>
    </div>
    </>
  )
}

function MobileComponents(){

  const [mobileContentPage, setContentPage] = useState('Home');

  return(
    <>
    <MobileNavbar mobileContentPage={mobileContentPage} setContentPage={setContentPage}/>
    <div className="content-mobile-bg">
      {mobileContentPage === 'Home' && <MobileContentHome />}
      {mobileContentPage === 'Music' && <MobileContentMusic />}
      {mobileContentPage === 'Favor' && <MobileContentFavor />}
      {mobileContentPage === 'Contact' && <MobileContentContact />}
    </div>
    </>
  )
}

export default MobileComponents