import { useState, useEffect } from 'react';
import { foodSlide } from '../data';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const FoodSlider = () => {
  const [slider, setSlider] = useState(foodSlide);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = slider.length - 1;
    if (index < 0) setIndex(lastIndex);
    if (index > lastIndex) setIndex(0);
  }, [index, slider]);

  return (
    <section className="relative pt-64 pb-32">
      <div
        className="absolute overflow-hidden xl:-top-40 -top-52 bottom-32 sm:inset-x-10 md:inset-x-52 lg:inset-x-80 inset-x-96 w-auto h-full max-h-96 flex items-stretch justify-center bg-white rounded-lg shadow-lg bg-contain"
        style={{
          backgroundImage: "url('/images/bg-image.png')",
        }}
      >
        <div className="relative h-full w-full text-center flex">
          {slider.map((recipe, recipeIndex) => {
            const { id, title, info, image } = recipe;
            let position = 'next-slide-food';
            if (recipeIndex === index) {
              position = 'active-slide-food';
            }
            if (
              recipeIndex === index - 1 ||
              (index === 0 && recipeIndex === slider.length - 1)
            ) {
              position = 'last-slide-food';
            }
            if (recipeIndex === 2) {
              return (
                <article
                  key={id}
                  className={`absolute w-full inset-x-0 inset-y-0 mx-0 flex flex-col ease-in duration-100 items-center text-center mb-20 ${position}`}
                >
                  <img
                    className="sm:w-60 md:w-72 lg:w-60 xl:w-72 w-60 max-w-md h-auto"
                    src={image}
                    alt="Kibus"
                  />
                  <button
                    onClick={() => {
                      const footerId = document.getElementById('footer');
                      footerId.scrollIntoView({
                        behavior: 'smooth',
                        block: 'end',
                        inline: 'nearest',
                      });
                    }}
                    className="animate-pulse bg-gray-light lg:mb-4 flex items-center justify-center lg:w-11/12 font-bold rounded-full text-base text-white py-1 xl:my-1 my-4 px-8 capitalize transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  >
                    tu receta&nbsp;&nbsp;
                    <span className="text-3xl">&rsaquo;</span>
                  </button>
                  <p className="not-italic font-normal text-base lg:text-sm lg:px-2 text-black-light">
                    {info}
                  </p>
                </article>
              );
            }
            return (
              <article
                key={id}
                className={`absolute w-full inset-x-0 inset-y-0 mx-0 flex flex-col ease-in duration-100 items-center text-center mb-20 ${position}`}
              >
                <img
                  className="sm:w-60 md:w-72 lg:w-60 xl:w-72 w-60 max-w-md h-auto"
                  src={image}
                  alt="Kibus"
                />
                <h3 className="font-bold lg:text-base xl:text-xl 2xl:text-2xl text-3xl text-black xl:my-3 my-5">
                  {title}
                </h3>
                <p className="not-italic font-normal text-base lg:text-sm lg:px-2 text-black-light">
                  {info}
                </p>
              </article>
            );
          })}
        </div>
      </div>
      <button
        onClick={() => setIndex(index - 1)}
        className="2xl:visible invisible prev sm:left-4 md:left-16 lg:left-72 xl:-top-3 xl:left-80 2xl:-top-4 2xl:left-72 absolute grid place-items-center -translate-y-2/4 cursor-pointer"
      >
        <FontAwesomeIcon
          className=" text-black-light hover:text-orange-light sm:text-3xl lg:text-3xl text-3xl"
          icon={faChevronLeft}
        />
      </button>
      <button
        onClick={() => setIndex(index + 1)}
        className="2xl:visible invisible next sm:right-4 md:right-16 lg:right-72 xl:-top-3 xl:right-80 2xl:-top-4 2xl:right-72 absolute grid place-items-center -translate-y-2/4 cursor-pointer"
      >
        <FontAwesomeIcon
          className="text-black-light hover:text-orange-light sm:text-3xl lg:text-3xl text-3xl"
          icon={faChevronRight}
        />
      </button>
    </section>
  );
};

export default FoodSlider;
