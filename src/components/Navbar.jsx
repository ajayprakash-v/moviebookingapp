import React, { useState } from 'react'
import './navbar.css'
import {BsSearch,BsTicket} from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'
import{CiLocationOn} from 'react-icons/ci'
import {FiSettings} from 'react-icons/fi'
import {BiHomeAlt2} from 'react-icons/bi'
import {LiaTvSolid} from 'react-icons/lia'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Navbar = () => {
    const [show,setShow]=useState(false)
    console.log(show)
  return (
    <div>
    <div className='d-flex position-fixed w-100 mt-3 nav'>
        <div className='d-flex align-items-center'>
        <h2 className='ms-3 me-3'>Ticket</h2>
        <span className='ms-3'>All movies</span>
        </div>
        <div className='d-flex ms-auto'>
            <span className='d-flex align-items-center me-3'>Chennai,Tamilnadu <CiLocationOn className='ms-2'/></span>
            <div className='d-flex align-items-center'>
            <div className='avatar ms-3'></div>
            <span className='ms-2'>username</span>
            <AiOutlineMenu className='ms-5 me-3 menu' onClick={()=>setShow(show ? false : true)} />
            </div>
        </div>
    </div>
    <div>
        <ul style={{'listStyle':'none','margin':'0px','padding':'0px'}} className={`${show ? 'show' : ''}`}>
            <li><FiSettings/> Account </li>
            <li><BiHomeAlt2/> Home</li>
            <li><BsTicket/> ticket</li>
            <li><LiaTvSolid/> Movies</li>
        </ul>
    </div>
    </div>
  )
}

export default Navbar