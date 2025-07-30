import React from 'react'
import Main from '../components/Home/Main'
import Home2 from '../components/Home/Home2'
import Home3 from '../components/Home/Home3'
import Home4 from '../components/Home/Home4'
import Home5 from '../components/Home/Home5'
import Homecontact from '../components/Home/Homecontact'
import Homelast from '../components/Home/Homelast'
import { useEffect } from 'react'
import Transition from '../Animations/Transition'

const Home = () => {

 
  return (
         <div className='overflow-hidden'><Main/>
    <Home2/>
    <Home3/>
    <Home4/>
    <Home5/>
    <Homecontact/>
    <Homelast page="about"/>     </div >
    
  )
}

export default Home