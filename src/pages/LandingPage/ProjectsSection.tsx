// src/pages/LandingPage/ProjectsSection.tsx
import { forwardRef } from 'react';

const ProjectsSection = forwardRef<HTMLDivElement>(({ }, ref) => {
  return (
    <div className="bg-gray-100 min-h-screen py-12" id="projects" ref={ref}> {/* Background and minimum height */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mt-10">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Projects
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            My Work
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            A showcase of my latest projects and contributions.
          </p>
        </div>

        {/* Project Grid */}
        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      {/* Icon */}
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 4.75 7.5 4.75a4.5 4.5 0 00-4.5 4.5c0 1.969 1.033 3.708 2.625 4.991A4.5 4.5 0 0012 14.754a4.5 4.5 0 004.5-4.5c0-1.969-1.033-3.708-2.625-4.991A4.5 4.5 0 007.5 4.75a4.5 4.5 0 00-4.5 4.5c0 1.969 1.033 3.708 2.625 4.991A4.5 4.5 0 0012 14.754a4.5 4.5 0 004.5-4.5c0-1.969-1.033-3.708-2.625-4.991A4.5 4.5 0 007.5 4.75z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    Project Title 1
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Brief description of the project and its key features.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      {/* Icon */}
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14.727M13 10l6.926 6.926M21 12H3" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    Project Title 2
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Brief description of the project and its key features.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      {/* Icon */}
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    Project Title 3
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Brief description of the project and its key features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
})

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;