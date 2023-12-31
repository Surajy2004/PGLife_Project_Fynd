import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel";
import third from "../image/3.jpg";

const CarouselDefault = ({ interiorImage, exteriorImage }) => {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000} // Change this value for the auto-play interval
      transitionTime={500} // Change this value for the transition time
    >
      <div>
        <img
          src={exteriorImage}
          alt="Image 1"
          className="h-full max-h-[350px]"
        />
      </div>
      <div>
        <img
          src={interiorImage}
          alt="Image 2"
          className="h-full max-h-[350px] object-cover"
        />
      </div>
      <div>
        <img src={third} alt="Image 3" className="h-full max-h-[350px]" />
      </div>
    </Carousel>
  );
};

export default CarouselDefault;
