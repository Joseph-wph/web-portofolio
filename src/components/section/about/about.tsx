import Container from '../../../components/layout/container';
import AboutPart from './aboutParts';

export default function AboutSection() {
  return (
    <section className='w-full mx-auto '>
      <Container>
        <div className='flex flex-col justify-center items-center gap-10'>
          <div className='lg:w-223 lg:h-33 w-90.25 h-47.5 py-10'>
            <h1 className='font-sans font-medium text-[26px] lg:text-[36px] text-center'>
              As frontend developers , we bring designs to life with{' '}
              <span className='text-primary-300'>clean, responsive code</span>{' '}
              that blends creativity 🎨 with usability 🌟.
            </h1>
          </div>
          <AboutPart />
        </div>
      </Container>
    </section>
  );
}
