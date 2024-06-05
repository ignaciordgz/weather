"use client"
import { useState } from "react"
import Image from "next/image"
import sunny from "../../public/weather-icons/sun.png"
import cloudy from "../../public/weather-icons/cloudy.png"
import snow from "../../public/weather-icons/snow.png"
import storm from "../../public/weather-icons/storm.png"
import windy from "../../public/weather-icons/windy.png"
import thunderstorm from "../../public/weather-icons/thunderstorm.png"
import humidityIcon from "../../public/weather-icons/humidity.svg"
import windIcon from "../../public/weather-icons/wind.svg"

export default function WeatherLogo({humidity, wind, description, temp}:any)
{
    const [image, setImage] = useState()

    return(
        <div className="grid transition-colors justify-center group rounded-lg border border-transparent px-5 py-6 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <Image
            src={sunny}
            alt="weather"
            width={150}
            height={150}
            />
            <div className="flex justify-between pt-6 text-center items-center">
                <p>{description}</p>
                <p>{temp}</p>
            </div>
            <div className="flex pt-6 justify-between text-center items-center">
                <p className="group-hover:opacity-95 transition opacity-45 font-light text-sm">{humidity}</p>
                <p className="group-hover:opacity-95 transition opacity-45 font-light text-sm">{wind}</p>
            </div>
        </div>
    )
}