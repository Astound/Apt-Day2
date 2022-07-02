import React from "react";

function InsWel() {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <p className="text-xs"> Hi Dixit</p>
          <p className="text-3xl font-semibold"> Welcome to Sova!</p>
        </div>

        <div>
          <form>
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only "
            >
              Search
            </label>
            <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  class="w-5 h-5 text-gray-500 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search"
                required
              />
            </div>
          </form>
        </div>
      </div>

      <div className="flex justify-between mt-2">
        <div className=" bg-white p-4 pr-40 rounded-xl">
          <p className=" text-xs">Live courses</p>
          <p className=" text-lg font-semibold">13</p>
        </div>

        <div className=" bg-white p-4 pr-40 rounded-xl">
          <div className="flex">
            <div className=" self-center mr-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20V8H4V6ZM6 2H18V4H6V2ZM20 10H4C2.9 10 2 10.9 2 12V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V12C22 10.9 21.1 10 20 10ZM20 20H4V12H20V20ZM10 12.73V19.26L16 16L10 12.73Z"
                  fill="#30E0AB"
                />
              </svg>
            </div>

            <div>
              <p className=" text-xs">Videos</p>
              <p className=" text-lg font-semibold">276</p>
            </div>
          </div>
        </div>

        <div className="  bg-white p-4 pr-40 rounded-xl">
          <div className="flex">
            <div className=" self-center mr-2">
              <svg
                width="45"
                height="48"
                viewBox="0 0 57 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="28.3481"
                  cy="28.9995"
                  r="28.0248"
                  fill="url(#paint0_linear_139_388)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M33.8013 30.319C35.401 31.405 36.522 32.8763 36.522 34.838V38.3411H40.0251C40.6673 38.3411 41.1928 37.8157 41.1928 37.1734V34.838C41.1928 32.2924 37.0241 30.7861 33.8013 30.319Z"
                  fill="white"
                />
                <path
                  d="M24.845 28.9995C27.4246 28.9995 29.5158 26.9083 29.5158 24.3287C29.5158 21.7491 27.4246 19.6579 24.845 19.6579C22.2654 19.6579 20.1742 21.7491 20.1742 24.3287C20.1742 26.9083 22.2654 28.9995 24.845 28.9995Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M31.8511 28.9995C34.4318 28.9995 36.5219 26.9093 36.5219 24.3287C36.5219 21.7481 34.4318 19.6579 31.8511 19.6579C31.3023 19.6579 30.7885 19.7747 30.2981 19.9382C31.2673 21.1409 31.8511 22.6706 31.8511 24.3287C31.8511 25.9869 31.2673 27.5165 30.2981 28.7193C30.7885 28.8828 31.3023 28.9995 31.8511 28.9995Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.845 30.1672C21.7273 30.1672 15.5034 31.732 15.5034 34.838V37.1734C15.5034 37.8157 16.0289 38.3411 16.6711 38.3411H33.0189C33.6611 38.3411 34.1866 37.8157 34.1866 37.1734V34.838C34.1866 31.732 27.9628 30.1672 24.845 30.1672Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_139_388"
                    x1="0.323364"
                    y1="0.974762"
                    x2="56.3729"
                    y2="57.0243"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#30E0AB" />
                    <stop offset="1" stop-color="#30E0AB" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div>
              <p className=" text-xs">Students</p>
              <p className=" text-lg font-semibold">321</p>
            </div>
          </div>
        </div>

        <div className=" bg-emerald-400 text-white p-4 pr-40 rounded-xl">
          <div className="flex">
            <div>
              <p className=" text-xs">Earning</p>
              <p className=" text-lg font-semibold">₹540.50</p>
            </div>

            <div className="ml-4 ">
              <svg
                width="92"
                height="45"
                viewBox="0 0 92 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.18848 42.5177C2.18848 42.5177 8.47378 -5.02972 24.2079 16.9951C39.9421 39.02 46.2274 38.0083 52.2327 20.9987C59.656 -0.0274378 87.0215 18.0766 89.7659 2.98273"
                  stroke="url(#paint0_linear_139_152)"
                  stroke-width="4.00354"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_139_152"
                    x1="-1.31464"
                    y1="47.5221"
                    x2="70.8269"
                    y2="-15.9484"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsWel;
