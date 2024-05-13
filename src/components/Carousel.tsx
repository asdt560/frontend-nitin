import { useState, useRef } from 'react';
import { flushSync } from 'react-dom';
import '../assets/styles/Carousel.css'


interface Slide {
  company: string;
  description: string;
  person: string;
  image: string;
}
const Carousel = ({ slides }: { slides: Slide[] }) => {
  const selectedRef = useRef<HTMLDivElement>(null);
  const [slide, setSlide] = useState(0); 
  
  const nextSlide = () => {
    flushSync(() => {
      if (slide < slides.length - 1) {
        setSlide(slide + 1);
      } else {
        setSlide(slides.length - 1);
      }
    })
    if (selectedRef.current) {
      selectedRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  };
  const prevSlide = () => {
    flushSync(() => {
      if (slide > 0) {
        setSlide(slide - 1);
      } else {
        setSlide(0);
      }
    })
    if (selectedRef.current) {
      selectedRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  };
  return (
    <div className="w-100 overflow-hidden p-2">
      <div className="d-flex slide-holder overflow-hidden">
        {slides.map((item, index) => (
          <div key={index} ref={slide === index ?
            selectedRef :
            null
          } className="slide w-100 d-flex flex-shrink-0">
            <div className="desc d-flex w-100 flex-column align-items-start">
              <h2>{item.company}</h2>
              <p>
                {item.description}
              </p>
              <p>{item.person}</p>
            </div>
            <img alt="img" className="d-block flex-shrink-1" src={item.image}></img>
          </div>
        ))}
      </div>
      <div className='d-flex gap-1 py-2 align-items-center'>
        <i className="bi bi-arrow-left-circle fs-1 text-primary" onClick={prevSlide}></i>
        <div className='d-flex justify-content-center align-items-center page-counter m-0 text-primary rounded-circle border border-primary border-2'>
          <span>{`${slide + 1}/${slides.length}`}</span>
        </div>
        <i className="bi bi-arrow-right-circle fs-1 text-primary" onClick={nextSlide}></i>
      </div>
    </div>
  );
};
export default Carousel;
