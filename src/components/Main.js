const Main = () => {
  return (
    <div className="bg-white m-0 p-0 pt-16 pb-48 xl:px-16">
      <header className="my-8 xl:px-0 px-16">
        <div
          id="top-logo"
          className="flex md:flex-col xl:items-start justify-between"
        >
          <img className="w-28 h-auto" src="/images/kibus.png" alt="Kibus" />
        </div>
      </header>
      <main className="flex items-center justify-center lg:flex-col xl:px-0 px-16">
        <div className="flex-1 lg:order-2">
          <h1 className="font-bold sm:text-5xl lg:text-7xl xl:text-5xl 2xl:text-7xl text-7xl mb-8">
            Alimentar bien a tu perro es más fácil que nunca
            <span className="text-orange font-bold xl:text-5xl 2xl:text-7xl">
              .
            </span>
          </h1>
          <h2 className="font-bold sm:text-2xl lg:text-2xl xl:text-lg 2xl:text-xl text-black opacity-60 mb-12">
            La nueva alimentación canina ha llegado. Con Kibus, podrás ofrecer a
            tu compañero comida sana, rica y recién cocinada de una forma fácil
            y cómoda.
          </h2>
          <div className="lg:w-full w-10/12 flex lg:flex-col items-center justify-evenly">
            <button
              onClick={() => {
                const sliderId = document.getElementById('slider');
                sliderId.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                  inline: 'nearest',
                });
              }}
              className="bg-orange lg:mr-0 mr-6 lg:mb-4 w-11/12 font-bold rounded-full sm:text-base lg:text-xl xl:text-xs 2xl:text-base text-xl text-white text-center py-4 px-8 capitalize transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-100"
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
              className="bg-transparent lg:ml-0 ml-6 w-11/12 border flex justify-center items-center border-orange font-bold rounded-full sm:text-base lg:text-xl xl:text-xs 2xl:text-base text-xl text-orange text-center py-4 lg:px-8 xl:px-4 capitalize transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-100"
            >
              quiero saber más
              <img
                className="animate-pulse inline w-5 ml-2"
                src="/images/arrow.png"
                alt=">"
              />
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img className="w-full" src="/images/dogwoman.png" alt="Kibus" />
        </div>
      </main>
    </div>
  );
};

export default Main;
