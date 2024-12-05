"use client";

import Image from "next/image";
import { useEffect, useState } from 'react';

// structure for our weather
interface Weather {
  id: number;
  location: string;
  temp_f: number;
  condition: string;
  icon: string;
}

export default function Home() {
  const [weatherData, setWeatherData] = useState<Weather[]>([]);
  const [error, setError] = useState('');

  // useeffect to fetch weather after 1st render
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch('http://localhost:3001/weather');
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <>
      <div className="background-image w-screen h-auto relative flex flex-col-reverse md:flex-row-reverse items-center bg-blue-200 min-h-[750px]">
        <div className="relative w-full md:w-1/2 lg:w-1/3 flex justify-center md:justify-end ">
          <Image src="/nextlogo.png" width={700} height={700} alt="bizinc logo pic" priority className="w-[630px] h-[630px]" />
        </div>
        <div className="mt-10 md:mt-0 md:w-1/2 lg:w-2/3 text-black space-y-6 lg:pl-40 lg:flex lg:flex-col lg:items-center lg:justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-apercuBold">
            Keith Singletary
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-apercuRegular mb-4 lg:text-center">
            Assessment for Bizinc intern utilizing Nextjs and its capabilities.
          </p>
          <h1>Here is some weather data for Atlanta and Maryland using JSON Server!</h1>
          <div className="flex flex-row gap-4">
            {/* typical mapping over of data structure */}
            {weatherData.map((weather) => (
              <div key={weather.id} className="flex flex-col items-center bg-blue-300 shadow-md p-4 rounded-md">
                <p className="text-lg font-bold mb-2">{weather.location}</p>
                <div className="relative flex items-center gap-2">
                  <Image
                    src={weather.icon}
                    alt={weather.condition}
                    width={64}
                    height={64}
                    className="rounded-md"
                  />
                  <div className="flex items-center">
                    <p className="text-center text-white font-semibold text-sm">
                      {weather.temp_f}°F, {weather.condition}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
