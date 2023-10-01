import Link from "next/link";
import Search from "./Search";


export default function Navbar() {
  return (
    <div className="flex justify-between flex-col md:flex-row gap-5 items-center bg-slate-600 p-4">
        <Link href="/" className="text-3xl font-bold text-white">
        Wikipedia
        </Link>
        <Search />
    </div>
  )
}
