"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

const MapView = dynamic(() => import("@/components/MapView"), {
  ssr: false,
})

export default function Home() {

  const [hazards,setHazards] = useState([])

  useEffect(()=>{

    fetch("/api/hazards")
    .then(res=>res.json())
    .then(setHazards)

  },[])

  return (

    <div className="p-10 space-y-6">

      <h1 className="text-3xl font-bold">
        UrbanResist Disaster Map
      </h1>

      <MapView hazards={hazards}/>

    </div>

  )
}