"use client"
import Footer from "@/components/footer"
import Forecast from "@/components/forecast"
import LocationButton from "@/components/location"
import SearchBar from "@/components/searchbar"
import WeatherLogo from "@/components/weatherlogo"
import { axiosGetCityFromUbi, axiosGetCityInfo, axiosGetForecast } from "@/service/calls"
import { useRef, useState } from "react"

const AskUbication = async(updateWeather: (city: string) => void) =>
{
    if (navigator.geolocation) 
    {
        navigator.geolocation.getCurrentPosition((pos) => Position(pos, updateWeather));
    } 
    else
    {
        console.log("Geolocation is not supported by this browser.");
    }
}

const Position = async (pos: any, updateWeather: (city: string) => void) => {
    
    var lat = pos.coords.latitude
    var long = pos.coords.longitude

    try 
    {
        let response = await axiosGetCityFromUbi(lat, long)
        var cityByUbi = response.data.at(0).name
        updateWeather(cityByUbi)
    } 
    catch (e) 
    {
        console.error("Error fetching city from location", e)
    }
}

interface weatherDay
{
    temp: string,
    humidity:string,
    wind:string,
    main:string,
    time:string
}

export default function MainScreen()
{
    const searchRef = useRef<HTMLInputElement>(null)

    const [ mainWeather, setMainWeather ] = useState<string | undefined>()
    const [ temp, setTemp ] = useState<string | undefined>()
    const [ humidity, setHumidity ] = useState<string | undefined>()
    const [ wind, setWind ] = useState<string | undefined>()
    const [ mainCity, setCity ] = useState<string | undefined>()

    const [ day1, setDay1 ] = useState<weatherDay | undefined>({temp : "0", humidity: "0", wind: "0", main: "Clear", time:""})
    const [ day2, setDay2 ] = useState<weatherDay | undefined>({temp : "0", humidity: "0", wind: "0", main: "Clear", time:""})
    const [ day3, setDay3 ] = useState<weatherDay | undefined>({temp : "0", humidity: "0", wind: "0", main: "Clear", time:""})
    const [ day4, setDay4 ] = useState<weatherDay | undefined>({temp : "0", humidity: "0", wind: "0", main: "Clear", time:""})
    const [ day5, setDay5 ] = useState<weatherDay | undefined>({temp : "0", humidity: "0", wind: "0", main: "Clear", time:""})

    const [ see, setSee ] = useState<boolean | undefined>(false)

    const updateWeather = async(city:string) =>
    {
        try
        {
            let response = await axiosGetCityInfo(city)
            setMainWeather(response.data.weather.at(0).main)
            setTemp(response.data.main.temp + "°C")
            setHumidity(response.data.main.humidity + "%")
            setWind(response.data.wind.speed + "m/s")
        }
        catch(e)
        {
            console.error("INGRESA UNA CIUDAD VALIDA")
        }

        try
        {
            let response = await axiosGetForecast(city)
            let day1 = { temp : response.data.list.at(0).main.temp, humidity:response.data.list.at(0).main.humidity, wind: response.data.list.at(0).wind.speed, main:response.data.list.at(0).weather.at(0).main, time: response.data.list.at(0).dt_txt} 
            let day2 = { temp : response.data.list.at(8).main.temp, humidity:response.data.list.at(8).main.humidity, wind: response.data.list.at(8).wind.speed, main:response.data.list.at(8).weather.at(0).main, time: response.data.list.at(8).dt_txt} 
            let day3 = { temp : response.data.list.at(16).main.temp, humidity:response.data.list.at(16).main.humidity, wind: response.data.list.at(16).wind.speed, main:response.data.list.at(16).weather.at(0).main, time: response.data.list.at(16).dt_txt}
            let day4 = { temp : response.data.list.at(24).main.temp, humidity:response.data.list.at(24).main.humidity, wind: response.data.list.at(24).wind.speed, main:response.data.list.at(24).weather.at(0).main, time: response.data.list.at(24).dt_txt}
            let day5 = { temp : response.data.list.at(32).main.temp, humidity:response.data.list.at(32).main.humidity, wind: response.data.list.at(32).wind.speed, main:response.data.list.at(32).weather.at(0).main, time: response.data.list.at(32).dt_txt}
            setCity(response.data.city.name)
            setDay1(day1)
            setDay2(day2)
            setDay3(day3)
            setDay4(day4)
            setDay5(day5)
        }
        catch(e)
        {
            console.error("INGRESA UNA CIUDAD VALIDA")
        }
    }

    const submitHandler = async(e:React.FormEvent<HTMLFormElement>) => 
    {
        var city = searchRef.current?.value ?? ""
        
        e.preventDefault()

        updateWeather(city)
    }

    return(
        <main className="flex relative space-y-12 flex-col items-start justify-normal p-24" style={{height:"calc(100vh - 4rem)"}}>
            <div className="flex items-center space-x-2 justify-center w-full">
                <SearchBar submit={submitHandler} ref={searchRef}/>
                <LocationButton ubi={() => AskUbication(updateWeather)}></LocationButton>
            </div>
            <div id="forecastdiv" className="sm:space-y-4 flex justify-between w-full">
                <WeatherLogo description={mainWeather} temp={temp} humidity={humidity} wind={wind}/>
                <section id="section" className={see ? "md:w-5/6 grid space-y-12" : "max-sm:invisible md:visible md:w-5/6 grid space-y-12"}>
                    <Forecast city={mainCity} day={day1}></Forecast>
                    <Forecast city={mainCity} day={day2}></Forecast>
                    <Forecast city={mainCity} day={day3}></Forecast>
                    <Forecast city={mainCity} day={day4}></Forecast>
                    <Forecast city={mainCity} day={day5}></Forecast>
                </section>
            </div>
        </main>

    )
}