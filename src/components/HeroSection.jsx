import React from 'react';
const HeroSection = () => {
    return (
        <>
            <section class="pt-[8.75rem] md:pt-40 lg:pt-52 pb-20 lg:pb-[7.5rem]  relative overflow-hidden dark:bg-gray-900">
    {/* <!-- Hero Images --> */}
    <div class="hidden md:block w-1/2 2xl:w-[46.875rem] bd 2xl:h-[42.875rem] absolute right-0 top-0">
      <img src="images/shape-01.svg" alt="shape" class="hidden 2xl:block absolute top-[40%] -left-[10%] z-[1]" />
      <img src="images/shape-02.svg" alt="shape" class="hidden 2xl:block absolute right-[20%] bottom-0  z-[10]" />
      <img src="images/shape-03.svg" alt="shape" class="hidden 2xl:block absolute left-[15%] bottom-[10%] z-[10]" />
      <img src="images/shape-04.svg" alt="shape" class="absolute right-0 top-0" />
      <img src="images/hero.png" alt="Woman" class="absolute right-0 top-0 z-[1] hidden md:block" />
    </div>

    {/* <!-- Hero Content --> */}
    <div class="mx-auto max-w-[86.875rem] px-4 md:px-8 2xl:px-0">
      <div class="flex items-center justify-center md:justify-normal">
        <div class="animate_left w-full md:w-1/2">
          <h1 class="font-semibold text-[1.875rem]  lg:text-9 lg:leading-10 xl:text-[50px] xl:leading-[55px] text-heading text-header-color mb-6 dark:text-white">Transformez votre présence en ligne avec notre agence de marketing digital.</h1>
          <p class="w-[79%] text-p-color">
            Rencontrez-vous des difficultés à faire croître votre entreprise et ne savez pas par où commencer ? Nous sommes là pour vous aider à développer votre entreprise.
          </p>

          <div class="flex flex-col-reverse lg:flex-row gap-[1.875rem] mt-10">
            <a href="#contact" class="font-normal leading-7 text-white bg-main-color py-3 px-[1.875rem] rounded-full ml il inline-flex w-fit _l"
              >Commencez dès maintenant</a
            >

          </div>
        </div>
      </div>
    </div>
    
  </section>
  <section id="features" class="dark:bg-gray-900">
    <div class="container mx-auto p-6">
        <div class="grid grid-cols-12 gap-10">
            <div class="col-span-12 md:col-span-6 lg:col-span-4 w-1/2 md:w-full">
                <div class="flex flex-col md:flex-row lg:space-x-5">
                    <div class="col-span-1">
                        <div class="bg-[#f36A8D]  rounded-full py-2 px-1 h-[80px] w-[80px] flex items-center justify-center">
                        <img src="images/icon-01.svg" alt="Icon" />
                        </div>
                    </div>
                    <div class="col-span-3">
                        <h4 class="text-2xl text-header-color font-semibold pb-2 dark:text-white">Assistance 24/7</h4>
                        <p class="text-p-color text-justify leading-6">Disponibles 24/7 pour répondre à tous vos besoins de support.</p>
                    </div>
                </div>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-4 w-1/2 md:w-full">
                <div class="flex flex-col md:flex-row lg:space-x-5">
                    <div class="col-span-1">
                        <div class="bg-[#20CA66]  rounded-full py-2 px-1 h-[80px] w-[80px] flex items-center justify-center">
                        <img src="images/icon-02.svg" alt="Icon" />
                        </div>
                    </div>
                    <div class="col-span-3">
                        <h4 class="text-2xl text-header-color font-semibold pb-2 dark:text-white">Prendre en charge</h4>
                        <p class="text-p-color text-justify leading-6 ">Prenez le contrôle de votre présence en ligne avec notre agence.</p>
                    </div>
                </div>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-4 w-1/2 md:w-full">
                <div class="flex flex-col md:flex-row lg:space-x-5">
                    <div class="col-span-1">
                        <div class="bg-[#FA9161]  rounded-full py-2 px-1 h-[80px] w-[80px] flex items-center justify-center">
                        <img src="images/icon-03.svg" alt="Icon" />
                        </div>
                    </div>
                    <div class="col-span-3">
                        <h4 class="text-2xl text-header-color font-semibold pb-2 dark:text-white">Travail En Équipe</h4>
                        <p class="text-p-color text-justify leading-6 ">Prenez le contrôle de votre présence en ligne avec notre agence.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
        </>
    );
}
export default HeroSection;