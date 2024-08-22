"use client";
import React, { useState, useEffect } from "react";

export default function Personal() {
  const [index, setIndex] = useState(0);
  const frames = [
    {
      title: "Book Club",
      imgSrc:
        "https://images-na.ssl-images-amazon.com/images/I/81eJpEEQwYL._AC_SL1500_.jpg",
      description:
        "The application allows users to log their books and review them without making it public to others like Goodreads. The resources used are Next.js, React, Vercel, MongoDB, and Google API.",
    },
    {
      title: "Plant Search",
      imgSrc:
        "https://image.freepik.com/free-vector/cute-lion-cartoon_160606-353.jpg",
      description:
        "Planty uses plant API to give information on plants based on name, and allows users to learn more about the plants around them in nature. This app uses Next.js, React, Vercel, and Perenual API.",
    },
    {
      title: "Wedding Planner",
      imgSrc:
        "https://i.pinimg.com/originals/07/1d/d0/071dd09d7b36e49139fe2cf08ff728a8.jpg",
      description:
        "With wedding planning in works, I created my own wedding planner so I can make my own account, write down all my plans, and everything I need during the process. This app uses Next.js, React, Vercel, MongoDB, and WeatherAPI.",
    },
    {
      title: "Ikigai",
      imgSrc:
        "https://image.freepik.com/free-vector/cartoon-owl-tree-branch_194935-43.jpg",
      description:
        "This app is created for the neurodivergent and neurotypicals who need a quick and simple way of handling to-do lists, with a completed puzzle presented as a reward. This app uses Next.js, React, Vercel, MongoDB, Spoonacular API.",
    },
  ];

  const limit = { start: 0, end: frames.length - 1 };

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.keyCode === 39 && index !== limit.end) {
        next();
      }
      if (e.keyCode === 37 && index !== limit.start) {
        prev();
      }
    };

    document.addEventListener("keyup", handleKeyUp);
    return () => document.removeEventListener("keyup", handleKeyUp);
  }, [index, limit]);

  const next = () => {
    setIndex((prevIndex) => Math.min(prevIndex + 1, limit.end));
  };

  const prev = () => {
    setIndex((prevIndex) => Math.max(prevIndex - 1, limit.start));
  };

  const goTo = (targetIndex: number | "end" | "start") => {
    if (targetIndex === "end") {
      setIndex(limit.end);
    } else if (targetIndex === "start") {
      setIndex(limit.start);
    } else {
      setIndex(targetIndex);
    }
  };

  return (
    <div>
      <div className="text-lg font-bold m-5 text-center">
        Use Keyboard Arrow Keys To Go Left And Right
      </div>

      <div className="gallery border-2 rounded mx-auto m-5 bg-white w-full max-w-[90%] md:max-w-[75%] lg:max-w-[650px]">
        <div className="top flex p-2 border-b select-none">
          <div className="heading text-gray-800 w-full pl-3 font-semibold my-auto">
            {frames[index].title}
          </div>
          <div className="buttons ml-auto flex text-gray-600 mr-1">
            <svg
              onClick={prev}
              className="w-7 border-2 rounded-l-lg p-1 cursor-pointer border-r-0"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <svg
              onClick={next}
              className="w-7 border-2 rounded-r-lg p-1 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>

        <div className="content-area w-full h-auto overflow-hidden">
          <div
            className="platform shadow-xl h-full flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {frames.map((frame, idx) => (
              <div
                key={idx}
                className="each-frame border-box flex-none h-full w-full"
              >
                <div className="main flex flex-wrap w-full p-4 md:p-8">
                  <div className="sub w-full sm:w-1/4 md:w-1/3 my-auto">
                    <img className="w-full p-2 md:p-4" src={frame.imgSrc} alt={frame.title} />
                  </div>
                  <div className="sub w-full md:w-2/3 my-auto">
                    <div className="head text-base md:text-2xl font-bold mb-2 md:mb-4">
                      {frame.title}
                    </div>
                    <div className="description flex flex-wrap text-sm md:text-lg">
                      {frame.description}
                    </div>
                    <div
                      className="goto border border-gray-400 text-xs md:text-sm font-semibold inline-block mt-2 p-1 px-2 rounded cursor-pointer"
                      onClick={() => goTo(2)}
                    >
                      Goto Third Frame
                    </div>
                    <div
                      className="goto border border-gray-400 text-xs md:text-sm font-semibold inline-block mt-2 p-1 px-2 ml-4 rounded cursor-pointer"
                      onClick={() => goTo("end")}
                    >
                      Goto Last Frame
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
