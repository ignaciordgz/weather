import axios from "axios"

export const axiosGetCityInfo = async( city:string ) =>
{
    try
    {
        return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`,
        {params: {q: city}})
    }
    catch(error)
    {
        throw new Error("City Info Invalid")
    }
}

export const axiosGetForecast = async ( city:string) => 
{
    try
    {
        return await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`,
        {params: {q: city}})
    }
    catch(error)
    {
        throw new Error("City Info Invalid")
    }
}

export const axiosGetCityFromUbi = async ( lat:string, long:string) => 
{
    try
    {
        return await axios.get(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&appid=${process.env.NEXT_PUBLIC_API_KEY}`)
    }
    catch(error)
    {
        throw new Error("Latitude and longitud invalid")
    }
}