import React, { useEffect, useState } from 'react'
import './bookright.css'
import { MdEventSeat } from 'react-icons/md'
import Bookleft from '../components/bookleft'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {GoVerified} from 'react-icons/go'

const Bookright = () => {
  const seats = [{
    a: [1, 2, 3, 4, 5, 6, 7, 8], b: [1, 2, 3, 4, 5, 6, 7, 8], c: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], d: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    , e: [1, 2, 3, 4, 5, 6], f: [1, 2, 3, 4, 5, 6, 7, 8], g: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], h: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], i: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  }]
  const [selectedseat, setSeat] = useState([])
  const [success, setSuccess] = useState(false)
  const [ticketdetails,setTicket] = useState([])
  
  const init = useSelector(state => state.movie.value).movie
  const {id} = useParams()
  const moviedeials = init.filter((e)=>{
    return e.id == id 
  })
  const handleselect = (e, seatrow) => {
    const exs = seatrow + e
    console.log(exs)
    if (selectedseat.includes(exs)) {
      setSeat(selectedseat.filter((a) => {
        return !a.includes(exs)
      }))
    }
    else {
      setSeat(selectedseat => [...selectedseat, exs])
    }
  }
  const parameter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'I']
  return (
    <div className='w-100'>
      <div className='container-fluid' style={{ animation: 'uppp 1s' }}>
        <div className='row justify-content-around'>
          <div className='col d-flex w-100 justify-content-center'>
            <Bookleft seats={selectedseat}  />
          </div>
          <div className='col mt-5'>
            <div className='d-flex ms-5 mt-5'>
              <div className='screen position-relative'>
                <span className='position-absolute w-100 text-center' style={{ bottom: '-5%', fontFamily: 'monospace' }}>Screen</span>
              </div>
            </div>
            <div className='seats ms-5'>
              <div>
                <div className='seatsicons'>
                  {
                    seats[0].a.map((e) => {
                      return (
                        <div>
                          <span style={{ fontSize: '20px' }} onClick={() => handleselect(e, parameter[0])}
                            className={`${selectedseat.includes(`A${e}`) ? 'activeseat' : ''}`}><MdEventSeat /></span>
                        </div>
                      )
                    })
                  }
                </div>
                <div className='seatsicons'>
                  {
                    seats[0].b.map((e) => {
                      return (
                        <div>
                          <span style={{ fontSize: '20px' }} onClick={() => handleselect(e, parameter[1])}
                            className={`${selectedseat.includes(`B${e}`) ? 'activeseat' : ''}`}><MdEventSeat /></span>
                        </div>
                      )
                    })
                  }
                </div>
                <div className='seatsicons'>
                  {
                    seats[0].c.map((e) => {
                      return (
                        <div>
                          <span style={{ fontSize: '20px' }} onClick={() => handleselect(e, parameter[2])}
                            className={`${selectedseat.includes(`C${e}`) ? 'activeseat' : ''}`}><MdEventSeat /></span>
                        </div>
                      )
                    })
                  }
                </div>
                <div className='seatsicons'>
                  {
                    seats[0].d.map((e) => {
                      return (
                        <div>
                          <span style={{ fontSize: '20px' }} onClick={() => handleselect(e, parameter[3])}
                            className={`${selectedseat.includes(`D${e}`) ? 'activeseat' : ''}`}><MdEventSeat /></span>
                        </div>
                      )
                    })
                  }
                </div>

                <div className='seatsicons'>
                  {
                    seats[0].e.map((e) => {
                      return (
                        <div>
                          <span style={{ fontSize: '20px' }} onClick={() => handleselect(e, parameter[4])}
                            className={`${selectedseat.includes(`E${e}`) ? 'activeseat' : ''}`}><MdEventSeat /></span>
                        </div>
                      )
                    })
                  }
                </div>
                <div className='seatsicons'>
                  {
                    seats[0].f.map((e) => {
                      return (
                        <div>
                          <span style={{ fontSize: '20px' }} onClick={() => handleselect(e, parameter[5])}
                            className={`${selectedseat.includes(`F${e}`) ? 'activeseat' : ''}`}><MdEventSeat /></span>
                        </div>
                      )
                    })
                  }
                </div>
                <div className='seatsicons'>
                  {
                    seats[0].g.map((e) => {
                      return (
                        <div>
                          <span style={{ fontSize: '20px' }} onClick={() => handleselect(e, parameter[6])}
                            className={`${selectedseat.includes(`G${e}`) ? 'activeseat' : ''}`}><MdEventSeat /></span>
                        </div>
                      )
                    })
                  }
                </div>
                <div className='seatsicons'>
                  {
                    seats[0].h.map((e) => {
                      return (
                        <div>
                          <span style={{ fontSize: '20px' }} onClick={() => handleselect(e, parameter[7])}
                            className={`${selectedseat.includes(`H${e}`) ? 'activeseat' : ''}`}><MdEventSeat /></span>
                        </div>
                      )
                    })
                  }
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: '125px', animation: 'uppp 3s' }}>
        <button className='btn btn-sm btn-warning mt-5' style={{ width: '200px' }} onClick={()=>setSuccess(true)}>PAY</button>
      </div>
      {success && <div className='success d-flex justify-content-center align-items-center' >
        <div style={{backgroundColor:'white',width:'25%',height:'75%',borderRadius:'10%',transform:'translateY(170px)',animation:'payment 1s'}} >
                <div className='position-relative' style={{width:'100%',height:'40%',backgroundColor:'black',overflow:'hidden',borderBottom:'5px dashed black'}}>
                  <img src={`/src/assets/images/${moviedeials[0].cover}`} alt="" style={{width:'100%'}} />
                </div>
                <GoVerified className='d-flex justify-content-center w-100 mt-3' style={{fontSize:'50px',color:'green'}}/><br/>
                <h5 className='text-center text-dark'>Thank you </h5>
                <p className='text-center text-dark' style={{fontSize:'12px'}}>Your ticket was booked successfully</p>
                <Link to={'/'} className='text-danger mt-5' style={{textDecoration:'none',}}>Back to home</Link>
        </div>
                
      </div>}
    </div>
  )
}

export default Bookright