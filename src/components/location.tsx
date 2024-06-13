"use client"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function LocationButton({ubi}:any)
{
    return(
        <div className="w-10 h-9 group rounded-md transition-colors hover:dark:bg-neutral-600/30">
            <button id="location" onClick={ubi} title="Your Location" className="w-10 h-9">
                <FontAwesomeIcon icon={faLocationDot} className="opacity-65 transition group-hover:opacity-100"/>
            </button>
        </div>
    )
}