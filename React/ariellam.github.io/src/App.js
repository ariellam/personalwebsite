import React from 'react'
import './App.css'
import HeaderMenu from './components/headerMenu'
import Profile from './components/profile/profile'
import Projects from './components/projects/projects'
import PhotoGallery from './components/gallery/gallery'

function App() {
  return (
    <div className="App">
      <HeaderMenu/>
      <Profile/>
      <Projects/>
      {/* <FooterMenu/> */}
      <PhotoGallery/>
    </div>
  );
}


export default App
