import React from 'react';
import 'aos/dist/aos.css';
const Team =() =>  {
   return (
<section id="Teams" class="relative overflow-hidden bg-secondary pt-20 dark:bg-gray-900">

    <span class="block absolute left-0 top-0 w-full h-full bg-secondary -z-20"></span>
    <img src="images/shape-08.svg" alt="Shape Bg" class=" absolute right-0 top-0 -z-10" />
    <img src="images/shape-09.svg" alt="Shape" class=" rotate-animation absolute left-[10%] top-[8%]" />
    <img src="images/shape-10.svg" alt="Shape" class=" absolute left-[20%] top-[5%]" />
    <img src="images/shape-11.svg" alt="Shape" class="rotate-animation hidden md:block absolute right-[15%] top-[19%]" />


    <div class="container mx-auto p-6 max-w-3xl z-50" data-aos="zoom-in" data-aos-offset="300"  data-aos-duration="500">
        <h2 class="text-[45px] text-header-color text-center font-[600] leading-tight dark:text-white ">Rencontrez notre équipe créative et dévouée</h2>
        <p class="text-p-color text-center my-5">Notre équipe est composée de talents passionnés et engagés à fournir des services de qualité à nos clients.</p>
    </div>

    <section class="dark:bg-gray-900 z-50">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700" data-aos="fade-right" data-aos-offset="300"  data-aos-duration="500">
                    <div class="">
                        <img class="h-1/2 md:h-[250px] md:w-[250px] object-cover rounded-lg sm:rounded-none sm:rounded-l-lg" src="images/team-01.jpeg" alt="Ibrahim Nait edderhem - UI/UX Designer" />
                    </div>
                    <div class="p-5">
                        <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Ibrahim Nait edderhem
                        </h3>
                        <span class="text-gray-500 dark:text-gray-400">UI/UX Designer</span>
                        <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Concepteur UX/UI : maquettes et design web/mobile.</p>
                        <ul class="flex space-x-4 sm:mt-0">

                            <li>
                                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg class="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path fill-rule="nonzero" d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"/> </g> </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div> 
                <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700" data-aos="fade-left" data-aos-offset="300"  data-aos-duration="500">
                    <div >
                        <img class="md:w-[190px] md:h-[250px] object-cover rounded-lg sm:rounded-none sm:rounded-l-lg" src="images/team-02.jpeg" alt="Cedric Akinocho - Responsable de communication" />
                    </div>
                    <div class="p-5">
                        <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Cedric Akinocho
                        </h3>
                        <span class="text-gray-500 dark:text-gray-400">Responsable de communication</span>
                        <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Responsable de communication</p>
                        <ul class="flex space-x-4 sm:mt-0">

                            <li>
                                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg class="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path fill-rule="nonzero" d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"/> </g> </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div> 
                <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700" data-aos="fade-right" data-aos-offset="300"  data-aos-duration="500">
                    <div>
                        <img class="md:w-[250px] md:h-[250px] object-cover rounded-lg sm:rounded-none sm:rounded-l-lg" src="images/team-04.jpeg" alt="Achraf Sedki - Designer Graphique" />
                    </div>
                    <div class="p-5">
                        <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Achraf Sedki
                        </h3>
                        <span class="text-gray-500 dark:text-gray-400">Designer Graphique</span>
                        <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Création de designs visuels pour projets web/mobile.</p>
                        <ul class="flex space-x-4 sm:mt-0">

                            <li>
                                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg class="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path fill-rule="nonzero" d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"/> </g> </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div> 
                <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700" data-aos="fade-left" data-aos-offset="300"  data-aos-duration="500">
                    <div>
                        <img class="md:w-[250px] md:h-[250px] object-cover rounded-lg sm:rounded-none sm:rounded-l-lg" src="images/team-05.jpeg" alt="Mohamed Bourezzoug - Développeur Full Stack" />
                    </div>
                    <div class="p-5">
                        <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">Mohamed Bourezzoug</a>
                        </h3>
                        <span class="text-gray-500 dark:text-gray-400">Développeur Full Stack</span>
                        <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Développeur Full Stack : conception et développement web/mobile.</p>
                        <ul class="flex space-x-4 sm:mt-0">

                            <li>
                                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg class="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path fill-rule="nonzero" d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"/> </g> </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>  
                <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700" data-aos="fade-right" data-aos-offset="300"  data-aos-duration="500">
                    <div>
                        <img class="md:w-[250px] md:h-[250px] object-cover rounded-lg sm:rounded-none sm:rounded-l-lg" src="images/team-03.jpeg" alt="Saad Mounir - Responsable Marketing" />
                    </div>
                    <div class="p-5">
                        <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Saad Mounir
                        </h3>
                        <span class="text-gray-500 dark:text-gray-400">Responsable Marketing</span>
                        <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Stratégies de marketing et communication digitale.</p>
                        <ul class="flex space-x-4 sm:mt-0">

                            <li>
                                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg class="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path fill-rule="nonzero" d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"/> </g> </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>  
            </div>
              
        </div>
        
    </section>
    
</section>

   );
}
export default Team;