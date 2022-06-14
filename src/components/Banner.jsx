import {Carousel}  from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./buyerOrders.css";

const Banner = () => {
  return (
    <div className="bannerdiv">
        <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={2000}
        >

        <div>
            <img loading='lazy' src="https://media.istockphoto.com/photos/women-is-holding-handbag-near-luxury-car-picture-id1271796113?b=1&k=20&m=1271796113&s=170667a&w=0&h=9vvvXq3GIokXs66KpwgKfJoIDYyQW9TEBXOWZSXhzX0=" alt="LV bag" />
        </div>
        <div>
            <img loading='lazy' src="https://www.pixelstalk.net/wp-content/uploads/2016/05/Laptop-Wallpaers-HD.jpg" alt="Laptop" />
        </div>
        <div>
            <img loading='lazy' src="https://i0.wp.com/photofocus.com/wp-content/uploads/2021/09/Apple_iPhone-13-Pro_New-Camera-System_09142021.jpg?fit=2560%2C1440&ssl=1" alt="Iphones" />
        </div>

        </Carousel>
        
        </div>
  )
}

export default Banner