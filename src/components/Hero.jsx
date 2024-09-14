// src/pages/Home.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const [projectCount, setProjectCount] = useState(0);
  const [donationCount, setDonationCount] = useState(0);

  useEffect(() => {
    // Simulating data fetching or calculation
    const interval = setInterval(() => {
      setProjectCount((prevCount) =>
        prevCount < 50 ? prevCount + 1 : prevCount
      );
      setDonationCount((prevCount) =>
        prevCount < 1000000 ? prevCount + 10000 : prevCount
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-white text-center">
        <section>
          <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-6xl ">
            <div class="flex w-full mx-auto text-left">
              <div class="relative inline-flex items-center mx-auto align-middle py-2 px-4 lg:pt-10 sm:px-6 lg:px-8">
                <div class="text-center">
                  <h1 className="text-3xl pt-8 font-extrabold tracking-tight text-black sm:text-5xl lg:text-5xl">
                    Making a Difference
                  </h1>
                  <p className="mt-6 text-xl text-black max-w-3xl relative">
                    Our NGO is dedicated to improving lives and creating lasting
                    change in communities around the world. Join us in our
                    mission to make a positive impact.
                  </p>
                  <div class="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                    <div class="mt-3 rounded-lg sm:mt-0">
                      <Link
                        to="/donate"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-lime-500 hover:bg-green-600"
                      >
                        Donate Now
                      </Link>
                    </div>
                    <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                      <Link
                        to="/projects"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-lime-500 hover:bg-green-600"
                      >
                        Projects
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
        </section>
        {/* Hero section */}
        <div class=" w-full dark:bg-gray-900">
          <div class="max-w-4xl mx-auto py-3 px-4 md:px-8">
            <div class="grid max-w-4xl grid-cols-1 gap-8 mx-auto auto-rows-fr lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <article class="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50">
                <img
                  src="https://images.unsplash.com/photo-1639322537228-f710d846310a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxibG9jayUyMGNoYWlufGVufDB8MHx8fDE3MTI3NTMxNjd8MA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt=""
                  class="absolute inset-0 object-cover w-full h-full -z-10"
                />
                <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div class="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

                <a
                  class="text-lg font-semibold leading-6 text-white hover:text-teal-100"
                  href=""
                >
                  he Rise of Blockchain Technology: A Comprehensive Guide
                </a>
              </article>
              <article class="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50">
                <img
                  src="https://images.unsplash.com/photo-1639322537228-f710d846310a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxibG9jayUyMGNoYWlufGVufDB8MHx8fDE3MTI3NTMxNjd8MA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt=""
                  class="absolute inset-0 object-cover w-full h-full -z-10"
                />
                <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div class="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

                <a
                  class="text-lg font-semibold leading-6 text-white hover:text-teal-100"
                  href=""
                >
                  he Rise of Blockchain Technology: A Comprehensive Guide
                </a>
              </article>
              <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                <a href="#">
                  <img
                    class="rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                    alt="image description"
                  />
                </a>
                <figcaption class="absolute px-4 text-lg text-white bottom-6">
                  <p>
                    Do you want to get notified when a new component is added to
                    Flowbite?
                  </p>
                </figcaption>
              </figure>
              <article class="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50">
                <img
                  src="https://images.unsplash.com/photo-1639322537228-f710d846310a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxibG9jayUyMGNoYWlufGVufDB8MHx8fDE3MTI3NTMxNjd8MA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt=""
                  class="absolute inset-0 object-cover w-full h-full -z-10"
                />
                <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div class="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

                <a
                  class="text-lg font-semibold leading-6 text-white hover:text-teal-100"
                  href=""
                >
                  he Rise of Blockchain Technology: A Comprehensive Guide
                </a>
              </article>
              <article class="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50">
                <img
                  src="https://images.unsplash.com/photo-1666112835156-c65bb806ac73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNXx8cXVhbnR1bSUyMGNvbXB1dGluZ3xlbnwwfDB8fHwxNzEyNzUzMTk2fDA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt=""
                  class="absolute inset-0 object-cover w-full h-full -z-10"
                />
                <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div class="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

                <a
                  class="text-lg font-semibold leading-6 text-white hover:text-teal-100"
                  href=""
                >
                  How Quantum Computing Will Revolutionize Data Security
                </a>
              </article>
            </div>
          </div>
        </div>

        {/* Featured projects and donations counter */}
        <div className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 text-center">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-3xl font-bold text-indigo-600">
                  {projectCount}
                </h2>
                <p className="mt-2 text-lg text-gray-600">Featured Projects</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 md:px-8">
                <h2 className="text-3xl font-bold text-indigo-600">
                  ${(donationCount / 1000000).toFixed(2)}M
                </h2>
                <p className="mt-2 text-lg text-gray-600">Total Donations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Add more sections for featured projects, testimonials, etc. */}
      </div>
    </>
  );
}

export default Hero;
