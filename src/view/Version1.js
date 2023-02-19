import React, { useEffect, useState } from 'react';
import { currentWeather } from '../api/version1/currentWeather';
import DailyWeather from '../component/version1/DailyWeather';
import Error from '../component/version1/Error';
import LoadingResultWeather from '../component/version1/LoadingResultWeather';
import ResultWeather from '../component/version1/ResultWeather';
import { NavLink } from 'react-router-dom'


function Version1() {
  const themeColor = localStorage.getItem('themeColor') ? localStorage.getItem('themeColor') : 'sky';



  const [city, setCity] = useState(localStorage.getItem('defaultCity') ? localStorage.getItem('defaultCity') : '');
  const [cityWeather, setCityWeather] = useState();
  const [loading, setLoading] = useState(localStorage.getItem('defaultCity') ? false : true);
  const [flag, setFlag] = useState(false);

  const getResult = () => {

    const cityNameInput = document.getElementById("cityNameInput");
    if (cityNameInput.value !== '' && cityNameInput.value === city) {
      setFlag(!flag);
      setLoading(false);
    } else if (cityNameInput.value !== '') {
      setCity(cityNameInput.value);
      setLoading(false);
    }
  }

  useEffect(() => {
    (async () => {
      setCityWeather(await currentWeather(city));
      setLoading(true);
    })();
  }, [city, flag])

  return (
    <>
      <div className="flex items-center justify-center container max-w-6xl gap-1 md:gap-4 py-4 shadow ">
        <input type="text" id="cityNameInput" placeholder={localStorage.getItem('defaultCity') ? localStorage.getItem('defaultCity') + ' is default city' : 'Enter name of your city'} className={`p-2 border-2 rounded-lg border-${themeColor}-500`}>
        </input>
        <button className={`bg-${themeColor}-500 text-white md:font-bold px-4 md:px-8 py-2 text-lgl md:text-2xl rounded-lg md:hover:bg-white md:hover:text-${themeColor}-500 border-2 border-${themeColor}-500`} onClick={() => getResult()}>Show</button>
        <div><NavLink to={"/setting"} className='hover:text-blue-500'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h:6 md:w-10 md:h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </NavLink>
        </div>
      </div>

      {(loading) ?
        ((cityWeather && cityWeather !== 1) ?
          (
            <>
              <ResultWeather cityWeather={cityWeather} />
              <DailyWeather props={cityWeather} />
            </>
          )
          :
          ((cityWeather === 1) ?
            <Error />
            :
            <div></div>
          )
        )
        :
        <LoadingResultWeather />
      }

    </>
  )
}

export default Version1