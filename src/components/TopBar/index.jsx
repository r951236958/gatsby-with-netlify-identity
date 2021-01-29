import { Transition } from "@headlessui/react"
import { Link } from "gatsby-theme-material-ui"
import { useIdentityContext } from "react-netlify-identity"
import PropTypes from "prop-types"
import React, { useState } from "react"
import GatsbyIcon from "../../images/GatsbyIcon.svg"
import GatsbyAuth0 from "../../images/GatsbyAuth0.svg"

export default function TopBar({ menuLinks }) {
  const [isOpen, setIsOpen] = useState(false)
  const { loginUser, logoutUser, identity } = useIdentityContext()
  const [menuOpen, setMenuOpen] = useState(false)

  const isLoggedIn = identity && identity.isLoggedIn
  if (!isLoggedIn) {
    return <div>Loading ...</div>
  }

  return (
    <div>
      {/* This example requires Tailwind CSS v2.0+ */}
      <nav className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              {/* Mobile menu button*/}
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed. */}
                {/*
                    Heroicon name: menu
        
                    Menu open: "hidden", Menu closed: "block"
                */}
                <svg
                  className={(!menuOpen ? "block" : "hidden") + " h-6 w-6"}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/*
                  Heroicon name: x
    
                  Menu open: "block", Menu closed: "hidden"
                */}
                <svg
                  className={(menuOpen ? "block" : "hidden") + " h-6 w-6"}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src={GatsbyIcon}
                  alt="Gatsby"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src={GatsbyAuth0}
                  alt="Gatsby+Auth0"
                />
              </div>
              <div className="hidden md:block md:ml-6">
                <div className="flex space-x-4">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  {menuLinks.map(link => (
                    <Link
                      key={link.name}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white active:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                      to={link.link}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <a
                    href="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Team
                  </a>
                  <a
                    href="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Projects
                  </a>
                  <a
                    href="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Calendar
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
              {!isLoggedIn ? (
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800"
                  onClick={loginUser}
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M32 217.1c0-8.8 7.2-16 16-16h144v-93.9c0-7.1 8.6-10.7 13.6-5.7l141.6 143.1c6.3 6.3 6.3 16.4 0 22.7L205.6 410.4c-5 5-13.6 1.5-13.6-5.7v-93.9H48c-8.8 0-16-7.2-16-16v-77.7m-32 0v77.7c0 26.5 21.5 48 48 48h112v61.9c0 35.5 43 53.5 68.2 28.3l141.7-143c18.8-18.8 18.8-49.2 0-68L228.2 78.9c-25.1-25.1-68.2-7.3-68.2 28.3v61.9H48c-26.5 0-48 21.6-48 48zM512 400V112c0-26.5-21.5-48-48-48H332c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h132c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H332c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h132c26.5 0 48-21.5 48-48z" />
                  </svg>
                </button>
              ) : (
                <>
                  <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">View notifications</span>
                    {/* Heroicon name: bell */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>
                  {/* Profile dropdown */}
                  <div className="ml-3 relative">
                    <div>
                      <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        id="user-menu"
                        aria-haspopup="true"
                      >
                        <span className="sr-only">Open user menu</span>
                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
                        </svg>
                      </button>
                    </div>
                    {/*
                    Profile dropdown panel, show/hide based on dropdown state.
        
                    For animated transitions, import { Transition } from '@headlessui/react' and wrap the next tag in this component:
                    */}
                    <Transition
                      show={isOpen}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <div
                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-50"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu"
                      >
                        <Link
                          to="/"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Home
                        </Link>
                        <Link
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          to="/about/"
                        >
                          About
                        </Link>
                        {isLoggedIn && (
                          <Link
                            to="/account/profile/"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            Profile
                          </Link>
                        )}
                        <a
                          href="#logout"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                          onClick={logoutUser}
                        >
                          Sign out
                        </a>
                      </div>
                    </Transition>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/*
        Mobile menu, toggle classes based on menu state.
    
        Menu open: "block", Menu closed: "hidden"
      */}
        <div className={menuOpen ? "block" : "hidden"}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <Link
              to="/"
              className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>

            <Link
              className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              to="/about"
            >
              About
            </Link>

            <Link
              to="/page-2/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Page2
            </Link>

            <Link
              to="/using-typescript/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              TypeScript
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 rounded-full text-gray-300 fill-current"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z" />
                </svg>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-white">
                  Tom Cook
                </div>
                <div className="text-sm font-medium leading-none text-gray-400">
                  tom@example.com
                </div>
              </div>
              {isLoggedIn && (
                <button
                  className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  onClick={logoutUser}
                >
                  <svg
                    className="w-6 h-6"
                    aria-label="sign-out"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M32 217.1c0-8.8 7.2-16 16-16h144v-93.9c0-7.1 8.6-10.7 13.6-5.7l141.6 143.1c6.3 6.3 6.3 16.4 0 22.7L205.6 410.4c-5 5-13.6 1.5-13.6-5.7v-93.9H48c-8.8 0-16-7.2-16-16v-77.7m-32 0v77.7c0 26.5 21.5 48 48 48h112v61.9c0 35.5 43 53.5 68.2 28.3l141.7-143c18.8-18.8 18.8-49.2 0-68L228.2 78.9c-25.1-25.1-68.2-7.3-68.2 28.3v61.9H48c-26.5 0-48 21.6-48 48zM512 400V112c0-26.5-21.5-48-48-48H332c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h132c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H332c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h132c26.5 0 48-21.5 48-48z" />
                  </svg>
                </button>
              )}
            </div>
            {isLoggedIn && (
              <div className="mt-3 px-2 space-y-1">
                <Link
                  to="/account/"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  Account
                </Link>

                <Link
                  to="/account/profile/"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  Profile
                </Link>

                <a
                  href="#logout"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  onClick={logoutUser}
                >
                  Sign out
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}

TopBar.propTypes = {
  siteTitle: PropTypes.string,
}

TopBar.defaultProps = {
  siteTitle: ``,
}
