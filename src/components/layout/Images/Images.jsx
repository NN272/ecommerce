import React from 'react'

const Images = () => {
    return (
        <div className='flex justify-around' style={{width: "50%"}}>
            <div className="w-sm h-[32rem] bg-slate-100 border"></div>
            <div className="flex gap-3 lg:flex-col lg:w-14">
                <button className="h-16 w-14 shrink-0 overflow-hidden bg-slate-100 border transition">
                    <div className="h-full w-full object-cover"></div>
                </button>
                <button className="h-16 w-14 shrink-0 overflow-hidden bg-slate-100 border transition">
                    <div className="h-full w-full object-cover"></div>
                </button>
                <button className="h-16 w-14 shrink-0 overflow-hidden bg-slate-100 border transition">
                    <div className="h-full w-full object-cover"></div>
                </button>
                <button className="h-16 w-14 shrink-0 overflow-hidden bg-slate-100 border transition">
                    <div className="h-full w-full object-cover"></div>
                </button>
                <button className="h-16 w-14 shrink-0 overflow-hidden bg-slate-100 border transition">
                    <div className="h-full w-full object-cover"></div>
                </button>
            </div>
        </div>
    )
}

export default Images;