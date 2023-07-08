import React, { useEffect, useState } from 'react'
import './dright.css'
import { useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import {BsCaretRight,BsCaretLeft} from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { changehidden } from '../helper/Hideen'

const Dlistright = () => {
  const hiddenall = useSelector(state => state.hidden.hidden)
  const arrow = {fontSize : '1vw' , border : '1px solid white',height:'35px',width:'35px',borderRadius:'50%',
cursor:'pointer',margin:'2vw 0vw',}
  const init = useSelector(state => state.movie.value).movie
  const {id} = useParams()
  const initdetail = init.filter((e)=>{
      return e.id==id
   })
  const moviedetails = initdetail[0]
  const [move,setmove] = useState(0)
  const dispatch = useDispatch()
  const moveright = () => {
    setmove(move==0 && move != 150 ? move+ -150 : 0 )
  }
  useEffect(()=>{
    dispatch(changehidden(false))
  },[])
  console.log(hiddenall)


  return (
    <div className='position-relative dright' style={{zIndex:1}}>
      <div className={`${hiddenall ? 'upp' : ''}`}>
        <span style={{fontSize:'1.2vw'}}>Starring :</span>
        <div  style={{width:'675px',overflow:'hidden'}}>
          <div className='d-flex mt-3' style={{transform:`translateX(${move}px)`,transition:'1s' , animation:'rightt 1s'}}>
          {
            moviedetails.cast.map((e)=>{
              return(
                <div className='actorscard'>
                  <img src={`assets/images/${e.img}`} alt="" className='position-relative'/>
                  <span className='position-absolute'>{e.name}</span>
                </div>
              )
            })
          }
          </div>
        </div>
        <div className='d-flex'>
        <BsCaretRight style={arrow} className='me-3' onClick={moveright}/>
        </div>
        <span style={{fontSize:'1.2vw'}}>StoryLine :</span>
        <p style={{fontSize:'1vw', animation:'rightt 1.5s'}} className='mt-3'>{moviedetails.discription}</p>
        </div>
    </div>
  )
}

export default Dlistright