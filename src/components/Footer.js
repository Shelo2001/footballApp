import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className=" bottom-0 w-full ">
      <footer className="p-4 bg-black quicksand  text-center shadow md:flex  md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-red-500 sm:text-center dark:text-gray-400">
          © 2022 Akaki Shelia All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link
              to="/odds"
              className="text-white text-md tracking-tight font-semibold hover:text-red-600 focus:text-red-600 mr-6 "
            >
              Odds
            </Link>
          </li>
          <li>
            <Link
              to="/todaysgames"
              className="text-white text-md tracking-tight font-semibold hover:text-red-600 focus:text-red-600 mr-6"
            >
              Games
            </Link>
          </li>
          <li></li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
