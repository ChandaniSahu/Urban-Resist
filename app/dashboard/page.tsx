"use client"

import { useEffect,useState } from "react"

export default function Dashboard(){

  const [hazards,setHazards] = useState([])

  useEffect(()=>{

    fetch("/api/hazards")
    .then(res=>res.json())
    .then(setHazards)

  },[])

  return(

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        City Safety Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="p-6 bg-red-100 rounded">
          Total Hazards: {hazards.length}
        </div>

        <div className="p-6 bg-green-100 rounded">
          Safe Zones: 5
        </div>

        <div className="p-6 bg-yellow-100 rounded">
          Warning Zones: 2
        </div>

      </div>

    </div>
  )
}