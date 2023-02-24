import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from "next/router"
import { useState, useEffect } from "react"

export default function Available() {
    const router = useRouter();
    

    return (
        
    <>
      <div className="mt-8">
        <div className="text-3xl text-center md:mx-16 font-semibold text-zinc-200">Available Notes</div>
        <div className="cards grid grid-cols-1 md:grid-cols-2 gap-4 mx-16 my-8">
            <div className="card bg-zinc-800 rounded-lg p-6">
                <div className="justify-between flex">
                <div className="title text-3xl font-semibold text-zinc-300">Fundamentals of Javascript</div>
                <div className="tag py-2 flex justify-center items-center px-5 bg-zinc-700 rounded-md text-zinc-200 text-xl font-semibold "><div className="text-blue-600 text-bold font-medium">#&nbsp;</div> LOL</div>
                </div>
                <div className="border my-2 w-128 border-zinc-700"></div>
                <div className="description font-medium text-zinc-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies tincidunt, nunc nisl aliquam nisl, eu aliquam nisl nisl sit amet lorem. Sed euismod, nisl vitae ultricies tincidunt, nunc nisl aliquam nisl, eu aliquam nisl nisl sit amet lorem.</div>
            </div>
        </div>
      </div>
    </>
  )
}
