import React, { useEffect, useState } from 'react'
import './left.css'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";
import { changehidden } from '../helper/Hideen';

const Left = () => {
    const date = new Date().getDate().toString()
    const init = useSelector(state => state.movie.value).movie
    const movieid = useSelector(state => state.changemovie.value).clickedmovie
    const dispatch = useDispatch()
     const initdetail = init.filter((e)=>{
        return e.id==movieid
     })
    const shedule = ['10:30','01:30','04:30','07:30',]
    const [active,setActive] = useState(null)
    const [changetext,setchange] = useState(null)
    const navigate = useNavigate()
    const [hidden,setHidden] = useState(false)
    const handlenavigate = () => {
        setHidden(true)
        dispatch(changehidden(true))
        setTimeout(()=>{
            navigate(`/detailpage/${movieid}`)
        },500)
    }
    const handlenavigatetobooking = () => {
        setHidden(true)
        dispatch(changehidden(true))
        setTimeout(()=>{
            navigate(`/bookticket/${movieid}`)
        },500)
    }
    useEffect(()=>{
        dispatch(changehidden(false))
        setchange(true)
        setHidden(false)
        setTimeout(()=>{
            setchange(false)
        },1000)
    },[movieid])
  return (
    <div className={`ms-5 `}>
        <h5 className={`ms-3 ${hidden ? 'hidden':''}`}>Today</h5>
        <div className={`d-flex align-items-cente`}>
        <span className={`date ${hidden ? 'hidden':''}`}>{date.length === 1 ? 0 + date : date  }</span>
        <div className='ms-3 show'>
            <h1 className={`${changetext ? 'changetext' : ''} ${hidden ? 'hidden':''}`}>{initdetail[0].title}</h1>
            <span className={`mb-2 ${changetext ? 'changetext' : ''}${hidden ? 'hidden':''}`}>Genere : {initdetail[0].categary}</span><br/>
            <span className={`${changetext ? 'changetext' : ''}${hidden ? 'hidden':''}`}>Rating : {initdetail[0].ratings}</span>
        </div>
        </div>
        <h6 className={`mb-4 ${hidden ? 'hidden':''}`}>Shedule session :</h6>
        <div className={`d-flex justify-content-around p-1 shedule mb-4 ${hidden ? 'hidden':''}`} style={{width: '400px'}}>
            {
                shedule.map((e)=>{
                    return (
                       <span onClick={()=>setActive(e)} className={active == e ? 'activeshedule' : ''}>{e}</span> 
                    )
                })
            }
        </div> 
        <div className={`d-flex bookmenu ${hidden ? 'hidden':''}`}>
            <span onClick={handlenavigatetobooking}>Book a section</span>
            <span onClick={handlenavigate}>More</span> 
        </div>
    </div>
  )
}

export default Left