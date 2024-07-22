import { useState } from "react";

import { heroColumn } from "../data"

const Hero = () => {

    const [hoveredColumn, setHoveredColumn] = useState(null);

    const handleHover = (index) => setHoveredColumn(index)


    return (
        <section className="relative flex flex-col justify-center w-screen h-[100vh]">
            <div className="absolute flex items-center left-0 right-0 top-40 mx-auto z-20 w-9/12">
                <h3 className="relative text-center leading-snug text-6xl text-white font-extrabold tracking-wide drop-shadow-lg" style={{ fontFamily: 'Lexend' }}>Choose your perfect getaway from over 500 destinations</h3>
            </div>

            <div className="bg-slate-500 overflow-hidden grid grid-cols-3">
                {heroColumn.map((column, i) => {
                    return (
                        <div
                            className="relative"
                            key={column.id}
                            onMouseEnter={() => handleHover(i)}
                            onMouseLeave={() => handleHover(null)}
                        >
                            <div className="z-7 absolute bg-slate-500/50 min-w-full min-h-full hover:bg-slate-500/20 transition-all ease-in-out duration-500" />
                            <div>
                                <p className={`absolute w-2/3 uppercase px-10 left-0 right-0 bottom-8 font-senubold text-left text-white text-3xl tracking-wide z-12 transition-all ease-in-out duration-500 ${hoveredColumn === i ? 'drop-shadow-lg ' : 'drop-shadow-none'}`} style={{ fontFamily: 'Poppins' }}>{column.text}</p>
                                <i
                                    className={`fa fa-arrow-right absolute z-7 bottom-0 right-0 mb-10 mr-14 text-4xl text-white transition-all ease-out duration-300 ${hoveredColumn === i ? 'translate-x-3' : 'translate-x-0'}`}
                                ></i>
                            </div>
                            <img src={column.img} className="z-2 min-w-full min-h-full"></img>

                        </div>
                    )
                })}
            </div>
        </section>
    )
}
export default Hero