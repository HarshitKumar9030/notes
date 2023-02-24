import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from "next/router"
import { useState, useEffect } from "react"

export default function Navbar() {
    const router = useRouter();
    const [modal , setModal] = useState(false);
    
    const newNote = () => {
        setModal(!modal);
    }

    return (
        
    <>
     <div className="h-20 p-8 text-white flex justify-between items-center">
        <div className="title text-4xl md:text-6xl font-semibold">Notes</div>
        <div onClick={()=> newNote()} className="button px-4 py-2 hover:shadow-xl shadow-zinc-700 text-white bg-zinc-800 text-xl font-medium hover:bg-zinc-700 duration-200 hover:scale-105 selection:bg-transparent cursor-ne-resize rounded-md">Add New</div>
     </div>
        <div className="md:mt-8 mt-6 flex justify-center">
          <div className="border w-screen mx-16 border-zinc-800"></div>
        </div>
        {modal && (
            hey
        )}
    </>
  )
}
