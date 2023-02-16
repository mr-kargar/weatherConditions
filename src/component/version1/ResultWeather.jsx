import React, { useState } from 'react'




function ResultWeather({cityWeather}) {

    const [show, setShow] = useState(true);

    const close = () => {
        setShow(false);
    }

    return (

        <div className='container max-w-6xl p-4 '>
            <div className={`border-2 border-sky-400 rounded-t-2xl ${show ? 'block' : 'hidden'}`}  >
                <div className="flex flex-col item-center ">
                    <div className=" flex justify-between bg-sky-400 rounded-t-xl py-2 px-6">
                        <div >
                            <strong>City :</strong>
                            <strong className='ml-2 text-pink-600'>{cityWeather.resolvedAddress}</strong>
                        </div>
                        <div className='flex items-center gap-4'>
                            <strong className='hidden md:flex '>Update Time : {cityWeather.currentConditions.datetime}</strong>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 hover:text-red-600" onClick={() => close()}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>

                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row items-center justify-between py-4 px-16'>
                        <h5 className='font-bold'>Current condition</h5>
                        <img src={process.env.PUBLIC_URL + "/icons/" + cityWeather.currentConditions.icon + ".svg"} alt={cityWeather.currentConditions.icon} className=' h-32 w-32' />
                        <div className='flex flex-col lg:flex-row md:gap-8 ml-10'>
                            <div className="content">
                                <span className='font-bold mr-2'>Weather condition : </span>
                                <span className='font-medium text-pink-600'>{cityWeather.currentConditions.conditions}</span>
                            </div>
                            <div className="content">
                                <span className='font-bold mr-2'>Temperature :</span>
                                <span className='font-medium text-pink-600'>{cityWeather.currentConditions.temp}</span>
                            </div>
                            <div className="content">
                                <span className='font-bold mr-2'>Humidity : </span>
                                <span className='font-medium text-pink-600'>{cityWeather.currentConditions.humidity} %</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default ResultWeather