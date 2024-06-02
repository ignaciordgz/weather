"use client"
import Image from "next/image"
import sunny from "../../public/weather-icons/sun_869869.png"
import { useState } from "react"

export default function WeatherLogo()
{
    const [weather, setWeather] = useState()

    return(
        <div className="grid transition-colors justify-center rounded-lg border border-transparent px-5 py-6 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <Image
            src={sunny}
            alt="weather"
            width={150}
            height={150}
            />
            <p className="pt-4 text-center items-center">{weather}</p>
        </div>
    )
}