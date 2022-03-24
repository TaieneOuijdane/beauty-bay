import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../assets/slide1.png'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'
import '../Styles/CarouselAcc.css'
function CarouselAcc({panierOpen,activeCategory}){
    return !panierOpen && activeCategory=== ''?(
        <Carousel variant="dark">
          <Carousel.Item className='carousel-item'>
            <img className="d-block w-100 " src={slide1} alt="First slide"/>
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    ): (<div></div>)
}

export default CarouselAcc;