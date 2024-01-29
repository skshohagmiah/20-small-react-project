"use client";
import React, { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState<number>();
  const [previous, setPrevious] = useState<number>(0);
  const [current, setCurrent] = useState<number>(0);
  const [symbol, setSymbol] = useState("");

  const handleCalculate = (item: string) => {
    if (result) {
      return;
    }

    if (Number(item) >= 0 && Number(item) <= 9) {
      setCurrent((prev) => Number(prev + item));
    }

    switch (item) {
      case ".": {
        setCurrent((prev) => Number(prev + Number(item)));
        break;
      }
      case "+": {
        if (previous) {
          setPrevious(previous + current);
          setCurrent(0);
          setSymbol('+')
        } else {
          setPrevious(current);
          setCurrent(0);
          setSymbol('+')
        }
        break;
      }
      case "-": {
        if (previous) {
          setPrevious(previous - current);
          setSymbol("-");
          setCurrent(0);
        } else {
          setPrevious(current);
          setCurrent(0);
          setSymbol("-");
        }
        break;
      }
      case "*": {
        if (previous) {
          setPrevious(previous * current);
          setSymbol("*");
          setCurrent(0);
        } else {
          setPrevious(current);
          setCurrent(0);
          setSymbol("*");
        }
        break;
      }
      case "÷": {
        if (previous) {
          setPrevious(previous / current);
          setSymbol("÷");
          setCurrent(0);
        } else {
          setPrevious(current);
          setCurrent(0);
          setSymbol("÷");
        }
        break;
      }
      case "=": {
        if (previous && current) {
          if (symbol === "+") {
            setResult(previous + current);
            setSymbol("");
            setCurrent(0);
            setPrevious(0);
            break;
          }
          if (symbol === "-") {
            setResult(previous - current);
            setSymbol("");
            setCurrent(0);
            setPrevious(0);
            break;
          }
          if (symbol === "÷") {
            setResult(previous / current);
            setSymbol("");
            setCurrent(0);
            setPrevious(0);
            break;
          }
          if (symbol === "*") {
            setResult(previous * current);
            setSymbol("");
            setCurrent(0);
            setPrevious(0);
            break;
          }
        }
      }
    }
  };


  return (
    <div className="h-full flex flex-col items-center justify-center gap-3">
      <h2>Calculator</h2>
      <div className="grid grid-cols-4 gap-4 bg-slate-200 p-6 text-center rounded-md">
        <div className="col-span-4 bg-slate-700 text-white p-2 rounded-md text-right">
          <small>
            {previous} {symbol}
          </small>
          <p className="text-2xl">{result ? result : current}</p>
        </div>
        <button
          onClick={() => {
            setResult(0);
            setCurrent(0);
            setPrevious(0);
            setSymbol("");
          }}
          className="col-span-2 bg-red-500 rounded-md text-white hover:opacity-50"
        >
          CE
        </button>
        <button
          onClick={() => {
            setResult(0);
            setCurrent(0);
            setPrevious(0);
            setSymbol("");
          }}
          className="bg-red-500 text-white rounded-md hover:opacity-50"
        >
          C
        </button>
        <button
          onClick={() => handleCalculate("÷")}
          className="p-2 rounded-full bg-slate-300 w-[3rem] h-[3rem] text-2xl hover:opacity-50"
        >
          ÷
        </button>
        <button
          onClick={() => handleCalculate("7")}
          className="p-2 rounded-full bg-slate-300 w-[3rem] h-[3rem] text-2xl hover:opacity-50"
        >
          7
        </button>
        <button
          onClick={() => handleCalculate("8")}
          className="p-2 rounded-full bg-slate-300 w-[3rem] h-[3rem] text-2xl hover:opacity-50"
        >
          8
        </button>
        <button
          onClick={() => handleCalculate("9")}
          className="p-2 rounded-full bg-slate-300 w-[3rem] h-[3rem] text-2xl hover:opacity-50"
        >
          9
        </button>

        <button
          onClick={() => handleCalculate("*")}
          className="p-2 rounded-full bg-slate-300 w-[3rem] h-[3rem] text-2xl hover:opacity-50 flex items-center justify-center"
        >
          <span className="mt-2">*</span>
        </button>
        <button
          onClick={() => handleCalculate("4")}
          className="p-2 rounded-full bg-slate-300 w-[3rem] h-[3rem] text-2xl hover:opacity-50"
        >
          4
        </button>
        <button
          onClick={() => handleCalculate("5")}
          className="p-2 rounded-full bg-slate-300 w-[3rem] h-[3rem] text-2xl hover:opacity-50"
        >
          5
        </button>
        <button
          onClick={() => handleCalculate("6")}
          className="p-2 rounded-full bg-slate-300 w-[3rem] h-[3rem] text-2xl hover:opacity-50"
        >
          6
        </button>
        <button
          onClick={() => handleCalculate("-")}
          className="p-2 rounded-full bg-slate-300 w-[3rem] h-[3rem] text-2xl hover:opacity-50"
        >
          -
        </button>
        <button
          onClick={() => handleCalculate("1")}
          className="p-2 rounded-full bg-slate-300 w-[3rem] h-[3rem] text-2xl hover:opacity-50"
        >
          1
        </button>
        <button
          onClick={() => handleCalculate("2")}
          className="p-2 rounded-full bg-slate-300 w-[3rem] h-[3rem] text-2xl hover:opacity-50"
        >
          2
        </button>
        <button
          onClick={() => handleCalculate("3")}
          className="p-2 rounded-full bg-slate-300 w-[3rem] h-[3rem] text-2xl hover:opacity-50"
        >
          3
        </button>
        <button
          onClick={() => handleCalculate("+")}
          className="p-2 rounded-full bg-slate-300 w-[3rem] h-[3rem] text-2xl hover:opacity-50"
        >
          +
        </button>
        <button
          onClick={() => handleCalculate("0")}
          className="p-2 rounded-full bg-slate-300 w-[3rem] h-[3rem] text-2xl hover:opacity-50"
        >
          0
        </button>
        <button
          onClick={() => handleCalculate(".")}
          className="p-2 rounded-full bg-slate-300 w-[3rem] h-[3rem] text-2xl hover:opacity-50 flex items-center justify-center"
        >
          <span className="mb-2">.</span>
        </button>
        <button
          onClick={() => handleCalculate("=")}
          className="col-span-2 rounded-md bg-slate-300 text-2xl hover:opacity-50"
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
