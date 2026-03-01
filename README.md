# UrbanResist – Hyper-local Disaster Resilience Map

UrbanResist is a web application that helps communities report and monitor urban hazards in real time.
Residents can report issues like flooded roads, fallen trees, or downed power lines, allowing neighbors and city planners to respond faster and improve safety.

The platform provides an interactive map, hazard reporting, and a dashboard to monitor city safety conditions.

---

## Live Link
https://urban-disaster-management.netlify.app

## Features

### Interactive Hazard Map

* Displays hazard locations using **Leaflet maps**
* Each hazard appears as a clickable marker
* Shows hazard title and description in a popup

### Community Hazard Reporting

Users can report hazards by providing:

* Hazard title
* Description
* Latitude
* Longitude

### Dashboard

* Displays total reported hazards
* Shows city safety statistics
* Helps monitor disaster situations quickly

### Simple Navigation

* Map view
* Hazard reporting page
* Dashboard overview

---

## Tech Stack

* **Next.js (App Router)**
* **React**
* **Tailwind CSS**
* **Leaflet / React-Leaflet** for maps
* **UUID** for hazard IDs

---

## Project Structure

```
app
 ├ dashboard
 │   └ page.tsx
 ├ report
 │   └ page.tsx
 ├ api
 │   └ hazards
 │       └ route.ts
 ├ page.tsx

components
 ├ MapView.tsx
 ├ ReportForm.tsx
 ├ HazardCard.tsx
 └ Navbar.tsx

lib
 └ data.ts
```

---

## Installation

Clone the repository

```
git clone https://github.com/ChandaniSahu/Urban-Resist.git
```

Move into the project directory

```
cd urbanresist
```

Install dependencies

```
npm install
```

Start the development server

```
npm run dev
```

Open in browser

```
http://localhost:3000
```

---

## How It Works

1. Users report hazards through the **Report Hazard** page.
2. The data is sent to the **API route** (`/api/hazards`).
3. Hazards are stored temporarily in `lib/data.ts`.
4. The map fetches hazards and displays them as markers.

---

## Example Hazard Data

```
Title: Flooded Road
Description: Heavy rainfall has flooded the street
Latitude: 22.3645
Longitude: 82.7541
```

---

## Limitations

Currently hazards are stored in **memory**, so data resets when the server restarts.

For production we will definitely integrate:

* MongoDB
* Cloudinary for image uploads
* Real-time updates using WebSockets

---

## Future Improvements

* Image upload for hazards
* Automatic GPS location detection
* Real-time alerts
* Authentication system
* Admin management dashboard
* Mobile responsive improvements

