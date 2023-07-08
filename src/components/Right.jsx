import React, { useEffect, useState } from 'react'
import {BsCaretRight,BsCaretLeft} from 'react-icons/bs'
import './right.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changemovie } from '../helper/Movielist'
const Right = () => {
    const arrow = {fontSize : '1rem' , border : '1px solid white',height:'50px',width:'50px',borderRadius:'50%',
cursor:'pointer'}
    const movielist = useSelector(state => state.movie.value).movie
    const hiddenall = useSelector(state => state.hidden.hidden)
    const [move,setmove]=useState(0)
    const dispatch = useDispatch()
    const id = useSelector(state => state.changemovie.value).clickedmovie
    const currentposition = - id * 209
    useEffect(()=>{
        setmove(currentposition+209)    
    },[])
    const moveright = ()=>{
        setmove(move!=-1672 ? currentposition : 0)
        dispatch(changemovie({clickedmovie:id!=0 && id<=8 ? id+1 : 1}))
    }
    const moveleft = ()=>{
        setmove(move != 0 ? move+209 : 0)
        if(move !=0){
            dispatch(changemovie({clickedmovie:id!=0 && id<=8 ? id-1 : id-1}))
        }
        else{
            dispatch(changemovie({clickedmovie:1}))
        }
    }

  return (
    <div>
        <div className={`d-flex ${hiddenall ? 'hiddenall' : ''}`} >
            <div className='d-flex align-items-end'>
                <BsCaretLeft style={arrow} className='me-3' onClick={moveleft}/>
                <BsCaretRight style={arrow} className='me-3' onClick={moveright}/>
            </div>
            <div className='fullcard d-flex align-items-end'>
                <div className='d-flex' style={{transform:`translateX(${move}px)`,transition:'1s'}}>
                    {
                        movielist.map((e)=>{
                            return(
                                <img src={`/moviebookingapp/assets/images/${e.poster}`} className='poster m-3'/>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    </div>
  )
}

export default Right