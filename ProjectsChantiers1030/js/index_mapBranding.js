// Titre (coin supérieur gauche), filigrane 1030 (coin inférieur gauche) et attribution de la carte.
// Le titre est lu depuis l'attribut data-title de <div id="maCarte">.
const titreCarte = L.control({ position: 'topleft' });
titreCarte.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info titre-carte');
    div.innerHTML = '<h2>' + (document.getElementById('maCarte').dataset.title || '') + '</h2>';
    return div;
};
titreCarte.addTo(carte);
// Placer le titre en première ligne, avant les boutons de zoom
var titreDiv = titreCarte.getContainer();
titreDiv.parentNode.insertBefore(titreDiv, titreDiv.parentNode.firstChild);

L.Control.Watermark = L.Control.extend({
    onAdd: function (map) {
        var img = L.DomUtil.create('img');
        img.src = 'images/schaerbeek1030_logo.png';
        img.style.width = '75px';
        return img;
    }
});
L.control.watermark = function (opts) { return new L.Control.Watermark(opts); }
L.control.watermark({ position: 'bottomleft' }).addTo(carte);

// Bouton "menu principal" : retour à la page d'accueil du dépôt (comme POP-Demographic-Schaerbeek)
const MenuPrincipal = L.Control.extend({
    options: { position: 'topleft' },
    onAdd: function (map) {
        const div = L.DomUtil.create('div', 'leaflet-bar');
        const bouton = L.DomUtil.create('button', '', div);
        bouton.type = 'button';
        bouton.innerHTML = 'menu principal';
        bouton.title = "Retour à la page d'accueil";
        bouton.style.cssText = 'width: auto; height: auto; white-space: nowrap; border: none; background: #fff; padding: 4px 8px; font: 13px Arial, Helvetica, sans-serif; cursor: pointer;';
        L.DomEvent.disableClickPropagation(div);
        L.DomEvent.on(bouton, 'click', function () {
            window.location.href = '../index.html';
        });
        return div;
    }
});

// Appliqué après le chargement : esri-leaflet réécrit le préfixe lors de l'ajout du géocodeur.
window.addEventListener('load', function () {
    // Ajouté en dernier pour se placer sous les autres boutons du coin supérieur gauche
    new MenuPrincipal().addTo(carte);
    carte.attributionControl.setPrefix('©GeoData1030: geodata.gis1030@gmail.com '
        + '<a href="https://www.1030.be/" target="_blank">Commune de Schaerbeek</a> · '
        + '<a href="https://eupl.eu/1.2/fr/" target="_blank">EUPL-1.2</a> · '
        + '<a href="https://leafletjs.com" target="_blank">Leaflet</a> · '
        + 'Powered by <a href="https://www.esri.com" target="_blank">Esri</a>');
});
