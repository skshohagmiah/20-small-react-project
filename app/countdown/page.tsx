"use client";
import React, { useEffect, useState } from "react";

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const expiresDate = new Date(2024,6,15);

    const intervalId = setInterval(() => {
        const currentDate = new Date();
        const difference = expiresDate.getTime() - currentDate.getTime();
        if (difference <= 0) {
            clearInterval(intervalId);
          } else {
            // Calculate days, hours, minutes, and seconds
            const day = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hour = Math.floor(
              (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minute = Math.floor(
              (difference % (1000 * 60 * 60)) / (1000 * 60)
            );
            const second = Math.floor((difference % (1000 * 60)) / 1000);
          
            setDays(day);
            setHours(hour);
            setMinutes(minute);
            setSeconds(second);
          }
    }, 1000);

    return () => clearInterval(intervalId);
  },[]);

  return (
    <div className="h-full flex flex-col gap-3 items-center justify-center">
      <h2>Time Countdown</h2>
      <div className="flex gap-4 rounded-md bg-white p-4 shadow-md">
        <div className="py-2 px-6 rounded-md bg-slate-200">
          <p>Days</p>
          <p className="text-2xl text-center font-semibold mt-2">{days}</p>
        </div>
        <div className="py-2 px-6 rounded-md bg-slate-200">
          <p>Hours</p>
          <p className="text-2xl text-center font-semibold mt-2">{hours}</p>
        </div>
        <div className="py-2 px-6 rounded-md bg-slate-200">
          <p>Minutes</p>
          <p className="text-2xl text-center font-semibold mt-2">{minutes}</p>
        </div>
        <div className="py-2 px-6 rounded-md bg-slate-200">
          <p>Seconds</p>
          <p className="text-2xl text-center font-semibold mt-2">{seconds}</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
