import Carousel from 'react-bootstrap/Carousel';
import '../Carousel2/carousel2-style.css'

function Carousel2() {
  return (
    <Carousel fade interval={3500}>

      <Carousel.Item>
        <img
          className="d-block w-100 img-carousel2"
          src="https://scontent.fsvq2-1.fna.fbcdn.net/v/t39.30808-6/309329992_5626504324061880_5200776287186255637_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_ohc=ITTGGfVR2c0AX9uTg25&_nc_ht=scontent.fsvq2-1.fna&oh=00_AT-PVPAwiQ5-SIpG5yD72t-bYI2Mpy4-dRff2Kdoscr7yA&oe=634A17D4"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100  img-carousel2"
          src="https://scontent.fsvq2-2.fna.fbcdn.net/v/t39.30808-6/307448070_5606434532735526_8499200090872516919_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0debeb&_nc_ohc=wMChsfX-9CoAX9oPNYn&_nc_ht=scontent.fsvq2-2.fna&oh=00_AT8BiPxXX7HmTmThIu4uCtEUuY0fjx7ZOFnOMZOOiWAMnA&oe=634960F0"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100  img-carousel2"
          src="https://scontent.fsvq2-2.fna.fbcdn.net/v/t39.30808-6/309371477_5626506034061709_5549777769126508216_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_ohc=sK-zHB2iJBQAX9eja2Q&_nc_ht=scontent.fsvq2-2.fna&oh=00_AT_KjNjaYkXowwy4U5LEbXaCDZFvkbgb2IaaN0oJB1qprQ&oe=634972CC"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100  img-carousel2"
          src="https://scontent.fsvq2-1.fna.fbcdn.net/v/t39.30808-6/305808860_5606435639402082_1892510715802570244_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_ohc=rklq4pKxhAAAX_-cDPs&_nc_ht=scontent.fsvq2-1.fna&oh=00_AT_D6EnoNVDT6tN-yYKF1ULSM8Z18akVur3v7gUKZXbyDw&oe=6349B6BB"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100  img-carousel2"
          src="https://scontent.fsvq2-2.fna.fbcdn.net/v/t39.30808-6/309257016_5626504134061899_4326263358822722773_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_ohc=dJ3X0LAnrXcAX9uWpSQ&_nc_ht=scontent.fsvq2-2.fna&oh=00_AT8KKrVLMMacNuvXxHva8UPMajAoJd89RJOxMykIPAAOyQ&oe=6349AAC5"
          alt="Third slide"
        />
      </Carousel.Item>

    </Carousel>
  );
}

export default Carousel2;