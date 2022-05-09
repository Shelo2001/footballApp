import React from "react"
import { Link } from "react-router-dom"

const LandingScreen = () => {
  return (
    <div>
      <div class="bg-black  text-white py-20">
        <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
          <div class="flex flex-col  w-full lg:w-1/3 justify-center items-start p-8">
            <h1 class="text-3xl mr-1 md:text-8xl p-2  text-red-600 tracking-loose">
              Sports
            </h1>
            <h2 class="text-3xl md:text-5xl  leading-relaxed md:leading-snug mb-2">
              Head into the world of sports
            </h2>
            <p class="text-sm md:text-base text-gray-50 mb-4">
              Explore your favourite sport games and showcase your talent and
              win tremendous amount of money.
            </p>
            <Link to="/odds">
              <button
                type="button"
                class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Start Playing
              </button>
            </Link>
          </div>
          <div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
            <div class="h-48 flex flex-wrap content-center">
              <div>
                <img
                  class="inline-block mt-28 rounded-tl-[120px] xl:block"
                  src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingScreen
