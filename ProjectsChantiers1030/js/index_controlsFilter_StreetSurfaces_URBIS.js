// ++++++++ Layer Groups ++++++++
const CarteGroupALL = {
    "<b>OSM.fr Carte</b>": carte01,
    "<b>Google Terrain</b>": carte02,
    "<b>Google Streets</b>": carte03,
    "<b>Google Satellite</b>": carte04,
    "<b>Google Satellite-Streets</b>": carte05,
    "<b>Google Terrain-Cycle</b>": carte06,
    "<b>Google Streets-Cycle</b>": carte07,
    "<b>Google Traffic</b>": carte08,
};

const CarteGroup = {
    "<b>OSM.fr Carte</b>": carte01,
    "<b>Google Streets</b>": carte03,
    "<b>Google Satellite-Streets</b>": carte05,
};

// ++++++++++++++++++++++++++++++++++++++++++
// ============ Bondery1030 Data ==============
// ++++++++++++++++++++++++++++++++++++++++++
const BonderySchaerbeek1030 = {
    "<b>Limites Schaerbeek</b></br>": DBPolygons,
    "<b>Limites Quartiers 1030</b></br>": DBPolygonsBoundary,
};
const Group_Bondery1030 = {
    "<b>Schaerbeek</b></br>": GroupBondery1030,
};

// ++++++++++++++++++++++++++++++++++++++++++
// ============ URBIS1030 Data ==============
// ++++++++++++++++++++++++++++++++++++++++++

// URBIS Groups
const GroupDataALL_URBIS_NodesSurfaces = {
    "<b>Street Surfaces</b></br>": GroupPolygonsClustersALL1030,
    "<b>Nodes Surfaces</b></br>": GroupALL_URBIS_NodesSurfaces,
};

const GroupDataStreet_URBIS = {
    "<b>Street Surfaces Polygons</b></br>": GroupPolygons_URBIS_StreetSurfaces,
    "<b>Street Surfaces MultiPolygons</b></br>": GroupMultiPolygon_URBIS_StreetSurfaces,
};

const GroupDataNodes_URBIS = {
    "<b>Nodes Surfaces Polygons</b></br>": GroupPolygons_URBIS_NodesSurfaces,
    "<b>Nodes Surfaces MultiPolygons</b></br>": GroupMultiPolygon_URBIS_NodesSurfaces,
};

const GroupDataGeometry_URBIS = {
    "<b>Street Surfaces</b></br>": GroupPolygonsClustersALL1030,
    "<b>Nodes Surfaces</b></br>": GroupALL_URBIS_NodesSurfaces,
};


const LControl04 = L.control.layers(CarteGroup, GroupDataGeometry_URBIS).addTo(carte);
const LControl03 = L.control.layers(BonderySchaerbeek1030, Group_Bondery1030).addTo(carte);
// +++++ Controls +++++

// Home Button
L.easyButton('<img src="images/home.png" width="26" height="26" >', function () {
    carte.setView([50.86070401717095, 4.3830651582691456], 13);
    if (typeof layerGroup !== 'undefined') layerGroup.clearLayers();
}).addTo(carte);


// Geolocation
function onLocationFound(e) {
    const radius = e.accuracy / 2;
    const location = e.latlng;
    L.marker(location).addTo(carte);
    L.circle(location, radius).addTo(carte);
}

function onLocationError(e) {
    alert(e.message);
}

function getLocationLeafvar() {
    carte.on('locationfound', onLocationFound);
    carte.on('locationerror', onLocationError);
    carte.locate({ setView: true, maxZoom: 15 });
}

L.easyButton('<img src="images/gps-position.png" width="26" height="26" >', getLocationLeafvar).addTo(carte);


// Mouse Position
const mousePoistion00 = L.geoportalControl.MousePosition({
    position: 'bottomleft',
    collapsed: true,
    displayAltitude: false,
    editCoordinates: false,
    altitude: {
        triggerDelay: 100,
        responseDelay: 500,
        noDataValue: -99999,
        noDataValueTolerance: 90000,
        serviceOptions: {}
    },
    units: [],
}).addTo(carte);


// Esri Geocoder
const searchControl = L.esri.Geocoding.geosearch({
    position: 'topleft',
    zoomToResult: true,
    useMapBounds: true,
    providers: [L.esri.Geocoding.arcgisOnlineProvider()],
    collapseAfterResult: true,
    expanded: false,
    title: 'Recherche d`emplacement',
    placeholder: 'SVP, Entrez une adresse...'
}).addTo(carte);

const geocodeService = L.esri.Geocoding.geocodeService({});
const layerGroup = L.layerGroup().addTo(carte);

carte.on('click', function (e) {
    geocodeService.reverse().latlng(e.latlng).run(function (error, result) {
        if (error) return;

        const { lat, lng } = result.latlng;
        const lngLatString = `${Math.round(lat * 100000) / 100000}, ${Math.round(lng * 100000) / 100000}`;

        layerGroup.clearLayers();
        L.marker(result.latlng)
            .addTo(layerGroup)
            .bindPopup(`<dt>${lngLatString}</dt><dt>${result.address.LongLabel}</dt>`)
            .openPopup();
    });
});
