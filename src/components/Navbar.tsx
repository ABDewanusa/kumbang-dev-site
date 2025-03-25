// src/components/Navbar.tsx
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar({ homeRef, projectsRef, contactRef }: { homeRef: any, projectsRef: any, contactRef: any }) {
  const [activeSection, setActiveSection] = useState(window.location.hash);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollToSection = (elementRef: any, sectionId: string) => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.pushState(null, '', `#${sectionId}`);
  };

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const getNavLinkClass = (element: string) => {
    let isActive: boolean = false;
    if (element === 'home') {
      isActive = activeSection === '#home';
    } else if (element === 'projects') {
      isActive = activeSection === '#projects';
    } else {
      isActive = activeSection === '#contact';
    }

    const baseClasses = "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium";
    return isActive
      ? `${baseClasses} border-indigo-500 text-gray-900`
      : `${baseClasses} border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700`;
  };

  const getMobileNavLinkClass = (element: string) => {
    let isActive: boolean = false;
    if (element === 'home') {
      isActive = activeSection === '#home';
    } else if (element === 'projects') {
      isActive = activeSection === '#projects';
    } else {
      isActive = activeSection === '#contact';
    }

    const baseClasses = "block pl-3 pr-4 py-2 border-l-4 text-base font-medium";
    return isActive
      ? `${baseClasses} bg-indigo-50 border-indigo-500 text-indigo-700`
      : `${baseClasses} border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700`;
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-10">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-indigo-600">
                KumbangDev
              </Link>
            </div>
            {/* Desktop Menu */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <button onClick={() => scrollToSection(homeRef, 'home')} className={getNavLinkClass('home')}>
                Home
              </button>
              <button onClick={() => scrollToSection(projectsRef, 'projects')} className={getNavLinkClass('projects')}>
                Projects
              </button>
              <button onClick={() => scrollToSection(contactRef, 'contact')} className={getNavLinkClass('contact')}>
                Contact
              </button>
            </div>
          </div>

          {/* Login Button (Desktop) */}
          <div className="hidden sm:flex items-center">
            <Link
              to="/login" // Replace with your login route
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                /* Icon when menu is open */
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <button
              onClick={() => {
                scrollToSection(homeRef, 'home');
                setIsMobileMenuOpen(false);
              }}
              className={getMobileNavLinkClass("home")}
            >
              Home
            </button>
            <button
              onClick={() => {
                scrollToSection(projectsRef, 'projects');
                setIsMobileMenuOpen(false);
              }}
              className={getMobileNavLinkClass("projects")}
            >
              Projects
            </button>
            <button
              onClick={() => {
                scrollToSection(contactRef, 'contact');
                setIsMobileMenuOpen(false);
              }}
              className={getMobileNavLinkClass("contact")}
            >
              Contact
            </button>
          </div>
          {/* Login Button (Mobile) */}
          <div className="border-t border-gray-200 pt-3 pb-3">
            <Link
              to="/login"
              className="block w-full text-center px-4 py-2 text-base font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;