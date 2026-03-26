import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyEZFWD from "./components/WhyEZFWD";
import Journey from "./components/Journey";
import Program from "./components/Program";
import Portfolio from "./components/Portfolio";
import Reviews from "./components/Reviews";
import Teams from "./components/Teams";
import CTA from "./components/CTA";
import Community from "./components/Community";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyEZFWD />
        <Journey />
        <Program />
        <Portfolio />
        <Reviews />
        <Teams />
        <CTA />
        <Community />
      </main>
      <Footer />
    </>
  );
}