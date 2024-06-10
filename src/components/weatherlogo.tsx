"use client"
import Image from "next/image"
import sunny from "../../public/weather-icons/sun.png"
import cloudy from "../../public/weather-icons/cloudy.png"
import snow from "../../public/weather-icons/snow.png"
import rain from "../../public/weather-icons/rain.png"
import thunderstorm from "../../public/weather-icons/thunderstorm.png"
import { Humidity } from "./svg/humidity"
import { Wind } from "./svg/wind"


export const setIcon = ( desc:string ) => 
{
    switch(desc)
    {
        case "Clouds":
            return cloudy
        case "Clear":
            return sunny
        case "Thunderstorm":
            return thunderstorm
        case "Snow":
            return snow
        case "Rain":
            return rain
        default:
             return sunny
    }
}

export default function WeatherLogo({humidity, wind, description, temp}:any)
{
    var icon = setIcon(description)

    return(
        <div className="grid transition-colors justify-center group rounded-lg border border-transparent px-5 py-6 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <div className="flex justify-center pb-5">
                <p className="font-light group-hover:opacity-100 opacity-80 transition">Today</p>
            </div>
            {icon && (   
                <Image
                src={icon}
                alt="weather"
                width={150}
                height={150}
                property=""
                />
            )}
            <div className="flex justify-between pt-6 text-center items-center">
                <p>{description}</p>
                <p>{temp}</p>
            </div>
            <div className="flex pt-6 justify-between text-center items-center">
                <div className="flex space-x-1 items-center">
                    <Humidity className="opacity-45 group-hover:opacity-95 transition-all"/>
                    <p className="group-hover:opacity-95 transition opacity-45 font-light text-sm">{humidity}</p>
                </div>
                <div className="flex space-x-1 items-center">
                    <Wind className="opacity-45 group-hover:opacity-95 transition-all"/>
                    <p className="group-hover:opacity-95 transition opacity-45 font-light text-sm">{wind}</p>
                </div>
            </div>
        </div>
    )
}