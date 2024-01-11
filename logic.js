var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php"
var query2 = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php"
d3.json(queryUrl, function(data) {
    createFeatures(data.features);
} );
function createFeatures(earthquakeData) {

    function onEachFeature(feature, layer) {
        layer.bindPopup("<h3>" + feature.properties.place +
        "</h3><hr><p>" + new Date(feature.properties.time) + "</p>" +
        "</h3><hr><p>Magnitude: " + feature.properties.mag + "</p>");
}
