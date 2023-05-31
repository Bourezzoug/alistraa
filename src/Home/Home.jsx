import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Team from '../components/Team';
import Service from '../components/Service';
import Counter from '../components/Counter';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
// import '.';

const Home = () =>  {
  return (
    <>
    <Header />
    <HeroSection />
    <About />
    <Team />
    <Service />
    <Counter />
    <Testimonials />
    <Contact />
    <Footer />
    </>
  );
}

export default Home;