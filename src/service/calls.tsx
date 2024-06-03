import axios from "axios"

export const axiosGetCityInfo = ( city:string ) =>
{
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY}`)
}