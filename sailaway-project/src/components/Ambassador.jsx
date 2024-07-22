import { useState } from 'react'
import { AmbassadorTabs } from '../data'
import AmbassadorImg1 from '../assets/ambassador-img-1.jpg'
import NavLogo from './common/NavLogo'

const Ambassador = () => {

    const InfoPanel = () => {

       const [tabState, setTabState] = useState(0)

       const handleTabClick = (index) => {
        setTabState(index);
        console.log(tabState)
       }

        return(
            <section className='w-full py-7 text-black'>
                <div className='grid grid-cols-3 bg-purple-200 font-bold'> 
                   {console.log(AmbassadorTabs)}
                   {AmbassadorTabs.map((tab, i) => {
                    return(
                        <div 
                            className={`h-full py-1 bg-purple-200 border-r-4 border-r-purple-100 last-of-type:border-r-0 transition ease-out duration-200 ${tabState === i ? ' bg-gradient-to-l from-purple-500 to-sky-600 text-white' : 'bg-transparent'}`}
                            key={tab.id} 
                            onClick={() => handleTabClick(i)}
                        >{tab.tabText}</div>
                    ) 
                   })}
                </div>
                <div className='w-full h-full border-r border-l border-b p-5 border-gray-400'>
                    {AmbassadorTabs[tabState].text}
                </div>
            </section>
        )
    }

    return (
        <div className="bg-purple-100 w-screen h-full pt-6">
            <div className="h-full grid grid-cols-3 pt-12">
                <img src={AmbassadorImg1} className="h-full col-span-1 rounded-tr-3xl object-cover object-right"></img>
                <div className="col-span-2 px-20">
                    <div className='w-fit flex flex-col items-start'>
                        <h5 className='gradient-text text-2xl font-bold' style={{fontFamily: 'Carter One'}}>PlanetPunk</h5>
                        <div className='flex items-baseline'>
                            <p className='text-black font-semibold mr-1 text-xs'>by</p>
                            <NavLogo size='sm' logoWidth='6' dark='dark' ></NavLogo>
                        </div>
                    </div>
                    <h3 className='gradient-text h-max text-5xl py-6 text-left font-extrabold tracking-wider'>Be part of something greater, starting now</h3>
                    <p className='text-black text-left text-xl pt-1'><strong>PlanetPunk</strong> by <strong>SailAway</strong> provides you with the opportunity to contribute to our global community whilst travelling the world. What's better? Contribute, and get paid.</p>
                    <InfoPanel></InfoPanel>
                </div>
            </div>
        </div>
    )
}
export default Ambassador