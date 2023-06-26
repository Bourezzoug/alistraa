import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

const Testimonials =() => {
   return (
    <section id="services" className="py-10 bg-white dark:bg-gray-900">
      <div className="container mx-auto p-6 max-w-3xl" data-aos="zoom-in" data-aos-offset="300"  data-aos-duration="500">
        <h2 className="text-[45px] text-header-color text-center font-[600] leading-tight dark:text-white">Témoignages de clients</h2>
        <p className="text-p-color text-center my-5">Nous offrons des services de qualité supérieure en raison de notre expérience et de notre expertise dans le domaine.</p>
      </div>
      <section className="my-8">
	<div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
		<div className="flex flex-col items-center mx-12 lg:mx-0" data-aos="fade-right" data-aos-offset="300"  data-aos-duration="500">
			<div className="relative text-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
					<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
					<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
				<p className="px-6 py-1 text-lg italic dark:text-white">Je suis vraiment satisfait du travail accompli par Alistraa. Leur équipe a réussi à créer une image de marque unique pour mon entreprise et leur service client est exceptionnel. Je recommande fortement leurs services.                      </p>

				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
					<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg>
			</div>
			<span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
			<p className='dark:text-white'>Leroy Jenkins</p>
		</div>
		<div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0" data-aos="fade-left" data-aos-offset="300"  data-aos-duration="500">
			<div className="relative text-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
					<path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
					<path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
				<p className="px-8 py-1 text-lg italic dark:text-white">Je ne savais pas par où commencer pour créer mon site web, mais Alistraa m'a aidé à chaque étape du processus. Le résultat final a dépassé toutes mes attentes et j'ai reçu de nombreux compliments sur mon nouveau site. Merci Alistraa !</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
					<path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg>
			</div>
			<span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
			<p className='dark:text-white'>Haytham chrifi</p>
		</div>
	</div>
</section>
</section>
   );
}
export default Testimonials;