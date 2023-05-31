import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials =() => {
   return (
    <section id="services" className="py-10 bg-white dark:bg-gray-900">
    <div className="container mx-auto p-6 max-w-3xl">
        <h2 className="text-[45px] text-header-color text-center font-[600] leading-tight dark:text-white">Témoignages de clients</h2>
        <p className="text-p-color text-center my-5">Nous offrons des services de qualité supérieure en raison de notre expérience et de notre expertise dans le domaine.</p>
    </div>


    


    <div className="container mx-auto">
      <div>
        <div className="relative flex justify-center">
          <div
            className="relative w-full pb-16 md:w-11/12 lg:w-10/12 xl:w-8/12 xl:pb-0"
          >
            <div
              className="snap xs:max-w-[368px] flex-no-wrap mx-auto flex h-auto w-full max-w-[300px] overflow-hidden transition-all sm:max-w-[508px] md:max-w-[630px] lg:max-w-[738px] 2xl:max-w-[850px]"
              x-ref="carousel"
            >
              {/* <Slider autoplay={true} autoplaySpeed={3000} infinite={true} slidesToShow={1} slidesToScroll={1}>
              <div 
                className="xs:min-w-[368px] mx-auto h-full min-w-[300px] sm:min-w-[508px] sm:p-6 md:min-w-[630px] lg:min-w-[738px] 2xl:min-w-[850px]">
                <div className="w-full items-center md:flex">
                  <div
                    className="relative mb-12 w-full max-w-[310px] md:mr-12 md:mb-0 md:max-w-[250px] lg:mr-14 lg:max-w-[280px] 2xl:mr-16"
                  >
                    <img
                      src="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg"
                      alt="image"
                      className="w-full"
                    />
                  </div>
                  <div className="w-full">
                    <div>
                      <div className="mb-7">
                        <img
                          src="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg"
                          alt="lineicon"
                        />
                      </div>
                      <p
                        className="text-body-color mb-11 text-base font-medium italic sm:text-lg"
                      >
                      Je suis vraiment satisfait du travail accompli par Alistraa. Leur équipe a réussi à créer une image de marque unique pour mon entreprise et leur service client est exceptionnel. Je recommande fortement leurs services.
                      </p>
                      <h4 className="text-dark text-xl font-semibold">
                        Larry Diamond
                      </h4>
                      <p className="text-body-color text-base">
                        Chief Executive Officer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </Slider> */}

              {/* <Slider autoplay={true} autoplaySpeed={3000} infinite={true} slidesToShow={1} slidesToScroll={1}> */}
              <div
                className="xs:min-w-[368px] mx-auto h-full min-w-[300px] sm:min-w-[508px] sm:p-6 md:min-w-[630px] lg:min-w-[738px] 2xl:min-w-[850px]">
                <div className="w-full items-center md:flex">
                  <div
                    className="relative mb-12 w-full max-w-[310px] md:mr-12 md:mb-0 md:max-w-[250px] lg:mr-14 lg:max-w-[280px] 2xl:mr-16"
                  >
                    <img
                      src="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg"
                      alt="image"
                      className="w-full"
                    />

                  </div>
                  <div className="w-full">
                    <div>
                      <div className="mb-7">
                        <img
                          src="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg"
                          alt="lineicon"
                          className='dark:hidden'
                        />
                      </div>
                      <p
                        className="text-body-color mb-11 text-base font-medium italic sm:text-lg dark:text-white"
                      >
                      Je ne savais pas par où commencer pour créer mon site web, mais Alistraa m'a aidé à chaque étape du processus. Le résultat final a dépassé toutes mes attentes et j'ai reçu de nombreux compliments sur mon nouveau site. Merci Alistraa !
                      </p>
                      <h4 className="text-dark text-xl font-semibold dark:text-white">
                        Larry Diamond
                      </h4>
                      <p className="text-body-color text-base dark:text-white">
                        Chief Executive Officer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* </Slider> */}



            </div>

          </div></div></div></div></section>
   );
}
export default Testimonials;