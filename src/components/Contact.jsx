import React, { useRef } from 'react'
import emailjs from 'emailjs-com';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
const Contact =() => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    


    emailjs.sendForm('service_vy7ywvh', 'template_iak42br', form.current, 'RDkHIqABYuDzLN4SZ')
    .then((result) => {
      toast.success('Merci pour votre message!');
    })
    .catch((error) => {
      toast.error('Quelque chose s\'est mal passé.!');
    });
    
  };
   return (
    
    <section id="contact" className="relative overflow-hidden fh rm py-20 bg-secondary dark:bg-gray-800">
      <ToastContainer />
    <img src="images/shape-06.svg" alt="Shape" className="absolute z-10 top-[5%] left-[10%]" />
    <img src="images/shape-03.svg" alt="Shape" className="absolute z-10 top-[25%] right-[20%]" /> 
    <img src="images/shape-07.svg" alt="Shape" className="absolute z-10 bottom-[10%] right-[5%] w-[6.25rem]" /> 
    <img src="images/shape-12.svg" alt="Shape" className="absolute z-10 bottom-0 left-0" /> 
    <img src="images/shape-13.svg" alt="Shape" className="absolute z-10 top-0 right-0" /> 

    <div className="container mx-auto p-6 max-w-3xl z-50" data-aos="zoom-in" data-aos-offset="300"  data-aos-duration="500">
        <h2 className="text-[45px] text-header-color text-center font-[600] leading-tight dark:text-white">Nous offrons le meilleur service de qualité pour vous.</h2>
        <p className="text-p-color text-center my-5">Nous offrons des services de qualité supérieure en raison de notre expérience et de notre expertise dans le domaine.</p>
    </div>



    <div className="relative z-10 mx-auto max-w-[80rem] px-4 mt-[3.125rem]">
      <div className="flex flex-wrap md:flex-nowrap flex-col-reverse md:flex-row justify-between gap-[1.875rem] xl:gap-10">
        <div className="animate_top w-full md:w-[40%] lg:w-[33.33%]  rounded-[0.5rem] p-[1.875rem] xl:p-[3.125rem] relative overflow-hidden bg-white dark:bg-gray-900 shadow-9xl" data-aos="fade-right" data-aos-offset="300"  data-aos-duration="500">
          <img src="images/shape-03.svg" alt="Shape" className="absolute right-5 top-5 w-[1.875rem]" />
          <img src="images/shape-06.svg" alt="Shape" className="absolute right-5 bottom-5 w-6 kf" />

          <div className="mb-10">
            <h4 className="text-[22px] leading-[26px] text-header-color mb-[0.375rem] dark:text-white">Addresse Email</h4>
            <p className="text-p-color"><a href="#">contact@alistraa.com</a></p>
          </div>
          <div className="mb-10">
            <h4 className="text-[22px] leading-[26px] text-header-color mb-[0.375rem] dark:text-white">Localisation</h4>
            <p className="text-p-color">Maarif</p>
          </div>
          <div className="mb-10">
            <h4 className="text-[22px] leading-[26px] text-header-color mb-[0.375rem] dark:text-white">Téléphone</h4>
            <p className="text-p-color"><a href="#">+212 625-530780</a></p>
          </div>

          <span className="block height-[1px] bg-[#d8e1ed] tm mt[1.25rem] mb-[2.5rem]"></span>

          <div>
            <h4 className="text-[22px] leading-[26px] text-header-color wm mb-[1.875] dark:text-white">Social Media</h4>
            <ul className="flex items-center gap-4 py-4">
              <li>
                <a href="https://web.facebook.com/profile.php?id=100090961210924" target='_blank' className="c flex items-center justify-center w-[2.5rem] h-[2.5rem] rg ">
                  <svg className="fill-[#79808A]" width="11" height="20" viewBox="0 0 11 20" fill="none" lns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.83366 11.3752H9.12533L10.042 7.7085H6.83366V5.87516C6.83366 4.931 6.83366 4.04183 8.667 4.04183H10.042V0.96183C9.74316 0.922413 8.61475 0.833496 7.42308 0.833496C4.93433 0.833496 3.16699 2.35241 3.16699 5.14183V7.7085H0.416992V11.3752H3.16699V19.1668H6.83366V11.3752Z"
                      fill=""
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/alistraa_agency/" target='_blank' className="c flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-full ">
                <svg className="fill-[#79808A]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/> </svg>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/agencealistraa2023/about/" target='_blank' className="c flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-full ">
                  <svg className="fill-[#79808A]" width="19" height="18" viewBox="0 0 19 18" fill="none" lns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.36198 2.58327C4.36174 3.0695 4.16835 3.53572 3.82436 3.87937C3.48037 4.22301 3.01396 4.41593 2.52773 4.41569C2.0415 4.41545 1.57528 4.22206 1.23164 3.87807C0.887991 3.53408 0.69507 3.06767 0.695313 2.58144C0.695556 2.09521 0.888943 1.62899 1.23293 1.28535C1.57692 0.941701 2.04333 0.748781 2.52956 0.749024C3.01579 0.749267 3.48201 0.942654 3.82566 1.28664C4.1693 1.63063 4.36222 2.09704 4.36198 2.58327ZM4.41698 5.77327H0.750313V17.2499H4.41698V5.77327ZM10.2103 5.77327H6.56198V17.2499H10.1736V11.2274C10.1736 7.87244 14.5461 7.56077 14.5461 11.2274V17.2499H18.167V9.98077C18.167 4.32494 11.6953 4.53577 10.1736 7.31327L10.2103 5.77327Z"
                      fill=""
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="animate_top w-full md:w-[60%] lg:w-[66.66%] shadow-9xl rounded-[0.5rem] bg-white dark:bg-gray-900 p-[1.875rem] xl:p-[3.5rem]" data-aos="fade-left" data-aos-offset="300"  data-aos-duration="500">
        {/* ref={form} onSubmit={sendEmail} */}
          <form  ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-[1.875rem] lg:gap-[2.5rem] mb-[1.875rem]">
              <div className="w-full lg:w-1/2">
                <label className="block mb-4 dark:text-white" for="fullname">Nom Complet <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Nom Complet"
                  className="w-full dark:border dark:border-p-color bg-transparent rounded-[0.5rem] shadow-9xl  border-w-[1px]  pl/50 py-[0.875rem] px-[1.5rem]"
                  required
                />
              </div>

              <div className="w-full lg:w-1/2">
                <label className="block mb-4 dark:text-white" for="email">Address email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@gmail.com"
                  className="w-full dark:border dark:border-p-color bg-transparent rounded-[0.5rem] shadow-9xl  border-w-[1px]  pl/50 py-[0.875rem] px-[1.5rem]"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row lg:justify-between gap-[1.875rem] lg:gap-[2.5rem] mb-[1.875rem]">
              <div className="w-full lg:w-1/2">
                <label className="block mb-4 dark:text-white" for="phone">Téléphone <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Téléphone"
                  className="w-full dark:border dark:border-p-color bg-transparent rounded-[0.5rem] shadow-9xl  border-w-[1px]  pl/50 py-[0.875rem] px-[1.5rem]"
                  required
                />
              </div>

              <div className="w-full lg:w-1/2">
                <label className="block mb-4 dark:text-white" for="subject">Votre Demande <spam className="text-red-500">*</spam></label>

                <select name="subject" id="subject" className="w-full ph rounded-[0.5rem] shadow-9xl  border-w-[1px] bg-transparent dark:border dark:border-p-color text-p-color  pl/50 py-[0.875rem] px-[1.5rem]" required>
                  <option value="Demande de devis">Demande de devis</option>
                  <option value="Informations sur nos services">Informations sur nos services</option>
                  <option value="Proposition de partenariat">Proposition de partenariat</option>
                  <option value="Demande de collaboration">Demande de collaboration</option>
                  <option value="Suggestion ou commentaires">Suggestion ou commentaires</option>
                </select>
              </div>
            </div>

            <div className="fb">
              <label className="block mb-4 dark:text-white" for="message">Message</label>
              <textarea
                placeholder="Message"
                rows="4"
                name="message"
                id="message"
                className="w-full dark:border dark:border-p-color bg-transparent rounded-[0.5rem] shadow-9xl  border-w-[1px]  pl/50 p-[1.5rem]"
                required
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button className="inline-flex rounded-full text-white bg-main-color ml il px-[1.875rem] py-[0.75rem] _l">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
   );
}
export default Contact;