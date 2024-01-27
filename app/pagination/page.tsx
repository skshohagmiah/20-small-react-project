"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [paginationData, setPaginationData] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  let itemsPerPage = 5;
  let totalButtons = Array(Math.ceil(total / itemsPerPage))
    .fill(null)
    .map((_, index) => index + 1);

  const buttonsToShow = 10;
  const startPage = Math.max(1, currentPage - Math.floor(buttonsToShow / 2));
  const endPage = Math.min(totalButtons.length, startPage + buttonsToShow - 1);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setTotal(data.total));
  }, []);

  useEffect(() => {
    fetch(
      `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${
        (currentPage - 1) * itemsPerPage
      }`
    )
      .then((res) => res.json())
      .then((data) => setPaginationData(data.products));
  }, [currentPage, itemsPerPage]);

  console.log(paginationData, totalButtons, total);

  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <h2>Pagination</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2 place-content-center">
        {paginationData.map((item) => (
          <div key={item.id} className="text-xl space-y-2 text-center">
            <h3 className="text-lg text-white">{item.title.slice(0, 30)}</h3>
            <Image
              src={item.thumbnail}
              alt="image"
              width={200}
              height={200}
              className="object-cover w-[200px] h-[200px]"
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 bg-slate-300 rounded-md disabled:opacity-50 hover:opacity-70"
        >
          Previous
        </button>
        {totalButtons.slice(startPage - 1, endPage).map((pageNumber) => (
          <button
            onClick={() => setCurrentPage(pageNumber)}
            className={`${
              currentPage === pageNumber
                ? "bg-slate-700 text-white"
                : "bg-slate-400"
            } p-2 rounded-md hover:opacity-70`}
            key={pageNumber}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={total / itemsPerPage === currentPage}
          className="p-2 bg-slate-300 rounded-md disabled:opacity-50 hover:opacity-70"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
