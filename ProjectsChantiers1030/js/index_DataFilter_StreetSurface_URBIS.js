// +++BEGIN++++++ Style Geometry ++++++++
const PolygonStyle_ChartreuseWeights = (feature) => createPolygonStyle("#68c807ff", "#7FFF00", 4); // Renamed to avoid duplicate name if any

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
const PolygonStyle_Boundary02 = createPolygonStyle({ weight: 2, color: "#088634", opacity: 0.6, fillColor: "#088634", fillOpacity: 0.6 });

// ++++ URBIS +++++
const PolygonStyle_DeepPink2 = createPolygonStyle({ opacity: 0.2, color: "#f184beff", fillColor: "#f184beff", fillOpacity: 0.4 });
const PolygonStyle_Chartreuse = createPolygonStyle({ opacity: 0.5, color: "#68c807ff", fillColor: "#7FFF00", fillOpacity: 0.4 });

// Chantiers 1030
//const PolygonStyle_Coral = createPolygonStyle({ weight: 1,  color: "#3484cbff", opacity: 0.2, fillColor: "#FF7F50",fillOpacity: 0.2 });
const PolygonStyle_Coral = createPolygonStyle({ fillColor: "#FF7F50" });
const PolygonStyle_DeepPink = createPolygonStyle({ color: "#000000", opacity: 0.3, fillColor: "#FF1493", fillOpacity: 0.7, weight: 1 });

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
// ======== URBIS1030 Nodes Data ============
// ++++++++++++++++++++++++++++++++++++++++++

// Check if URBIS_OSIRIS_OnlyNodes exists
if (typeof URBIS_OSIRIS_OnlyNodes !== 'undefined') {
    var SectorLabel_01A = "Polygon";
    var URBIS1030_Polygons_02A = L.geoJSON([URBIS_OSIRIS_OnlyNodes], {
        filter: function (feature) {
            return feature.geometry.type === SectorLabel_01A;
        },
        style: PolygonStyle_Chartreuse, // Using the weighted one
        onEachFeature: onEachFeature,
    }).addTo(carte);

    var SectorLabel_01B = "MultiPolygon";
    var URBIS1030_Polygons_02B = L.geoJSON([URBIS_OSIRIS_OnlyNodes], {
        filter: function (feature) {
            return feature.geometry.type === SectorLabel_01B;
        },
        style: PolygonStyle_Chartreuse,
        onEachFeature: onEachFeature,
    }); //.addTo(carte);

    var GroupPolygons_URBIS_NodesSurfaces = new L.featureGroup([
        URBIS1030_Polygons_02A,
    ]);

    var GroupMultiPolygon_URBIS_NodesSurfaces = new L.featureGroup([
        URBIS1030_Polygons_02B
    ]);

    var GroupALL_URBIS_NodesSurfaces = new L.featureGroup([
        URBIS1030_Polygons_02A,
        URBIS1030_Polygons_02B,
    ]);

    carte.addLayer(GroupALL_URBIS_NodesSurfaces); // NodesSurfaces URBIS
}

// ++++++++++++++++++++++++++++++++++++++++++
// ===== URBIS StreetSurfaces Data ==========
// ++++++++++++++++++++++++++++++++++++++++++

var GroupALL_URBIS_StreetSurfaces;
var StreetSurfaces1030_ALL_00;
var URBIS1030_Polygons_01A;
var URBIS1030_Polygons_01B;


// Initialize global variables only if they are undefined (effectively "once")
if (typeof CodeRoadway1030Label === 'undefined') {
    var CodeRoadway1030Label = "";
    var CodeStreet1030Label = "";
    var RoadwayNameFRLabel = "";
    var RoadwayNameNLLabel = "";
    var TypeStreetLabel = "";
    var SegmentLengthLabel = "";

    if (typeof URBIS_OSIRIS_StreetSurfaces !== 'undefined') {
        var SectorLabel_01A = "Polygon";
        // var SectorLabel_01C = "GeometryCollection";

        URBIS1030_Polygons_01A = L.geoJSON([URBIS_OSIRIS_StreetSurfaces], {
            filter: function (feature) {
                return feature.geometry.type === SectorLabel_01A;
            },
            style: PolygonStyle_DeepPink2,
            onEachFeature: onEachFeature,
        });

        var SectorLabel_01B = "MultiPolygon";
        URBIS1030_Polygons_01B = L.geoJSON([URBIS_OSIRIS_StreetSurfaces], {
            filter: function (feature) {
                return feature.geometry.type === SectorLabel_01B;
            },
            style: PolygonStyle_DeepPink2,
            onEachFeature: onEachFeature,
        });

        // Group Polygons
        var GroupPolygons_URBIS_StreetSurfaces = new L.featureGroup([
            URBIS1030_Polygons_01A,
        ]);

        // Group MultiPolygons
        var GroupMultiPolygon_URBIS_StreetSurfaces = new L.featureGroup([
            URBIS1030_Polygons_01B
        ]);

        // Group ALL Polygons
        GroupALL_URBIS_StreetSurfaces = new L.featureGroup([
            URBIS1030_Polygons_01A,
            URBIS1030_Polygons_01B,
        ]);

        StreetSurfaces1030_ALL_00 = GroupALL_URBIS_StreetSurfaces;

        // Group CLusteres
        if (typeof GroupPolygonsMap1030_ALL !== 'undefined') {
            GroupPolygonsMap1030_ALL.addLayer(GroupALL_URBIS_StreetSurfaces);
        }
    }
}

var GroupPolygonsClustersALL1030 = new L.featureGroup([
    // Assuming GroupPolygonsMap1030_ALL is defined globally
    typeof GroupPolygonsMap1030_ALL !== 'undefined' ? GroupPolygonsMap1030_ALL : new L.featureGroup()
]);

carte.addLayer(GroupPolygonsClustersALL1030); // StreetSurfaces URBIS


// BEGIN ======== Data Viewer ======== BEGIN \\ 
var StreetSurfaces1030 = GroupALL_URBIS_StreetSurfaces;

if (StreetSurfaces1030) {
    StreetSurfaces1030.on("click", function (event) {
        var clickedMarker = event.layer;
        MarkerDataView_Street(clickedMarker);
    });
}

if (GroupALL_URBIS_StreetSurfaces) {
    GroupALL_URBIS_StreetSurfaces.on("click", function (event) {
        var clickedMarker = event.layer;
        MarkerDataView_Street(clickedMarker);
    });
}

if (typeof URBIS1030_Polygons_02A !== 'undefined') {
    URBIS1030_Polygons_02A.on("click", function (event) {
        var clickedMarker = event.layer;
        MarkerDataView_Node(clickedMarker);
    });
}

if (typeof URBIS1030_Polygons_02B !== 'undefined') {
    URBIS1030_Polygons_02B.on("click", function (event) {
        var clickedMarker = event.layer;
        MarkerDataView_Node(clickedMarker);
    });
}

// BEGIN ======== Create Separate GeoJson Collections ======== BEGIN \\
// Assuming this function is defined elsewhere or below
if (typeof createSeparateGeoJsonCollections === 'function' && typeof URBIS_OSIRIS_StreetSurfaces !== 'undefined') {
    var separated = createSeparateGeoJsonCollections(URBIS_OSIRIS_StreetSurfaces);
    // var jsonALL_Points_ALL = separated.jsonALL_Points_ALL;
    // var jsonALL_Polygons_ALL = separated.jsonALL_Polygons_ALL;
}


// BEGIN ======== Javascript FUnctions  ======== BEGIN \\
function onEachFeature(feature, layer) {
    var popupContent = "<dt> id: " + feature.id + "</dt>";

    if (feature.properties.popupContent) {
        popupContent += "<dt>" + feature.properties.popupContent + "</dt>";
    }
    // Quartiers Schaerbeek
    if (feature.properties.SectorName) {
        popupContent += "<dt> Sector Type: " + feature.properties.SectorType + "</dt>" +
            "<dt> Sector : " + feature.properties.SectorName + "</dt>";
    }
    // URBIS StreetSurfaces1030
    if (feature.properties.id_street) {
        popupContent = "<dt> id_street: " + feature.properties.id_street + "</dt>" +
            "<dt> Voie1030 : " + feature.properties.PW_NAME_FR + "</dt>";

        if (feature.properties.name_street_shared) {
            popupContent += "<dt> Connections1030 : " + feature.properties.name_street_shared + "</dt>";
        }
    }
    // URBIS NodesSurfaces1030
    if (feature.properties.id_nodes) {
        popupContent = "<dt> id_nodes: " + feature.properties.id_nodes + "</dt>" +
            (feature.properties.name_street_shared ? "<dt> Street Shared : " + feature.properties.name_street_shared + "</dt>" : "") +
            "<dt> Geometry : " + feature.geometry.type + "</dt>";
    }

    // Projects Chantiers1030
    if (feature.properties.id_chantier) {
        popupContent = "<dt> id_chantier: " + feature.properties.id_chantier + "</dt>" +
            "<dt> Rue1030 : " + feature.properties.VoirieNom + "</dt>" +
            "<dt> OsirisB1 : " + feature.properties.OsirisB1 + "</dt>" +
            "<dt> Geometry : " + feature.geometry.type + "</dt>";
    }
    layer.bindPopup(popupContent);
}

function MarkerDataView_Street(clickedMarker) {
    if (!clickedMarker || !clickedMarker.feature) return;
    const props = clickedMarker.feature.properties;

    safeSetValue("Code_Roadway1030", props.id_street);
    safeSetValue("Code_Street1030", props.index_seg);
    safeSetValue("RoadwayName_FR", props.PW_NAME_FR);
    safeSetValue("RoadwayName_NL", props.PW_NAME_DU);
    safeSetValue("TypeStreet", props.Type);
    if (props.StreetLength_m) safeSetValue("SegmentLength", props.StreetLength_m.toFixed(2));
}

function MarkerDataView_Node(clickedMarker) {
    if (!clickedMarker || !clickedMarker.feature) return;
    const props = clickedMarker.feature.properties;

    safeSetValue("Code_Node1030", props.id_nodes);
    safeSetValue("Code_SharedStreet1030", props.id_street_shared);
    safeSetValue("Name_SharedStreet1030", props.name_street_shared);
    safeSetValue("Number_SharedStreet1030", props.number_street_shared);
}

// Helper to safely set value of potentially missing element
function safeSetValue(id, value) {
    const el = document.getElementById(id);
    if (el) el.value = value || "";
}

function concatGeoJSON(g1, g2) {
    return {
        "type": "FeatureCollection",
        "features": g1.features.concat(g2.features)
    };
}

function SearchData_StreetSurfaces() {
    // Get values
    const getVal = (id) => {
        const el = document.getElementById(id);
        return el ? el.value : "";
    };

    const RoadwayNameFRLabel = getVal("RoadwayName_FR");
    const RoadwayNameFRLabel_D = getVal("RoadwayName_FR_D");
    const RoadwayNameFRLabel_F = getVal("RoadwayName_FR_F");

    console.log("Searching for:", RoadwayNameFRLabel, RoadwayNameFRLabel_D, RoadwayNameFRLabel_F);

    // Clear layers
    if (typeof GroupMarkersMap1030_ALL !== 'undefined') GroupMarkersMap1030_ALL.clearLayers();
    if (typeof GroupPolygonsMap1030_ALL !== 'undefined') GroupPolygonsMap1030_ALL.clearLayers();

    // If no search criteria, just return or alert?
    // The original code treated empty strings as "ALLData" and did some logic.
    // Basically, if specific fields are filled, we filter.

    // Collect all search terms that are NOT empty
    const searchTerms = [];
    if (RoadwayNameFRLabel !== "") searchTerms.push(RoadwayNameFRLabel);
    if (RoadwayNameFRLabel_D !== "") searchTerms.push(RoadwayNameFRLabel_D);
    if (RoadwayNameFRLabel_F !== "") searchTerms.push(RoadwayNameFRLabel_F);

    if (searchTerms.length === 0) {
        alert("Veuillez sélectionner au moins un critère de recherche.");
        return;
    }

    // Prepare Source Data
    // Assuming URBIS_OSIRIS_StreetSurfaces is the source
    if (typeof URBIS_OSIRIS_StreetSurfaces === 'undefined') {
        console.error("Data source URBIS_OSIRIS_StreetSurfaces is missing");
        return;
    }

    const sourceData = URBIS_OSIRIS_StreetSurfaces;
    let accumulatedFeatures = [];

    // The logic in original code was union (OR) of matches for each term.
    searchTerms.forEach(term => {
        const matches = sourceData.features.filter(item => {
            return item.properties.PW_NAME_FR && item.properties.PW_NAME_FR.toString().includes(term);
        });
        accumulatedFeatures = accumulatedFeatures.concat(matches);
    });

    // Remove duplicates if any (e.g. if terms overlap or same segment matched twice)
    // Using a Map for unique features based on an ID, or just strict equality reference
    const uniqueFeatures = Array.from(new Set(accumulatedFeatures));

    console.log("Total Segments Found: " + uniqueFeatures.length);

    if (uniqueFeatures.length === 0) {
        alert("Il n'y a pas des segments de rues répertoriée avec les valeurs de recherche sélectionnées.., modifiez les critères de recherche");
        if (typeof ClearDataSearch_URBIS === 'function') ClearDataSearch_URBIS();
        return;
    }

    // Create GeoJSON from results
    const jsonSEARCH_Polygons = {
        "type": "FeatureCollection",
        "features": uniqueFeatures
    };

    // Add to map
    var searchLayer = L.geoJSON([jsonSEARCH_Polygons], {
        style: PolygonStyle_DarkOrchid,
        onEachFeature: onEachFeature,
    });

    if (typeof GroupPolygonsMap1030_ALL !== 'undefined') {
        GroupPolygonsMap1030_ALL.addLayer(searchLayer);
    }

    searchLayer.on("click", function (event) {
        MarkerDataView_Street(event.layer);
    });
}

function LoadALLData() {
    if (typeof StreetSurfaces1030 !== 'undefined' && typeof carte !== 'undefined') {
        StreetSurfaces1030.eachLayer(function (marker) {
            carte.removeLayer(marker);
        });
    }

    StreetSurfaces1030 = GroupALL_URBIS_StreetSurfaces;
    GroupALL_URBIS_StreetSurfaces = StreetSurfaces1030_ALL_00;

    if (typeof GroupPolygonsMap1030 !== 'undefined') GroupPolygonsMap1030.clearLayers();
    if (typeof GroupPolygonsMap1030_ALL !== 'undefined') GroupPolygonsMap1030_ALL.clearLayers();

    if (typeof GroupPolygonsMap1030 !== 'undefined') GroupPolygonsMap1030.addLayer(StreetSurfaces1030);
    if (typeof GroupPolygonsMap1030_ALL !== 'undefined') GroupPolygonsMap1030_ALL.addLayer(GroupALL_URBIS_StreetSurfaces);
}

// Utility functions
function getFeaturesByGeometry(featureCollection, filterType) {
    if (!featureCollection || !Array.isArray(featureCollection.features)) {
        console.error("L'objet d'entrée n'est pas une FeatureCollection valide.");
        return filterType ? [] : {};
    }

    const features = featureCollection.features;

    if (filterType) {
        const targetType = filterType === 'Null' ? null : filterType;
        return features.filter(feature => {
            const currentGeometryType = feature.geometry ? feature.geometry.type : null;
            return currentGeometryType === targetType;
        });
    } else {
        const groupedFeatures = {};
        features.forEach(feature => {
            const geometryType = feature.geometry ? feature.geometry.type : 'Null';
            if (!groupedFeatures[geometryType]) {
                groupedFeatures[geometryType] = [];
            }
            groupedFeatures[geometryType].push(feature);
        });
        return groupedFeatures;
    }
}

function separateFeaturesByGeometryGroup(featureCollection) {
    const separatedFeatures = {
        jsonALL_Points: [],
        jsonALL_Polygons: [],
        Null: [],
    };

    if (!featureCollection || !Array.isArray(featureCollection.features)) {
        console.error("L'objet d'entrée n'est pas une FeatureCollection valide.");
        return separatedFeatures;
    }

    featureCollection.features.forEach(feature => {
        const geometryType = feature.geometry ? feature.geometry.type : null;

        if (geometryType === 'Point' || geometryType === 'MultiPoint') {
            separatedFeatures.jsonALL_Points.push(feature);
        } else if (geometryType === 'Polygon' || geometryType === 'MultiPolygon') {
            separatedFeatures.jsonALL_Polygons.push(feature);
        } else if (geometryType === null) {
            separatedFeatures.Null.push(feature);
        }
    });

    return separatedFeatures;
}
