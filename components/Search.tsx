"use client"
import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation"


export default function Search() {
    const [search, setSearch] = useState("")
    const router = useRouter()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        setSearch("")
        router.push(`/${search}/`)
    }
  return (
    <form className="w-50 flex justify-between gap-3" onSubmit={handleSubmit}>
        <input type="text" className="w-60 bg-white rounded-xl p-2 text-xl outline-none" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search" />
        <button className="w-fit p-2 bg-slate-800 rounded-xl text-white">
            Search
        </button>
    </form>
  )
}
