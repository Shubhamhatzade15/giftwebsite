import React from 'react'
import Image from 'next/image'

const Project = () => {
  return (
    <div className="page3-container" style={{ backgroundColor: 'rgb(253, 253, 253)' }}>
      <div className='page3-box'>
        <div className="card1">
          <div className="pg3-img">
          <Image src="/project-plan.svg" alt="" width={50} height={50}/>
          </div>
          <div className='para-3'>
            <p>Completed Projects</p>
          </div>
          <div className="Number">
            100+
          </div>
          
        </div>
        <div className="card1">
          <div className="pg3-img">
          <Image src="/rating (1).svg" alt="" width={50} height={50}/>
          </div>
          <div className='para-3'>
          <p>    Customer Satisfaction</p>
          </div>
          <div className="Number">
             100%
          </div>
          
        </div>
        <div className="card1">
          <div className="pg3-img">
          <Image src="/raise.svg" alt="" width={50} height={50}/>
          </div>
          <div className='para-3'>
            <p>Raised by Clients</p>
          </div>
          <div className="Number">
            $10M
          </div>
          
        </div>
        <div className="card1">
          <div className="pg3-img">
          <Image src="/timeline 2.svg" alt="" width={50} height={50}/>
          </div>
          <div className='para-3'>
            <p>Years in Business</p>
          </div>
          <div className="Number">
            2 yrs
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default Project