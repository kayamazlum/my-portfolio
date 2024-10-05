import About from '@/components/About';
import Banner from '@/components/Banner';
import Contact from '@/components/Contact';
import Portfolio from '@/components/Portfolio';

export default function Home() {
  return (
    <div className="bg-customLight mx-auto ">
      <Banner />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}
