"use client";
import React, { useState, useEffect } from "react";

export default function Creative() {
  const [index, setIndex] = useState(0);
  const frames = [
    {
      title: "American Heart Association Brandmark",
      imgSrc:
        "/heart1.png",
      description:
        "If I could re-create the American Heart Association logo, this is what it would look like. I want the logo to include symbols of 'heart disease', 'care and empathy', while keeping the iconic flame symbol."
    },
    {
      title: "Portiko Logo Identity",
      imgSrc:
        "/portiko.png",
      description:
        "This hypothetical tech company focuses on designing and developing technological products, and the idea of the logo is to be timeless yet also modern. The logo focuses on minimalism with the reflection of the circuit board with contrast colors to stand out in colors and black and white for higher readability.",
    },
    {
      title: "ADDitude Magazine Re-Design",
      imgSrc:
        "/adhd.png",
      description:
        "The current website can be a little cluttered and busy for the eyes. With this re-design, the wireframe is more minimal. The call for action is bright and visible, and the content has more space to breathe so the audience can have an easier time digesting the content.",
    },
    {
      title: "Event Page",
      imgSrc:
        "/event.png",
      description:
        "This is a hypothetical museum event page about ADHD women as the diagnosis rate has increased tremendously over the recent years. For this wireframe, I want it to have sufficient negative space with bold colors to grab attention.",
    },
    {
      title: "Travel Agency",
      imgSrc:
        "/travel.gif",
      description:
        "This is a hypothetical traveling agency that allows you to pair up with someone else in another country to explore and live like a local. Essentially, you are doing study abroad, but without the studying.",
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
                    <img className="w-full p-2 md:p-4 mb-6" src={frame.imgSrc} alt={frame.title} />
                  </div>
                  <div className="sub w-full md:w-2/3 my-auto">
                    <div className="head text-base md:text-2xl font-bold mb-2 md:mb-4">
                      {frame.title}
                    </div>
                    <div className="description flex flex-wrap text-sm md:text-lg">
                      {frame.description}
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
