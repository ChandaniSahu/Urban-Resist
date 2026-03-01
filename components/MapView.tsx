"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

import L from "leaflet"

delete (L.Icon.Default.prototype as any)._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
})

export default function MapView({ hazards }: any) {
  return (
    <MapContainer
      center={[22.36, 82.75]}
      zoom={12}
      className="h-[500px] w-full rounded-xl"
    >
      <TileLayer
        attribution="&copy OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {hazards.map((hazard: any) => (
        <Marker key={hazard.id} position={[hazard.lat, hazard.lng]}>
          <Popup>
            <h3 className="font-bold">{hazard.title}</h3>
            <p>{hazard.description}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}