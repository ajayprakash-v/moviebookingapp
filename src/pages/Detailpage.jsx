import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Left from '../components/Left'
import Dlistleft from '../components/Dlistleft'
import Dlistright from '../components/Dlistright'
const Detailpage = () => {
  return (
    <div className='w-100' style={{overflow:'hidden'}}>
        <div style={{backgroundColor:'black',width:'100%',height:'100vh',color:'white'}}>
        <Navbar/>
        <Banner/>
        <div className='d-flex align-items-center justify-content-around' style={{height:'100vh'}}>
          <Dlistleft/>
          <Dlistright/>
        </div>
        </div>      
    </div>
  )
}

export default Detailpage