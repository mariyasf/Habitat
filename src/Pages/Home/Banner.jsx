import { useState } from 'react';
import b1 from '../../assets/images/b1.jpg'
import b2 from '../../assets/images/b2.jpg'
import b3 from '../../assets/images/b3.jpg'
import b4 from '../../assets/images/b4.jpg'


const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { image: b1, description: "Luxurious hotels offering premium amenities and services for a comfortable stay." },
        { image: b2, description: "Convenient motels designed for travelers on the road, providing simple accommodations and parking facilities." },
        { image: b3, description: "Scenic resorts nestled in exotic destinations, offering relaxation, recreation, and various leisure activities." },
        { image: b4, description: "Charming vacation rentals providing a home-like atmosphere with fully equipped kitchens and spacious living areas." }
    ];

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    return (
        <div className="carousel w-full relative">
            {
                slides.map((slide, index) => (
                    <div key={index}
                        id={`slide${index}`}
                        className={`carousel-item relative w-full h-[500px]
                         ${index === currentSlide ? 'block' : 'hidden'}`}>

                        <img src={slide.image}
                            className="w-full h-[500px]"
                            alt={`Slide ${index + 1}`} />

                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-150"></div>

                        <div className={`absolute top-0 left-0 w-full h-full 
                        flex flex-col justify-center items-center text-white 
                        ${index === currentSlide ? 'fade-in' : 'fade-out'}`}>
                            <p className="mx-auto text-4xl p-40 font-semibold text-center">
                                {slide.description}
                            </p>
                        </div>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <button onClick={prevSlide} className="btn btn-circle">❮</button>
                            <button onClick={nextSlide} className="btn btn-circle">❯</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Banner;
