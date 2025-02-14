// import About from '@/components/About'
// import Features from '@/components/Features'
// import Stats from '@/components/Stats'
// import Gallery from '@/components/Gallery'
// import Testimonials from '@/components/Testimonials'
// import Team from '@/components/Team'
// import Pricing from '@/components/Pricing'
// import Faq from '@/components/Faq'
// import Contact from '@/components/Contact'

import Link from "next/link";
import Image from "next/image";

import Hero from "../../components/Hero";
import Header from "../../components/Header";
import About from "../../components/About";
import Services from "../../components/Services";
import Stats from "../../components/Stats";
import Detail from "../../components/Detail";
import Gallery from "../../components/Gallery";
import Testimonial from "../../components/Testonomial";
import Team from "../../components/Team";
import Price from "../../components/Price";
import FAQ from "../../components/FAQ";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";

export default function Home() {
  return (
    <>
      <Loader />
      <Link
        href="https://wa.me/17059108964"
        className="whatsapp-widget"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          width={40}
          height={40}
          src="/assets/img/icons8-whatsapp-500.png"
          alt="WhatsApp"
        />
      </Link>
      <Header />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Detail />
      <Gallery />
      <Testimonial />
      <Team />
      <Price />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
