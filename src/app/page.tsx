import About from '@/components/About';
import Banner from '@/components/Banner';
import Contact from '@/components/Contact';
import MyRecentWork from '@/components/MyRecentWork';

export default function Home() {
  return (
    <div className="bg-customLight mx-auto ">
      <Banner />
      <MyRecentWork />
      <About />
      <Contact />
    </div>
  );
}
