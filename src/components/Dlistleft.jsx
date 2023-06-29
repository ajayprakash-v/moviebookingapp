import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './dleft.css'
import { useDispatch } from 'react-redux'
import { changehidden } from '../helper/Hideen'
import { useNavigate } from 'react-router-dom'

const Dlistleft = () => {
    const hiddenall = useSelector(state => state.hidden.hidden)
    const dispatch = useDispatch()
    const init = useSelector(state => state.movie.value).movie
    const {id} = useParams()
    const initdetail = init.filter((e)=>{
        return e.id==id
     })
     const navigate = useNavigate()
    const moviedetails = initdetail[0]
    const handleredirect = () => {
      dispatch(changehidden(true))
      setTimeout(()=>{
        navigate(`/bookticket/${id}`)
      },1500)
    }
  return (
    <div style={{position:'relative',zIndex:'1'}} className='leftdetails ms-3'>
      <div className={`${hiddenall ? 'upp' : ''}`}>
        <div className='dleft' style={{animation:'leftt .5s'}}>
            <h1 className='mb-5' style={{animation:'leftt 1s'}}>{moviedetails.title}</h1>
            <h6>Ratings : {moviedetails.ratings}</h6>
            <h6>Genre : {moviedetails.categary}</h6>
            <h6>Director : {moviedetails.directors}</h6>
            <h6 className='mb-5'>Duration : {moviedetails.duration}</h6>
            <span onClick={handleredirect}>Book your ticket right now</span>
        </div>
        </div>
    </div>
  )
}

export default Dlistleft