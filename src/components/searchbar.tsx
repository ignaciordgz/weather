"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ChangeEvent, useState } from 'react';

export default function SearchBar()
{
    const [value, setValue] = useState<string>("")

    function handleChange(e:ChangeEvent<HTMLInputElement>)
    {
        setValue(e.target.value)
    }

    return(
        <div className="flex items-center justify-center w-full">
            <div className="relative w-2/5">
                <form>
                    <input id="search" type="text" onChange={handleChange} value={value} placeholder="Search" className="w-full h-9 pl-10 text-white bg-black transition-colors rounded-md hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"></input>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500" />
                </form>
            </div>
        </div>
    )
}