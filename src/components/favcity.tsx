"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';

export default function FavCity()
{
    const [city , setCity] = useState<String>("Buenos Aires");

    return(
        <div className="w-52 h-8 flex transition-colors justify-center rounded-lg border border-transparent hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <FontAwesomeIcon icon={faStar} className="items-center pt-1.5 pl-1.5" />
            <a href="" className="w-52 h-8 flex justify-center items-center">{city}</a>
        </div>
    )
}