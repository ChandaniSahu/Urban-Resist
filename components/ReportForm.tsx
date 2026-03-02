"use client";

import { useState, useEffect } from "react";

export default function ReportForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [lat, setLat] = useState<number | null>(null);
  const [lng, setLng] = useState<number | null>(null);

  const [locating, setLocating] = useState(true);
  const [locationError, setLocationError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation not supported");
      setLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setLocating(false);
      },
      () => {
        setLocationError(
          "Unable to fetch location. Please allow location access.",
        );
        setLocating(false);
      },
      {
        enableHighAccuracy: true,
      },
    );
  }, []);

  const submit = async (e: any) => {
    e.preventDefault();

    if (lat === null || lng === null) {
      alert("Location not available");
      return;
    }

    setSubmitting(true);

    await fetch("/api/hazards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        lat,
        lng,
      }),
    });

    setSubmitting(false);

    alert("Hazard Reported");

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={submit} className="space-y-4 max-w-md">
      <input
        placeholder="Hazard Title"
        className="border p-2 w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        className="border p-2 w-full"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {locating && (
        <div className="text-blue-600 text-sm">Getting your location...</div>
      )}

      {!locating && lat && lng && (
        <div className="text-green-600 text-sm">Location captured</div>
      )}

      {locationError && (
        <div className="text-red-600 text-sm">{locationError}</div>
      )}

      <div className="text-xs text-gray-500">
        Note: Location is most accurate on mobile devices using GPS. On desktop
        or laptop, it may use ISP/network location which can be less precise.
      </div>
      
      <button
        disabled={locating || submitting}
        className="bg-red-500 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {submitting ? "Submitting..." : "Report Hazard"}
      </button>
    </form>
  );
}
