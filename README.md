# 🏗️ Public Works Projects — Schaerbeek 1030

> Cartography of public works projects on municipal roads in Schaerbeek, managed by the Infrastructure Directorate.
> 
> Last updated: 16/09/2026 

---

## 🔗 Quick Access

| Tool | Description | Link |
|---|---|---|
| 🗺️ **Principal** | Public works projects on Schaerbeek roads | [index](https://gis1030.github.io/INF-Voirie-ProjectsChantiers-1030/) |
| 🗺️ **Interactive Map** | Public Works Projects Map | [Public Works Projects 1030](https://gis1030.github.io/INF-Voirie-ProjectsChantiers-1030/ProjectsChantiers1030/Carte_ProjectsChantiers1030_StreetSurfaces_02.html) |
| 🗺️ **Interactive Map** | Schaerbeek Streets and Nodes Map | [Streetes and Nodes 1030](https://gis1030.github.io/INF-Voirie-ProjectsChantiers-1030/ProjectsChantiers1030/Carte_ProjectsChantiers1030_StreetSurfaces_00.html) |

---

## 📋 About the Project

This project provides an interactive cartographic visualisation of **public works projects on the municipal roads of Schaerbeek**, registered in the database of the **Road Works Service of the Infrastructure Department** (Direction de l'Infrastructure).

Unlike the OSIRIS database (which records operational road occupations), this tool focuses on **planned and approved municipal works projects** — providing a strategic overview of ongoing and future infrastructure investments across the territory.

---

## 🧭 Contents

### 🗺️ Interactive Map

The map allows projects to be explored and filtered by multiple criteria.

**Available information per project**

- 📍 Start and end dates of the work
- 🏢 Name of the responsible companies
- 🔧 Nature of the work
- 🚧 Temporary closure of the public road
- 🛣️ Segments of public road affected

**Base maps** — Google Terrain (default) · Google Satellite · OpenStreetMap

---

## 🛠️ Technologies

- **HTML / CSS / JavaScript** — 100% client-side application, no server required
- **Leaflet.js** — interactive mapping
- **GitHub Pages** — static hosting

---

## 🌐 Compatibility

Compatible with recent versions of **Firefox**, **Chrome**, and **Edge**.
Optimised for desktop use; the map is responsive on mobile.

---

## 📁 Repository Structure

```
INF-Voirie-ProjectsChantiers-1030/
├── index.html                        # Interactive map
├── css/                              # Stylesheets and UI assets
└── ProjectsChantiers1030/            # GeoJSON data (JS wrapper format)
    └── *.js                          # Works project datasets
```

---

## 📅 Changelog

| Date | Description |
|---|---|
| September 2026 | Dataset updated — active projects as of 2026/03 |
| Mars 2026 | Dataset updated — active projects as of 2026/03 |
| February 2026 | Dataset updated — active projects as of 2026/01 |
| 2025 | Initial publication |

---

## 📄 Data Sources

| Dataset | Source | Date |
|---|---|---|
| Public works projects | Road Works Service — Infrastructure Directorate, Commune de Schaerbeek | February 2026 |

Data is extracted from the municipal infrastructure database and packaged as static GeoJSON files for client-side rendering. No server-side queries are performed at runtime.

---

## 📄 Licence

This project is licensed under the **European Union Public Licence v. 1.2 (EUPL-1.2)**.
See the [LICENSE](LICENSE) file for the full text.

[![License: EUPL-1.2](https://img.shields.io/badge/License-EUPL%201.2-blue.svg)](https://eupl.eu/1.2/en/)

> © 2024–2026 Direction des Systèmes d'Information (DSI) · Commune de Schaerbeek · 1030 Brussels · Belgium

---

*Commune de Schaerbeek · Direction des Systèmes d'Information (DSI) · 1030 Brussels · Belgium*
