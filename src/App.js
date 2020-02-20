import React from 'react'
import './App.css'
import HeaderMenu from './components/headerMenu'
import Profile from './components/profile/profile'
import Projects from './components/projects/projects'
import Gallery from './components/gallery/gallery'
import Experience from './components/experience/experience'
import Footer from './components/footer'
import ReactGA from 'react-ga';

function initializeReactGA() {
  ReactGA.initialize('UA-146348600-1');
  ReactGA.pageview('/homepage');
}

function App() {
  return (
    <div className="App">
      <HeaderMenu/>
      <Profile/>
      <Projects/>
      {/* <Experience /> */}
      <Gallery/>
      {/* <Design/> */}
      {/* <Blog/> */}
      <Footer/>
    </div>
  );
}


export default App
