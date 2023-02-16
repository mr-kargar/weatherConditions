import React from 'react'

function Footer() {

  return (
    
    <div className="flex flex-col-reverse md:flex-row items-center justify-center container max-w-6xl bottom-0 py-2 px-4 mx-auto shadow gap-4">
        <strong>Developed by Amin Kargar &copy; {(() => new Date().getFullYear())()} </strong>
        
          <a href='https://www.visualcrossing.com/' target="_blank" rel='noreferrer'>
          <img src={process.env.PUBLIC_URL+"/images/vslogo.png"} alt="https://www.visualcrossing.com/" className='inline-block h-10 w-50'/></a> 
    </div>
  )
}

export default Footer