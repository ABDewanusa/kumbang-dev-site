# React + TypeScript + Vite Blog

This template provides a setup to get React working in Vite with TypeScript, Tailwind CSS, Supabase and React Router. It includes a basic structure for building a blog application.

## Technologies Used

*   [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
*   [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript.
*   [Vite](https://vitejs.dev/) - A fast build tool and development server for modern web projects.
*   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
*   [Supabase](https://supabase.com/) - An open-source Firebase alternative for backend services (database, storage, authentication).
*   [React Router](https://reactrouter.com/) - A standard library for routing in React applications.

## Project Structure
src/ 
├── components/ # Reusable UI components 
├── pages/ # Page components 
├── services/ # API and service functions 
├── types/ # TypeScript type definitions 
├── utils/ # Utility functions and constants 
└── lib/ # Utility functions and constants


## Deployment

This project is deployed to [Firebase Hosting](https://firebase.google.com/docs/hosting) using [GitHub Actions](https://github.com/features/actions).

To deploy your own copy of this project:

1.  Create a Firebase project.
2.  Enable Firebase Hosting.
3.  Install the Firebase CLI: `npm install -g firebase-tools`
4.  Log in to Firebase: `firebase login`
5.  Initialize Firebase Hosting: `firebase init hosting`
6.  Create a Firebase service account and add its JSON key as a secret in your GitHub repository settings (`FIREBASE_SERVICE_ACCOUNT`).
7.  Configure the `projectId` parameter in `.github/workflows/deploy.yml` to your Firebase project ID.
8.  Commit and push your changes to your GitHub repository.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})