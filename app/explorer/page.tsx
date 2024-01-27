'use client';
import React, { useState } from "react";
import Folder from "./Folder";

const FileData = [
  {
    id:Date.now() + Math.random() * 100,
    name: "home",
    isFolder: true,
    items: [
      {
        id:Date.now() + Math.random() * 100,
        name: "product",
        isFolder: true,
        items: [
          {
            id:Date.now() + Math.random() * 100,
            name: "document",
            isFolder: false,
            items:[]
          },
        ],
      },
    ],
  },
  {
    id:Date.now() + Math.random() * 100,
    name: "dashboard",
    isFolder: true,
    items: [
      {
        id:Date.now() + Math.random() * 100,
        name: "users",
        isFolder: false,
        items:[]
      },
      {
        id:Date.now() + Math.random() * 100,
        name: "anlatics",
        isFolder: true,
        items: [
          {
            id:Date.now() + Math.random() * 100,
            name: "revenue",
            isFolder: false,
            items:[]
          },
        ],
      },
    ],
  },
];

const FileExporer = () => {


  return (
    <div className="h-full flex flex-col gap-2 items-center justify-center">
      <h2>File Explorer</h2>
        <Folder FileData={FileData} />
    </div>
  );
};

export default FileExporer;
