import Navbar from '../components/layout/navbar';
import Hero from '../components/section/hero/hero';
import About from '../components/section/about/about';
import CodeDesign from '../components/section/codeDesign/codeDesign';
import MoreThan from '../components/section/moreThan/moreThan';
import DesignTo from '../components/section/designTo/designTo';
import Experiences from '../components/section/experiences/experiences';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Navbar />
      <Hero />
      <About />
      <CodeDesign />
      <MoreThan />
      <DesignTo />
      <Experiences />
    </main>
  );
}
