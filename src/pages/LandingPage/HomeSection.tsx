// src/pages/LandingPage/HomeSection.tsx
import React, { forwardRef } from 'react';
import profileImage from "../../../src/assets/1.svg"


interface HomeSectionProps {
    projectsRef: React.RefObject<HTMLDivElement | null>;
}

const HomeSection = forwardRef<HTMLDivElement, HomeSectionProps>((props, ref) => {
    const { projectsRef } = props;

    const scrollToSection = () => {
        projectsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', `#${projectsRef.current?.id}`);
    };

    return (
        <div className="bg-gray-800 min-h-screen py-12" id="home" ref={ref}> {/* Background and minimum height */}
            <div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Container */}
                <div className="flex justify-center mt-15">
                    <img
                        className="h-50 w-50 rounded-full object-cover"
                        src={profileImage} // Replace with your profile photo URL
                        // src="./src/assets/1.svg" // Replace with your profile photo URL
                        alt="Profile Photo"
                    />
                </div>
                <div className="text-center">
                    <h2 className="text-base text-indigo-200 font-semibold tracking-wide uppercase">
                        Greetings!
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-50 sm:text-4xl">
                        I'm Bagas
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        A passionate (not real) engineer building solutions for your work.
                    </p>
                </div>

                <div className="mt-10 flex justify-center">
                    <div className="inline-flex rounded-md shadow">
                        <button
                            onClick={() => {
                                scrollToSection();
                            }}
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                            View My Work
                        </button>
                    </div>
                </div>

                {/* Profile Photo (Optional) */}

            </div>
        </div>
    );
})

HomeSection.displayName = 'HomeSection';

export default HomeSection;