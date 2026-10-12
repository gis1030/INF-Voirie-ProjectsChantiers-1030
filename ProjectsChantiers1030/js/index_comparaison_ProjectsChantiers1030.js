// ++++++++++++++++++++++++++++++++++++++++++
// ===== Mode comparaison de deux périodes ====
// ++++++++++++++++++++++++++++++++++++++++++
// Mode "simple"      : une seule carte, filtrée par SearchData().
// Mode "comparaison" : la zone carte est divisée en deux cartes indépendantes,
//                      Période 1 (DateDebutChantier / DateFinChantier) à gauche,
//                      Période 2 (DateDebutChantier_P2 / DateFinChantier_P2) à droite.
// Les autres critères (Chantier 1030, Impetrant, Rues, Fermeture) s'appliquent aux deux périodes.

// Période de référence utilisée quand une date n'est pas saisie
const DATE_DEBUT_REFERENCE = "2024-01-01";
const DATE_FIN_REFERENCE = "2040-12-31";

// Vue initiale des cartes (bouton position initiale et Clear)
const CENTRE_INITIAL = [50.86070401717095, 4.3830651582691456];
const ZOOM_INITIAL = 13;

let modeFiltre = "simple";
let carte2 = null;
const GroupPolygonsMap1030_P2 = createClusterGroup('cluster05');
const GroupGeolocalisation_P2 = L.layerGroup();

// ++BEGIN++ Carte 2 (créée au premier passage en mode comparaison) +++++
function creerCarte2() {
    carte2 = L.map('maCarte2').setView(carte.getCenter(), carte.getZoom());
    carte2.attributionControl.setPrefix(false);

    // Couches propres à la carte 2 (une couche Leaflet ne peut appartenir qu'à une carte)
    const copieTuiles = function (tuiles) { return L.tileLayer(tuiles._url, tuiles.options); };
    const surfaces = function (donnees, style) {
        return L.geoJSON([donnees], {
            filter: function (feature) { return ["Polygon", "MultiPolygon"].includes(feature.geometry.type); },
            style: style,
            onEachFeature: onEachFeature,
        });
    };
    const fonds2 = { osm: copieTuiles(carte01), streets: copieTuiles(carte03), satellite: copieTuiles(carte05) };
    const limites2 = L.geoJSON([Boundary], { style: PolygonStyle_Boundary01, onEachFeature: onEachFeature });
    const quartiers2 = L.geoJSON([BoundaryDistrict], { style: PolygonStyle_Boundary02, onEachFeature: onEachFeature });
    const schaerbeek2 = L.featureGroup([limites2, quartiers2]);
    const streetSurfaces2 = surfaces(URBIS_OSIRIS_StreetSurfaces, PolygonStyle_DeepPink2);
    const nodesSurfaces2 = surfaces(URBIS_OSIRIS_OnlyNodes, PolygonStyle_Chartreuse);
    const dateADefinir2 = L.geoJSON([ProjectsChantiers1030], {
        filter: function (feature) {
            const date = feature.properties.DateDebut;
            return !date || (typeof date === 'string' && date.trim() === "");
        },
        style: PolygonStyle_ValidDateNULL,
        onEachFeature: onEachFeature,
    }).on("click", function (event) { MarkerDataView(event.layer); });

    // Mêmes boutons de couches que la carte 1, mais indépendants
    L.control.layers({
        "<b>OSM.fr Carte</b>": fonds2.osm,
        "<b>Google Streets</b>": fonds2.streets,
        "<b>Google Satellite-Streets</b>": fonds2.satellite,
    }, {
        "<b>Street Surfaces</b></br>": streetSurfaces2,
        "<b>Nodes Surfaces</b></br>": nodesSurfaces2,
    }).addTo(carte2);
    L.control.layers({
        "<b>Limites Schaerbeek</b></br>": limites2,
        "<b>Limites Quartiers 1030</b></br>": quartiers2,
    }, {
        "<b>Schaerbeek</b></br>": schaerbeek2,
    }).addTo(carte2);
    L.control.layers(null, {
        "<b>Toutes les Impetrants</b></br>": GroupPolygonsMap1030_P2,
        "<b>Date de chantier à définir</b></br>": dateADefinir2,
    }).addTo(carte2);

    // Par défaut, la carte 2 affiche les mêmes couches que la carte 1
    [
        [carte01, fonds2.osm], [carte03, fonds2.streets], [carte05, fonds2.satellite],
        [DBPolygons, limites2], [DBPolygonsBoundary, quartiers2], [GroupBondery1030, schaerbeek2],
        [GroupALL_URBIS_StreetSurfaces, streetSurfaces2], [GroupALL_URBIS_NodesSurfaces, nodesSurfaces2],
        [GroupChantiersALL1030, GroupPolygonsMap1030_P2], [GroupChantiersMap1030_D, dateADefinir2],
    ].forEach(function (paire) {
        if (carte.hasLayer(paire[0])) carte2.addLayer(paire[1]);
    });
    carte2.addLayer(GroupGeolocalisation_P2);

    // Mêmes boutons que la carte 1, agissant uniquement sur la carte 2
    L.easyButton('<img src="images/home.png" width="26" height="26" >', function () {
        carte2.setView(CENTRE_INITIAL, ZOOM_INITIAL);
    }).addTo(carte2);
    carte2.on('locationfound', function (e) {
        GroupGeolocalisation_P2.clearLayers();
        L.marker(e.latlng).addTo(GroupGeolocalisation_P2);
        L.circle(e.latlng, e.accuracy / 2).addTo(GroupGeolocalisation_P2);
    });
    carte2.on('locationerror', onLocationError);
    L.easyButton('<img src="images/gps-position.png" width="26" height="26" >', function () {
        carte2.locate({ setView: true, maxZoom: 15 });
    }).addTo(carte2);
    L.esri.Geocoding.geosearch({
        position: 'topleft',
        zoomToResult: true,
        useMapBounds: true,
        providers: [L.esri.Geocoding.arcgisOnlineProvider()],
        collapseAfterResult: true,
        expanded: false,
        title: 'Recherche d`emplacement',
        placeholder: 'SVP, Entrez une adresse...'
    }).addTo(carte2);
    L.geoportalControl.MousePosition({
        position: 'bottomright',
        collapsed: true,
        displayAltitude: false,
        editCoordinates: false,
        units: [],
    }).addTo(carte2);

}
// ++END++ Carte 2 +++++

// ++BEGIN++ Bascule simple / comparaison +++++
function basculerModeFiltre(mode) {
    modeFiltre = mode;
    const comparaison = mode === "comparaison";

    document.getElementById("Region04").classList.toggle("mode-comparaison", comparaison);
    document.querySelectorAll(".periode-comparaison").forEach(function (el) {
        el.style.display = comparaison ? "" : "none";
    });
    // La "Date de Chantier" (date unique) n'a pas de sens en comparaison
    const dateUnique = document.getElementById("zoneDateUnique");
    if (dateUnique) dateUnique.style.display = comparaison ? "none" : "";

    if (comparaison && !carte2) creerCarte2();
    carte.invalidateSize();
    if (carte2) {
        carte2.invalidateSize();
        carte2.setView(carte.getCenter(), carte.getZoom(), { animate: false });
    }
    if (comparaison) copierCarte1VersCarte2();
}

// Par défaut, les deux volets affichent les mêmes chantiers que la carte 1
function copierCarte1VersCarte2() {
    // Copie fidèle : chaque polygone garde le style qu'il a sur la carte 1
    const styles = new Map();
    GroupPolygonsMap1030_ALL.getLayers().forEach(function (couche) {
        if (couche.feature) styles.set(couche.feature, couche.options);
    });
    const features = Array.from(styles.keys());
    afficherChantiers(GroupPolygonsMap1030_P2, features, function (feature) {
        const o = styles.get(feature);
        return { fillColor: o.fillColor, fillOpacity: o.fillOpacity, color: o.color, opacity: o.opacity, weight: o.weight };
    });
    const texte = "Période non définie · " + features.length + " chantiers";
    document.getElementById("sousTitre1").textContent = texte;
    document.getElementById("sousTitre2").textContent = texte;
}
// ++END++ Bascule +++++

// ++BEGIN++ Filtre +++++
// Bouton "Filter Chantier" : filtre simple ou comparaison selon le mode choisi
function FiltrerChantiers() {
    if (modeFiltre === "comparaison") {
        ComparerPeriodes();
    } else {
        FiltrerSimple();
    }
}

// Mode simple : si aucune date ne délimite la recherche, l'utilisateur choisit
// entre préciser les dates et utiliser la période par défaut
function FiltrerSimple() {
    const valeur = function (id) { return document.getElementById(id).value; };
    if (valeur("Chantier1030") || valeur("DateDebutChantier_0")) {
        SearchData();
        return;
    }
    const periode = lirePeriode("Période de recherche", "DateDebutChantier", "DateFinChantier");
    if (new Date(periode.debut) > new Date(periode.fin)) {
        alert("La date de début doit précéder la date de fin.");
        return;
    }
    if (periode.message) {
        demanderChoixPeriodes([periode.message], periode.champsVides, SearchData);
    } else {
        SearchData();
    }
}

function criteresChantier() {
    const valeur = function (id) { return document.getElementById(id).value.trim(); };
    return {
        chantier: valeur("Chantier1030"),
        impetrant: valeur("Impetrant"),
        rue: valeur("Rues1030"),
        fermeture: valeur("FermetureRue"),
    };
}

// Chantiers (polygones) actifs entre debut et fin et correspondant aux critères
function filtrerChantiersPeriode(debut, fin, criteres) {
    return jsonALL_Polygons_ALL.features.filter(function (item) {
        const p = item.properties;
        if (criteres.chantier && String(p.ID) !== criteres.chantier) return false;
        if (criteres.impetrant && String(p.NomImpetrant) !== criteres.impetrant) return false;
        if (criteres.rue && String(p.VoirieNom) !== criteres.rue) return false;
        if (criteres.fermeture && String(p.FermetureRue) !== criteres.fermeture) return false;

        const d1 = new Date(p.DateDebut);
        const d2 = new Date(p.DateFin);
        return d1 <= fin && d2 >= debut;
    });
}

function afficherChantiers(groupe, features, style) {
    groupe.clearLayers();
    if (features.length === 0) return;
    const couche = L.geoJSON({ type: "FeatureCollection", features: features }, {
        style: style || styleChantier1030,
        onEachFeature: onEachFeature,
    });
    couche.on("click", function (event) {
        MarkerDataView(event.layer);
    });
    groupe.addLayer(couche);
}

function formaterDate(valeur) {
    const [a, m, j] = valeur.split("-");
    return j + "/" + m + "/" + a;
}


// Lit les dates d'une période ; complète les dates manquantes par la période de référence
function lirePeriode(nom, idDebut, idFin) {
    const debut = document.getElementById(idDebut).value;
    const fin = document.getElementById(idFin).value;
    let message = "";
    if (!debut && !fin) {
        message = nom + " : aucune date n'a été saisie, la période par défaut va du "
            + formaterDate(DATE_DEBUT_REFERENCE) + " au " + formaterDate(DATE_FIN_REFERENCE) + ".";
    } else if (!debut) {
        message = nom + " : aucune date de début, elle serait fixée au " + formaterDate(DATE_DEBUT_REFERENCE) + ".";
    } else if (!fin) {
        message = nom + " : aucune date de fin, elle serait fixée au " + formaterDate(DATE_FIN_REFERENCE) + ".";
    }
    return {
        debut: debut || DATE_DEBUT_REFERENCE,
        fin: fin || DATE_FIN_REFERENCE,
        message: message,
        champsVides: [idDebut, idFin].filter(function (id) { return !document.getElementById(id).value; }),
    };
}

function ComparerPeriodes() {
    const periode1 = lirePeriode("Période 1", "DateDebutChantier", "DateFinChantier");
    const periode2 = lirePeriode("Période 2", "DateDebutChantier_P2", "DateFinChantier_P2");
    if (new Date(periode1.debut) > new Date(periode1.fin) || new Date(periode2.debut) > new Date(periode2.fin)) {
        alert("Mode comparaison : la date de début doit précéder la date de fin pour chaque période.");
        return;
    }

    const messages = [periode1.message, periode2.message].filter(Boolean);
    if (messages.length === 0) {
        executerComparaison(periode1, periode2);
    } else {
        // L'utilisateur choisit : préciser les périodes ou utiliser la période par défaut
        demanderChoixPeriodes(messages, periode1.champsVides.concat(periode2.champsVides), function () {
            executerComparaison(periode1, periode2);
        });
    }
}

function demanderChoixPeriodes(messages, champsVides, utiliserDefaut) {
    const element = document.getElementById("modalPeriodes");
    const modal = bootstrap.Modal.getInstance(element) || new bootstrap.Modal(element);
    const liste = document.getElementById("modalPeriodesMessages");
    liste.innerHTML = "";
    messages.forEach(function (texte) {
        const li = document.createElement("li");
        li.textContent = texte;
        liste.appendChild(li);
    });

    let defautChoisi = false;
    document.getElementById("btnPeriodeDefaut").onclick = function () {
        defautChoisi = true;
        modal.hide();
    };
    element.addEventListener("hidden.bs.modal", function () {
        if (defautChoisi) {
            champsVides.forEach(function (id) { document.getElementById(id).classList.remove("is-invalid"); });
            utiliserDefaut();
        } else {
            // "Préciser les périodes" : on signale les champs vides et on place le curseur sur le premier
            champsVides.forEach(function (id) {
                const champ = document.getElementById(id);
                champ.classList.add("is-invalid");
                champ.addEventListener("input", function () { champ.classList.remove("is-invalid"); }, { once: true });
            });
            document.getElementById(champsVides[0]).focus();
        }
    }, { once: true });
    modal.show();
}

function executerComparaison(periode1, periode2) {
    const criteres = criteresChantier();
    const resultat1 = filtrerChantiersPeriode(new Date(periode1.debut), new Date(periode1.fin), criteres);
    const resultat2 = filtrerChantiersPeriode(new Date(periode2.debut), new Date(periode2.fin), criteres);

    afficherChantiers(GroupPolygonsMap1030_ALL, resultat1);
    afficherChantiers(GroupPolygonsMap1030_P2, resultat2);

    document.getElementById("sousTitre1").textContent = "Période 1 : " + formaterDate(periode1.debut) + " – "
        + formaterDate(periode1.fin) + " · " + resultat1.length + " chantiers";
    document.getElementById("sousTitre2").textContent = "Période 2 : " + formaterDate(periode2.debut) + " – "
        + formaterDate(periode2.fin) + " · " + resultat2.length + " chantiers";
    document.querySelector("#CommentairesOsiris").value = "P1 : " + resultat1.length + " · P2 : " + resultat2.length;
}
// ++END++ Filtre +++++

// ++BEGIN++ Clear : vider aussi la Période 2 et revenir à la vue initiale +++++
const ClearDataSearch_Simple = ClearDataSearch;
ClearDataSearch = function () {
    ClearDataSearch_Simple();
    ["DateDebutChantier_P2", "DateFinChantier_P2"].forEach(function (id) {
        document.getElementById(id).value = "";
    });
    ["DateDebutChantier", "DateFinChantier", "DateDebutChantier_P2", "DateFinChantier_P2"].forEach(function (id) {
        document.getElementById(id).classList.remove("is-invalid");
    });
    if (modeFiltre === "comparaison") copierCarte1VersCarte2();

    // Retour à la vue initiale (centre et zoom) sur les deux cartes
    carte.setView(CENTRE_INITIAL, ZOOM_INITIAL);
    if (carte2) carte2.setView(CENTRE_INITIAL, ZOOM_INITIAL);
};
// ++END++ Clear +++++
