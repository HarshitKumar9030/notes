import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from "next/router"
import { useState, useEffect } from "react"

export default function Available() {
    const router = useRouter();
    const [notes, setNotes] = useState([]);
    const [openSearch, setOpenSearch] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredNotes, setFilteredNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    // fetching notes from the database
    

    
    // closing search box when clicked outside and pressing escape
    useEffect(() => {
        const closeSearch = (e) => {
            if (e.key === "Escape") {
                setOpenSearch(false);
            }
        }
        window.addEventListener("keydown", closeSearch);
        return () => {
            window.removeEventListener("keydown", closeSearch);
        }
    }, []);

    useEffect(() => {
        const closeSearch = (e) => {
            if (e.target.classList.contains("search-box")) {
                setOpenSearch(false);
            }
        }
        window.addEventListener("click", closeSearch);
        return () => {
            window.removeEventListener("click", closeSearch);
        }
    }, []);

    const Search = () => {
        setOpenSearch(!openSearch);
    }

    return (
        
    <>
      <div className="mt-8">
        <div className="justify-between mx-4 md:mx-16 flex">
        <div className="text-3xl text-center font-semibold text-zinc-200">Available Notes</div>
            <div onClick={Search} className="search px-2 hover:scale-105 duration-200 py-2 hover:bg-zinc-700 cursor-ne-resize  bg-zinc-800 rounded-md text-zinc-200 text-xl font-medium">
                <div className="search-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    </div>
            </div>
        </div>
        <div className="cards grid grid-cols-1 md:grid-cols-2 gap-4 mx-16 my-8">
            <div className="card bg-zinc-800 rounded-lg p-6">
                <div className="md:justify-between flex md:flex-row flex-col">
                <div className="title text-3xl font-semibold text-zinc-300">Fundamentals of Javascript</div>
                <div className="tag py-2 md:mt-0 mt-2 flex justify-center items-center px-5 bg-zinc-700 rounded-md text-zinc-200 text-xl font-semibold "><div className="text-blue-600 text-bold font-medium">#&nbsp;</div> LOL</div>
                </div>
                <div className="border my-2 w-128 border-zinc-700"></div>
                <div className="description font-medium text-zinc-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies tincidunt, nunc nisl aliquam nisl, eu aliquam nisl nisl sit amet lorem. Sed euismod, nisl vitae ultricies tincidunt, nunc nisl aliquam nisl, eu aliquam nisl nisl sit amet lorem.</div>
            </div>
        </div>
      </div>
      {openSearch && (
        <div className="search-box absolute ease-in-out duration-300 top-0 left-0 w-screen h-screen bg-zinc-900 bg-opacity-50 flex justify-center items-center">
            <div className="search-input bg-zinc-800 rounded-md p-4">
                <div className="search-input-box flex justify-between items-center">
                    <input type="text" className="search-input-text w-96 bg-zinc-800 text-zinc-200 text-xl font-medium outline-none" placeholder="Search for notes" />
                    <div onClick={Search} className="search px-2 hover:scale-105 duration-200 py-2 hover:bg-zinc-700 cursor-ne-resize  bg-zinc-800 rounded-md text-zinc-200 text-xl font-medium">
                        <div className="search-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
      )}
    </>
  )
}
