import { TripsData } from "../data"

import SearchBar from './common/SearchBar'
import Button from "./common/Button"

const Trips = () => {

    const TripCard = ({ img, alt, imgText, title, text, country, icon, duration, cost }) => {
        return (
            <div className="p-4 border text-black rounded-md shadow-md hover:shadow-lg hover:scale-[100.4%]">
                <div className="relative mb-4">
                    <img className="rounded-md" src={img} alt={alt} />
                    <p className="absolute bottom-0 right-0 py-1 px-3 bg-sky-400 rounded-tl-lg text-sm">{imgText}</p>
                </div>
                <h4 className="font-bold tracking-wide uppercase">{title}</h4>
                <p className="text-sm p-4 ">{text}</p>
                <Button>Book now</Button>
                <div className="grid grid-cols-3 items-end text-center text-sky-600 font-bold">
                    <div className="flex items-center justify-center space-x-2 mt-4">
                        <i className='fa fa-globe' />
                        <p>{country}</p>
                    </div>
                    <p>{duration}</p>
                    <p>{cost}</p>
                </div>
            </div>
        )
    }


    return (
        <section className="w-screen px-48 mb-24">
            <div className="mb-8 w-1/2 mx-auto space-y-3 py-5 px-8 rounded-3xl text-black">
                <h2 className="text-6xl tracking-widest font-extrabold">Trips</h2>
                <p>Search below to find the perfect trip for you</p>
                <SearchBar/>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {TripsData.map((trip) => {
                    return (
                        <TripCard
                            img={trip.img}
                            alt={trip.alt}
                            imgText={trip.imgText}
                            title={trip.title}
                            text={trip.text}
                            country={trip.country}
                            icon={trip.icon}
                            duration={trip.duration}
                            cost={trip.cost}
                        />
                    )
                })}
            </div>

        </section>
    )
}
export default Trips