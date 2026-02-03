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
const PolygonStyle_ClairBlue = createPolygonStyle({ color: "#399ae9ff", fillColor: "#9dcaefff" });
const PolygonStyle_ChantierBlue = createPolygonStyle({ weight: 3, color: "#3484cbff", fillColor: "#3484cbff" });

// En uso
// ++++++ Limites de Schaerbeek ++++++++
const PolygonStyle_Boundary01 = createPolygonStyle({ weight: 2, color: "#230759ff", opacity: 0.6, fillColor: "#230759ff", fillOpacity: 0.6 });
const PolygonStyle_Boundary02 = createPolygonStyle({ weight: 3, color: "#088634", opacity: 0.6, fillColor: "#088634", fillOpacity: 0.6 });

// ++++ URBIS +++++
const PolygonStyle_DeepPink2 = createPolygonStyle({ opacity: 0.2, color: "#f184beff", fillColor: "#f184beff", fillOpacity: 0.2 });
const PolygonStyle_Chartreuse = createPolygonStyle({ opacity: 0.5, color: "#68c807ff", fillColor: "#7FFF00", fillOpacity: 0.2 });

// Chantiers 1030
//const PolygonStyle_Coral = createPolygonStyle({ weight: 1,  color: "#3484cbff", opacity: 0.2, fillColor: "#FF7F50",fillOpacity: 0.2 });
const PolygonStyle_Coral = createPolygonStyle({ fillColor: "#FF7F50" });
const PolygonStyle_DeepPink = createPolygonStyle({ color: "#000000", opacity: 0.3, fillColor: "#FF1493", fillOpacity: 0.7, weight: 1 });

//Imlpetrantes
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

// on personnalise les marqueurs
const DataIcon05 = L.icon({
    iconUrl: 'images/1030_Icon.png',
    iconSize: [15, 20], // size of the icon
    iconAnchor: [5, 15], // point of the icon which will correspond to marker's location
    popupAnchor: [-15, -15], // point from which the popup should open relative to the 
    shadowSize: [41, 41]
})
// +++END++++++ Style Geometry ++++++++


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

// ++++++++++++++++++++++++++++++++++++++++++
// ======== Chantiers1030 Data ==============
// ++++++++++++++++++++++++++++++++++++++++++

if (typeof ChantierLabel === 'undefined' || OsirisLabel === 'undefined' || DateDebutLabel === 'undefined' ||
    DateFinLabel === 'undefined' || ImpetrantLabel === 'undefined' || NatureLabel === 'undefined' ||
    RemarqueLabel === 'undefined' || Rues1030Label === 'undefined' || TronconDebutLabel === 'undefined' ||
    TronconFinLabel === 'undefined' || FermetureLabel === 'undefined') {

    var ChantierLabel = ""
    var OsirisLabel = ""
    var DateDebutLabel = ""
    var DateFinLabel = ""
    var ImpetrantLabel = ""
    var NatureLabel = ""
    var RemarqueLabel = ""
    var Rues1030Label = ""
    var TronconDebutLabel = ""
    var TronconFinLabel = ""
    var FermetureLabel = ""

    // ++++++ Group Chantier (Polygons) ++++++++
    var jsonALL_Polygons = {};
    jsonALL_Polygons = ProjectsChantiers1030

    // +++BEGIN++ Impetrants +++++++++
    // +++BEGIN++ Impetrants +++++++++

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
    // +++END++ Impetrants +++++++++

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
    var GroupChantiersMap1030_00 = GroupChantiersMap1030

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

    var GroupALL_Chantiers = new L.featureGroup([
        //Chantier1030_Street,
        //GroupChantiersMap1030_S
        GroupChantiersMap1030
    ])

    // Group CLusteres
    GroupPolygonsMap1030_ALL.addLayer(GroupChantiersMap1030)
    //GroupPolygonsMap1030_ALL.addLayer(Chantier1030_Street)
    //GroupPolygonsMap1030_ALL.addLayer(GroupChantiersMap1030_S)
    GroupALL_Chantiers_00 = GroupALL_Chantiers
}

var GroupALL_Chantiers_S = new L.featureGroup([
    GroupChantiersMap1030_S,
]);

var GroupPolygonsClustersALL1030 = new L.featureGroup([
    GroupPolygonsMap1030_ALL,
]);

var GroupChantiersALL1030 = new L.featureGroup([
    GroupPolygonsMap1030_ALL,
]);

carte.addLayer(GroupChantiersALL1030)
//carte.addLayer(GroupALL_Chantiers_S)
//carte.addLayer(GroupALL_Chantiers)
// END ==== Donnnes GeoJson comme marqueurs ========

// BEGIN ======== Data Viewer ======== BEGIN \\ 
Chantier1030 = GroupALL_Chantiers

Chantier1030.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

GroupChantiersMap1030.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

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
// END ======== Data Viewer ======== END \\


var { jsonALL_Points_ALL, jsonALL_Polygons_ALL } = createSeparateGeoJsonCollections(ProjectsChantiers1030);

// BEGIN ======== Javascript FUnctions  ======== BEGIN \\
// fonction qui est appelée sur chaque entité avant de l'ajouter à une couche GeoJSON. 
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
    document.getElementById("ChantierOsiris").value = clickedMarker.feature.properties.OsirisB1
    document.getElementById("DateDebutChantier").value = clickedMarker.feature.properties.DateDebut
    document.getElementById("DateFinChantier").value = clickedMarker.feature.properties.DateFin
    document.getElementById("Impetrant").value = clickedMarker.feature.properties.NomImpetrant
    document.getElementById("NatureChantier").value = clickedMarker.feature.properties.NatureTravaux
    document.getElementById("RemarqueChantier").value = clickedMarker.feature.properties.Remarque
    document.getElementById("Rues1030").value = clickedMarker.feature.properties.VoirieNom
    document.getElementById("TronconDebut1030").value = clickedMarker.feature.properties.Troncon_debut
    document.getElementById("TronconFin1030").value = clickedMarker.feature.properties.Troncon_fin
    document.getElementById("FermetureRue").value = clickedMarker.feature.properties.FermetureRue

    //document.getElementById("Latitude").value = clickedMarker.feature.geometry.coordinates[1]
    //document.getElementById("Longitude").value = clickedMarker.feature.geometry.coordinates[0]
};

function LoadALLData() {
    // Polygons
    Chantier1030.eachLayer(function (marker) {
        carte.removeLayer(marker);
    });

    //Chantier1030 = Chantier1030_00
    Chantier1030 = GroupALL_Chantiers
    GroupALL_Chantiers = GroupALL_Chantiers_00

    // On reinitialise les layers
    GroupPolygonsMap1030.clearLayers();
    GroupPolygonsMap1030_ALL.clearLayers();

    // On va regropue les marqueurs
    GroupPolygonsMap1030.addLayer(Chantier1030);
    GroupPolygonsMap1030_ALL.addLayer(GroupALL_Chantiers);
}

function filterBy(val) {
    var result = Object.keys(obj).reduce(function (r, e) {
        if (e.toLowerCase().indexOf(val) != -1) {
            r[e] = obj[e];
        } else {
            Object.keys(obj[e]).forEach(function (k) {
                if (k.toLowerCase().indexOf(val) != -1) {
                    var object = {}
                    object[k] = obj[e][k];
                    r[e] = object;
                }
            })
        }
        return r;
    }, {})
    return result;
}

function concatGeoJSON(g1, g2) {
    return {
        "type": "FeatureCollection",
        "features": g1.features.concat(g2.features)
    }
};

function removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject = {};

    for (var i in originalArray) {
        lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
    return newArray;
}

function SearchData() {
    var ChantierLabel = document.getElementById("Chantier1030").value;
    var OsirisLabel = document.getElementById("ChantierOsiris").value;
    var DateDebutLabel = document.getElementById("DateDebutChantier").value;
    var DateFinLabel = document.getElementById("DateFinChantier").value;
    var ImpetrantLabel = document.getElementById("Impetrant").value;
    var NatureLabel = document.getElementById("NatureChantier").value;
    var RemarqueLabel = document.getElementById("RemarqueChantier").value;
    var Rues1030Label = document.getElementById("Rues1030").value;
    var TronconDebutLabel = document.getElementById("TronconDebut1030").value;
    var TronconFinLabel = document.getElementById("TronconFin1030").value;
    var FermetureLabel = document.getElementById("FermetureRue").value;

    var DateDebutLabel_0 = new Date((document.getElementById("DateDebutChantier_0").value));
    var DateFinLabel_0 = new Date((document.getElementById("DateDebutChantier_0").value));
    //var DateFinLabel_0 = new Date((document.getElementById("DateFinChantier_0").value));

    // Verificar si las fechas son inválidas
    function validarYReportarFechas_DosFechas(fechaStr1, fechaStr2) {
        // Crea objetos Date
        const fecha1 = new Date(fechaStr1);
        const fecha2 = new Date(fechaStr2);

        // Comprueba la validez de cada fecha
        const esValida1 = !isNaN(fecha1.getTime());
        const esValida2 = !isNaN(fecha2.getTime());

        // Reporta los resultados
        if (!esValida1 && !esValida2) {
            console.log("Ambas fechas son inválidas.");
            DateDebutLabel_0 = new Date(2024, 0, 1);
            DateFinLabel_0 = new Date(2040, 12, 31);
            alert("Aucune date de début ni de fin n'a été saisie pour les chantiers. \n Les dates de recherche sont définies entre 2024-01-01 et 2040-12-31. \n Modifiez les critères de recherche");
        } else if (!esValida1) {
            console.log("La primera fecha es inválida.");
            DateDebutLabel_0 = new Date(2024, 1, 1);
            DateFinLabel_0 = fechaStr2
            alert("Aucune date de début des chantier n'a été fixée. \n La date de début des travaux est fixée par défaut au 2024-01-01. \n Modifiez les critères de recherche");
        } else if (!esValida2) {
            console.log("La segunda fecha es inválida.");
            DateDebutLabel_0 = fechaStr1;
            DateFinLabel_0 = new Date(2040, 12, 31);
            alert("Aucune date de fin des chantier n'a été fixée. \n La date de fin des travaux est fixée par défaut au 2040-12-31. \n Modifiez les critères de recherche");
        } else {
            console.log("Ambas fechas son válidas.");
            DateDebutLabel_0 = fechaStr1;
            DateFinLabel_0 = fechaStr2;
        }
    }

    function validarYReportarFechas_UnaFecha(fechaStr1) {
        // Crea objetos Date
        const fecha1 = new Date(fechaStr1);

        // Comprueba la validez de cada fecha
        const esValida1 = !isNaN(fecha1.getTime());

        // Reporta los resultados
        if (!esValida1) {
            console.log("La fecha es inválida.");
            DateDebutLabel_0 = new Date(2024, 0, 1);
            DateFinLabel_0 = new Date(2040, 12, 31);
            alert("Aucune date n'a été saisie pour les chantiers. \n Les dates de recherche sont définies entre 2024-01-01 et 2040-12-31. \n Modifiez les critères de recherche");
        } else {
            console.log("La fecha es válida.");
            DateDebutLabel_0 = fechaStr1;
            DateFinLabel_0 = fechaStr1;
        }
    }

    //validarYReportarFechas_DosFechas(DateDebutLabel_0, DateFinLabel_0);
    validarYReportarFechas_UnaFecha(DateDebutLabel_0);


    // On remplace les valeurs vides par ALLData

    if (ChantierLabel == "") {
        ChantierLabel = "ALLData";
    }
    if (OsirisLabel == "") {
        OsirisLabel = "ALLData";
    }
    if (DateDebutLabel == "") {
        DateDebutLabel = "ALLData";
    }
    if (DateFinLabel == "") {
        DateFinLabel = "ALLData";
    }
    if (ImpetrantLabel == "") {
        ImpetrantLabel = "ALLData";
    }
    if (NatureLabel == "") {
        NatureLabel = "ALLData";
    }
    if (RemarqueLabel == "") {
        RemarqueLabel = "ALLData";
    }
    if (Rues1030Label == "") {
        Rues1030Label = "ALLData";
    }
    if (TronconDebutLabel == "") {
        TronconDebutLabel = "ALLData";
    }
    if (TronconFinLabel == "") {
        TronconFinLabel = "ALLData";
    }
    if (FermetureLabel == "") {
        FermetureLabel = "ALLData";
    }

    if (DateDebutLabel_0 == "") {
        console.log("Date Debut vide")
        DateDebutLabel_0 = "ALLData";
    }
    if (DateFinLabel_0 == "") {
        console.log("Date Fin vide")
        DateFinLabel_0 = "ALLData";
    }

    // Debug
    //console.log("Filter Date Debut: " + DateDebutLabel_0);
    //console.log("Filter Date Fin: " + DateFinLabel_0);

    // items >> compteurs
    var k_ChantierLabel = 0;
    var k_OsirisLabel = 0;
    var k_DateDebutLabel = 0;
    var k_DateFinLabel = 0;
    var k_ImpetrantLabel = 0;
    var k_NatureLabel = 0;
    var k_RemarqueLabel = 0;
    var k_Rues1030Label = 0;
    var k_TronconDebutLabel = 0;
    var k_TronconFinLabel = 0;
    var k_FermetureLabel = 0;

    // Date >> compteurs
    var k_DateDebutLabel_0 = 0;
    var k_DateFinLabel_0 = 0;

    // On reinitialise les layers >> Points
    GroupMarkersMap1030_ALL.clearLayers();
    var jsonALL_00 = 0;
    var jsonSEARCH = {};

    // On reinitialise les layers >> Polygons
    GroupPolygonsMap1030_ALL.clearLayers();
    var jsonALL_Polygons_00 = 0;
    var jsonSEARCH_Polygons = {};

    // >>> recherche par date de chantier
    if (ChantierLabel === "ALLData") {
        if (DateDebutLabel_0 !== "ALLData") {
            console.log("Recherche Date Debut: " + DateDebutLabel_0);
            mylist = [{ SearchLabel_01: DateDebutLabel_0 }, { SearchLabel_02: DateFinLabel_0 }];

            jsonSEARCH_Polygons = {};
            jsonALL_Polygons_00 = jsonALL_Polygons_ALL;
            jsonSEARCH_Polygons.features = jsonALL_Polygons_00.features.filter(item => {
                Date01 = new Date((item.properties.DateDebut));
                Date02 = new Date((item.properties.DateFin));
                if (
                    (Date01 >= DateDebutLabel_0) &&
                    (Date02 <= DateFinLabel_0)
                )
                    return true;
            });

            jsonSEARCH = {};
            jsonALL_00 = jsonALL_Points_ALL;
            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                Date01 = new Date((item.properties.DateDebut));
                Date02 = new Date((item.properties.DateFin));
                if (
                    (Date01 >= DateDebutLabel_0) &&
                    (Date02 <= DateFinLabel_0)
                )
                    return true;
            });

            k_DateDebutLabel_0 = jsonSEARCH.features.length + jsonSEARCH_Polygons.features.length;
            console.log("Total Chantiers: " + k_DateDebutLabel_0);
            document.querySelector("#CommentairesOsiris").value = "Total Chantiers: " + k_DateDebutLabel_0;
        };
    };

    // Chantier
    if (ChantierLabel !== "ALLData") {
        mylist = [{ SearchLabel: ChantierLabel }];

        jsonSEARCH_Polygons = {};
        jsonALL_Polygons_00 = jsonALL_Polygons_ALL;
        jsonSEARCH_Polygons.features = jsonALL_Polygons_00.features.filter(item => {
            if (mylist.filter(myitem => myitem.SearchLabel === item.properties.ID.toString()).length > 0) {
                return item;
            }
            jsonSEARCH_Polygons.features = jsonALL_Polygons_00.features.filter(item => item.properties.ID.toString() === ChantierLabel.toString());
        });


        jsonSEARCH = {};
        jsonALL_00 = jsonALL_Points_ALL;
        jsonSEARCH.features = jsonALL_00.features.filter(item => {
            if (mylist.filter(myitem => myitem.SearchLabel === item.properties.ID.toString()).length > 0) {
                return item;
            }
            jsonSEARCH.features = jsonALL_00.features.filter(item => item.properties.ID.toString() === ChantierLabel.toString());
        });

        k_ChantierLabel = jsonSEARCH.features.length + jsonSEARCH_Polygons.features.length;
        document.querySelector("#CommentairesOsiris").value = "Total Chantiers: " + k_ChantierLabel;
    };

    // Impetrant
    if (ChantierLabel === "ALLData") {
        if (ImpetrantLabel !== "ALLData") {

            if (jsonALL_00 === 0 && jsonALL_Polygons_00 === 0) {
                console.log("... alternativa 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
                jsonALL_Polygons_00 = jsonALL_Polygons;
                jsonSEARCH_Polygons = {};
            } else if (jsonALL_00 !== 0 && jsonALL_Polygons_00 === 0) {
                console.log("... alternativa 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
                jsonALL_Polygons_00 = jsonALL_Polygons;
                jsonSEARCH_Polygons = {};
            } else if (jsonALL_00 === 0 && jsonALL_Polygons_00 !== 0) {
                console.log("... alternativa 03")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
                jsonALL_Polygons_00 = jsonSEARCH_Polygons;
                jsonSEARCH_Polygons = {};
            } else {
                console.log("... alternativa 04")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
                jsonALL_Polygons_00 = jsonSEARCH_Polygons;
                jsonSEARCH_Polygons = {};
            }
            mylist = [{ SearchLabel: ImpetrantLabel }];

            //jsonSEARCH_Polygons = {};
            //jsonALL_Polygons_00 = jsonALL_Polygons_ALL;
            jsonSEARCH_Polygons.features = jsonALL_Polygons_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel === item.properties.NomImpetrant.toString()).length > 0) {
                    return item;
                }
                jsonSEARCH_Polygons.features = jsonALL_Polygons_00.features.filter(item => item.properties.NomImpetrant.toString() === ImpetrantLabel.toString());
            });

            //jsonSEARCH = {};
            //jsonALL_00 = jsonALL_Points_ALL;
            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel === item.properties.NomImpetrant.toString()).length > 0) {
                    return item;
                }
                jsonSEARCH.features = jsonALL_00.features.filter(item => item.properties.NomImpetrant.toString() === ImpetrantLabel.toString());
            });

            k_ImpetrantLabel = jsonSEARCH.features.length + jsonSEARCH_Polygons.features.length;
            document.querySelector("#CommentairesOsiris").value = "Total Chantiers: " + k_ImpetrantLabel;
        };
    };

    // Rues1030
    if (ChantierLabel === "ALLData") {
        if (Rues1030Label !== "ALLData") {

            if (jsonALL_00 === 0 && jsonALL_Polygons_00 === 0) {
                console.log("... alternativa 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
                jsonALL_Polygons_00 = jsonALL_Polygons;
                jsonSEARCH_Polygons = {};
            } else if (jsonALL_00 !== 0 && jsonALL_Polygons_00 === 0) {
                console.log("... alternativa 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
                jsonALL_Polygons_00 = jsonALL_Polygons;
                jsonSEARCH_Polygons = {};
            } else if (jsonALL_00 === 0 && jsonALL_Polygons_00 !== 0) {
                console.log("... alternativa 03")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
                jsonALL_Polygons_00 = jsonSEARCH_Polygons;
                jsonSEARCH_Polygons = {};
            } else {
                console.log("... alternativa 04")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
                jsonALL_Polygons_00 = jsonSEARCH_Polygons;
                jsonSEARCH_Polygons = {};
            }
            mylist = [{ SearchLabel: Rues1030Label }];

            //jsonSEARCH_Polygons = {};
            //jsonALL_Polygons_00 = jsonALL_Polygons_ALL;
            jsonSEARCH_Polygons.features = jsonALL_Polygons_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel === item.properties.VoirieNom.toString()).length > 0) {
                    return item;
                }
                jsonSEARCH_Polygons.features = jsonALL_Polygons_00.features.filter(item => item.properties.VoirieNom.toString() === Rues1030Label.toString());
            });

            //jsonSEARCH = {};
            //jsonALL_00 = jsonALL_Points_ALL;
            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel === item.properties.VoirieNom.toString()).length > 0) {
                    return item;
                }
                jsonSEARCH.features = jsonALL_00.features.filter(item => item.properties.VoirieNom.toString() === Rues1030Label.toString());
            });

            k_Rues1030Label = jsonSEARCH.features.length + jsonSEARCH_Polygons.features.length;
            document.querySelector("#CommentairesOsiris").value = "Total Chantiers: " + k_Rues1030Label;
        };
    };

    // FermetureRues1030
    if (ChantierLabel === "ALLData") {
        if (FermetureLabel !== "ALLData") {

            if (jsonALL_00 === 0 && jsonALL_Polygons_00 === 0) {
                console.log("... alternativa 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
                jsonALL_Polygons_00 = jsonALL_Polygons;
                jsonSEARCH_Polygons = {};
            } else if (jsonALL_00 !== 0 && jsonALL_Polygons_00 === 0) {
                console.log("... alternativa 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
                jsonALL_Polygons_00 = jsonALL_Polygons;
                jsonSEARCH_Polygons = {};
            } else if (jsonALL_00 === 0 && jsonALL_Polygons_00 !== 0) {
                console.log("... alternativa 03")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
                jsonALL_Polygons_00 = jsonSEARCH_Polygons;
                jsonSEARCH_Polygons = {};
            } else {
                console.log("... alternativa 04")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
                jsonALL_Polygons_00 = jsonSEARCH_Polygons;
                jsonSEARCH_Polygons = {};
            }
            mylist = [{ SearchLabel: FermetureLabel }];

            //jsonSEARCH_Polygons = {};
            //jsonALL_Polygons_00 = jsonALL_Polygons_ALL;
            jsonSEARCH_Polygons.features = jsonALL_Polygons_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel === item.properties.FermetureRue.toString()).length > 0) {
                    return item;
                }
                jsonSEARCH_Polygons.features = jsonALL_Polygons_00.features.filter(item => item.properties.FermetureRue.toString() === FermetureLabel.toString());
            });

            //jsonSEARCH = {};
            //jsonALL_00 = jsonALL_Points_ALL;
            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel === item.properties.FermetureRue.toString()).length > 0) {
                    return item;
                }
                jsonSEARCH.features = jsonALL_00.features.filter(item => item.properties.FermetureRue.toString() === FermetureLabel.toString());
            });

            k_FermetureLabel = jsonSEARCH.features.length + jsonSEARCH_Polygons.features.length;
            document.querySelector("#CommentairesOsiris").value = "Total Chantiers: " + k_FermetureLabel;
        };
    };

    // END <<<< recherche multiple >>> \\
    k_TotalChantiers = jsonSEARCH.features.length + jsonSEARCH_Polygons.features.length;
    console.log("Total Chantiers a Represente: " + k_TotalChantiers)

    if (k_TotalChantiers === 0) {
        alert("Il n'y a pas des chantiers répertoriée avec les valeurs de recherche sélectionnées.., modifiez les critères de recherche");
        ClearDataSearch();
    };

    if (jsonSEARCH_Polygons.features.length !== 0) {
        var GroupALL_Chantiers = L.geoJSON([jsonSEARCH_Polygons], {
            filter: function (feature) {
                var nom = feature.properties.NomImpetrant;
                return [
                    "BELIRIS",
                    "BM-DEN",
                    "BM-DPV",
                    "BRUTELE",
                    "COLT",
                    "DITP",
                    "ELIA",
                    "EUROFIBER",
                    "INFRABEL",
                    "IRISNET",
                    "PROXIMUS",
                    "SCHAERBEEK AMÉNAGEMENT COMPLET",
                    "SCHAERBEEK ASPHALTE",
                    "SCHAERBEEK DAV",
                    "SCHAERBEEK MARQUAGE",
                    "SCHAERBEEK RENOVAS",
                    "SCHAERBEEK TROTTOIRS",
                    "SIBELGA",
                    "SIBELGA EP",
                    "VIVAQUA ASSAINISSEMENT",
                    "VIVAQUA DISTRIBUTION",
                    "VIVAQUA RÉPARTITION",
                    "VOO",
                    "WYRE",
                    "DIGI",
                    "STIB",
                ].includes(nom);
            },
            style: function (feature) {
                // Debug: ver el valor de FermetureRue
                // console.log("FermetureRue value:", feature.properties.FermetureRue, "Type:", typeof feature.properties.FermetureRue);

                if (feature.properties.FermetureRue && feature.properties.FermetureRue.trim().toLowerCase() === "oui") {
                    return PolygonStyle_StreetClosed;
                }
                var nom = feature.properties.NomImpetrant;
                switch (nom) {
                    case "BELIRIS": return PolygonStyle_BELIRIS;
                    case "BM-DEN": return PolygonStyle_BM_DEN;
                    case "BM-DPV": return PolygonStyle_BM_DPV;
                    case "BRUTELE": return PolygonStyle_BRUTELE;
                    case "COLT": return PolygonStyle_COLT;
                    case "DIGI": return PolygonStyle_DIGI;
                    case "DITP": return PolygonStyle_DITP;
                    case "ELIA": return PolygonStyle_ELIA;
                    case "EUROFIBER": return PolygonStyle_EUROFIBER;
                    case "INFRABEL": return PolygonStyle_INFRABEL;
                    case "IRISNET": return PolygonStyle_IRISNET;
                    case "PROXIMUS": return PolygonStyle_PROXIMUS;
                    case "SCHAERBEEK AMÉNAGEMENT COMPLET": return PolygonStyle_SCHAERBEEK_AME_COMPLET;
                    case "SCHAERBEEK ASPHALTE": return PolygonStyle_SCHAERBEEK_ASPHALTE;
                    case "SCHAERBEEK DAV": return PolygonStyle_SCHAERBEEK_DAV;
                    case "SCHAERBEEK MARQUAGE": return PolygonStyle_SCHAERBEEK_MARQUAGE;
                    case "SCHAERBEEK RENOVAS": return PolygonStyle_SCHAERBEEK_RENOVAS;
                    case "SCHAERBEEK TROTTOIRS": return PolygonStyle_SCHAERBEEK_TROTTOIRS;
                    case "SIBELGA": return PolygonStyle_SIBELGA;
                    case "SIBELGA EP": return PolygonStyle_SIBELGA_EP;
                    case "STIB": return PolygonStyle_STIB;
                    case "VIVAQUA ASSAINISSEMENT": return PolygonStyle_VIVAQUA_ASS;
                    case "VIVAQUA DISTRIBUTION": return PolygonStyle_VIVAQUA_DIS;
                    case "VIVAQUA RÉPARTITION": return PolygonStyle_VIVAQUA_REP;
                    case "VOO": return PolygonStyle_VOO;
                    case "WYRE": return PolygonStyle_WYRE;
                    default: return PolygonStyle_DeepPink;
                }
            },
            onEachFeature: onEachFeature,
        }); // .addTo(carte); ; inutile lors de lúti;isation des clusters
        GroupPolygonsMap1030_ALL.addLayer(GroupALL_Chantiers)

        GroupALL_Chantiers.on("click", function (event) {
            var clickedMarker = event.layer;
            // console.log(clickedMarker)
            MarkerDataView(clickedMarker)
        });
    };

    // Version Original
    /* 
        if (jsonSEARCH_Polygons.features.length !== 0) {
            var GroupALL_Chantiers = L.geoJSON([jsonSEARCH_Polygons], {
                style: PolygonStyle_DeepPink,
                onEachFeature: onEachFeature,
            }); // .addTo(carte); ; inutile lors de lúti;isation des clusters
            GroupPolygonsMap1030_ALL.addLayer(GroupALL_Chantiers)
    
            GroupALL_Chantiers.on("click", function (event) {
                var clickedMarker = event.layer;
                // console.log(clickedMarker)
                MarkerDataView(clickedMarker)
            });
        };
    */

};


// +++ BEGIN Clasificacion por tipo de geometria +++++++++
function getFeaturesByGeometry(featureCollection, filterType) {
    if (!featureCollection || !Array.isArray(featureCollection.features)) {
        console.error("El objeto de entrada no es una FeatureCollection válida.");
        return filterType ? [] : {};
    }

    const features = featureCollection.features;

    if (filterType) {
        // Caso 1: Se proporciona un tipo de geometría para filtrar
        const targetType = filterType === 'Null' ? null : filterType;

        return features.filter(feature => {
            const currentGeometryType = feature.geometry ? feature.geometry.type : null;
            return currentGeometryType === targetType;
        });

    } else {
        // Caso 2: No se proporciona un tipo de geometría, agrupar todos
        const groupedFeatures = {};

        features.forEach(feature => {
            // Determina el tipo de geometría. Utiliza 'Null' si feature.geometry es null.
            const geometryType = feature.geometry ? feature.geometry.type : 'Null';

            // Inicializa el array si no existe y agrega el feature.
            if (!groupedFeatures[geometryType]) {
                groupedFeatures[geometryType] = [];
            }
            groupedFeatures[geometryType].push(feature);
        });

        return groupedFeatures;
    }
};
// const pointsFeatures = getFeaturesByGeometry(ProjectsChantiers1030, "Point");
// const multiPointsFeatures = getFeaturesByGeometry(ProjectsChantiers1030, "MultiPoint");
// const polygonFeatures = getFeaturesByGeometry(ProjectsChantiers1030, "Polygon");
// const multiPolygonFeatures = getFeaturesByGeometry(ProjectsChantiers1030, "MultiPolygon");
// console.log("Points Features:", pointsFeatures);
// console.log("MultiPoints Features:", multiPointsFeatures);
// console.log("Polygon Features:", polygonFeatures);
// console.log("MultiPolygon Features:", multiPolygonFeatures);

function separateFeaturesByGeometryGroup(featureCollection) {
    const separatedFeatures = {
        jsonALL_Points: [],
        jsonALL_Polygons: [],
        // Incluyo 'Null' por si quieres manejar los elementos sin geometría.
        Null: [],
        // Opcional: Si quieres un grupo para otros tipos como LineString
        // Others: []
    };

    if (!featureCollection || !Array.isArray(featureCollection.features)) {
        console.error("El objeto de entrada no es una FeatureCollection válida.");
        return separatedFeatures;
    }

    featureCollection.features.forEach(feature => {
        // Determina el tipo de geometría. Utiliza null si feature.geometry es null.
        const geometryType = feature.geometry ? feature.geometry.type : null;

        // Lógica de Clasificación
        if (geometryType === 'Point' || geometryType === 'MultiPoint') {
            separatedFeatures.jsonALL_Points.push(feature);
        } else if (geometryType === 'Polygon' || geometryType === 'MultiPolygon') {
            separatedFeatures.jsonALL_Polygons.push(feature);
        } else if (geometryType === null) {
            separatedFeatures.Null.push(feature);
        }
        // Si quieres incluir una categoría 'Others':
        /*
        else {
          separatedFeatures.Others.push(feature);
        }
        */
    });

    return separatedFeatures;
};
// const separatedData = separateFeaturesByGeometryGroup(ProjectsChantiers1030);
// console.log("Features de Puntos Consolidados:", separatedData.jsonALL_Points);
// console.log("Features de Polígonos Consolidados:", separatedData.jsonALL_Polygons);
// console.log("Features con Geometría Nula:", separatedData.Null);

function createSeparateGeoJsonCollections(sourceCollection) {
    // Inicializamos los arrays que contendrán los features filtrados
    const pointsFeatures = [];
    const polygonsFeatures = [];

    if (!sourceCollection || !Array.isArray(sourceCollection.features)) {
        console.error("El objeto de entrada no es una FeatureCollection válida.");
        // Devuelve colecciones vacías si la entrada es inválida
        return {
            jsonALL_Points: { type: "FeatureCollection", name: "", features: [] },
            jsonALL_Polygons: { type: "FeatureCollection", name: "", features: [] }
        };
    }

    // Iterar sobre los features de la colección original
    sourceCollection.features.forEach(feature => {
        // Determina el tipo de geometría.
        const geometryType = feature.geometry ? feature.geometry.type : null;

        // Clasificación y separación de features
        if (geometryType === 'Point' || geometryType === 'MultiPoint') {
            pointsFeatures.push(feature);
        } else if (geometryType === 'Polygon' || geometryType === 'MultiPolygon') {
            polygonsFeatures.push(feature);
        }
    });

    // Estructurar los resultados como FeatureCollections completas
    const jsonALL_Points = {
        // Claves estándar de GeoJSON
        type: "FeatureCollection",
        // Se puede mantener el nombre original o adaptarlo
        name: (sourceCollection.name || "Chantiers") + "_Points",
        // El array de features clasificados
        features: pointsFeatures,
        // (Opcional) Copiar otros atributos de nivel superior si existen y son relevantes
        // ...
    };

    const jsonALL_Polygons = {
        // Claves estándar de GeoJSON
        type: "FeatureCollection",
        // Se puede mantener el nombre original o adaptarlo
        name: (sourceCollection.name || "Chantiers") + "_Polygons",
        // El array de features clasificados
        features: polygonsFeatures,
        // (Opcional) Copiar otros atributos de nivel superior si existen y son relevantes
        // ...
    };

    return {
        jsonALL_Points_ALL: jsonALL_Points,
        jsonALL_Polygons_ALL: jsonALL_Polygons
    };
};
//const { jsonALL_Points_ALL, jsonALL_Polygons_ALL } = createSeparateGeoJsonCollections(ProjectsChantiers1030);
//console.log("Número total de puntos/multipuntos:", jsonALL_Points_ALL.features.length);
//console.log("Estructura de jsonALL_Points:", jsonALL_Points_00);
//console.log("Número total de polígonos/multipolígonos:", jsonALL_Polygons_ALL.features.length);
//console.log("Estructura de jsonALL_Polygons:", jsonALL_Polygons_00);
// +++ END Clasificacion por tipo de geometria +++++++++

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
    //console.log("Se han cargado " + numeroElementos + " elementos para " + label);
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
    //console.log("Capa creada con " + capa.getLayers().length + " elementos totales.");
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
    //console.log("Se han cargado " + numeroElementos + " elementos para " + label);
    return capa;
}