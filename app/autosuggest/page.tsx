"use client";
import React, { useEffect, useState } from "react";

const AutoSugest = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setDate] = useState<any[]>([]);
  const [showSuggestion, setShowSuggestion] = useState(false)
  const [suggestionData, setSuggestionData] = useState<any[]>([])

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(data => setDate(data.products));
  }, []);


  useEffect(() => {
    if(inputValue.length >= 2){
        const filteredData = data.filter(item => item.title.toLowerCase().includes(inputValue.toLowerCase()))
        setSuggestionData(filteredData)
      }
  },[inputValue,data])

  return (
    <div className="h-full flex items-center justify-center flex-col gap-2">
      <h2>Auto Sugest on Input Typing</h2>
      <div>
        <input
          className="p-2 rounded-md"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)
            if(e.target.value.length >= 2){
                setShowSuggestion(true)
            }
          }}
          placeholder="start typing for sugestion"
          type="text"
          name=""
          id=""
        />
        {showSuggestion ? (
            <div className="bg-white p-4 mt-2 rounded-sm">
                {suggestionData.map((suggestion, index)  => (
                    <p onClick={() => {
                        setInputValue(suggestion?.title)
                        setShowSuggestion(false)
                    }} className="p-2 rounded-sm bg-slate-300 mt-1 cursor-pointer" key={index}>{suggestion?.title}</p>
                ))}
            </div>
        ):''}
      </div>
    </div>
  );
};

export default AutoSugest;
