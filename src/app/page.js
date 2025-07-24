import Hero from '../components/Hero'; 
import ProjectGrid from '../components/ProjectGrid';
import AboutSection from '../components/AboutSection';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div>
      <Hero />
      <ProjectGrid />
      <AboutSection />
      <ContactForm />
    </div>
  );
}