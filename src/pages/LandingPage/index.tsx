// src/pages/LandingPage/index.tsx
import { useRef } from 'react';
import HomeSection from './HomeSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import Navbar from '../../components/Navbar'; // Import navbar

function LandingPage() {
  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Navbar homeRef={homeRef} projectsRef={projectsRef} contactRef={contactRef} />
      <div>
        <HomeSection ref={homeRef} projectsRef={projectsRef} />
        <ProjectsSection ref={projectsRef} />
        <ContactSection ref={contactRef} />
      </div>
    </>
  );
}

export default LandingPage;