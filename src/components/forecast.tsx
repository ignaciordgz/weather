import Image from "next/image"
import { Humidity } from "./svg/humidity"
import { Wind } from "./svg/wind"
import { setIcon } from "./weatherlogo"

export default function Forecast({city, day}:any)
{
    var icon;

    icon = setIcon(day.main)

    var daytime = day.time.substring(5,7) + "/" + day.time.substring(8,10)

    if (city == undefined)
    {
        var forecastDay = ""
    }
    else
    {
        var forecastDay = city + ", " + daytime
    }

    return(      
        <div className="w-full h-12 group flex transition-colors items-center justify-between rounded-lg border border-transparent hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <p className="pl-3 md:w-28 md:text-xs lg:w-44 lg:text-base">{forecastDay}</p>
            <div className="flex justify-between w-80 items-center">
                <div className="flex items-center justify-between w-36">
                    <div className="flex space-x-2 items-center">
                        <Wind className="opacity-45 group-hover:opacity-95 transition-all"/>
                        <p className="group-hover:opacity-95 transition opacity-45 font-light text-sm">{day.wind + "m/s"}</p>
                    </div>
                    <div className="w-7 items-center">
                        <Humidity className="opacity-45 group-hover:opacity-95 transition-all"/>
                        <p className="group-hover:opacity-95 transition opacity-45 font-light text-sm">{day.humidity + "%"}</p>
                    </div>
                </div>
                <div className="items-center flex justify-between w-36">
                    <p className="group-hover:opacity-100 transition opacity-75 font-medium">{day.temp + "°C"}</p>
                    <div className="pr-2">
                    {icon && (  
                        <Image
                        src={icon}
                        alt="weather day"
                        width={40}
                        height={40}
                        property=""
                        />
                    )}
                    </div>
                </div> 
            </div>    
        </div>
    )
}