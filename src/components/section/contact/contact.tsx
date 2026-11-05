import { ContactInfo } from './contactPart';
import { ContactForm } from './contactForm';

export default function ContactSection() {
  return (
    <section id='contact' className='bg-gray-50/50 py-16'>
      <div className='container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2'>
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}
