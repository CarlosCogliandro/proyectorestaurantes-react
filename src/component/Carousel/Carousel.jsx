import Carousel from 'react-bootstrap/Carousel';
import '../Carousel/carousel-style.css'

function Carousels() {
  return (
    <Carousel fade interval={4000}>
      <Carousel.Item>
        <img
          className="d-block w-100 img-carousel"
          src="https://buenosairesmarbella.com/wp-content/uploads/2014/06/Buenos-Aires-Marbella-23.jpg"
          alt="buenosaires" 
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-carousel"
          src="https://www.temporarestaurant.com/wp-content/uploads/2017/08/tempora-marbella-bg2.jpg"
          alt="tempora"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-carousel"
          src="https://langolomarbella.com/wp-content/uploads/2022/04/7L0A8877_1.jpg"
          alt="langolo"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;