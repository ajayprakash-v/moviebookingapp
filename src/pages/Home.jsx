import React from 'react'
import './home.css'
import Navbar from '../components/Navbar'
import Banner from '../components/banner'
import Details from '../components/Details'

const Home = () => {
  return (
    <div className='banner'>
        <Navbar/>
        <Banner/>
        <Details/>
    </div>
  )
}

export default Home