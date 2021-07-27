import React from 'react';

const Advantages = () => {
  return (
    <div
      className="flex items-center justify-center lg:flex-col bg-left-top bg-contain bg-no-repeat m-0"
      style={{
        backgroundImage: "url('/images/bg-image.png')",
      }}
    >
      <section className="flex items-center justify-center flex-1 lg:ml-0 xl:ml-40 lg:mb-5 lg:mt-0 xl:my-20 lg:w-1/2 xl:w-2/5 lg:order-2">
        <div className="section-wrapper lg:d-block xl:flex xl:flex-col xl:items-center xl:justify-between">
          <div className="advantages-list lg:my-0 lg:mx-auto lg:w-full xl:flex xl:flex-col xl:flex-grow xl:flex-nowrap md:flex-col lg:flex-row ">
            <div className="advantage flex xl:d-block xl:w-full xl:flex-none lg:flex-1 lg:flex-col items-center py-5">
              <img
                className="d-block lg:inline-block mr-3 w-11 h-auto lg:mb-3 lg:mx-8"
                src="/images/programable.png"
                alt="24h"
              />
              <span className="font-semibold sm:text-xs md:text-sm xl:text-base text-xl text-secondary lg:text-center">
                Programable 24h
              </span>
            </div>
            <div className="advantage flex xl:d-block xl:w-full xl:flex-none lg:flex-1 lg:flex-col items-center py-5">
              <img
                className="d-block lg:inline-block mr-3 w-14 xl:w-11 h-auto lg:mb-3 lg:mx-8"
                src="/images/agua.png"
                alt="24h"
              />
              <span className="font-semibold sm:text-xs md:text-sm xl:text-base text-xl text-secondary lg:text-center">
                Agua siempre disponible
              </span>
            </div>
          </div>
          <div className="advantages-list lg:my-0 lg:mx-auto lg:order-2 lg:w-full xl:flex xl:flex-col xl:flex-grow xl:flex-nowrap md:flex-col lg:flex-row">
            <div className="advantage flex xl:d-block xl:w-full xl:flex-none lg:flex-1 lg:flex-col items-center py-5">
              <img
                className="d-block lg:inline-block mr-3 w-14 xl:w-11 h-auto lg:mb-3 lg:mx-8"
                src="/images/cantidad.png"
                alt="24h"
              />
              <span className="font-semibold sm:text-xs md:text-sm xl:text-base text-xl text-secondary lg:text-center">
                Cantidad personalizable
              </span>
            </div>
            <div className="advantage flex xl:d-block xl:w-full xl:flex-none lg:flex-1 lg:flex-col items-center py-5">
              <img
                className="d-block lg:inline-block mr-3 w-14 xl:w-11 h-auto lg:mb-3 lg:mx-8"
                src="/images/function.png"
                alt="24h"
              />
              <span className="font-semibold sm:text-xs md:text-sm xl:text-base text-xl text-secondary lg:text-center">
                Historial de las comidas
              </span>
            </div>
          </div>
          <div className="advantages-list lg:my-0 lg:mx-auto lg:order-2 lg:w-full xl:flex xl:flex-col xl:flex-grow xl:flex-nowrap md:flex-col lg:flex-row">
            <div className="advantage flex xl:d-block xl:w-full xl:flex-none lg:flex-1 lg:flex-col items-center py-5">
              <img
                className="d-block lg:inline-block mr-3 w-14 xl:w-11 h-auto lg:mb-3 lg:mx-8"
                src="/images/facil.png"
                alt="24h"
              />
              <span className="font-semibold sm:text-xs md:text-sm xl:text-base text-xl text-secondary lg:text-center">
                Fácil de usar y lavar
              </span>
            </div>
            <div className="advantage flex xl:d-block xl:w-full xl:flex-none lg:flex-1 lg:flex-col items-center py-5">
              <img
                className="cursor-pointer animate-bounce d-block lg:inline-block mr-3 w-14 xl:w-11 h-auto lg:mb-3 lg:mx-8"
                src="/images/app.png"
                alt="24h"
              />
              <span className="cursor-pointer font-semibold sm:text-xs md:text-sm xl:text-base text-xl text-secondary lg:text-center">
                App para iOS y Android
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="flex-1 lg:mr-0 xl:mr-40 xl:my-20 lg:order-1 product-image lg:w-1/2 2xl:w-3/5 xl:w-3/5 lg:mb-2">
        <img
          className="cursor-pointer flex lg:items-center lg:justify-center w-full h-auto max-w-5xl"
          src="/images/disp_mobile.png"
          alt="Kibus"
        />
      </section>
    </div>
  );
};

export default Advantages;
