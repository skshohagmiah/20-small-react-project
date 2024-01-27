"use client";
import React, { use, useEffect, useRef, useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import { GrDocument } from "react-icons/gr";
import { FaPlus } from "react-icons/fa";

const Folder = ({ FileData }: { FileData: any }) => {
  const [fileDate, setFileData] = useState(FileData);
  const [openedFile, setOpenedFile] = useState<number[]>([]);
  const [isCreatingFolder, setIsCreatingFolder] = useState({
    id: 0,
    isFolder: true,
  });
  const buttonRef = useRef<HTMLDivElement>(null);
  const [folderName, setFolderName] = useState("");
  const [fileName, setFileName] = useState("");

  console.log(fileDate)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsCreatingFolder({ id: 0, isFolder: false });
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleFileOpen = (id: number) => {
    const newOpendFile = [...openedFile];
    const alreadyIdExist = newOpendFile.findIndex((file) => file === id);

    if (alreadyIdExist !== -1) {
      newOpendFile.splice(alreadyIdExist, 1);
    } else {
      newOpendFile.push(id);
    }
    setOpenedFile(newOpendFile);
  };

  const createFolder = (e: React.FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();
    const response = fileDate.map((file: any) => {
      if (file.id === id) {
        if (isCreatingFolder.id === Number(id) && isCreatingFolder.isFolder) {
          file.items.unshift({
            id: Date.now() * Math.random() * 100,
            name: folderName,
            isFolder: true,
            items: [],
          });
        } else {
          file.items.unshift({
            id: Date.now() * Math.random() * 100,
            name: fileName,
            isFolder: false,
            items: [],
          });
        }
      }
      return file;
    });

    // console.log(response)
    setFileData(response);
    openedFile.push(Number(id));
    setIsCreatingFolder({ id: 0, isFolder: false });
  };

  return (
    <div>
      <div className="bg-white p-2">
        {/* @ts-ignore*/}
        {fileDate?.map((folder) => (
          <div key={folder.id} className="">
            <div
              onClick={() => handleFileOpen(folder.id)}
              className="bg-slate-200 p-2 mt-2 flex items-center  justify-between gap-4"
            >
              <p className="flex gap-2 items-center">
                {folder?.isFolder ? <FaFileAlt /> : <GrDocument />}
                {folder.name}
              </p>
              {folder?.isFolder && (
                <div className="flex gap-2 items-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsCreatingFolder({ id: folder.id, isFolder: true });
                    }}
                    className="flex items-center gap-2 bg-slate-400 rounded-md p-2"
                  >
                    Folder <FaPlus />
                  </button>
                  <button
                    className="flex items-center gap-2  bg-slate-400 rounded-md p-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsCreatingFolder({ id: folder.id, isFolder: false });
                    }}
                  >
                    File <FaPlus />
                  </button>
                </div>
              )}
            </div>
            {folder.items.length > 0 && openedFile.includes(folder.id) ? (
              <div ref={buttonRef}>
                <Folder FileData={folder?.items} />
              </div>
            ) : (
              ""
            )}
            {isCreatingFolder.id === folder.id && isCreatingFolder.isFolder ? (
              <div className="flex items-center justify-between p-2 gap-2">
                <form action="" onSubmit={(e) => createFolder(e, folder.id)}>
                  <input
                    className="border p-1"
                    value={folderName}
                    onChange={(e) => setFolderName(e.target.value)}
                    type="text"
                    name=""
                    id=""
                  />
                  <button type="submit" className="bg-slate-400 rounded-md p-1">
                    create
                  </button>
                </form>
              </div>
            ) : (
              ""
            )}

            {isCreatingFolder.id === folder.id && !isCreatingFolder.isFolder ? (
              <div className="flex items-center justify-between p-2 gap-2">
                <form action="" onSubmit={(e) => createFolder(e, folder.id)}>
                  <input
                    className="border p-1"
                    value={fileName}
                    onChange={(e) => setFileName(e.target.value)}
                    type="text"
                    name=""
                    id=""
                  />
                  <button type="submit" className="bg-slate-400 rounded-md p-1">
                    create
                  </button>
                </form>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Folder;
