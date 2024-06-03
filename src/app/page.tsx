import SearchBar from "@/components/searchbar";
import WeatherLogo from "@/components/weatherlogo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-24">
        <SearchBar></SearchBar>
    </main>
  );
}
