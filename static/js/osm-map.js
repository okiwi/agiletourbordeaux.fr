var latitudeIUT = 44.83061;
var longitudeIUT = -0.56216;
var carteAtbdxCentreeSurIUT = null;
function initMap() {
    carteAtbdxCentreeSurIUT = L.map('map', {gestureHandling: true}).setView([latitudeIUT, longitudeIUT], 16);
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        // Il est toujours bien de laisser le lien vers la source des données
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 5,
        maxZoom: 20
    }).addTo(carteAtbdxCentreeSurIUT);
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(carteAtbdxCentreeSurIUT);
    var marker = L.marker([latitudeIUT, longitudeIUT]).addTo(carteAtbdxCentreeSurIUT);
    L.control.scale().addTo(carteAtbdxCentreeSurIUT);
}
window.onload = function(){
    // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
    initMap(); 
};