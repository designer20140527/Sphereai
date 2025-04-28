import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import Welcome from '../components/sections/Welcome';
import Features from '../components/sections/Features';
import Discovery from '../components/sections/Discovery';
import Integration from '../components/sections/Integration';
import Tokenomics from '../components/sections/Tokenomics';
import Roadmap from '../components/sections/Roadmap';
import Faq from '../components/sections/Faq';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <main className="main fade-in">
      <Header />
      <Hero />
      <Welcome />
      <Features />
      <Discovery />
      <Integration />
      <Tokenomics />
      <Roadmap />
      <Faq />
      <Footer />
    </main>
  );
}
