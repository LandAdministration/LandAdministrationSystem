<!DOCTYPE html> 
<html lang="en">
<head>
    <title>Bidang Tanah Segoro Madu</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" crossorigin=""></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <style>
        #info-table {
            position: absolute;
            top: 10px;
            right: 10px;
            background: white;
            padding: 10px;
            border: 1px solid black;
            z-index: 1000;
            max-height: 400px;
            overflow-y: auto;
        }

        #legend {
            background: white;
            padding: 10px;
            position: absolute;
            bottom: 10px;
            left: 10px;
            z-index: 1000;
        }
    </style>
</head>
<body>
    <h1>Peta Bidang Tanah Desa Segoro Madu Gresik</h1>
    <div id="map" style="width:100%; height:600px;"></div>
    <div id="legend"></div>
    <div id="info-table"></div>

    <script>
        var map = L.map('map').setView([-7.195078, 112.641327], 19);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        var polygon = L.polygon([
            [-7.04957920491704, 110.43801809405572],
            [-7.049213358123586,110.43871572285181],
            [-7.049531998895407,110.43900111645021],
            [-7.049964720580341,110.43821628405462]
        ], {
            color:'yellow',
            fillColor: 'yellow',
            fillOpacity: 0.5
        }).addTo(map);

        var wmsLayer1 = L.tileLayer.wms("http://localhost:8080/geoserver/wms", {
            layers: "bidangsegoromadu",
            format: "image/png",
            transparent: true,
            attribution: "&copy; BidangTanah"
        }).addTo(map);

        var wmsLayer2 = L.tileLayer.wms("http://localhost:8080/geoserver/wms", {
            layers: "jalansegoromadu",
            format: "image/png",
            transparent: true,
            attribution: "&copy; BidangTanah"
        }).addTo(map);

        var wmsLayer3 = L.tileLayer.wms("http://localhost:8080/geoserver/wms", {
            layers: "sungaisegoromadu",
            format: "image/png",
            transparent: true,
            attribution: "&copy; BidangTanah"
        }).addTo(map);

        var wmsLayer4 = L.tileLayer.wms("http://localhost:8080/geoserver/wms", {
            layers: "batasdesasegoromadu1",
            format: "image/png",
            transparent: true,
            attribution: "&copy; BidangTanah"
        }).addTo(map);

        var wmsAdmin = L.tileLayer.wms("http://localhost:8080/geoserver/wms", {
            layers: "Administrasi_Kelurahan",
            format: "image/png",
            transparent: true,
            attribution: "&copy; Admin Kelurahan"
        }).addTo(map);

        var osmDefault = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; OpenStreetMap contributors'
        });

        var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team'
        });

        var legendUrl = "http://localhost:8080/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&LAYER=bidangsegoromadu";
        document.getElementById("legend").innerHTML = '<img src="' + legendUrl + '" alt="Legenda">';

        var basemap = {
            "OpenStreetMap": osmDefault,
            "OpenStreetMap Humanitarian": osmHOT
        };

        var overlaymap = {
            "Administrasi Kelurahan": wmsAdmin,
            "Bidang Tanah": wmsLayer1,
            "Jalan": wmsLayer2,
            "Sungai": wmsLayer3,
            "Batas Dukuh": wmsLayer4
        };

        L.control.layers(basemap, overlaymap).addTo(map);

        // Click info
        map.on('click', function(e) {
    var pos = e.latlng;
    var pt = map.latLngToContainerPoint(pos);
    var w = map.getSize().x;
    var h = map.getSize().y;
    var bnd = map.getBounds();
    var west = bnd.getWest();
    var east = bnd.getEast();
    var north = bnd.getNorth();
    var south = bnd.getSouth();

    $.ajax({
        url: "/geoserver/wms",
                data: {
                    service: "WMS",
                    version: "1.1.1",
                    request: "GetFeatureInfo",
                    info_format: "application/json",
                    layers: "bidangsegoromadu",
                    query_layers: "bidangsegoromadu",
                    width: w,
                    height: h,
                    x: parseInt(pt.x),
                    y: parseInt(pt.y),
                    bbox: west + "," + south + "," + east + "," + north
                },
                success: function(ajaxresult) {
                    console.log(ajaxresult);

                    var pro = ajaxresult.features[0].properties;
                    var content = "<table border=1><tr><th>Atribut</th><th>Keterangan</th></tr>";
                    $.each(pro, function(index, value) {
                        content += "<tr><td>" + index + "</td><td>" + value + "</td></tr>";
                    });
                    content += "</table>";
                    L.popup().setLatLng(pos).setContent(content).openOn(map);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    alert("Error");
                }
            });
        });
    </script>
</body>
</html>