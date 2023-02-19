import React from 'react'
import Report from './Report'

function HomeDescription() {
    return (
        <>
        <div className='flex flex-col my-14 justify-center text-justify px-4 py-10'>
            <p className='font-vazir font-bold text-lg my-3 dir-rtl'>
                سلام... جهت دیدن ورژن های مختلف نحوه نمایش شرایط آب و هوا ، از منوی بالا ورژن مورد نظر خود را انتخاب کنید
            </p>
        </div>
        <Report/>
        </>
    )
}

export default HomeDescription