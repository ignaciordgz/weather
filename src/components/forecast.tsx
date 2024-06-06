export default function Forecast({city}:any)
{
    return(
        <div className="w-full h-12 flex transition-colors items-center justify-between rounded-lg border border-transparent hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <p>{city}</p>     
        </div>
    )
}