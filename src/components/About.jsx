import React from 'react';
import 'aos/dist/aos.css';

const   About =() =>  {
   return (
<section id="about" className="py-10 dark:bg-gray-900">
    <div className="container mx-auto p-6">
        <div className="mx-auto max-w-[86.875rem] px-8 wq">
            <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-[7.5rem]">
              {/* <!-- About Images --> */}
              <div className="flex gap-8 w-full md:w-1/2 relative" data-aos="fade-right" data-aos-offset="300"  data-aos-duration="500">
                <div>
                  <img src="images/shape-05.svg" alt="Shape" className="absolute -left-5 top-5" />
                  <img src="images/about-01.png" alt="About" className="mb-8" />
                  <img src="images/about-02.png" alt="About" />
                </div>
                <div>
                  <img src="images/shape-06.svg" alt="Shape" />
                  <img src="images/about-03.png" alt="About" className="mt-[1.875rem] mb-5" />
                  <img src="images/shape-07.svg" alt="Shape" className="mx-auto" />
                </div>
              </div>
    
              {/* <!-- About Content --> */}
              <div className=" w-full md:w-1/2" data-aos="fade-left" data-aos-offset="300"  data-aos-duration="500">
                <h4 className="font-[500] text-[1.25rem] leading-5  text-main-color mb-5">Pourquoi nous choisir?</h4>
                <h2 className="font-[600] text-[1.875rem] leading-9  zp pr text-heading-color wm mb-[1.875rem] dark:text-white">Nous rendons nos clients heureux en offrant les meilleurs services</h2>
                {/* {{-- <p className="w-[95%] text-p-color">Notre agence se démarque par notre approche personnalisée, notre expertise de pointe et notre engagement à fournir des résultats exceptionnels à chaque projet.</p> --}} */}
    
<div id="accordion-collapse" data-accordion="collapse">
    <h2 id="accordion-collapse-heading-1">
      <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
        <span>Qui sommes-nous?</span>
        <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
    </h2>
    <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
      <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
        <p className="mb-2 text-gray-500 dark:text-gray-400">Nous sommes une agence créative et dynamique spécialisée dans le développement web et mobile, le design d'interface utilisateur, la création d'identité de marque, le développement d'e-commerce, le référencement et le marketing numérique. Nous nous engageons à fournir des solutions innovantes et personnalisées pour répondre aux besoins de nos clients.</p>
      </div>
    </div>
    <h2 id="accordion-collapse-heading-2">
      <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
        <span>Nos missions</span>
        <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
    </h2>
    <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
      <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
        <p className="mb-2 text-gray-500 dark:text-gray-400">Notre mission est de fournir à nos clients des services de haute qualité pour les aider à atteindre leurs objectifs commerciaux. Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins et leurs défis, afin de leur fournir des solutions sur mesure qui répondent à leurs besoins spécifiques.</p>
      </div>
    </div>
    <h2 id="accordion-collapse-heading-3">
      <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
        <span>Nos valeurs</span>
        <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
    </h2>
    <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">Nous croyons en une approche personnalisée pour chaque projet. Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins et leurs défis, afin de leur fournir des solutions sur mesure qui répondent à leurs besoins spécifiques. Nous nous engageons à fournir des services de haute qualité à des tarifs abordables pour aider nos clients à obtenir le meilleur retour sur investissement.</p>
        </div>
    </div>
  </div>
  
                <a href="https://www.youtube.com/watch?v=xcJtL7QggTI" target="_blank" data-fslightbox className="inline-flex items-center gap-[1.625rem] mt-10">
                  <span className="flex items-center justify-center w-[3.125rem] h-[3.125rem] rounded-full relative bg-main-color z-10">
                    <span className="animation absolute inline-flex h-full w-full rounded-full bg-main-color opacity-75 -z-10"></span>
                    <img src="images/icon-play.svg" alt="Play" />
                  </span>
                  <span className="text-heading-color dark:text-white">VIDÉO DE PRESENTATION</span>
                </a>
              </div>
            </div>
          </div>
    </div>
</section>
   );
}
export default About;