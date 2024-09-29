import React from "react";
import ReLoadPng from "./assets/reload.png";
import { TrophyIcon } from "@heroicons/react/24/outline";

const gameRecords = [
  { Period: "20240929339", Price: 500, Number: 2, Result: "Success" },
  { Period: "20240929339", Price: 600, Number: 1, Result: "Success" },
  { Period: "20240929339", Price: 450, Number: 1, Result: "Failure" },
  { Period: "20240929339", Price: 700, Number: 5, Result: "Success" },
  { Period: "20240929339", Price: 500, Number: 2, Result: "Success" },
  { Period: "20240929339", Price: 600, Number: 1, Result: "Success" },
  { Period: "20240929339", Price: 450, Number: 1, Result: "Failure" },
  { Period: "20240929339", Price: 700, Number: 5, Result: "Success" },
  { Period: "20240929339", Price: 500, Number: 2, Result: "Success" },
  { Period: "20240929339", Price: 600, Number: 1, Result: "Success" },
  { Period: "20240929339", Price: 450, Number: 1, Result: "Failure" },
  { Period: "20240929339", Price: 700, Number: 5, Result: "Success" },
  { Period: "20240929339", Price: 500, Number: 2, Result: "Success" },
  { Period: "20240929339", Price: 600, Number: 1, Result: "Success" },
  { Period: "20240929339", Price: 450, Number: 1, Result: "Failure" },
  { Period: "20240929339", Price: 700, Number: 5, Result: "Success" },
  { Period: "20240929339", Price: 500, Number: 2, Result: "Success" },
  { Period: "20240929339", Price: 600, Number: 1, Result: "Success" },
  { Period: "20240929339", Price: 450, Number: 1, Result: "Failure" },
  { Period: "20240929339", Price: 700, Number: 5, Result: "Success" },
  { Period: "20240929339", Price: 500, Number: 2, Result: "Success" },
  { Period: "20240929339", Price: 600, Number: 1, Result: "Success" },
  { Period: "20240929339", Price: 450, Number: 1, Result: "Failure" },
  { Period: "20240929339", Price: 700, Number: 5, Result: "Success" },
  { Period: "20240929339", Price: 500, Number: 2, Result: "Success" },
  { Period: "20240929339", Price: 600, Number: 1, Result: "Success" },
  { Period: "20240929339", Price: 450, Number: 1, Result: "Failure" },
  { Period: "20240929339", Price: 700, Number: 5, Result: "Success" },
  { Period: "20240929339", Price: 500, Number: 2, Result: "Success" },
  { Period: "20240929339", Price: 600, Number: 1, Result: "Success" },
  { Period: "20240929339", Price: 450, Number: 1, Result: "Failure" },
  { Period: "20240929339", Price: 700, Number: 5, Result: "Success" },
  { Period: "20240929339", Price: 500, Number: 2, Result: "Success" },
  { Period: "20240929339", Price: 600, Number: 1, Result: "Success" },
  { Period: "20240929339", Price: 450, Number: 1, Result: "Failure" },
  { Period: "20240929339", Price: 700, Number: 5, Result: "Success" },
  { Period: "20240929339", Price: 500, Number: 2, Result: "Success" },
  { Period: "20240929339", Price: 600, Number: 1, Result: "Success" },
  { Period: "20240929339", Price: 450, Number: 1, Result: "Failure" },
  { Period: "20240929339", Price: 700, Number: 5, Result: "Success" },
  { Period: "20240929339", Price: 500, Number: 2, Result: "Success" },
  { Period: "20240929339", Price: 600, Number: 1, Result: "Success" },
  { Period: "20240929339", Price: 450, Number: 1, Result: "Failure" },
  { Period: "20240929339", Price: 700, Number: 5, Result: "Success" },
  { Period: "20240929339", Price: 500, Number: 2, Result: "Success" },
  { Period: "20240929339", Price: 600, Number: 1, Result: "Success" },
  { Period: "20240929339", Price: 450, Number: 1, Result: "Failure" },
  { Period: "20240929339", Price: 700, Number: 5, Result: "Success" },
  { Period: "20240929339", Price: 500, Number: 2, Result: "Success" },
  { Period: "20240929339", Price: 600, Number: 1, Result: "Success" },
  { Period: "20240929339", Price: 450, Number: 1, Result: "Failure" },
  { Period: "20240929339", Price: 700, Number: 5, Result: "Success" },
];

export default function Play() {
  return (
    <div className=" flex flex-col">
      {/* Balance card */}
      <div className="p-5 m-5 bg-indigo-500 rounded-xl shadow">
        {/* Balance info */}
        <p className="text-xl text-white font-semibold">
          Available balance: ₹ 0.00
        </p>
        <div className="flex items-center mt-4 justify-between">
          {/* Recharge Button */}
          <button className=" bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Recharge
          </button>
          {/* Refresh Button */}
          <div className="ml-4">
            <img
              src={ReLoadPng}
              alt="Refresh"
              className="cursor-pointer w-6 h-6"
            />
          </div>
        </div>
      </div>
      {/* Playground */}
      <div className="flex flex-col gap-3">
        {/* Game title */}
        <div className="text-center border-b-2 border-indigo-300 mx-5">
          Bcone
        </div>
        {/* Period info for player */}
        <div className="flex justify-between px-5">
          {/* Period number */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-1">
              <TrophyIcon className="w-10 h-8" />
              Period
            </div>
            <p className=" text-2xl">1454254852</p>
          </div>
          {/* Timer */}
          <div className="text-2xl flex flex-col">
            <p className="text-sm">Timer</p>
            <span>02 : 24</span>
          </div>
        </div>
        {/* Color options */}
        <div className="min-w-screen flex flex-col gap-5 text-sm">
          {/* Colors only options*/}
          <div className="flex flex-row justify-between px-5 text-white">
            <button className="bg-green-600 px-4 py-2 rounded">
              Join Green
            </button>
            <button className="bg-violet-600 px-4 py-2 rounded">
              Join Violet
            </button>
            <button className="bg-red-600 px-4 py-2 rounded">Join Red</button>
          </div>
          {/* Numbers only options 0-4 */}
          <div className="flex flex-row justify-between px-5 text-white gap-2 md:gap-5">
            <button className="bg-green-600 w-1/5 h-10 rounded">0</button>
            <button className="bg-violet-600 w-1/5 h-10 rounded">1</button>
            <button className="bg-red-600 w-1/5 h-10 rounded">2</button>
            <button className="bg-red-600 w-1/5 h-10 rounded">3</button>
            <button className="bg-red-600 w-1/5 h-10 rounded">4</button>
          </div>
          {/* Numbers only options 4-9 */}
          <div className="flex flex-row justify-between px-5 text-white gap-2 md:gap-5">
            <button className="bg-green-600 w-1/5 h-10 rounded">5</button>
            <button className="bg-violet-600 w-1/5 h-10 rounded">6</button>
            <button className="bg-red-600 w-1/5 h-10 rounded">7</button>
            <button className="bg-red-600 w-1/5 h-10 rounded">8</button>
            <button className="bg-red-600 w-1/5 h-10 rounded">9</button>
          </div>
        </div>
      </div>
      {/* Game records */}
      <div className="min-w-screen">
        {/* Game records title */}
        <div className="text-center border-b-2 flex flex-col items-center border-indigo-300 mx-5 my-5">
          <TrophyIcon className="w-5 h-5" />
          <p>Bcone Records</p>
        </div>
        {/* Game Records Info */}
        <div className="px-5">
          {/* Chart Title */}
          <div className="flex flex-row justify-between px-5 text-sm border-b-2 gap-5 border-slate-200">
            <p className="w-8">Period</p>
            <p className="w-2">Price</p>
            <p className="w-2">Number</p>
            <p className="w-8">Result</p>
          </div>
          {/* Record Data */}
          <div>
            {gameRecords.map((item, index) => (
              <div
                key={index}
                className="flex flex-row justify-between px-2 text-xs border-b-2 border-slate-200 p-2"
              >
                <p className="w-8">{item.Period}</p>
                <p className="w-2">{item.Price}</p>
                <p className="w-2">{item.Number}</p>
                <p className="w-8">{item.Result}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
