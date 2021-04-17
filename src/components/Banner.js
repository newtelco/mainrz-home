import React from "react"

const Banner = ({ hide }) => {
  return (
    <div className="bg-newtelco-500 absolute top-0 w-full">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-newtelco-600">
              <svg
                className="h-6 w-6 text-white"
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
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
              </svg>
            </span>
            <p className="ml-3 font-medium text-white ">
              <span className="md:hidden">
                Wir benutzen Cookies. Sind sie damit einverstanden?
              </span>
              <span className="hidden md:inline">
                Wir benutzen Cookies um die Erfahrung der Benutzer zu
                verbessern.
              </span>
            </p>
          </div>
          <div className="order-5 w-full sm:order-3 sm:w-1/3 flex justify-start sm:justify-end">
            <div className="order-3 mt-2 flex-shrink-0 mr-2 sm:order-2 sm:mt-0 sm:w-auto">
              <button
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring  focus:ring-newtelco-600 focus:ring-opacity-70"
                onClick={() => hide("accept")}
              >
                Zustimmen
              </button>
            </div>
            <div className="order-4 mt-2 flex-shrink-0 sm:order-3 sm:mt-0 sm:w-auto">
              <button
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-100 bg-newtelco-600 hover:bg-newtelco-700 focus:outline-none focus:ring      focus:ring-white focus:ring-opacity-50"
                onClick={() => hide("decline")}
              >
                Ablehnen
              </button>
            </div>
          </div>
          <div className="order-4 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex p-2 rounded-md hover:bg-newtelco-600 focus:outline-none focus:ring focus:ring-white focus:ring-opacity-50 sm:-mr-2 transition transition-colors duration-300 ease-in-out"
              onClick={() => hide()}
            >
              <span className="sr-only">Dismiss</span>
              <svg
                className="h-6 w-6 text-white"
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
        </div>
      </div>
    </div>
  )
}

export default Banner
