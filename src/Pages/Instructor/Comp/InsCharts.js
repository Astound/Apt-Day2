import React from "react";

function InsCharts() {
  return (
    <div className="flex justify-between">
      <div className=" bg-white p-4 ">
        <div className="flex justify-between">
          <div className="flex ">
            <p className=" text-emerald-400 text-xs m-4"> Viewership</p>
            <p className=" text-emerald-400 text-xs m-4"> Viewership</p>
            <p className=" text-emerald-400 text-xs m-4"> Viewership</p>
          </div>

          <div>
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="33" height="33" rx="7" fill="#F4F7FE" />
              <path
                d="M11.4 14.2H11.6C12.37 14.2 13 14.83 13 15.6V22.6C13 23.37 12.37 24 11.6 24H11.4C10.63 24 10 23.37 10 22.6V15.6C10 14.83 10.63 14.2 11.4 14.2V14.2ZM17 10C17.77 10 18.4 10.63 18.4 11.4V22.6C18.4 23.37 17.77 24 17 24C16.23 24 15.6 23.37 15.6 22.6V11.4C15.6 10.63 16.23 10 17 10ZM22.6 18C23.37 18 24 18.63 24 19.4V22.6C24 23.37 23.37 24 22.6 24C21.83 24 21.2 23.37 21.2 22.6V19.4C21.2 18.63 21.83 18 22.6 18V18Z"
                fill="#30E0AB"
              />
            </svg>
          </div>
        </div>

        <div className="ml-4 text-3xl font-semibold">1,113 hours</div>

        <svg
          className="ml-4"
          width="725"
          height="161"
          viewBox="0 0 643 161"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5625"
            y="103"
            width="34.5236"
            height="58"
            rx="8"
            fill="#E9EDF7"
          />
          <rect
            x="55.8237"
            y="19"
            width="34.5236"
            height="142"
            rx="8"
            fill="#E9EDF7"
          />
          <rect
            x="111.085"
            y="63"
            width="34.5236"
            height="98"
            rx="8"
            fill="#E9EDF7"
          />
          <rect
            x="166.346"
            y="49"
            width="34.5236"
            height="112"
            rx="8"
            fill="#E9EDF7"
          />
          <rect
            x="221.607"
            y="71"
            width="34.5236"
            height="90"
            rx="8"
            fill="#E9EDF7"
          />
          <rect
            x="276.868"
            width="34.5236"
            height="161"
            rx="8"
            fill="#30E0AB"
          />
          <rect
            x="332.129"
            y="83"
            width="34.5236"
            height="78"
            rx="8"
            fill="#E9EDF7"
          />
          <rect
            x="387.391"
            y="19"
            width="34.5237"
            height="142"
            rx="8"
            fill="#E9EDF7"
          />
          <rect
            x="442.652"
            y="122"
            width="34.5237"
            height="39"
            rx="8"
            fill="#E9EDF7"
          />
          <rect
            x="497.913"
            y="49"
            width="34.5236"
            height="112"
            rx="8"
            fill="#E9EDF7"
          />
          <rect
            x="553.174"
            y="98"
            width="34.5237"
            height="63"
            rx="8"
            fill="#E9EDF7"
          />
          <rect
            x="608.435"
            y="63"
            width="34.5236"
            height="98"
            rx="8"
            fill="#E9EDF7"
          />
        </svg>
      </div>

      <div>
        <div className=" bg-white p-4 rounded-lg">
          <h1 className=" font-semibold text-xl mb-3"> Discussion box</h1>
          <div>
            <p className=" text-xs text-gray-400"> Recent</p>
            <ul className="mt-2">
              <li className="pl-2 mb-4">
                <div className="flex">
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="21" cy="21" r="21" fill="#F4F7FE" />
                  </svg>

                  <div className="ml-1">
                    <h2 className=" font-semibold text-base">Sir I’m asking about Xyz  topics whe...</h2>
                    <p className=" text-gray-400 text-xs"> Today, 02:00 PM</p>
                  </div>
                </div>
              </li>

              <li className="pl-2 mb-4">
                <div className="flex">
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="21" cy="21" r="21" fill="#F4F7FE" />
                  </svg>

                  <div className="ml-1">
                    <h2 className=" font-semibold text-base">Sir I’m asking about Xyz  topics whe...</h2>
                    <p className=" text-gray-400 text-xs"> Today, 02:00 PM</p>
                  </div>
                </div>
              </li>

              <li className="pl-2 mb-4">
                <div className="flex">
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="21" cy="21" r="21" fill="#F4F7FE" />
                  </svg>

                  <div className="ml-1">
                    <h2 className=" font-semibold text-base">Sir I’m asking about Xyz  topics whe...</h2>
                    <p className=" text-gray-400 text-xs"> Today, 02:00 PM</p>
                  </div>
                </div>
              </li>
            </ul>
            <div className=" text-emerald-600 text-right cursor-pointer">
              View all tasks
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsCharts;
