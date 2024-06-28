"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ChangeEvent, forwardRef, useState } from 'react';

interface SearchBarProps {
    submit: (e: React.FormEvent<HTMLFormElement>) => void;
  }

export const SearchBar = forwardRef<HTMLInputElement,SearchBarProps>(({submit}:any, ref) =>
{
    const [value, setValue] = useState<string>("")

    function handleChange(e:ChangeEvent<HTMLInputElement>)
    {
        setValue(e.target.value)
    }

    return(
        <div className="relative w-2/5">
            <form onSubmit={submit}>
                <input id="search" type="text" ref={ref} onChange={handleChange} value={value} placeholder="Enter City/Country" className="w-full h-9 pl-10 text-white bg-black transition-colors placeholder:opacity-80 placeholder:transition-opacity hover:placeholder:opacity-100 rounded-md hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"></input>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500" />
            </form>
        </div>
    )
})

SearchBar.displayName = 'SearchBar';

export default SearchBar