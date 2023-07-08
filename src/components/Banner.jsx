import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import './banner.css'


const Banner = () => {
const Idetails = useSelector(state => state.movie.value).movie
const movieid = useSelector(state => state.changemovie.value).clickedmovie
const banner=Idetails.filter((e)=>{
  return e.id===movieid
})
const hiddenall = useSelector(state => state.hidden.hidden)


const coverimg = `/assets/images/${banner[0].cover}`

const coverstyle={'width':'100%',}
  return (
    <div className='position-fixed w-100'>
        <img src={coverimg} alt="" className={`w-100 ${hiddenall ? 'fade' : ''}`} style={{opacity:'.5'}}/>
    </div>
  )
}

export default Banner