
import './App.css'
import 'animate.css';

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TravelCards from './components/TravelCards'
import VideoSection from './components/VideoSection';
import Trips from './components/Trips';
import Contact from './components/Contact'
import Ambassador from './components/Ambassador';
import Blog from './components/Blog';
import Footer from './components/Footer'



function App() {

  return (
    <>
      <div className='relative w-screen'>
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
      <TravelCards></TravelCards>
      <VideoSection></VideoSection>
      <Trips></Trips>
      <Ambassador></Ambassador>
      <Blog></Blog>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
