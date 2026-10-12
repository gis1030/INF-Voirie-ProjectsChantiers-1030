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

// Appliqué après le chargement : esri-leaflet réécrit le préfixe lors de l'ajout du géocodeur.
window.addEventListener('load', function () {
    carte.attributionControl.setPrefix('©GeoData1030: geodata.gis1030@gmail.com '
        + '<a href="https://www.1030.be/" target="_blank">Commune de Schaerbeek</a> · '
        + '<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a> · '
        + '<a href="https://leafletjs.com" target="_blank">Leaflet</a> · '
        + 'Powered by <a href="https://www.esri.com" target="_blank">Esri</a>');
});
