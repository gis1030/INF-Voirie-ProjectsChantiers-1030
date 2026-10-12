# 🏗️ Public Works Projects — Schaerbeek 1030

> Cartography of public works projects on municipal roads in Schaerbeek, managed by the Infrastructure Directorate.
> 
> Last updated: 12/10/2026 

---

## 🔗 Quick Access

| Tool | Description | Link |
|---|---|---|
| 🗺️ **Principal** | Public works projects on Schaerbeek roads | [index](https://gis1030.github.io/INF-Voirie-ProjectsChantiers-1030/) |
| 🗺️ **Interactive Map** | Public Works Projects Map | [Public Works Projects 1030](https://gis1030.github.io/INF-Voirie-ProjectsChantiers-1030/ProjectsChantiers1030/Carte_ProjectsChantiers1030_StreetSurfaces_02.html) |
| 🔍 **Filter & Compare** | Filter projects and compare two periods side by side | [Filter & Compare 1030](https://gis1030.github.io/INF-Voirie-ProjectsChantiers-1030/ProjectsChantiers1030/Carte_ProjectsChantiers1030_StreetSurfaces_03.html) |
| 🗺️ **Interactive Map** | Works coordination 2014–2030 (osiris.brussels) | [Coordination 1030](https://gis1030.github.io/INF-Voirie-ProjectsChantiers-1030/ProjectsChantiers1030/Carte_ProjectsChantiers1030_StreetSurfaces_01.html) |
| 🗺️ **Interactive Map** | Schaerbeek Streets and Nodes Map | [Streets and Nodes 1030](https://gis1030.github.io/INF-Voirie-ProjectsChantiers-1030/ProjectsChantiers1030/Carte_ProjectsChantiers1030_StreetSurfaces_00.html) |

---

## 📋 About the Project

This project provides an interactive cartographic visualisation of **public works projects on the municipal roads of Schaerbeek**, registered in the database of the **Road Works Service of the Infrastructure Department** (Direction de l'Infrastructure).

Unlike the OSIRIS database (which records operational road occupations), this tool focuses on **planned and approved municipal works projects** — providing a strategic overview of ongoing and future infrastructure investments across the territory.

---

## 🧭 Contents

### 🗺️ Interactive Maps

The maps allow projects to be explored and filtered by multiple criteria.

**Available information per project**

- 📍 Start and end dates of the work
- 🏢 Name of the responsible companies (each company has its own colour; companies without an assigned colour are grouped under *Autres impetrants*)
- 🔧 Nature of the work
- 🚧 Temporary closure of the public road (shown in red)
- 🛣️ Segments of public road affected

**Base maps** — Google Streets (default) · Google Satellite-Streets · OSM.fr

### 🔍 Filter & Compare

The *Filter & Compare* map filters projects by:

- 🔢 Project number (Chantier 1030)
- 📅 Period (start and end date) or a single date
- 🏢 Responsible company (Demandeur du chantier)
- 🛣️ Street
- 🚧 Road closure (oui / non)

**Filter modes**

- **Simple** — one map with the filtered projects.
- **Comparaison** — the map area splits into two independent maps, *Période 1* and *Période 2*, each with its own controls and layers, to compare the works carried out in two periods (for one company or for all of them).

If a date is missing, the user can either refine the dates or use the default period (01/01/2024 – 31/12/2040). *Clear* resets the filters and the map view.

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
├── index.html                            # Home page
├── css/                                  # Home page stylesheets and assets
└── ProjectsChantiers1030/
    ├── Carte_..._StreetSurfaces_00.html  # Streets and nodes map
    ├── Carte_..._StreetSurfaces_01.html  # Works coordination 2014–2030 (osiris.brussels)
    ├── Carte_..._StreetSurfaces_02.html  # Public works projects map
    ├── Carte_..._StreetSurfaces_03.html  # Filter & compare map
    ├── css/                              # Map stylesheets
    ├── databases/                        # GeoJSON data (JS wrapper format): projects, URBIS, boundaries
    ├── images/                           # Icons and 1030 logo
    ├── js/                               # Map scripts (data, filters, controls, comparison)
    └── legend/                           # Company colour legend icons
```

---

## 📅 Changelog

| Date | Description |
|---|---|
| October 2026 | New map layout (full screen, title and 1030 logo); *Comparaison* mode to compare two periods; choice of default period when dates are missing; SPRB colour and *Autres impetrants* layer; road-closure values harmonised (oui / non) |
| September 2026 | Dataset updated — active projects as of 2026/03 |
| Mars 2026 | Dataset updated — active projects as of 2026/03 |
| February 2026 | Dataset updated — active projects as of 2026/01 |
| 2025 | Initial publication |

---

## 📄 Data Sources

| Dataset | Source | Date |
|---|---|---|
| Public works projects | Road Works Service — Infrastructure Directorate, Commune de Schaerbeek | September 2026 |

Data is extracted from the municipal infrastructure database and packaged as static GeoJSON files for client-side rendering. No server-side queries are performed at runtime.

---

## 📄 Licence

This project is licensed under the **European Union Public Licence v. 1.2 (EUPL-1.2)**.
See the [LICENSE](LICENSE) file for the full text.

[![License: EUPL-1.2](https://img.shields.io/badge/License-EUPL%201.2-blue.svg)](https://eupl.eu/1.2/en/)

> © 2024–2026 Direction des Systèmes d'Information (DSI) · Commune de Schaerbeek · 1030 Brussels · Belgium

---

*Commune de Schaerbeek · Direction des Systèmes d'Information (DSI) · 1030 Brussels · Belgium*
