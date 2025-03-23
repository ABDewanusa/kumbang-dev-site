// src/components/Navbar.tsx
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-10">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center  h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0">
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" // Replace with your logo URL
                                alt="Your Company"
                            />
                            <span className="font-semibold text-xl ml-2">Kumbang Dev</span> {/* Replace with your name/title */}
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link to="/" className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Home
                            </Link>
                            <Link to="/projects" className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Projects
                            </Link>
                            <Link to="/contact" className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Contact Me
                            </Link>
                        </div>
                    </div>
                    <div className="md:block">
                        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                            Log In
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;