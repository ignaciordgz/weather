import Image from "next/image"
import { Humidity } from "./svg/humidity"
import { Wind } from "./svg/wind"
import { setIcon } from "./weatherlogo"

export default function Forecast({city, day}:any)
{
    var icon;

    if (day == undefined)
    {
        day = { temp : 0, humidity: 0, wind: 0, main: "Clear"}
    }
    else
    {
        icon = setIcon(day.main)
    }

    return(      
        <div className="w-full h-12 group flex transition-colors items-center justify-between rounded-lg border border-transparent hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <p className="pl-3">{city}</p>
            <div className="flex justify-between w-52 items-center">
                <div>
                    <Wind className="opacity-45 group-hover:opacity-95 transition-all"/>
                    <p className="group-hover:opacity-95 transition opacity-45 font-light text-sm">{day.wind + "m/s"}</p>
                </div>
                <div>
                    <Humidity className="opacity-45 group-hover:opacity-95 transition-all"/>
                    <p className="group-hover:opacity-95 transition opacity-45 font-light text-sm">{day.humidity + "%"}</p>
                </div>
                <div className="items-center inline-flex">
                    <p className="group-hover:opacity-100 transition opacity-75 font-medium">{day.temp + "°C"}</p>
                </div>
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
    )
}