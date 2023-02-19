import React from 'react'

function Report() {
    return (
        <div className='flex flex-col my-10 p-4 font-vazir items-center dir-rtl shadow'>
            
                <p className='mb-4 text-justify'>
                    ممنونم که وقت گذاشتید و پروژه من رو دیدید. برای کمک به پیشرفت و رفع نواقص لطفا باگ هایی که مشاهده می کنید را ثبت کنید.
                    از شنیدن پیشنهادها و  انتقادهای شما خوشحال میشم
                </p>
               <a href='https://survey.porsline.ir/s/Zl26imEt' className='w-full flex justify-center md:w-2/6  py-2 rounded-lg bg-rose-400 font-bold text-white md:hover:bg-white md:hover:text-rose-400 border-rose-400 border-2' rel="noreferrer" target={'_blank'}>ثبت گزارش</a>
        </div>
    )
}

export default Report