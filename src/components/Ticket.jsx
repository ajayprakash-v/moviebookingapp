import { useEffect } from 'react'
import { MdSend } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
const Ticket = (props) => {
    const {id} = useParams()
    const init = useSelector(state => state.movie.value).movie
    const seatcount = props.seats.length
    const date = props.date
    const moviedetail = init.filter((e)=>{
        return e.id==id
    })

    const seat = props.seats
    var seatprice = seatcount * 24
   
     
  return (
    <div className='mt-5'>
        <h5 className='w-50 mb-2 mt-5 mb-3'>{moviedetail[0].title}</h5>
        <span>date : {props.date || 'select date' }</span><br/>
        <span>seats : {seat || 'selectseat'}</span><br/>
        <span >price : {seatprice}$</span><br></br>
    </div>
  )
}

export default Ticket