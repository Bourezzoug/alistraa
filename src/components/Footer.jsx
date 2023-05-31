import React from 'react';
const Footer = () =>  {
   return (
    <footer class="relative bg-white pt-8 pb-6 dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap text-left lg:text-left">
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="text-3xl dark:text-white">Let's keep in touch!</h4>
          <h5 class="text-lg mt-0 mb-2  dark:text-white">
            Find us on any of these platforms, we respond 1-2 business days.
          </h5>
          <div class="mt-6 lg:mb-0 mb-6">
            <button class="bg-white dark:bg-gray-800 dark:text-p-color text-[#d62976] shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <i class="fab fa-instagram"></i></button><button class="bg-white dark:bg-gray-800 dark:text-p-color text-[#3b5998] shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <i class="fab fa-facebook-square"></i></button><button class="bg-white dark:bg-gray-800 dark:text-p-color text-[#0e76a8] shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <i class="fab fa-linkedin"></i></button><button class="bg-white dark:bg-gray-800 dark:text-p-color shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <i class="fab fa-github"></i>
            </button>
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 px-4 ml-auto">
              <span class="block uppercase  text-2xl  mb-2 dark:text-white">Liens Utiles</span>
              <ul class="list-unstyled">
                <li>
                  <a class=" hover:text-blueGray-800  block pb-2 text-base dark:text-white" href="#about">À propos</a>
                </li>
                <li>
                  <a class=" hover:text-blueGray-800  block pb-2 text-base dark:text-white" href="#services">Services</a>
                </li>
                <li>
                  <a class=" hover:text-blueGray-800  block pb-2 text-base dark:text-white" href="#testimonials">Témoignage</a>
                </li>
                <li>
                  <a class=" hover:text-blueGray-800  block pb-2 text-base dark:text-white" href="#team">L'Équipe</a>
                </li>
              </ul>
            </div>
            {/* <div class="w-full lg:w-4/12 px-4">
              <span class="block uppercase  text-sm font-semibold mb-2">Other Resources</span>
              <ul class="list-unstyled">
                <li>
                  <a class=" hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
                </li>
                <li>
                  <a class=" hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a class=" hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
                </li>
                <li>
                  <a class=" hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
      <hr class="my-6 border-blueGray-300" />
      <div class="flex flex-wrap items-center md:justify-between justify-center">
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm py-1">
          <span class="dark:text-white">&copy; {new Date().getFullYear()} Alistraa. tous droits réservés</span>

          </div>
        </div>
      </div>
    </div>
  </footer>
  
   );
}
export default Footer;