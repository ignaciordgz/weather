import Image from "next/image"
import { Humidity } from "./svg/humidity"
import { Wind } from "./svg/wind"
import { setIcon } from "./weatherlogo"

export default function Forecast({city, day}:any)
{
    
    var icon = setIcon(day.main)

    return(      
        <div className="w-full h-12 flex transition-colors items-center justify-between rounded-lg border border-transparent hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <p className="pl-3">{city}</p>
            <div className="flex justify-between w-32">
                <div className="items-center inline-flex">
                    <p className="transition opacity-45 font-medium">{day.temp + "°C"}</p>
                </div>
                <div className="pr-2">
                    <Image 
                    src={icon}
                    alt="day main weather"
                    width={40}
                    height={40}
                    />
                </div> 
            </div>    
        </div>
    )
}