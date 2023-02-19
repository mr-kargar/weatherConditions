import React from 'react'

function DailyWeather({ props }) {
    const themeColor = localStorage.getItem('themeColor') ? localStorage.getItem('themeColor') : 'sky';
    const nameOfDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'saturday'];

    return (
        <div>
            <div className="flex items-center justify-center font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <h2>Today and next 14 days</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>

            </div>

            <div className="flex overflow-x-auto m-4 gap-4">

                {props.days.map(day => {
                    const date = new Date(day.datetime);

                    return (
                        <div className={`flex border-2 rounded-lg  border-${themeColor}-400 p-2 mb-2`}>
                            <div className="flex flex-col justify-center items-center my-2 gap-1">
                                <h6 className='inline-block font-bold px-10'>{nameOfDays[date.getDay()]}</h6>
                                <h6 >{(day.datetime)}</h6>
                                <img src={process.env.PUBLIC_URL + "/icons/" + day.icon + ".svg"} alt={day.icon} className="w-20 h-20" />
                                <h5>{day.conditions}</h5>
                                <h4>min : {day.tempmin}&deg;</h4>
                                <h4>max : {day.tempmax}&deg;</h4>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default DailyWeather