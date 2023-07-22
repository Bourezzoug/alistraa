import React from 'react';
import AOS from 'aos';
const Footer = () =>  {
   return (
    <footer className="relative bg-white pt-8 pb-6 dark:bg-gray-900" data-aos="zoom-in" data-aos-offset="300"  data-aos-duration="500">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap text-left lg:text-left">
        <div className="w-full lg:w-6/12 px-4">
          <h4 className="text-3xl dark:text-white">Let's keep in touch!</h4>
          <h5 className="text-lg mt-0 mb-2  dark:text-white">
            Find us on any of these platforms, we respond 1-2 business days.
          </h5>
          <div className="mt-6 lg:mb-0 mb-6">
            <a href="https://www.instagram.com/alistraa_agency/" target='_blank'>
              <button className="bg-white dark:bg-gray-800 dark:text-p-color text-[#d62976] shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <i className="fab fa-instagram"></i>
              </button>
            </a>
            <a href="https://web.facebook.com/profile.php?id=100090961210924" target='_blank'>
              <button className="bg-white dark:bg-gray-800 dark:text-p-color text-[#3b5998] shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <i className="fab fa-facebook-square"></i>
              </button>
            </a>

            <a href="https://www.linkedin.com/company/agencealistraa2023/about/" target='_blank'>
              <button className="bg-white dark:bg-gray-800 dark:text-p-color text-[#0e76a8] shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <i className="fab fa-linkedin"></i>
              </button>
            </a>

              {/* <button className="bg-white dark:bg-gray-800 dark:text-p-color shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button"> */}
              {/* <i className="fab fa-github"></i> */}
            {/* </button> */}
          </div>
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <div className="flex flex-wrap items-top mb-6">
            <div className="w-full lg:w-4/12 px-4 ml-auto">
              <span className="block uppercase  text-2xl  mb-2 dark:text-white">Liens Utiles</span>
              <ul className="list-unstyled">
                <li>
                  <a className=" hover:text-blueGray-800  block pb-2 text-base dark:text-white" href="#about">À propos</a>
                </li>
                <li>
                  <a className=" hover:text-blueGray-800  block pb-2 text-base dark:text-white" href="#services">Services</a>
                </li>
                <li>
                  <a className=" hover:text-blueGray-800  block pb-2 text-base dark:text-white" href="#testimonials">Témoignage</a>
                </li>
                <li>
                  <a className=" hover:text-blueGray-800  block pb-2 text-base dark:text-white" href="#team">L'Équipe</a>
                </li>
              </ul>
            </div>
            {/* <div className="w-full lg:w-4/12 px-4">
              <span className="block uppercase  text-sm font-semibold mb-2">Other Resources</span>
              <ul className="list-unstyled">
                <li>
                  <a className=" hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
                </li>
                <li>
                  <a className=" hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a className=" hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
                </li>
                <li>
                  <a className=" hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
      <hr className="my-6 border-blueGray-300" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm py-1">
          <span className="dark:text-white">&copy; {new Date().getFullYear()} Alistraa. tous droits réservés</span>

          </div>
        </div>
      </div>
    </div>
  </footer>
  
   );
}
export default Footer;