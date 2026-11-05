import Navbar from '../components/layout/navbar';
import Hero from '../components/section/hero/hero';
import About from '../components/section/about/about';
import CodeDesign from '../components/section/codeDesign/codeDesign';
import MoreThan from '../components/section/moreThan/moreThan';
import DesignTo from '../components/section/designTo/designTo';
import Experiences from '../components/section/experiences/experiences';
import Testimoni from '../components/section/testimoni/testimoni';
import Faq from '../components/section/faq/faq';
import Contact from '../components/section/contact/contact';
import Footer from '../components/layout/footer';

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
      <Testimoni />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
