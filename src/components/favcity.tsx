"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';

export default function FavCity()
{
    const [city , setCity] = useState<String>("Buenos Aires");

    return(
        <div className="w-52 h-16 flex items-center transition-colors justify-center rounded-lg border border-transparent hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <div className='pl-2'>
                <FontAwesomeIcon icon={faStar} />
            </div>
            <a href="" className="w-52 h-8 flex justify-center items-center">{city}</a>
        </div>
    )
}