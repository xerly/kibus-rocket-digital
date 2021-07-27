import { useEffect, useState } from 'react';
import { slide } from '../data';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';

const Slider = () => {
  const [slider, setSlider] = useState(slide);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = slider.length - 1;
    if (index < 0) setIndex(lastIndex);
    if (index > lastIndex) setIndex(0);
  }, [index, slider]);

  return (
    <div
      className="flex lg:flex-col items-center justify-center bg-contain bg-no-repeat bg-left-top"
      style={{ backgroundImage: "url('/images/icons.png')" }}
    >
      <div className="relative my-8 flex items-center overflow-hidden justify-center flex-1 h-auto">
        <img className="w-9/12" src="/images/stain.png" alt="" />
        {slider.map((slide, slideIndex) => {
          const { id, title, image } = slide;
          let position = 'next-slide opacity-0';
          if (slideIndex === index) {
            position = 'active-slide';
          }
          if (
            slideIndex === index - 1 ||
            (index === 0 && slideIndex === slider.length - 1)
          ) {
            position = 'last-slide opacity-0';
          }
          return (
            <img
              key={id}
              id="slider"
              className={`${position} w-3/4 ease-linear duration-300 absolute inset-y-1/6 inset-x-1/6 rounded-2xl`}
              src={image}
              alt={title}
            />
          );
        })}
        <button
          onClick={() => setIndex(index - 1)}
          className="prev sm:left-14 lg:left-32 xl:left-16 left-12 absolute grid place-items-center -translate-y-2/4 cursor-pointer"
        >
          <FontAwesomeIcon
            className=" text-gray-light hover:text-orange-light sm:text-3xl lg:text-5xl text-3xl"
            icon={faChevronCircleLeft}
          />
        </button>
        <button
          onClick={() => setIndex(index + 1)}
          className="next sm:right-14 lg:right-32 xl:right-16 right-12 absolute grid place-items-center -translate-y-2/4 cursor-pointer"
        >
          <FontAwesomeIcon
            className="text-gray-light hover:text-orange-light sm:text-3xl lg:text-5xl text-3xl"
            icon={faChevronCircleRight}
          />
        </button>
      </div>

      <div className="info my-8 px-3 flex flex-col items-center justify-center flex-1 w-11/12">
        <h1 className="font-bold text-left lg:text-5xl xl:text-4xl 2xl:text-5xl text-7xl mb-8">
          Mejor para ellos, más fácil y cómodo para ti
        </h1>
        <p className="font-normal lg:text-2xl xl:text-base md:text-md text-xl text-black opacity-60 mb-12">
          Con Kibus, nunca tendrás que preocuparte de cómo ofrecer una dieta
          sana y natural a tu perro de forma cómoda y rápida. Nuestro
          dispositivo cocina automáticamente la cantidad exacta en cada comida e
          incluso lo puedes programar a través de la app. Tu perro disfrutará
          comida de casera de primera calidad, con el mínimo esfuerzo.
        </p>
        <div className="w-10/12 flex lg:flex-col items-center justify-center">
          <button
            onClick={() => {
              const footerId = document.getElementById('footer');
              footerId.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'nearest',
              });
            }}
            className="bg-orange lg:mr-0 mr-6 lg:mb-4 w-11/12 font-bold rounded-full lg:text-xl xl:text-xs 2xl:text-base text-xl text-white text-center py-4 px-8 capitalize transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-100"
          >
            reserva ahora
          </button>
          <button
            onClick={() => {
              const footerId = document.getElementById('footer');
              footerId.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'nearest',
              });
            }}
            className="bg-transparent lg:ml-0 ml-6 w-11/12 border flex justify-center items-center border-orange font-bold rounded-full lg:text-xl xl:text-xs 2xl:text-base text-xl text-orange text-center py-4 lg:px-8 xl:px-4 capitalize transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-100"
          >
            quiero saber más
            <img
              className="animate-pulse inline w-5 ml-1"
              src="/images/arrow.png"
              alt=">"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
