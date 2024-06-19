import { Arrow } from "./svg/arrow"

export default function Footer()
{
    return(
        <div className="absolute top-full">
            <footer className="py-4 w-full">
                <div className="flex items-center">
                    <div className="group">
                        <a className="flex pl-3 items-center opacity-40 group-hover:opacity-85 transition text-sm font-medium" target="_blank" href="https://www.github.com/ignaciordgz">Made by ignaciordgz with Next.js
                            <Arrow className="w-4 h-4 group-hover:opacity-85 transition"></Arrow>
                        </a>
                    </div>
                </div>
            </footer>
        </div>        
    )
}