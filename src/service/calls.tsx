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