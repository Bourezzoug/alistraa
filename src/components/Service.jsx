import React from 'react';
const Service = () => {
    return (
        <section id="services" class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto p-6 max-w-3xl">
        <h2 class="text-[45px] text-header-color text-center font-[600] leading-tight dark:text-white">Nous offrons le meilleur service de qualité pour vous.</h2>
        <p class="text-p-color text-center my-5">Nous offrons des services de qualité supérieure en raison de notre expérience et de notre expertise dans le domaine.</p>
    </div>
    <div class="container mx-auto p-6">
        <div class="grid grid-cols-12 gap-16">
            <div class="col-span-12 md:col-span-6 lg:col-span-4 hover:shadow-9xl transition-all p-6 w-1/2 md:w-full">
                <img src="images/icon-01.png" class="w-[50px] h-[50px]" alt="Icon" />
                <h4 class="py-6 text-2xl text-header-color font-semibold  dark:text-white">Développement Web</h4>
                <p class="text-p-color text-justify">Nous offrons des services de développement de site web pour aider les entreprises à améliorer leur présence en ligne.</p>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-4 hover:shadow-9xl transition-all p-6 w-1/2 md:w-full">
                <img src="images/icon-02.png" class="w-[50px] h-[50px]" alt="Icon" />
                <h4 class="py-6 text-2xl text-header-color font-semibold  dark:text-white">Développement Mobile</h4>
                <p class="text-p-color text-justify">Nous créons des applications mobiles de qualité supérieure pour les entreprises désirant améliorer leur présence sur mobile.</p>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-4 hover:shadow-9xl transition-all p-6 w-1/2 md:w-full">
                <img src="images/icon-03.png" class="w-[50px] h-[50px]" alt="Icon" />
                <h4 class="py-6 text-2xl text-header-color font-semibold  dark:text-white">Référencement naturel</h4>
                <p class="text-p-color text-justify">Nous aidons les entreprises à améliorer leur classement dans les résultats de recherche en travaillant sur la stratégie SEO de leur site web.</p>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-4 hover:shadow-9xl transition-all p-6 w-1/2 md:w-full">
                <img src="images/icon-04.png" class="w-[50px] h-[50px]" alt="Icon" />
                <h4 class="py-6 text-2xl text-header-color font-semibold  dark:text-white">Brand Identity</h4>
                <p class="text-p-color text-justify">Nous aidons les entreprises à développer une identité de marque forte et cohérente et à élaborer une stratégie de marque efficace pour atteindre leurs objectifs commerciaux</p>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-4 hover:shadow-9xl transition-all p-6 w-1/2 md:w-full">
                <img src="images/icon-05.png" class="w-[50px] h-[50px]" alt="Icon" />
                <h4 class="py-6 text-2xl text-header-color font-semibold  dark:text-white">Marketing Digital</h4>
                <p class="text-p-color text-justify">Nous fournissons des services de marketing sur les réseaux sociaux pour aider les entreprises à atteindre leur public cible et à améliorer leur engagement en ligne.</p>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-4 hover:shadow-9xl transition-all p-6 w-1/2 md:w-full">
                <img src="images/icon-06.png" class="w-[50px] h-[50px]" alt="Icon" />
                <h4 class="py-6 text-2xl text-header-color font-semibold  dark:text-white">UI/UX Design</h4>
                <p class="text-p-color text-justify">Nous travaillons avec nos clients pour créer des designs d’interface utilisateur conviviaux et intuitifs pour leur site web ou application mobile.</p>
            </div>
        </div>
    </div>
</section>
    );
}
export default Service;