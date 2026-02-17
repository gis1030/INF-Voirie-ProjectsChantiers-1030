// ++++++++ Choix de cartes et Elements ++++++++
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

const GroupDataALL_URBIS = {
    "<b>Street Surfaces</b></br>": GroupALL_URBIS_NodesStreetSurfaces,
};

const GroupDataALL_URBIS_NodesSurfaces = {
    "<b>Street Surfaces</b></br>": GroupALL_URBIS_StreetSurfaces,
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
    "<b>Street Surfaces</b></br>": GroupALL_URBIS_StreetSurfaces,
    "<b>Nodes Surfaces</b></br>": GroupALL_URBIS_NodesSurfaces,
};

const GroupDataGeometry_Section_URBIS = {
    "<b>Street Surfaces</b></br>": GroupALL_URBIS_StreetSurfaces,
    "<b>Nodes Surfaces Polygons</b></br>": GroupPolygons_URBIS_NodesSurfaces,
    "<b>Nodes Surfaces MultiPolygons</b></br>": GroupMultiPolygon_URBIS_NodesSurfaces,
};

// ++++++++++++++++++++++++++++++++++++++++++
// ======== Chantiers1030 Data ==============
// ++++++++++++++++++++++++++++++++++++++++++

const GroupDataALL_Impetrants1030 = {
    //"<b>ALL</b></br>": GroupALL_Chantiers
    "<b>Toutes les Impetrants</b></br>": GroupALL_Chantiers_S,
    "<img src='legend/BELIRIS.png' width='12px'/><b> BELIRIS</b></br>": Impetrant_01,
    "<img src='legend/BM_DEN.png' width='12px'/><b> BM-DEN</b></br>": Impetrant_02,
    "<img src='legend/BM_DPV.png' width='12px'/><b> BM-DPV</b></br>": Impetrant_03,
    "<img src='legend/BRUTELE.png' width='12px'/><b> BRUTELE</b></br>": Impetrant_04, //NON
    "<img src='legend/COLT.png' width='12px'/><b> COLT</b></br>": Impetrant_05,
    "<img src='legend/DIGI.png' width='12px'/><b> DIGI</b></br>": Impetrant_06,
    "<img src='legend/DITP.png' width='12px'/><b> DITP</b></br>": Impetrant_07,  //NON
    "<img src='legend/ELIA.png' width='12px'/><b> ELIA</b></br>": Impetrant_08,
    "<img src='legend/EUROFIBER.png' width='12px'/><b> EUROFIBER</b></br>": Impetrant_09,
    "<img src='legend/INFRABEL.png' width='12px'/><b> INFRABEL</b></br>": Impetrant_10,  //NON
    "<img src='legend/IRISNET.png' width='12px'/><b> IRISNET</b></br>": Impetrant_11,
    "<img src='legend/PROXIMUS.png' width='12px'/><b> PROXIMUS</b></br>": Impetrant_12,
    "<img src='legend/SCHAERBEEK_AME_COMPLET.png' width='12px'/><b> SCHAERBEEK AMÉNAGEMENT COMPLET</b></br>": Impetrant_13,
    "<img src='legend/SCHAERBEEK_ASPHALTE.png' width='12px'/><b> SCHAERBEEK ASPHALTE</b></br>": Impetrant_14,
    "<img src='legend/SCHAERBEEK_DAV.png' width='12px'/><b> SCHAERBEEK DAV</b></br>": Impetrant_15,
    "<img src='legend/SCHAERBEEK_MARQUAGE.png' width='12px'/><b> SCHAERBEEK MARQUAGE</b></br>": Impetrant_16,  //NON
    "<img src='legend/SCHAERBEEK_RENOVAS.png' width='12px'/><b> SCHAERBEEK RENOVAS</b></br>": Impetrant_17,
    "<img src='legend/SCHAERBEEK_TROTTOIRS.png' width='12px'/><b> SCHAERBEEK TROTTOIRS</b></br>": Impetrant_18,
    "<img src='legend/SIBELGA.png' width='12px'/><b> SIBELGA</b></br>": Impetrant_19,
    "<img src='legend/SIBELGA_EP.png' width='12px'/><b> SIBELGA EP</b></br>": Impetrant_20,
    "<img src='legend/STIB.png' width='12px'/><b> STIB</b></br>": Impetrant_21,
    "<img src='legend/VIVAQUA_ASS.png' width='12px'/><b> VIVAQUA ASSAINISSEMENT</b></br>": Impetrant_22,
    "<img src='legend/VIVAQUA_DIS.png' width='12px'/><b> VIVAQUA DISTRIBUTION</b></br>": Impetrant_23,
    "<img src='legend/VIVAQUA_REP.png' width='12px'/><b> VIVAQUA RÉPARTITION</b></br>": Impetrant_24,
    "<img src='legend/VOO.png' width='12px'/><b> VOO</b></br>": Impetrant_25,
    "<img src='legend/WYRE.png' width='12px'/><b> WYRE</b></br>": Impetrant_26,
};

// ++++++++++++++++++++++++++++++++++++++++++
// ==== Chantiers1030 ValidDate =============
// ++++++++++++++++++++++++++++++++++++++++++
const GroupDataALL_Impetrants1030_ValidDate = {
    "<b>Toutes les Impetrants</b></br>": GroupALL_Chantiers_S,
    "<b>Date de chantier à définir</b></br>": GroupChantiersMap1030_D,
};

const GroupDataALL_Chantiers1030 = {
    "<b>Projects Chantiers</b></br>": GroupALL_Chantiers
};


// var LControl00 = L.control.layers(CarteGroup).addTo(carte);
// var LControl01 = L.control.layers(GroupDataGeometry_Section_URBIS, GroupDataALL_URBIS).addTo(carte);
// var LControl03 = L.control.layers(CarteGroup, GroupDataALL_URBIS).addTo(carte);
//const LControl05 = L.control.layers(GroupDataALL_StreetClosed, GroupDataALL_Chantiers1030,).addTo(carte);

const LControl04 = L.control.layers(CarteGroup, GroupDataGeometry_URBIS).addTo(carte);
const LControl03 = L.control.layers(BonderySchaerbeek1030, Group_Bondery1030).addTo(carte);
const LControl06 = L.control.layers(GroupDataALL_Impetrants1030).addTo(carte);
const LControl07 = L.control.layers(GroupDataALL_Impetrants1030_ValidDate).addTo(carte);
// ++++++++ Choix de cartes et Elements ++++++++

// +++++++ Revient a la position initial ++++++++
L.easyButton('<img src="images/home.png" width="26" height="26" >', function () {
    carte.setView([50.86070401717095, 4.3830651582691456], 13);
    layerGroup.clearLayers();
}).addTo(carte);

// +++++++ Géolocalisation ++++++++
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

// +++++++  MousePosition Maps ++++++++
const mousePoistion = L.geoportalControl.MousePosition({
    position: 'bottomright',
    collapsed: true,
    units: [],
}).addTo(carte);

// +++++++ Esri Leafvar Geocoder ++++++++
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
        if (error) {
            return;
        }
        //var emplacement = convertToAddress(e.latlng);
        var lngLatString = `${Math.round(result.latlng.lat * 100000) / 100000}, ${Math.round(result.latlng.lng * 100000) / 100000}`;
        layerGroup.clearLayers();
        const marker = L.marker(result.latlng)
            .addTo(layerGroup) //.addTo(carte) l'utilisation de vette option permet au marqueur de rester sur la carte
            .bindPopup(`<dt>${lngLatString}</dt>` + `<dt>${result.address.LongLabel}</dt>`) // adresse avec les coordonnées gps 
            //.bindPopup(result.address.Match_addr) // adresse sans les coordonnées gps 
            //.bindPopup(result.address.LongLabel) // version plus longue de l'adresse Match_addr contenant plus d'informations administratives
            //.bindPopup(result.address.ShortLabel) // version abrégée de l'adresse Match_addr
            .openPopup();
    });
});