import { useState } from 'react';
import '../assets/styles/Carousel.css'


interface Slide {
  company: string;
  description: string;
  person: string;
  image: string;
}
const Carousel = ({ slides }: { slides: Slide[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="w-100 overflow-hidden p-2">
      <div className="d-flex overflow-hidden">
        {slides.map((slide, index) => (
          <div key={index} id={`${index}`} className="slide w-100 d-flex flex-shrink-0">
            <div className="desc d-flex flex-column align-items-start">
              <h2>{slide.company}</h2>
              <p>
                {slide.description}
              </p>
              <p>{slide.person}</p>
            </div>
            <img alt="img" className="d-block flex-shrink-1" src={slide.image}></img>
          </div>
        ))}
      </div>
      <div className='d-flex gap-1 py-2 align-items-center'>
        <a onClick={prevSlide} href={`#${activeIndex >= 0 ? activeIndex : activeIndex}`}>
          <i className="bi bi-arrow-left-circle fs-2"></i>
        </a>
        <div className='d-flex justify-content-center align-items-center page-counter m-0 text-primary rounded-circle border border-primary border-2'>
          <span>{`${activeIndex + 1}/${slides.length}`}</span>
        </div>
        <a onClick={nextSlide} href={`#${activeIndex <= slides.length ? activeIndex : activeIndex}`}>
          <i className="bi bi-arrow-right-circle fs-2"></i>
        </a>
      </div>
    </div>
  );
};
export default Carousel;
