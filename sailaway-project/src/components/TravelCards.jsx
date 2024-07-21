import { travelCards } from "../data"

const TravelCards = () => {

    const TravelCard = ({ img, id, headerText, text, alt } ) => {
        return (
            <div className="card" key={id}>
                <img src={img} alt={alt} />
                <h5>{headerText}</h5>
                <p>{text}</p>
                <button></button>
            </div>
        )
    }


    return (
        <section className="bg-white w-screen h-full px-48">
            <div className="py-14">
                <h5 className="text-gray-500 text-left pb-2">Start planning</h5>
                <h2 className="text-left text-black text-6xl " style={{ fontFamily: 'Lexend' }}>Where do you want to go?</h2>
            </div>
            <div className="w-full h-[vh-80] grid grid-cols-3 gap-6 z-40 my-20 text-black">
                {console.log(travelCards)}
                {travelCards.map((card, i) => {
                    return <TravelCard
                        key={card.id}
                        img={card.img}
                        id={card.id}
                        headerText={card.headerText}
                        text={card.text}
                        alt={card.alt}
                    />
                }
                )}
            </div>

        </section>
    )

}
export default TravelCards