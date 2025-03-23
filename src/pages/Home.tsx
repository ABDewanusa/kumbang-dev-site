// src/pages/Home.tsx

function Home() {
    return (
        <div className="bg-gray-100 min-h-screen py-12"> {/* Background and minimum height */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Container */}
                <div className="mt-10 flex justify-center">
                    <img
                        className="h-32 w-32 rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1503023345310-154ca560aeaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHw%3D&w=1000&q=80" // Replace with your profile photo URL
                        alt="Profile Photo"
                    />
                </div>
                <div className="lg:text-center">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                        Greetings!
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        I'm Kumbang
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        A passionate developer building innovative solutions for the web.
                    </p>
                </div>

                <div className="mt-10 flex justify-center">
                    <div className="inline-flex rounded-md shadow">
                        <a
                            href="/projects"
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                            View My Work
                        </a>
                    </div>
                </div>

                {/* Profile Photo (Optional) */}

            </div>
        </div>
    );
}

export default Home;