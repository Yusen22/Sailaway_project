import { useState } from "react";

import { heroColumn } from "../data"

const Hero = () => {

    const [hoveredColumn, setHoveredColumn] = useState(null);

    const handleHover = (index) => setHoveredColumn(index)


    return (
        <section className="relative flex flex-col justify-center w-screen h-[100vh]">
            <div className="absolute flex items-center left-0 right-0 top-40 mx-auto z-20 w-9/12">
                <h3 className="relative text-center leading-snug text-6xl text-white font-extrabold tracking-wide drop-shadow-lg">Choose your perfect getaway from over 500 destinations</h3>
            </div>

            <div className="bg-slate-500 overflow-hidden grid grid-cols-3">
                {heroColumn.map((column, i) => {
                    return (
                        <div
                            className="relative"
                            key={column.id}
                            onMouseEnter={()=> handleHover(i)}
                            onMouseLeave={() => handleHover(null)}
                        >
                            <div className="z-7 absolute bg-slate-500/50 min-w-full min-h-full hover:bg-transparent transition-all ease-in-out duration-500" />
                            {hoveredColumn === i}
                            <i
                                className={`fa fa-arrow-right absolute z-7 bottom-0 right-0 mb-10 mr-14 text-4xl text-white transition-all ease-out duration-300 ${hoveredColumn === i ? 'translate-x-5' : 'translate-x-0' }`}
                            ></i>
                            <img src={column.img} className="z-1 min-w-full min-h-full"></img>

                        </div>
                    )
                })}
            </div>
        </section>
    )
}
export default Hero