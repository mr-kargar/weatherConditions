import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Setting() {
  const [defaultCityInput, setDefaultCityInput] = useState('');
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedColor, setSelectedColor] = useState('sky');
  const [showSuccessChangeColor, setShowSuccessChangeColor] = useState(false);
  const [showClearDefaultSuccess, setShowClearDefaultSuccess] = useState(false);

  const setDefaultCity = () => {
    if (defaultCityInput) {
      localStorage.setItem('defaultCity', defaultCityInput);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);

    } else {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    }
  }

  const clearDefault = () => {
    localStorage.removeItem('defaultCity');
    setShowClearDefaultSuccess(true);
    setTimeout(() => {
      setShowClearDefaultSuccess(false);
    }, 5000);
  }

  const successChangeColor = () => {
    setShowSuccessChangeColor(true);
    setTimeout(() => {
      setShowSuccessChangeColor(false);
    }, 5000);
  }


  return (
    <div>
      <div className='flex items-center justify-between px-4 '>
        <h2 className='mt-4 font-bold text-blue-500'>settings for version 1</h2>
        <Link to={"/1"}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 hover:text-red-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        </Link>

      </div>

      <div className='flex flex-col gap-4 md:flex-row justify-around container py-8 px-4'>
        <div className="flex relative flex-col items-center   gap-4 border-2 rounded-lg p-12">
          <form className='flex flex-col lg:flex-row items-center gap-2'>
            <label htmlFor="cityName " className='font-bold'>Enter your default city :</label>
            <input type="text" id="cityName" placeholder={localStorage.getItem('defaultCity') ? localStorage.getItem('defaultCity') + ' is your default city' : 'Enter name of your city'} className={`px-4 py-2 border-2 rounded-lg border-${localStorage.getItem('themeColor') ? localStorage.getItem('themeColor') : 'sky'}-500`}
              onChange={(e) => setDefaultCityInput(e.target.value)}>
            </input>
          </form>
          <div>
            <div className='flex gap-4' >
              <button className={`bg-${localStorage.getItem('themeColor') ? localStorage.getItem('themeColor') : 'sky'}-500 text-white font-bold px-4 md:px-8 py-1 rounded-lg md:hover:bg-white md:hover:text-${localStorage.getItem('themeColor') ? localStorage.getItem('themeColor') : 'sky'}-500 border-2 border-${localStorage.getItem('themeColor') ? localStorage.getItem('themeColor') : 'sky'}-500`}
                onClick={() => setDefaultCity()}>Set default</button>
              <button className='bg-red-500 text-white font-bold px-4 md:px-8 py-1 rounded-lg md:hover:bg-white md:hover:text-red-500 border-2 border-red-500'
                onClick={()=> clearDefault()}>Clear default</button>
            </div>
            <div className={`${showSuccess ? 'block' : 'hidden'} absolute top-0 right-1`}>
              <div className={`bg-green-100 border border-green-400 text-green-700 px-4 py-1 rounded relative mt-2`} role="alert">
                <span className="block sm:inline">Your default city is {localStorage.getItem('defaultCity')}</span>
              </div>
            </div>
            <div className={`${showError ? 'block' : 'hidden'} absolute top-0 right-1`}>
              <div className={`flex justify-center bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative mt-2`} role="alert">
                <span>Enter a city name</span>
              </div>
            </div>
            <div className={`${showClearDefaultSuccess ? 'block' : 'hidden'} absolute top-0 right-1`}>
              <div className={`bg-green-100 border border-green-400 text-green-700 px-4 py-1 rounded relative mt-2`} role="alert">
                <span className="block sm:inline">Default city is clear</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex relative flex-col items-center gap-4 border-2 rounded-lg p-12">
          <form className='flex items-center flex-col lg:flex-row gap-2'>
            <label htmlFor="colorId" className='font-bold'>Select a color for theme : </label>
            <select name='color' id='colorId' onChange={e => setSelectedColor(e.target.value)} className={`px-4 py-2 border-2 rounded-lg border-${selectedColor}-500  text-${selectedColor}-500 font-semibold text-lg`}>
              <option value='sky' className='text-sky-500 hover:bg-sky-500 hover:text-white font-semibold text-lg  focus:border-red-700'>Sky</option>
              <option value='blue' className='text-blue-500 hover:bg-blue-500 hover:text-white font-semibold text-lg'>Blue</option>
              <option value='gray' className='text-gray-500 hover:bg-gray-500 hover:text-white font-semibold text-lg'>Gray</option>
              <option value='zinc' className='text-zinc-500 hover:bg-zinc-500 hover:text-white font-semibold text-lg'>Zinc</option>
              <option value='neutral' className='text-neutral-500 hover:bg-neutral-500 hover:text-white font-semibold text-lg'>Neutral</option>
              <option value='stone' className='text-stone-500 hover:bg-stone-500 hover:text-white font-semibold text-lg'>Stone</option>
              <option value='orange' className='text-orange-500 hover:bg-orange-500 hover:text-white font-semibold text-lg'>Orange</option>
              <option value='amber' className='text-amber-500 hover:bg-amber-500 hover:text-white font-semibold text-lg'>Amber</option>
              <option value='yellow' className='text-yellow-500 hover:bg-yellow-500 hover:text-white font-semibold text-lg'>Yellow</option>
              <option value='lime' className='text-lime-500 hover:bg-lime-500 hover:text-white font-semibold text-lg'>Lime</option>
              <option value='green' className='text-green-500 hover:bg-green-500 hover:text-white font-semibold text-lg'>Green</option>
              <option value='teal' className='text-teal-500 hover:bg-teal-500 hover:text-white font-semibold text-lg'>Teal</option>
              <option value='cyan' className='text-cyan-500 hover:bg-cyan-500 hover:text-white font-semibold text-lg'>Cyan</option>
              <option value='slate' className='text-slate-500 hover:bg-slate-500 hover:text-white font-semibold text-lg'>Slate</option>
              <option value='indigo' className='text-indigo-500 hover:bg-indigo-500 hover:text-white font-semibold text-lg'>Indigo</option>
              <option value='violet' className='text-violet-500 hover:bg-violet-500 hover:text-white font-semibold text-lg'>Violet</option>
              <option value='purple' className='text-purple-500 hover:bg-purple-500 hover:text-white font-semibold text-lg'>Purple</option>
              <option value='fuchsia' className='text-fuchsia-500 hover:bg-fuchsia-500 hover:text-white font-semibold text-lg'>Fuchsia</option>
              <option value='pink' className='text-pink-500 hover:bg-pink-500 hover:text-white font-semibold text-lg'>Pink</option>
              <option value='rose' className='text-rose-500 hover:bg-rose-500 hover:text-white font-semibold text-lg'>Rose</option>
            </select>
          </form>
          <button className={`bg-${localStorage.getItem('themeColor') ? localStorage.getItem('themeColor') : 'sky'}-500 text-white font-bold px-4 md:px-8 py-1 rounded-lg md:hover:bg-white md:hover:text-${localStorage.getItem('themeColor') ? localStorage.getItem('themeColor') : 'sky'}-500 border-2 border-${localStorage.getItem('themeColor') ? localStorage.getItem('themeColor') : 'sky'}-500`} onClick={() => { localStorage.setItem('themeColor', selectedColor); successChangeColor() }}>Change</button>
          <div className={` ${showSuccessChangeColor ? 'block' : 'hidden'} absolute top-0 right-1`}>
            <div className={`flex justify-center bg-green-100 border border-green-400 text-green-700 px-4 py-1 rounded relative mt-2`} role="alert">
              <span>color is changed</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Setting