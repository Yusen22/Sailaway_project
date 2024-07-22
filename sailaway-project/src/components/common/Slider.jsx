import Slider from "react-slick"

const SimpleSlider = ({ children }) => {

const Arrow = ({className, style, onClick}) => {
    return (
        <div
          className={className}
          style={{ ...style, display: "block", color: "blue" }}
          onClick={onClick}
        />
      );
    }


const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        swipeToSlide: true,
        
    };

    return (
        <div className="slider-container ">
            <Slider {...settings}>{children}</Slider>
        </div>
    )
}
export default SimpleSlider