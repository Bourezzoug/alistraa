import React from 'react';
const Contact =() => {
   return (
    <section id="contact" class="relative overflow-hidden fh rm py-20 bg-secondary dark:bg-gray-800">
    <img src="images/shape-06.svg" alt="Shape" class="absolute z-10 top-[5%] left-[10%]" />
    <img src="images/shape-03.svg" alt="Shape" class="absolute z-10 top-[25%] right-[20%]" /> 
    <img src="images/shape-07.svg" alt="Shape" class="absolute z-10 bottom-[10%] right-[5%] w-[6.25rem]" /> 
    <img src="images/shape-12.svg" alt="Shape" class="absolute z-10 bottom-0 left-0" /> 
    <img src="images/shape-13.svg" alt="Shape" class="absolute z-10 top-0 right-0" /> 

    <div class="container mx-auto p-6 max-w-3xl z-50">
        <h2 class="text-[45px] text-header-color text-center font-[600] leading-tight dark:text-white">Nous offrons le meilleur service de qualité pour vous.</h2>
        <p class="text-p-color text-center my-5">Nous offrons des services de qualité supérieure en raison de notre expérience et de notre expertise dans le domaine.</p>
    </div>



    <div class="relative z-10 mx-auto max-w-[80rem] px-4 mt-[3.125rem]">
      <div class="flex flex-wrap md:flex-nowrap flex-col-reverse md:flex-row justify-between gap-[1.875rem] xl:gap-10">
        <div class="animate_top w-full md:w-[40%] lg:w-[33.33%]  rounded-[0.5rem] p-[1.875rem] xl:p-[3.125rem] relative overflow-hidden bg-white dark:bg-gray-900 shadow-9xl">
          <img src="images/shape-03.svg" alt="Shape" class="absolute right-5 top-5 w-[1.875rem]" />
          <img src="images/shape-06.svg" alt="Shape" class="absolute right-5 bottom-5 w-6 kf" />

          <div class="mb-10">
            <h4 class="text-[22px] leading-[26px] text-header-color mb-[0.375rem] dark:text-white">Addresse Email</h4>
            <p class="text-p-color"><a href="#">contact@alistraa.com</a></p>
          </div>
          <div class="mb-10">
            <h4 class="text-[22px] leading-[26px] text-header-color mb-[0.375rem] dark:text-white">Localisation</h4>
            <p class="text-p-color">Maarif</p>
          </div>
          <div class="mb-10">
            <h4 class="text-[22px] leading-[26px] text-header-color mb-[0.375rem] dark:text-white">Téléphone</h4>
            <p class="text-p-color"><a href="#">+212 625-530780</a></p>
          </div>

          <span class="block height-[1px] bg-[#d8e1ed] tm mt[1.25rem] mb-[2.5rem]"></span>

          <div>
            <h4 class="text-[22px] leading-[26px] text-header-color wm mb-[1.875] dark:text-white">Social Media</h4>
            <ul class="flex items-center gap-4 py-4">
              <li>
                <a href="#" class="c flex items-center justify-center w-[2.5rem] h-[2.5rem] rg ">
                  <svg class="fill-[#79808A]" width="11" height="20" viewBox="0 0 11 20" fill="none" lns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.83366 11.3752H9.12533L10.042 7.7085H6.83366V5.87516C6.83366 4.931 6.83366 4.04183 8.667 4.04183H10.042V0.96183C9.74316 0.922413 8.61475 0.833496 7.42308 0.833496C4.93433 0.833496 3.16699 2.35241 3.16699 5.14183V7.7085H0.416992V11.3752H3.16699V19.1668H6.83366V11.3752Z"
                      fill=""
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" class="c flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-full ">
                  <svg class="fill-[#79808A]" width="20" height="16" viewBox="0 0 20 16" fill="none" lns="http://www.w3.org/2000/svg">
                    <path
                      d="M19.3153 2.18484C18.6155 2.4944 17.8733 2.6977 17.1134 2.78801C17.9144 2.30899 18.5138 1.55511 18.8001 0.666844C18.0484 1.11418 17.2244 1.42768 16.3654 1.59726C15.7885 0.979958 15.0238 0.57056 14.1901 0.432713C13.3565 0.294866 12.5007 0.436294 11.7558 0.835009C11.0108 1.23372 10.4185 1.86739 10.0708 2.63749C9.72313 3.40759 9.63963 4.27098 9.83327 5.09343C8.30896 5.01703 6.81775 4.62091 5.45645 3.93079C4.09516 3.24067 2.89423 2.27197 1.93161 1.08759C1.59088 1.67284 1.41182 2.33814 1.41278 3.01534C1.41278 4.34451 2.08928 5.51876 3.11778 6.20626C2.50912 6.1871 1.91386 6.02273 1.38161 5.72685V5.77451C1.38179 6.65974 1.68811 7.51766 2.24864 8.20282C2.80916 8.88797 3.58938 9.3582 4.45703 9.53376C3.89201 9.68688 3.29956 9.70945 2.72453 9.59976C2.96915 10.3617 3.44595 11.0281 4.08815 11.5056C4.73035 11.9831 5.50581 12.2478 6.30594 12.2627C5.51072 12.8872 4.60019 13.3489 3.62642 13.6213C2.65264 13.8938 1.63473 13.9716 0.630859 13.8503C2.38325 14.9773 4.4232 15.5756 6.50669 15.5737C13.5586 15.5737 17.415 9.73176 17.415 4.66535C17.415 4.50035 17.4104 4.33351 17.4031 4.17035C18.1537 3.62783 18.8016 2.95578 19.3162 2.18576L19.3153 2.18484Z"
                      fill=""
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" class="c flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-full ">
                  <svg class="fill-[#79808A]" width="19" height="18" viewBox="0 0 19 18" fill="none" lns="http://www.w3.org/2000/svg">
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

        <div class="animate_top w-full md:w-[60%] lg:w-[66.66%] shadow-9xl rounded-[0.5rem] bg-white dark:bg-gray-900 p-[1.875rem] xl:p-[3.5rem]">
          <form action="https://formbold.com/s/unique_form_id" method="POST">
            <div class="flex flex-col lg:flex-row lg:justify-between gap-[1.875rem] lg:gap-[2.5rem] mb-[1.875rem]">
              <div class="w-full lg:w-1/2">
                <label class="block mb-4 dark:text-white" for="fullname">Nom Complet <span class="text-red-500">*</span></label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Devid Wonder"
                  class="w-full dark:border dark:border-p-color bg-transparent rounded-[0.5rem] shadow-9xl  border-w-[1px]  pl/50 py-[0.875rem] px-[1.5rem]"
                />
              </div>

              <div class="w-full lg:w-1/2">
                <label class="block mb-4 dark:text-white" for="email">Address email <span class="text-red-500">*</span></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@gmail.com"
                  class="w-full dark:border dark:border-p-color bg-transparent rounded-[0.5rem] shadow-9xl  border-w-[1px]  pl/50 py-[0.875rem] px-[1.5rem]"
                />
              </div>
            </div>

            <div class="flex flex-col md:flex-row lg:justify-between gap-[1.875rem] lg:gap-[2.5rem] mb-[1.875rem]">
              <div class="w-full lg:w-1/2">
                <label class="block mb-4 dark:text-white" for="phone">Téléphone <span class="text-red-500">*</span></label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="+009 3342 3432"
                  class="w-full dark:border dark:border-p-color bg-transparent rounded-[0.5rem] shadow-9xl  border-w-[1px]  pl/50 py-[0.875rem] px-[1.5rem]"
                />
              </div>

              <div class="w-full lg:w-1/2">
                <label class="block mb-4 dark:text-white" for="subject">Votre Demande <spam class="text-red-500">*</spam></label>

                <select name="subject" id="subject" class="w-full ph rounded-[0.5rem] shadow-9xl  border-w-[1px] bg-transparent dark:border dark:border-p-color text-p-color  pl/50 py-[0.875rem] px-[1.5rem]">
                  <option value="Demande de devis">Demande de devis</option>
                  <option value="nformations sur nos services">nformations sur nos services</option>
                  <option value="Proposition de partenariat">Proposition de partenariat</option>
                  <option value="Demande de collaboration">Demande de collaboration</option>
                  <option value="Suggestion ou commentaires">Suggestion ou commentaires</option>
                </select>
              </div>
            </div>

            <div class="fb">
              <label class="block mb-4 dark:text-white" for="message">Message</label>
              <textarea
                placeholder="Message"
                rows="4"
                name="message"
                id="message"
                class="w-full dark:border dark:border-p-color bg-transparent rounded-[0.5rem] shadow-9xl  border-w-[1px]  pl/50 p-[1.5rem]"
              ></textarea>
            </div>

            <div class="flex justify-center">
              <button class="inline-flex rounded-full text-white bg-main-color ml il px-[1.875rem] py-[0.75rem] _l">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
   );
}
export default Contact;