const Footer = () => {
  return (
    <footer id="footer" className="bg-black-light p-20">
      <div className="footer-wrapper relative flex justify-between lg:flex-col">
        <img
          onClick={() => {
            const topLogo = document.getElementById('top-logo');
            topLogo.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
              inline: 'nearest',
            });
          }}
          className="cursor-pointer absolute -top-8 w-11 h-9 transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-100"
          src="/images/logo-white.png"
          alt="Kibus"
        />
        <div className="sm:pr-4 xl:pr-6 about flex flex-col sm:w-auto w-96 2xl:w-96 bg-footer-img bg-cover bg-right bg-no-repeat md:pb-10 lg:pb-10">
          <h2 className="not-italic font-bold text-2xl md:text-xl lg:text-base text-white pb-2">
            Sobre KIBUS
          </h2>
          <p className="not-italic font-normal text-base md:text-md lg:text-sm text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
        <div
          className="xl:pr-6 flex flex-col sm:w-auto w-44 md:pb-10 lg:pb-10 bg-cover bg-no-repeat bg-right"
          style={{ backgroundImage: "url('/images/icons.png')" }}
        >
          <h2 className="not-italic font-bold text-2xl md:text-xl lg:text-base text-white pb-2">
            Políticas
          </h2>
          <p className="not-italic font-normal text-base lg:text-sm text-white">
            Política de Privacidad
          </p>
          <p className="not-italic font-normal text-base lg:text-sm text-white pt-3">
            Condiciones de uso
          </p>
          <p className="not-italic font-normal text-base lg:text-sm text-white pt-3">
            Cookies
          </p>
          <p className="not-italic font-normal text-base lg:text-sm text-white pt-3">
            FAQ
          </p>
        </div>
        <div className="xl:pr-6 flex flex-row justify-between sm:justify-start sm:w-auto w-36 md:pb-10 lg:pb-10">
          <img
            className="cursor-pointer w-auto h-5 sm:mr-3"
            src="/images/facebook.png"
            alt="Fb"
          />
          <img
            className="cursor-pointer w-auto h-5 sm:mr-3"
            src="/images/instagram.png"
            alt="Kibus"
          />
          <img
            className="cursor-pointer w-auto h-5"
            src="/images/youtube.png"
            alt="Kibus"
          />
        </div>
        <div className="flex flex-col sm:w-auto w-64 md:pb-10 lg:pb-10">
          <h2 className="not-italic font-bold text-2xl md:text-xl lg:text-base text-white pb-2">
            Métodos de pago
          </h2>
          <img
            className="cursor-pointer w-64"
            src="/images/pagos.png"
            alt="Maestro | Visa | Apple Pay | Google Pay"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
