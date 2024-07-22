import video from '../assets/travel-video.mp4'

import SecondButton from "./common/SecondButton"

const VideoSection = () => {
    return (
        <section className="w-screen my-20 mx-auto relative">
            <video className='h-[92vh] w-full object-cover object-center' src={video} autoPlay loop muted/>
            <div className="absolute-centered-h top-60 px-48 text-center">
                <h3 className='text-6xl text-white font-bold uppercase drop-shadow-md px-20' style={{fontFamily: 'Climate Crisis'}}>Global Travel Awards Winner 2023</h3>
                <p></p>
                <SecondButton>Find out why </SecondButton>
            </div>
        </section>
    )
}

export default VideoSection