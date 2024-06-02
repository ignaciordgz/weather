import Image from "next/image"
import sunny from "../../public/weather-icons/sun_869869.png"


export default function WeatherLogo()
{
    return(
        <div className="grid transition-colors rounded-lg border border-transparent px-5 py-4 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <Image
            src={sunny}
            alt="weather"
            width={150}
            height={150}
            />
        </div>
    )
}