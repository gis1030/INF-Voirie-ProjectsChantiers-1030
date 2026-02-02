// BEGIN +++ Choix de cartes et Elements ++++++++
var CarteGroupALL = {
    "<b>OSM.fr Carte</b>": carte01,
    "<b>Google Terrain</b>": carte02,
    "<b>Google Streets</b>": carte03,
    "<b>Google Satellite</b>": carte04,
    "<b>Google Satellite-Streets</b>": carte05,
    "<b>Google Terrain-Cycle</b>": carte06,
    "<b>Google Streets-Cycle</b>": carte07,
    "<b>Google Traffic</b>": carte08,
};

var CarteGroup = {
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

var GroupDataALL_URBIS = {
    "<b>Street Surfaces</b></br>": GroupALL_URBIS_NodesStreetSurfaces,
};

var GroupDataALL_URBIS_NodesSurfaces = {
    "<b>Street Surfaces</b></br>": GroupALL_URBIS_StreetSurfaces,
    "<b>Nodes Surfaces</b></br>": GroupALL_URBIS_NodesSurfaces,
};

var GroupDataStreet_URBIS = {
    "<b>Street Surfaces Polygons</b></br>": GroupPolygons_URBIS_StreetSurfaces,
    "<b>Street Surfaces MultiPolygons</b></br>": GroupMultiPolygon_URBIS_StreetSurfaces,
};

var GroupDataNodes_URBIS = {
    "<b>Nodes Surfaces Polygons</b></br>": GroupPolygons_URBIS_NodesSurfaces,
    "<b>Nodes Surfaces MultiPolygons</b></br>": GroupMultiPolygon_URBIS_NodesSurfaces,
};

GroupDataGeometry_URBIS = {
    "<b>Street Surfaces</b></br>": GroupALL_URBIS_StreetSurfaces,
    "<b>Nodes Surfaces</b></br>": GroupALL_URBIS_NodesSurfaces,
};

GroupDataGeometry_Section_URBIS = {
    "<b>Street Surfaces</b></br>": GroupALL_URBIS_StreetSurfaces,
    "<b>Nodes Surfaces Polygons</b></br>": GroupPolygons_URBIS_NodesSurfaces,
    "<b>Nodes Surfaces MultiPolygons</b></br>": GroupMultiPolygon_URBIS_NodesSurfaces,
};

// ++++++++++++++++++++++++++++++++++++++++++
// ======== Chantiers1030 Data ==============
// ++++++++++++++++++++++++++++++++++++++++++

const GroupDataALL_Impetrants1030 = {
    "<b>Toutes les Impetrants</b></br>": GroupALL_Chantiers,
    //"<b>Toutes les Impetrants</b></br>": GroupALL_Chantiers_S,
    "<b>BELIRIS</b></br>": Impetrant_01,
    "<b>BM-DEN</b></br>": Impetrant_02,
    "<b>BM-DPV</b></br>": Impetrant_03,
    "<b>BRUTELE</b></br>": Impetrant_04, //NON
    "<b>COLT</b></br>": Impetrant_05,
    "<b>DIGI</b></br>": Impetrant_06,
    "<b>DITP</b></br>": Impetrant_07,  //NON
    "<b>ELIA</b></br>": Impetrant_08,
    "<b>EUROFIBER</b></br>": Impetrant_09,
    "<b>INFRABEL</b></br>": Impetrant_10,  //NON
    "<b>IRISNET</b></br>": Impetrant_11,
    "<b>PROXIMUS</b></br>": Impetrant_12,
    "<b>SCHAERBEEK AMÉNAGEMENT COMPLET</b></br>": Impetrant_13,
    "<b>SCHAERBEEK ASPHALTE</b></br>": Impetrant_14,
    "<b>SCHAERBEEK DAV</b></br>": Impetrant_15,
    "<b>SCHAERBEEK MARQUAGE</b></br>": Impetrant_16,  //NON
    "<b>SCHAERBEEK RENOVAS</b></br>": Impetrant_17,
    "<b>SCHAERBEEK TROTTOIRS</b></br>": Impetrant_18,
    "<b>SIBELGA</b></br>": Impetrant_19,
    "<b>SIBELGA EP</b></br>": Impetrant_20,
    "<b>STIB</b></br>": Impetrant_21,
    "<b>VIVAQUA ASSAINISSEMENT</b></br>": Impetrant_22,
    "<b>VIVAQUA DISTRIBUTION</b></br>": Impetrant_23,
    "<b>VIVAQUA RÉPARTITION</b></br>": Impetrant_24,
    "<b>VOO</b></br>": Impetrant_25,
    "<b>WYRE</b></br>": Impetrant_26,
};

var GroupDataALL_Chantiers1030 = {
    "<b>Projects Chantiers</b></br>": GroupChantiersALL1030,
};

var GroupDataGeometry_Chantiers1030 = {
    "<b>Toutes les Chantiers (Surface)</b></br>": GroupPolygonsMap1030_ALL,
};

const LControl04 = L.control.layers(CarteGroup, GroupDataGeometry_URBIS).addTo(carte);
const LControl03 = L.control.layers(BonderySchaerbeek1030, Group_Bondery1030).addTo(carte);
//const LControl06 = L.control.layers(GroupDataALL_Impetrants1030).addTo(carte);

//const LControl05 = L.control.layers(GroupDataGeometry_Chantiers1030, GroupDataALL_Chantiers1030).addTo(carte);
//var LControl00 = L.control.layers(CarteGroup).addTo(carte);
//var LControl02 = L.control.layers(GroupChantiers1030).addTo(carte);

//===================================================================
// +++++ Controls
//===================================================================
// ++BEGIN++ position initial +++++
L.easyButton('<img src="images/home.png" width="26" height="26" >', function () {
    carte.setView([50.86070401717095, 4.3830651582691456], 13);
    layerGroup.clearLayers();
}).addTo(carte);
// +++++++ position initial +++END++

// ++BEGIN++ Géolocalisation +++++
function onLocationFound(e) {
    var radius = e.accuracy / 2;
    var location = e.latlng
    L.marker(location).addTo(carte)
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

L.easyButton('<img src="images/gps-position.png" width="26" height="26" >', function () {
    getLocationLeafvar()
}).addTo(carte);
// +++++++ Géolocalisation +++END++

// ++BEGIN++ MousePosition Maps +++++
var mousePoistion00 = L.geoportalControl.MousePosition({
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

// https://ignf.github.io/geoportal-extensions/leaflet-latest/jsdoc/module-Controls.html
/*
var iso = L.geoportalControl.Isocurve({
    position: "topright",
    collapsed: true,
    methods: ["time", "distance"],
    exclusions: {
        toll: true,
        bridge: false,
        tunnel: true
    },
    graphs: ["Pieton", "Voiture"],
    isocurveOptions: {},
    autocompleteOptions: {}
}).addTo(carte);
*/
/*
var reverse = L.geoportalControl.ReverseGeocode({
    collapsed: false,
    position: "topright",
    resources: ["StreetAddress", "PositionOfInterest"],
    delimitations: ["Point", "Circle"],
    reverseGeocodeOptions: {}
}).addTo(carte);
*/
/*
var route = L.geoportalControl.Route({
    position: 'bottomleft',
    collapsed: true,
    exclusions: {
        "toll": true,
        "bridge": false,
        "tunnel": true
    },
    graphs: ['Pieton', 'Voiture'],
    autocompleteOptions: {},
    routeOptions: {}
}).addTo(carte);
*/
// +++++++ MousePosition Map +++END++

// ++BEGIN++ Esri Leafvar Geocoder +++++
var searchControl = L.esri.Geocoding.geosearch({
    position: 'topleft',
    zoomToResult: true,
    useMapBounds: true,
    providers: [L.esri.Geocoding.arcgisOnlineProvider()],
    collapseAfterResult: true,
    expanded: false,
    title: 'Recherche d`emplacement',
    placeholder: 'SVP, Entrez une adresse...'
}).addTo(carte);

var geocodeService = L.esri.Geocoding.geocodeService({});
var layerGroup = L.layerGroup().addTo(carte);
carte.on('click', function (e) {

    geocodeService.reverse().latlng(e.latlng).run(function (error, result) {
        if (error) {
            return;
        }
        //var emplacement = convertToAddress(e.latlng);
        var lngLatString = `${Math.round(result.latlng.lat * 100000) / 100000}, ${Math.round(result.latlng.lng * 100000) / 100000}`;
        layerGroup.clearLayers();
        marker = L.marker(result.latlng)
            .addTo(layerGroup) //.addTo(carte) l'utilisation de vette option permet au marqueur de rester sur la carte
            .bindPopup(`<dt>${lngLatString}</dt>` + `<dt>${result.address.LongLabel}</dt>`) // adresse avec les coordonnées gps 
            //.bindPopup(result.address.Match_addr) // adresse sans les coordonnées gps 
            //.bindPopup(result.address.LongLabel) // version plus longue de l'adresse Match_addr contenant plus d'informations administratives
            //.bindPopup(result.address.ShortLabel) // version abrégée de l'adresse Match_addr
            .openPopup();
    });
});
// +++++++ Esri Leafvar Geocoder +++END++
