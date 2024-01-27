"use client";
import React, { useEffect, useState } from "react";

const accordionData = [
  {
    id: 1,
    title: "title one",
    content:
      "this is content one,, Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ullam blanditiis magni, dolorum hic perspiciatis nesciunt impedit, error, sit tempore ut sunt! Ipsa unde ipsam eius ex voluptatibus sed voluptatum!",
  },
  {
    id: 2,
    title: "title two",
    content:
      "this is content two, Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ullam blanditiis magni, dolorum hic perspiciatis nesciunt impedit, error, sit tempore ut sunt! Ipsa unde ipsam eius ex voluptatibus sed voluptatum!",
  },
  {
    id: 3,
    title: "title three",
    content:
      "this is content three, Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ullam blanditiis magni, dolorum hic perspiciatis nesciunt impedit, error, sit tempore ut sunt! Ipsa unde ipsam eius ex voluptatibus sed voluptatum!",
  },
  {
    id: 4,
    title: "title four",
    content:
      "this is content four, Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ullam blanditiis magni, dolorum hic perspiciatis nesciunt impedit, error, sit tempore ut sunt! Ipsa unde ipsam eius ex voluptatibus sed voluptatum!",
  },
];

const Accordion = () => {
  const [selectedAccordion, setSelectedAccordion] = useState<number>();
  const [isMultiSelect, setIsMultiSelect] = useState(false);
  const [multipleAccordion, setMultipleAccordion] = useState<number[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  function handleSelection(index: number) {
    if (isMultiSelect) {
      const newMultiple = [...multipleAccordion];
      const alreadyExisted = newMultiple.indexOf(index);
      if (alreadyExisted !== -1) {
        newMultiple.splice(alreadyExisted, 1);
      } else {
        newMultiple.push(index);
      }
      setMultipleAccordion(newMultiple);
    } else {
      if (selectedAccordion === index) {
        setSelectedAccordion(-1);
      } else {
        setSelectedAccordion(index);
      }
    }
  }

  if (!isMounted) {
    return null;
  }

  return (
    <div className="h-full w-full flex items-center justify-center flex-col gap-4">
      <h1>Accordion</h1>
      <button
        onClick={() => setIsMultiSelect((prev) => !prev)}
        className="p-2 border text-white hover:opacity-20 rounded-sm"
      >
        {isMultiSelect ? "Disable multiselect" : "Enable multiselect"}
      </button>
      <div className="bg-slate-200 p-2">
        <div className="flex gap-2 items-center justify-center flex-col bg-slate-300 text-xl w-[40rem] text-center">
          {accordionData.map((accordion, index) => (
            <div
              onClick={() => handleSelection(index)}
              className={` p-2 rounded-md cursor-pointer`}
              key={accordion.id}
            >
              <p
                className={`${
                  index === selectedAccordion ? "bg-slate-100" : ""
                } ${
                  multipleAccordion.indexOf(index) !== -1 ? "bg-slate-100" : ""
                }`}
              >
                {accordion.title}
              </p>
              <p>
                {isMultiSelect ? (
                  multipleAccordion.indexOf(index) !== -1 ? (
                    <p>{accordionData[index].content}</p>
                  ) : (
                    ""
                  )
                ) : (
                  <p>
                    {selectedAccordion === index &&
                      accordionData[selectedAccordion].content}
                  </p>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
