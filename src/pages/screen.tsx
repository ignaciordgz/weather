"use client"
import FavCity from "@/components/favcity"
import SearchBar from "@/components/searchbar"
import WeatherLogo from "@/components/weatherlogo"
import { axiosGetCityInfo } from "@/service/calls"
import { ExecException } from "child_process"
import { useRef, useState } from "react"

export default function MainScreen()
{
    const searchRef = useRef<HTMLInputElement>(null)

    const [ mainWeather, setMainWeather ] = useState<string | undefined>()
    const [ temp, setTemp ] = useState<string | undefined>()
    const [ humidity, setHumidity ] = useState<string | undefined>()
    const [ wind, setWind ] = useState<string | undefined>()

    const submitHandler = async(e:React.FormEvent<HTMLFormElement>) => 
    {
        var city = searchRef.current?.value ?? ""

        e.preventDefault()

        try
        {
            var response = await axiosGetCityInfo(city)
            console.log(response.data)
            setMainWeather(response.data.weather.at(0).main)
            setTemp(response.data.main.temp + "°C")
            setHumidity(response.data.main.humidity + "%")
            setWind(response.data.wind.speed + "m/s")
        }
        catch(e)
        {
            console.error("INGRESA UNA CIUDAD VALIDA")
        }
    }

    return(
        <main className="flex min-h-screen flex-col items-start justify-normal p-24">
            <SearchBar submit={submitHandler} ref={searchRef}/>
            <div className="grid space-y-4">
                <WeatherLogo description={mainWeather} temp={temp} humidity={humidity} wind={wind}/>
                <FavCity/>
                <FavCity/>
                <FavCity/>
            </div>
        </main>
    )
}