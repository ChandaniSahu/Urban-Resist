"use client"

import { useState } from "react"

export default function ReportForm() {

  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  const [lat,setLat] = useState("")
  const [lng,setLng] = useState("")

  const submit = async (e:any) => {

    e.preventDefault()

    await fetch("/api/hazards",{
      method:"POST",
      body:JSON.stringify({
        title,
        description,
        lat:Number(lat),
        lng:Number(lng)
      })
    })

    alert("Hazard Reported")
  }

  return (

    <form onSubmit={submit} className="space-y-4 max-w-md">

      <input
      placeholder="Hazard Title"
      className="border p-2 w-full"
      onChange={(e)=>setTitle(e.target.value)}
      />

      <textarea
      placeholder="Description"
      className="border p-2 w-full"
      onChange={(e)=>setDescription(e.target.value)}
      />

      <input
      placeholder="Latitude"
      className="border p-2 w-full"
      onChange={(e)=>setLat(e.target.value)}
      />

      <input
      placeholder="Longitude"
      className="border p-2 w-full"
      onChange={(e)=>setLng(e.target.value)}
      />

      <button className="bg-red-500 text-white px-4 py-2 rounded">
        Report Hazard
      </button>

    </form>
  )
}