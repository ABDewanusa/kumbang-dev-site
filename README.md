# React + TypeScript + Vite Landing Page

This project provides a setup for a single-page landing page built with React, TypeScript, and Vite, styled with Tailwind CSS, and using React Router for navigation. It includes a basic structure for a portfolio-style website with sections for Home, Projects, and Contact.

## Technologies Used

*   [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
*   [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript.
*   [Vite](https://vitejs.dev/) - A fast build tool and development server for modern web projects.
*   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
*   [React Router](https://reactrouter.com/) - A standard library for routing in React applications, primarily used for the NotFound page and potential future routes.

## Project Structure
src/ 
├── assets/
│   └── 1.svg
├─ components/ # Reusable UI components 
│   └── Navbar.tsx # Navigation bar component 
├── pages/ # Page components 
│   ├── LandingPage/ # Landing page components 
│   │   ├── ContactSection.tsx # Contact section 
│   │   ├── Footer.tsx # Footer component 
│   │   ├── HomeSection.tsx # Home section 
│   │   ├── ProjectsSection.tsx # Projects section 
│   │   └── index.tsx # Landing page root component 
│   └── NotFound.tsx # 404 Not Found page 
├── App.tsx # Main application component 
├── App.css # Global CSS styles (using Tailwind) 
├── index.css # Tailwind base styles 
└── main.tsx # Entry point for React


## Key Components

*   **`Navbar.tsx`:** The navigation bar component at the top of the page. It handles smooth scrolling to different sections of the landing page. It utilizes React Refs for smooth scrolling

*   **`src/pages/LandingPage/index.tsx`:** This is the main component for your Landing page.
It uses Refs to manage the sections of this website and has a home, project, and contact section to describe various components.

## To Do: Connecting backend to render it smoothly

## Smooth Scrolling with React Refs

This project implements smooth scrolling between sections on the landing page. Here's how it works:

1.  **React Refs:** React's `useRef` hook is used to create references to the Home, Projects, and Contact sections.

2.  **Ref Handling:** The Reacts' functions will handle all of the sections, in a more appropriate code and style for reacts

To the developer who expands on this code, this should provide guidance to the code that is done. Now this is done I will no longer continue with this code, as the task is now up to the coder. The framework has been built.