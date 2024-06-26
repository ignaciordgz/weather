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
        <div className="w-full h-12 max-sm:h-20 max-sm:flex-col max-sm:space-y-3 group flex max-sm:justify-center transition-colors items-center justify-between rounded-lg border border-transparent hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <p className="lg:pl-3 md:pl-5 max-sm:w-24 max-sm:text-xs sm:text-xs sm:w-28 text-sm lg:w-44 lg:text-base max-sm:overflow-y-auto">{forecastDay}</p>
            <div id="forecastItems" className="flex justify-between w-80 items-center">
                <div className="flex items-center justify-between w-36">
                    <div className="flex space-x-2 items-center">
                        <Wind className="opacity-45 group-hover:opacity-95 max-sm:w-3 transition-all"/>
                        <p id="windText" className="group-hover:opacity-95 transition opacity-45 font-light text-sm">{day.wind + "m/s"}</p>
                    </div>
                    <div id="humDiv" className="w-7 items-center">
                        <Humidity className="opacity-45 group-hover:opacity-95 transition-all"/>
                        <p id="humText" className="group-hover:opacity-95 transition opacity-45 font-light text-sm">{day.humidity + "%"}</p>
                    </div>
                </div>
                <div className="items-center flex justify-between w-36">
                    <p id="tempText" className="group-hover:opacity-100 transition opacity-75 font-medium">{day.temp + "°C"}</p>
                    <div className="pr-2">
                    {icon && (  
                        <Image
                        src={icon}
                        alt="weather day"
                        width={40}
                        height={40}
                        id="img"
                        property=""
                        />
                    )}
                    </div>
                </div> 
            </div>    
        </div>
    )
}