"use client"
import FavCity from "@/components/favcity"
import SearchBar from "@/components/searchbar"
import WeatherLogo from "@/components/weatherlogo"
import { axiosGetCityInfo } from "@/service/calls"

export default function MainScreen()
{
    return(
        <main className="flex min-h-screen flex-col items-start justify-normal p-24">
            <SearchBar/>
            <div className="grid space-y-4">
                <WeatherLogo/>
                <FavCity/>
                <FavCity/>
                <FavCity/>
            </div>
        </main>
    )
}