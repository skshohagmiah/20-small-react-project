"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

const categoryData = [
  "html",
  "css",
  "javascript",
  "typescript",
  "reactjs",
  "nextjs",
  "prisma",
  "nodejs",
  "expressjs",
  "mongodb",
  "python",
  "rust",
  "go lang",
  "c++",
  "fastfy",
];

const Category = () => {
  const [translate, setTranslate] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [clientWidth, setClientWidth] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    setClientWidth(containerRef.current?.clientWidth!);
    setScrollWidth(containerRef.current?.scrollWidth!);
  }, [translate]);

  return (
    <div className="h-full flex flex-col items-center justify-center gap-3">
      <h2>Dynamic Category</h2>
      <div className="relative flex">
        <div className=" max-w-[600px] overflow-hidden  mask-image">
          <div
            ref={containerRef}
            style={{ transform: `translateX(-${translate}%)` }}
            className=" flex gap-4 items-center text-xl  mx-auto p-2 "
          >
            {categoryData.map((item) => (
              <span className="p-2 rounded-md hover:bg-slate-600 whitespace-nowrap bg-slate-300" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center opacity-100">
          {translate > 0 && (
            <button
              onClick={() => {
                setTranslate((translate) => translate - 20);
              }}
              className="absolute left-4 bg-slate-800 p-2 rounded-full text-xl text-white"
            >
              <FaChevronLeft />
            </button>
          )}
          {translate + clientWidth + 100 >= scrollWidth - clientWidth ? (
            ""
          ) : (
            <button
              onClick={() => setTranslate((translate) => translate + 20)}
              className="absolute right-4 bg-slate-800 p-2 rounded-full text-xl text-white"
            >
              <FaChevronRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
