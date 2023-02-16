import React, { useEffect, useState } from 'react';
import { currentWeather } from '../api/version1/currentWeather';
import DailyWeather from '../component/version1/DailyWeather';
import Error from '../component/version1/Error';
import LoadingResultWeather from '../component/version1/LoadingResultWeather';
import ResultWeather from '../component/version1/ResultWeather';

function Version1() {
  const [city, setCity] = useState('');
  const [cityWeather, setCityWeather] = useState();
  const [loading, setLoading] = useState(true);
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
      <div className="flex item-center justify-center container max-w-6xl gap-2 md:gap-4 py-4 shadow ">
        <input type="text" id="cityNameInput" placeholder='Enter name of your city' className='px-3 border-2 rounded-lg border-sky-500'>
        </input>
        <button className='bg-sky-500 text-white font-bold px-4 md:px-8 py-1 text-2xl rounded-lg md:hover:bg-white md:hover:text-sky-500 border-2 border-sky-500' onClick={() => getResult()}>Show</button>
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
            <div ></div>
          )
        )
        :
        <LoadingResultWeather />
      }

    </>
  )
}

export default Version1