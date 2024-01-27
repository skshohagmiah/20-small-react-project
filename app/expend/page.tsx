"use client";
import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const folderLinks = [
  {
    folder: "Dashboard",
    links: ["setting", "analatices"],
  },
  {
    folder: "Home",
    links: ["products", "services"],
  },
];

const FolderExpend = () => {
  const [selectedFolder, setSelectedFolder] = useState<number[]>([]);

  const handleSelection = (index: number) => {
    const newSelectedFolder = [...selectedFolder];
    const alreadyExist = newSelectedFolder.indexOf(index);

    if (alreadyExist !== -1) {
      newSelectedFolder.splice(alreadyExist, 1);
    } else {
      newSelectedFolder.push(index);
    }
    setSelectedFolder(newSelectedFolder);
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h2>Folder Expend</h2>
      <div className="bg-white p-4">
        {folderLinks.map((folder, index) => (
          <div key={index} className="flex flex-col gap-2">
            <p
              onClick={() => handleSelection(index)}
              className="flex gap-4 p-2 mt-2 items-center justify-between rounded-md cursor-pointer bg-slate-300"
            >
              {folder.folder}{" "}
              {selectedFolder.indexOf(index) !== -1 ? (
                <FaArrowUp />
              ) : (
                <FaArrowDown />
              )}
            </p>
            {selectedFolder.indexOf(index) !== -1
              ? folderLinks[index].links.map((item, index) => (
                  <p className="ml-4 bg-slate-300 p-1 rounded-md text-center" key={index}>
                    {item}
                  </p>
                ))
              : ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FolderExpend;
