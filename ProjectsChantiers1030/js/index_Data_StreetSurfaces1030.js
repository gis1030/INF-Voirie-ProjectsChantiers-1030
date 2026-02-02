// +++BEGIN++++++ Style Geometry ++++++++
// Referencias
const createPolygonStyle = ({ weight = 2, color = "indianred", opacity = 0.5, fillColor = "khaki", fillOpacity = 0.5 } = {}) =>
    (feature) => ({ weight, color, opacity, fillColor, fillOpacity });

const PolygonStyle = createPolygonStyle();
const PolygonStyle_Request = createPolygonStyle({ color: "#228B22", fillColor: "#7CFC00" });
const PolygonStyle_Processed = createPolygonStyle({ color: "#808080", fillColor: "#DCDCDC" });
const PolygonStyle_AliceBlue = createPolygonStyle({ fillColor: "#F0F8FF" });
const PolygonStyle_Crimson = createPolygonStyle({ fillColor: "#DC143C" });
const PolygonStyle_DarkKhaki = createPolygonStyle({ fillColor: "#BDB76B" });
const PolygonStyle_DarkOrchid = createPolygonStyle({ fillColor: "#9932CC" });
const PolygonStyle_DeepPink = createPolygonStyle({ fillColor: "#FF1493" });
const PolygonStyle_ClairBlue = createPolygonStyle({ color: "#399ae9ff", fillColor: "#9dcaefff" });
const PolygonStyle_ChantierBlue = createPolygonStyle({ weight: 3, color: "#3484cbff", fillColor: "#3484cbff" });

// En uso
// ++++++ Limites de Schaerbeek ++++++++
const PolygonStyle_Boundary01 = createPolygonStyle({ weight: 6, color: "#230759ff", opacity: 0.6, fillColor: "#230759ff", fillOpacity: 0.6 });
const PolygonStyle_Boundary02 = createPolygonStyle({ weight: 2, color: "#3310ccff", opacity: 0.6, fillColor: "#3310ccff", fillOpacity: 0.6 });

// ++++ URBIS +++++
const PolygonStyle_DeepPink2 = createPolygonStyle({ opacity: 0.2, color: "#f184beff", fillColor: "#f184beff", fillOpacity: 0.2 });
const PolygonStyle_Chartreuse = createPolygonStyle({ opacity: 0.5, color: "#68c807ff", fillColor: "#7FFF00", fillOpacity: 0.2 });

// Chantiers 1030
//const PolygonStyle_Coral = createPolygonStyle({ weight: 1,  color: "#3484cbff", opacity: 0.2, fillColor: "#FF7F50",fillOpacity: 0.2 });
const PolygonStyle_Coral = createPolygonStyle({ fillColor: "#FF7F50" });

// on personnalise les marqueurs
const DataIcon05 = L.icon({
    iconUrl: 'images/1030_Icon.png',
    iconSize: [15, 20], // size of the icon
    iconAnchor: [5, 15], // point of the icon which will correspond to marker's location
    popupAnchor: [-15, -15], // point from which the popup should open relative to the 
    shadowSize: [41, 41]
})
// +++END++++++ Style Geometry ++++++++

/*
Point: A single position
LineString: A sequence of two or more points that are connected to form a line.
Polygon: A closed LineString with a specific coordinate structure that can include "holes".
MultiPoint: A collection of Point geometries. 
MultiLineString: A collection of LineString geometries.
MultiPolygon: A collection of Polygon geometries.
*/

// +++BEGIN++++++ Limites de Schaerbeek ++++++++
var DBPolygons = L.geoJSON([Boundary], {
    // style: function (feature) {
    //    return feature.properties && feature.properties.style;
    //},
    style: PolygonStyle_Boundary01,
    onEachFeature: onEachFeature,
}).addTo(carte);

SectorLabel = "Helmet-Hamoir";
var DBPolygonsBoundary = L.geoJSON([BoundaryDistrict], {
    // filter: function (feature) {
    //     if (feature.properties.SectorName.includes(SectorLabel)) return true
    // },
    // style: function (feature) {
    //     return feature.properties && feature.properties.style;
    // },
    style: PolygonStyle_Boundary02,
    onEachFeature: onEachFeature,
}).addTo(carte);

GroupBondery1030 = new L.featureGroup([
    DBPolygons,
    DBPolygonsBoundary
]);

carte.addLayer(GroupBondery1030)
// +++END++++++ Limites de Schaerbeek ++++++++

// ++++++++++++++++++++++++++++++++++++++++++
// ============ URBIS1030 Data ==============
// ++++++++++++++++++++++++++++++++++++++++++

// +++BEGIN++ URBIS_OSIRIS_StreetSurfaces
SectorLabel_01A = "Polygon"
SectorLabel_01C = "GeometryCollection"
var URBIS1030_Polygons_01A = L.geoJSON([URBIS_OSIRIS_StreetSurfaces], {
    filter: function (feature) {
        //if (feature.geometry.type.includes(SectorLabel_01A)) return true
        if (feature.geometry.type === SectorLabel_01A) return true
        //if (feature.geometry.type === SectorLabel_01C) return true
    },
    style: PolygonStyle_DeepPink2,
    onEachFeature: onEachFeature,

})//.addTo(carte);

SectorLabel_01B = "MultiPolygon"
var URBIS1030_Polygons_01B = L.geoJSON([URBIS_OSIRIS_StreetSurfaces], {
    filter: function (feature) {
        //if (feature.geometry.type.includes(SectorLabel_01B)) return true
        if (feature.geometry.type === SectorLabel_01B) return true
    },
    style: PolygonStyle_DeepPink2,
    onEachFeature: onEachFeature,

})//.addTo(carte);
// +++END++ URBIS_OSIRIS_StreetSurfaces

// +++BEGIN++ URBIS_OSIRIS_OnlyNodes
SectorLabel_01A = "Polygon"
var URBIS1030_Polygons_02A = L.geoJSON([URBIS_OSIRIS_OnlyNodes], {
    filter: function (feature) {
        //if (feature.geometry.type.includes(SectorLabel_01A)) return true
        if (feature.geometry.type === SectorLabel_01A) return true
        //if (feature.geometry.type === SectorLabel_01C) return true
    },
    style: PolygonStyle_Chartreuse,
    onEachFeature: onEachFeature,

}).addTo(carte);

SectorLabel_01B = "MultiPolygon"
var URBIS1030_Polygons_02B = L.geoJSON([URBIS_OSIRIS_OnlyNodes], {
    filter: function (feature) {
        //if (feature.geometry.type.includes(SectorLabel_01B)) return true
        if (feature.geometry.type === SectorLabel_01B) return true
    },
    style: PolygonStyle_Chartreuse,
    onEachFeature: onEachFeature,

})//.addTo(carte);
// +++END++ URBIS_OSIRIS_OnlyNodes


// +++BEGIN++ Group Data StreetSurfaces +++++++++
var GroupPolygons_URBIS_StreetSurfaces = new L.featureGroup([
    URBIS1030_Polygons_01A,
])//.addTo(carte);

var GroupMultiPolygon_URBIS_StreetSurfaces = new L.featureGroup([
    URBIS1030_Polygons_01B
])//.addTo(carte);

var GroupALL_URBIS_StreetSurfaces = new L.featureGroup([
    URBIS1030_Polygons_01A,
    URBIS1030_Polygons_01B,
])
// +++END++ Group Data StreetSurfaces +++++++++

// +++BEGIN++ Group Data NodesSurfaces +++++++++
var GroupPolygons_URBIS_NodesSurfaces = new L.featureGroup([
    URBIS1030_Polygons_02A,
])//.addTo(carte);

var GroupMultiPolygon_URBIS_NodesSurfaces = new L.featureGroup([
    URBIS1030_Polygons_02B
])//.addTo(carte);

var GroupALL_URBIS_NodesSurfaces = new L.featureGroup([
    URBIS1030_Polygons_02A,
    URBIS1030_Polygons_02B,
])

var GroupALL_URBIS_NodesStreetSurfaces = new L.featureGroup([
    URBIS1030_Polygons_01A,
    URBIS1030_Polygons_01B,
    URBIS1030_Polygons_02A,
    URBIS1030_Polygons_02B,
])

//carte.addLayer(GroupALL_URBIS_StreetSurfaces) // StreetSurfaces URBIS
carte.addLayer(GroupALL_URBIS_NodesSurfaces) // NodesSurfaces URBIS
//carte.addLayer(GroupALL_URBIS_NodesStreetSurfaces) // StreetSurfaces + NodesSurfaces URBIS
// +++END++ Group Data NodesSurfaces +++++++++

// ++++++++++++++++++++++++++++++++++++++++++
// ======== Chantiers1030 Data ==============
// ++++++++++++++++++++++++++++++++++++++++++

// +++BEGIN++ Impetrants +++++++++
const PolygonStyle_StreetClosed = { fillColor: "#ff0000", fillOpacity: 0.7, color: "#000000", opacity: 0.3, weight: 1 };

const PolygonStyle_BELIRIS = { fillColor: "#DA59DD", fillOpacity: 0.7, color: "#000000", opacity: 0.3, weight: 1 };
const PolygonStyle_BM_DEN = { fillColor: "#FFAB91", fillOpacity: 0.7, color: "#000000", opacity: 0.3, weight: 1 };
const PolygonStyle_BM_DPV = { fillColor: "#FFAB91", fillOpacity: 0.7, color: "#000000", opacity: 0.3, weight: 1 };
const PolygonStyle_BRUTELE = { fillColor: "#9575CD", fillOpacity: 0.7, color: "#000000", opacity: 0.3, weight: 1 };
const PolygonStyle_COLT = { fillColor: "#9575CD", fillOpacity: 0.7, color: "#000000", opacity: 0.3, weight: 1 };
const PolygonStyle_DIGI = { fillColor: "#9575CD", fillOpacity: 0.7, color: "#000000", opacity: 0.3, weight: 1 };
const PolygonStyle_DITP = { fillColor: "#E57373", fillOpacity: 0.7, color: "#000000", opacity: 0.3, weight: 1 };
const PolygonStyle_ELIA = { fillColor: "#1976D2", fillOpacity: 0.7, color: "#000000", opacity: 0.3, weight: 1 };
const PolygonStyle_EUROFIBER = { fillColor: "#9575CD", fillOpacity: 0.7, color: "#000000", opacity: 0.3, weight: 1 };
const PolygonStyle_INFRABEL = { fillColor: "#B0BEC5", fillOpacity: 0.7, color: "#000000", opacity: 0.3, weight: 1 };
const PolygonStyle_IRISNET = { fillColor: "#9575CD", fillOpacity: 0.7, color: "#000000", opacity: 0.3, weight: 1 };
const PolygonStyle_PROXIMUS = { fillColor: "#9575CD", fillOpacity: 0.7, color: "#000000", opacity: 0.3, weight: 1 };
const PolygonStyle_SCHAERBEEK_AME_COMPLET = { fillColor: "#1B5E20", fillOpacity: 0.7, color: "#000000", opacity: 0.3, weight: 1 };
const PolygonStyle_SCHAERBEEK_ASPHALTE = { fillColor: "#2E7D32", fillOpacity: 0.7, color: "#000000", opacity: 0.3, weight: 1 };
const PolygonStyle_SCHAERBEEK_DAV = { fillColor: "#4CAF50", fillOpacity: 0.7, color: "#000000", opacity: 0.3, weight: 1 };
const PolygonStyle_SCHAERBEEK_MARQUAGE = { fillColor: "#9CCC65", fillOpacity: 0.7, color: "#000000", opacity: 0.3, weight: 1 };
const PolygonStyle_SCHAERBEEK_RENOVAS = { fillColor: "#CDDC39", fillOpacity: 0.7, color: "#000000", opacity: 0.3, weight: 1 };
const PolygonStyle_SCHAERBEEK_TROTTOIRS = { fillColor: "#00C853", fillOpacity: 0.7, color: "#000000", opacity: 0.3, weight: 1 };
const PolygonStyle_SIBELGA = { fillColor: "#BF360C", fillOpacity: 0.7, color: "#000000", opacity: 0.3, weight: 1 };
const PolygonStyle_SIBELGA_EP = { fillColor: "#FFAB91", fillOpacity: 0.7, color: "#000000", opacity: 0.3, weight: 1 };
const PolygonStyle_STIB = { fillColor: "#E3886B", fillOpacity: 0.7, color: "#000000", opacity: 0.3, weight: 1 };
const PolygonStyle_VIVAQUA_ASS = { fillColor: "#FF9800", fillOpacity: 0.7, color: "#000000", opacity: 0.3, weight: 1 };
const PolygonStyle_VIVAQUA_DIS = { fillColor: "#FFEB3B", fillOpacity: 0.7, color: "#000000", opacity: 0.3, weight: 1 };
const PolygonStyle_VIVAQUA_REP = { fillColor: "#795548", fillOpacity: 0.7, color: "#000000", opacity: 0.3, weight: 1 };
const PolygonStyle_VOO = { fillColor: "#9575CD", fillOpacity: 0.7, color: "#000000", opacity: 0.3, weight: 1 };
const PolygonStyle_WYRE = { fillColor: "#9575CD", fillOpacity: 0.7, color: "#000000", opacity: 0.3, weight: 1 };

ImpetrantLabel = "BELIRIS"
var Impetrant_01 = crearCapaImpetrant(ImpetrantLabel, PolygonStyle_BELIRIS, PolygonStyle_StreetClosed, [ProjectsChantiers1030]);
var Impetrant_S01 = crearCapaImpetrantSimple(ImpetrantLabel, PolygonStyle_BELIRIS, [ProjectsChantiers1030]);

ImpetrantLabel = "BM-DEN"
var Impetrant_02 = crearCapaImpetrant(ImpetrantLabel, PolygonStyle_BM_DEN, PolygonStyle_StreetClosed, [ProjectsChantiers1030]);
var Impetrant_S02 = crearCapaImpetrantSimple(ImpetrantLabel, PolygonStyle_BM_DEN, [ProjectsChantiers1030]);

ImpetrantLabel = "BM-DPV"
var Impetrant_03 = crearCapaImpetrant(ImpetrantLabel, PolygonStyle_BM_DPV, PolygonStyle_StreetClosed, [ProjectsChantiers1030]);
var Impetrant_S03 = crearCapaImpetrantSimple(ImpetrantLabel, PolygonStyle_BM_DPV, [ProjectsChantiers1030]);

ImpetrantLabel = "BRUTELE"
var Impetrant_04 = crearCapaImpetrant(ImpetrantLabel, PolygonStyle_BRUTELE, PolygonStyle_StreetClosed, [ProjectsChantiers1030]);
var Impetrant_S04 = crearCapaImpetrantSimple(ImpetrantLabel, PolygonStyle_BRUTELE, [ProjectsChantiers1030]);

ImpetrantLabel = "COLT"
var Impetrant_05 = crearCapaImpetrant(ImpetrantLabel, PolygonStyle_COLT, PolygonStyle_StreetClosed, [ProjectsChantiers1030]);
var Impetrant_S05 = crearCapaImpetrantSimple(ImpetrantLabel, PolygonStyle_COLT, [ProjectsChantiers1030]);

ImpetrantLabel = "DIGI"
var Impetrant_06 = crearCapaImpetrant(ImpetrantLabel, PolygonStyle_DIGI, PolygonStyle_StreetClosed, [ProjectsChantiers1030]);
var Impetrant_S06 = crearCapaImpetrantSimple(ImpetrantLabel, PolygonStyle_DIGI, [ProjectsChantiers1030]);

ImpetrantLabel = "DITP"
var Impetrant_07 = crearCapaImpetrant(ImpetrantLabel, PolygonStyle_DITP, PolygonStyle_StreetClosed, [ProjectsChantiers1030]);
var Impetrant_S07 = crearCapaImpetrantSimple(ImpetrantLabel, PolygonStyle_DITP, [ProjectsChantiers1030]);

ImpetrantLabel = "ELIA"
var Impetrant_08 = crearCapaImpetrant(ImpetrantLabel, PolygonStyle_ELIA, PolygonStyle_StreetClosed, [ProjectsChantiers1030]);
var Impetrant_S08 = crearCapaImpetrantSimple(ImpetrantLabel, PolygonStyle_ELIA, [ProjectsChantiers1030]);

ImpetrantLabel = "EUROFIBER"
var Impetrant_09 = crearCapaImpetrant(ImpetrantLabel, PolygonStyle_EUROFIBER, PolygonStyle_StreetClosed, [ProjectsChantiers1030]);
var Impetrant_S09 = crearCapaImpetrantSimple(ImpetrantLabel, PolygonStyle_EUROFIBER, [ProjectsChantiers1030]);

ImpetrantLabel = "INFRABEL"
var Impetrant_10 = crearCapaImpetrant(ImpetrantLabel, PolygonStyle_INFRABEL, PolygonStyle_StreetClosed, [ProjectsChantiers1030]);
var Impetrant_S10 = crearCapaImpetrantSimple(ImpetrantLabel, PolygonStyle_INFRABEL, [ProjectsChantiers1030]);

ImpetrantLabel = "IRISNET"
var Impetrant_11 = crearCapaImpetrant(ImpetrantLabel, PolygonStyle_IRISNET, PolygonStyle_StreetClosed, [ProjectsChantiers1030]);
var Impetrant_S11 = crearCapaImpetrantSimple(ImpetrantLabel, PolygonStyle_IRISNET, [ProjectsChantiers1030]);

ImpetrantLabel = "PROXIMUS"
var Impetrant_12 = crearCapaImpetrant(ImpetrantLabel, PolygonStyle_PROXIMUS, PolygonStyle_StreetClosed, [ProjectsChantiers1030]);
var Impetrant_S12 = crearCapaImpetrantSimple(ImpetrantLabel, PolygonStyle_PROXIMUS, [ProjectsChantiers1030]);

ImpetrantLabel = "SCHAERBEEK AMÉNAGEMENT COMPLET"
var Impetrant_13 = crearCapaImpetrant(ImpetrantLabel, PolygonStyle_SCHAERBEEK_AME_COMPLET, PolygonStyle_StreetClosed, [ProjectsChantiers1030]);
var Impetrant_S13 = crearCapaImpetrantSimple(ImpetrantLabel, PolygonStyle_SCHAERBEEK_AME_COMPLET, [ProjectsChantiers1030]);

ImpetrantLabel = "SCHAERBEEK ASPHALTE"
var Impetrant_14 = crearCapaImpetrant(ImpetrantLabel, PolygonStyle_SCHAERBEEK_ASPHALTE, PolygonStyle_StreetClosed, [ProjectsChantiers1030]);
var Impetrant_S14 = crearCapaImpetrantSimple(ImpetrantLabel, PolygonStyle_SCHAERBEEK_ASPHALTE, [ProjectsChantiers1030]);

ImpetrantLabel = "SCHAERBEEK DAV"
var Impetrant_15 = crearCapaImpetrant(ImpetrantLabel, PolygonStyle_SCHAERBEEK_DAV, PolygonStyle_StreetClosed, [ProjectsChantiers1030]);
var Impetrant_S15 = crearCapaImpetrantSimple(ImpetrantLabel, PolygonStyle_SCHAERBEEK_DAV, [ProjectsChantiers1030]);

ImpetrantLabel = "SCHAERBEEK MARQUAGE"
var Impetrant_16 = crearCapaImpetrant(ImpetrantLabel, PolygonStyle_SCHAERBEEK_MARQUAGE, PolygonStyle_StreetClosed, [ProjectsChantiers1030]);
var Impetrant_S16 = crearCapaImpetrantSimple(ImpetrantLabel, PolygonStyle_SCHAERBEEK_MARQUAGE, [ProjectsChantiers1030]);

ImpetrantLabel = "SCHAERBEEK RENOVAS"
var Impetrant_17 = crearCapaImpetrant(ImpetrantLabel, PolygonStyle_SCHAERBEEK_RENOVAS, PolygonStyle_StreetClosed, [ProjectsChantiers1030]);
var Impetrant_S17 = crearCapaImpetrantSimple(ImpetrantLabel, PolygonStyle_SCHAERBEEK_RENOVAS, [ProjectsChantiers1030]);

ImpetrantLabel = "SCHAERBEEK TROTTOIRS"
var Impetrant_18 = crearCapaImpetrant(ImpetrantLabel, PolygonStyle_SCHAERBEEK_TROTTOIRS, PolygonStyle_StreetClosed, [ProjectsChantiers1030]);
var Impetrant_S18 = crearCapaImpetrantSimple(ImpetrantLabel, PolygonStyle_SCHAERBEEK_TROTTOIRS, [ProjectsChantiers1030]);

ImpetrantLabel = "SIBELGA"
var Impetrant_19 = crearCapaImpetrant(ImpetrantLabel, PolygonStyle_SIBELGA, PolygonStyle_StreetClosed, [ProjectsChantiers1030]);
var Impetrant_S19 = crearCapaImpetrantSimple(ImpetrantLabel, PolygonStyle_SIBELGA, [ProjectsChantiers1030]);

ImpetrantLabel = "SIBELGA EP"
var Impetrant_20 = crearCapaImpetrant(ImpetrantLabel, PolygonStyle_SIBELGA_EP, PolygonStyle_StreetClosed, [ProjectsChantiers1030]);
var Impetrant_S20 = crearCapaImpetrantSimple(ImpetrantLabel, PolygonStyle_SIBELGA_EP, [ProjectsChantiers1030]);

ImpetrantLabel = "STIB"
var Impetrant_21 = crearCapaImpetrant(ImpetrantLabel, PolygonStyle_STIB, PolygonStyle_StreetClosed, [ProjectsChantiers1030]);
var Impetrant_S21 = crearCapaImpetrantSimple(ImpetrantLabel, PolygonStyle_STIB, [ProjectsChantiers1030]);

ImpetrantLabel = "VIVAQUA ASSAINISSEMENT";
var Impetrant_22 = crearCapaImpetrant(ImpetrantLabel, PolygonStyle_VIVAQUA_ASS, PolygonStyle_StreetClosed, [ProjectsChantiers1030]);
var Impetrant_S22 = crearCapaImpetrantSimple(ImpetrantLabel, PolygonStyle_VIVAQUA_ASS, [ProjectsChantiers1030]);

ImpetrantLabel = "VIVAQUA DISTRIBUTION"
var Impetrant_23 = crearCapaImpetrant(ImpetrantLabel, PolygonStyle_VIVAQUA_DIS, PolygonStyle_StreetClosed, [ProjectsChantiers1030]);
var Impetrant_S23 = crearCapaImpetrantSimple(ImpetrantLabel, PolygonStyle_VIVAQUA_DIS, [ProjectsChantiers1030]);

ImpetrantLabel = "VIVAQUA RÉPARTITION"
var Impetrant_24 = crearCapaImpetrant(ImpetrantLabel, PolygonStyle_VIVAQUA_REP, PolygonStyle_StreetClosed, [ProjectsChantiers1030]);
var Impetrant_S24 = crearCapaImpetrantSimple(ImpetrantLabel, PolygonStyle_VIVAQUA_REP, [ProjectsChantiers1030]);

ImpetrantLabel = "VOO"
var Impetrant_25 = crearCapaImpetrant(ImpetrantLabel, PolygonStyle_VOO, PolygonStyle_StreetClosed, [ProjectsChantiers1030]);
var Impetrant_S25 = crearCapaImpetrantSimple(ImpetrantLabel, PolygonStyle_VOO, [ProjectsChantiers1030]);

ImpetrantLabel = "WYRE"
var Impetrant_26 = crearCapaImpetrant(ImpetrantLabel, PolygonStyle_WYRE, PolygonStyle_StreetClosed, [ProjectsChantiers1030]);
var Impetrant_S26 = crearCapaImpetrantSimple(ImpetrantLabel, PolygonStyle_WYRE, [ProjectsChantiers1030]);

const PolygonStyle_Coral_02 = { fillColor: "#e8a076", fillOpacity: 0.2, color: "#000000", opacity: 0.3, weight: 1 };
var Chantier1030_Street = crearCapaImpetrant_ClosedStreet(PolygonStyle_Coral_02, PolygonStyle_StreetClosed, [ProjectsChantiers1030]);
//var Chantier1030_Street = crearCapaImpetrant_ClosedStreet(PolygonStyle_Coral_02, PolygonStyle_Coral_02, [ProjectsChantiers1030]);
// +++END++ Impetrants +++++++++

// +++BEGIN++ Street Closed +++++++++
/*
FermetureRue_OUI = "oui"
var Chantier1030_StreetClosed_NON = L.geoJSON([ProjectsChantiers1030], {
    filter: function (feature) {
        if (feature.properties.FermetureRue != FermetureRue_OUI) return true
    },
    style: PolygonStyle_Coral,
    onEachFeature: onEachFeature,

})//.addTo(carte);

var Chantier1030_StreetClosed_OUI = L.geoJSON([ProjectsChantiers1030], {
    filter: function (feature) {
        if (feature.properties.FermetureRue === FermetureRue_OUI) return true
    },
    style: PolygonStyle_StreetClosed,
    onEachFeature: onEachFeature,
})//.addTo(carte);

var Chantier1030_Street = L.geoJSON([ProjectsChantiers1030], {
    //filter: function (feature) {
    //     if (feature.properties.FermetureRue === FermetureRue_OUI) return true
    // },
    style: PolygonStyle_Coral,
    onEachFeature: onEachFeature,
})//.addTo(carte);
*/
// +++END++ Street Closed +++++++++

// On va regropue les marqueurs dans une group leafvar
// +++BEGIN++ Group Data +++++++++
// Full Layers Impetrants
var GroupChantiersMap1030 = new L.featureGroup([
    Impetrant_01,
    Impetrant_02,
    Impetrant_03,
    Impetrant_04,
    Impetrant_05,
    Impetrant_06,
    Impetrant_07,
    Impetrant_08,
    Impetrant_09,
    Impetrant_10,
    Impetrant_11,
    Impetrant_12,
    Impetrant_13,
    Impetrant_14,
    Impetrant_15,
    Impetrant_16,
    Impetrant_17,
    Impetrant_18,
    Impetrant_19,
    Impetrant_20,
    Impetrant_21,
    Impetrant_22,
    Impetrant_23,
    Impetrant_24,
    Impetrant_25,
    Impetrant_26,
    //Chantier1030_Street
]);

// Simple Layers Impetrants
var GroupChantiersMap1030_S = new L.featureGroup([
    Impetrant_S01,
    Impetrant_S02,
    Impetrant_S03,
    Impetrant_S04,
    Impetrant_S05,
    Impetrant_S06,
    Impetrant_S07,
    Impetrant_S08,
    Impetrant_S09,
    Impetrant_S10,
    Impetrant_S11,
    Impetrant_S12,
    Impetrant_S13,
    Impetrant_S14,
    Impetrant_S15,
    Impetrant_S16,
    Impetrant_S17,
    Impetrant_S18,
    Impetrant_S19,
    Impetrant_S20,
    Impetrant_S21,
    Impetrant_S22,
    Impetrant_S23,
    Impetrant_S24,
    Impetrant_S25,
    Impetrant_S26,
]);

// Carte Viewer Laeyer
// +++++++++++++++++++++++++

//  crearCapaImpetrantSimple (representa los impetrantes y calles sin considerar si estan cerradas o no)
var GroupALL_Chantiers_S = new L.featureGroup([
    GroupChantiersMap1030_S,
])
carte.addLayer(GroupALL_Chantiers_S)

// crearCapaImpetrant_ClosedStreet (representa los impetrantes y las calles considerarando si estan cerradas o no)
var GroupALL_Chantiers = new L.featureGroup([
    Chantier1030_Street,
])
//carte.addLayer(GroupALL_Chantiers)

// crearCapaImpetrant (representa las calles sin los impetrantes considerarando si estan cerradas o no)
var GroupALL_Chantiers_ALL = new L.featureGroup([
    GroupChantiersMap1030,
])
//carte.addLayer(GroupALL_Chantiers_ALL)
// +++END++ Group Data +++++++++

// +++BEGIN++ Layer Control = Data Viewer +++++
GroupALL_Chantiers_S.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

GroupALL_Chantiers.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

GroupChantiersMap1030.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});
// +++END++ Layer Control = Data Viewer +++++

function onEachFeature(feature, layer) {
    // Limites Schaerbeek
    let popupContent = "<dt> id: " + feature.id + "</dt>";
    if (feature.properties.popupContent) {
        // console.log("Quartiers Schaerbeek")
        const custompoup =
            "<dt></dt>";
        const popupContent0 = "<dt>" + feature.properties.popupContent + "</dt>";
        popupContent = popupContent0 + custompoup;
    }
    // Quartiers Schaerbeek
    if (feature.properties.SectorName) {
        // console.log("Quartiers Schaerbeek")
        const custompoup =
            "<dt> Sector Type: " + feature.properties.SectorType + "</dt>";
        const popupContent0 = "<dt> Sector : " + feature.properties.SectorName + "</dt>";
        popupContent = popupContent0 + custompoup;
    }
    // URBIS StreetSurfaces1030
    if (feature.properties.id_street) {
        if (feature.properties.name_street_shared === undefined) {
            let custompoup =
                //"<dt> id_street : " + feature.properties.id_street + "</dt>" +
                "<dt> Voie 1030 : " + feature.properties.PW_NAME_FR + "</dt>" +
                "<dt> Geometry : " + feature.geometry.type + "</dt>";
            const popupContent1 = "<dt> id_street: " + feature.properties.id_street + "</dt>";
            popupContent = popupContent1 + custompoup;
        } else {
            let custompoup =
                //"<dt> id_street : " + feature.properties.id_street + "</dt>" +
                "<dt> Voie 1030 : " + feature.properties.PW_NAME_FR + "</dt>" +
                "<dt> Connections 1030 : " + feature.properties.name_street_shared + "</dt>" +
                "<dt> Geometry : " + feature.geometry.type + "</dt>";
            const popupContent1 = "<dt> id_street: " + feature.properties.id_street + "</dt>";
            popupContent = popupContent1 + custompoup;
        }
    }
    // URBIS NodesSurfaces1030
    if (feature.properties.id_nodes) {
        // console.log("Chantiers")
        const custompoup =
            // "<dt> id_nodes : " + feature.properties.id_nodes + "</dt>" +
            "<dt> Street Shared : " + feature.properties.name_street_shared + "</dt>" +
            "<dt> Geometry : " + feature.geometry.type + "</dt>";
        const popupContent1 = "<dt> id_nodes: " + feature.properties.id_nodes + "</dt>";
        popupContent = popupContent1 + custompoup;
    }
    layer.bindPopup(popupContent);

    // Projects Chantiers1030
    if (feature.properties.id_chantier) {
        // console.log("Chantiers")
        const custompoup =
            "<dt> Rue1030 : " + feature.properties.VoirieNom + "</dt>" +
            "<dt> Responsable : " + feature.properties.NomImpetrant + "</dt>" +
            "<dt> Fermeture : " + feature.properties.FermetureRue + "</dt>" +
            //"<dt> Nature travaux : " + feature.properties.NatureTravaux + "</dt>" +
            "<dt> OsirisB1 : " + feature.properties.OsirisB1 + "</dt>" +
            //"<dt> Date Debut : " + feature.properties.DateDebut + "</dt>" +
            //"<dt> Date Debut : " + feature.properties.DateDebut + "</dt>" +
            "<dt> Remarque : " + feature.properties.Remarque + "</dt>" +
            "<dt> Geometry : " + feature.geometry.type + "</dt>";
        const popupContent1 = "<dt> id_chantier: " + feature.properties.id_chantier + "</dt>";
        popupContent = popupContent1 + custompoup;
    }
    layer.bindPopup(popupContent);
}

function MarkerDataView(clickedMarker) {
    //document.getElementById("ChantierID").value = clickedMarker.feature.properties.ID
    //document.getElementById("QuartierNom").value = clickedMarker.feature.properties.QuartierNom
    //document.getElementById("DureeJoirs").value = clickedMarker.feature.properties.DureeJoirs
    document.getElementById("Chantier1030").value = clickedMarker.feature.properties.id_chantier
    document.getElementById("Rues1030").value = clickedMarker.feature.properties.VoirieNom
    document.getElementById("TronconDebut1030").value = clickedMarker.feature.properties.Troncon_debut
    document.getElementById("TronconFin1030").value = clickedMarker.feature.properties.Troncon_fin
    document.getElementById("Impetrant").value = clickedMarker.feature.properties.NomImpetrant
    document.getElementById("NatureChantier").value = clickedMarker.feature.properties.NatureTravaux
    document.getElementById("DateDebutChantier").value = clickedMarker.feature.properties.DateDebut
    document.getElementById("DateFinChantier").value = clickedMarker.feature.properties.DateFin
    document.getElementById("ChantierOsiris").value = clickedMarker.feature.properties.OsirisB1
    document.getElementById("FermetureRue").value = clickedMarker.feature.properties.FermetureRue
    document.getElementById("RemarqueChantier").value = clickedMarker.feature.properties.Remarque

    //document.getElementById("Latitude").value = clickedMarker.feature.geometry.coordinates[1]
    //document.getElementById("Longitude").value = clickedMarker.feature.geometry.coordinates[0]
};

function crearCapaImpetrant(label, StyleImpetrant, StyleStreetClosed, geoData) {
    // 1. Creamos la capa GeoJSON con los filtros y estilos
    const capa = L.geoJSON(geoData, {
        filter: function (feature) {
            return feature.properties.NomImpetrant === label;
        },
        style: function (feature) {
            return feature.properties.FermetureRue === "oui"
                ? StyleStreetClosed
                : StyleImpetrant;
        },
        onEachFeature: onEachFeature
    });

    // 2. Contamos cuántos elementos pasaron el filtro
    const numeroElementos = capa.getLayers().length;
    console.log("Se han cargado " + numeroElementos + " elementos para " + label);
    return capa;
}

function crearCapaImpetrant_ClosedStreet(StyleImpetrant, StyleStreetClosed, geoData) {
    // 1. Creamos la capa GeoJSON procesando todos los elementos
    const capa = L.geoJSON(geoData, {
        style: function (feature) {
            // Estilo condicional: "oui" recibe StyleStreetClosed, cualquier otro valor recibe StyleImpetrant
            return feature.properties.FermetureRue === "oui"
                ? StyleStreetClosed
                : StyleImpetrant;
        },
        onEachFeature: onEachFeature
    });

    // 2. Reportamos el total de elementos cargados
    console.log("Capa creada con " + capa.getLayers().length + " elementos totales.");
    return capa;
}

function crearCapaImpetrantSimple(label, StyleImpetrant, geoData) {
    // Creamos la capa filtrando únicamente por el nombre
    const capa = L.geoJSON(geoData, {
        filter: function (feature) {
            return feature.properties.NomImpetrant === label;
        },
        style: StyleImpetrant, // Aplica el estilo directamente a todos
        onEachFeature: onEachFeature
    });

    // Lógica del panel informativo
    const numeroElementos = capa.getLayers().length;
    console.log("Se han cargado " + numeroElementos + " elementos para " + label);
    return capa;
}

function crearCapaImpetrant_Option(label, StyleStreetClosed, StyleImpetrant, geoData) {
    // 1. Creamos la capa GeoJSON con los filtros y estilos
    const capa = L.geoJSON(geoData, {
        filter: function (feature) {
            return feature.properties.NomImpetrant === label;
        },
        style: function (feature) {
            return feature.properties.FermetureRue === "oui"
                ? StyleStreetClosed
                : StyleImpetrant;
        },
        onEachFeature: onEachFeature
    });

    // 2. Contamos cuántos elementos pasaron el filtro
    const numeroElementos = capa.getLayers().length;

    // 3. Si no hay elementos, mostramos el mensaje
    if (numeroElementos === 0) {
        alert("No se encontraron elementos para: " + label);
        // Opcional: console.warn("Aviso: 0 elementos encontrados.");
    } else {
        console.log("Se han cargado " + numeroElementos + " elementos para " + label);
    }

    return capa;
}
