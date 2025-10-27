import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Tariffs from '@/components/Tariffs';
import Cards from '@/components/Cards';
import Credits from '@/components/Credits';
import Deposits from '@/components/Deposits';
import About from '@/components/About';
import Support from '@/components/Support';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Products />
        <Tariffs />
        <Cards />
        <Credits />
        <Deposits />
        <About />
        <Support />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;