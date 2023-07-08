import React, { useEffect, useState } from 'react'
import './bookleft.css'
import Ticket from './Ticket'

const Bookleft = (props) => {
    const curDate = new Date().getDate()+2
    const [dates,setDates] = useState([])
    useEffect(()=>{
        const today = new Date()
        const nextDates = []
        for(let i=0;i<5;i++ ){
            const nextdate = new Date(today)
            nextdate.setDate(today.getDate()+i)
            const nextday = nextdate.getDate();
            nextDates.push(nextday)
        } 
        setDates(nextDates)
    },[])
    const date = [curDate,curDate+1,curDate+2,curDate+3,curDate+4]
    const [activedate,setActivedate] = useState(null)
  return (
    <div className='mt-5'>
        <h6 className='mb-5'>Date :</h6>
        <div className='d-flex dates mb-5'>
            {
                dates.map((e)=>{
                    return (
                        <h6 onClick={()=>setActivedate(e)} className={`${activedate == e ? 'activedate':''}`} >{e}</h6>
                    )
                })
            }
        </div>
        <h6>Tickets :</h6>
        <Ticket date={activedate} seats={props.seats} />
    </div>
  )
}

export default Bookleft