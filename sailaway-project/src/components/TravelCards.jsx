import { travelCards } from "../data"
import SimpleSlider from "./common/Slider"
import Button from "./common/Button"

const TravelCards = () => {

    const TravelCard = ({ img, id, headerText, text, alt }) => {
        return (
            <div className="card" key={id}>
                <img src={img} alt={alt} className="rounded-3xl" />
                <h5 className="uppercase font-bold text-lg tracking-widest py-4">{headerText}</h5>
                <p>{text}</p>
                <Button>
                    Ok
                </Button>
            </div>
        )
    }


    return (
        <section className="bg-white w-screen h-full px-48">
            <div className="pt-14">
                <h5 className="text-gray-500 text-left pb-2">Start planning</h5>
                <h2 className="text-left text-black text-6xl underline" style={{ fontFamily: 'Lexend' }}>Where do you want to go?</h2>
            </div>
            <div className="w-full h-[vh-80] gap-8 z-40 my-20 text-black">
                {console.log(travelCards)}
                <SimpleSlider>
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
                </SimpleSlider>
            </div>

        </section>
    )

}
export default TravelCards