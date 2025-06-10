var wms_layers = [];

var format_SungaiSegoroMadu_0 = new ol.format.GeoJSON();
var features_SungaiSegoroMadu_0 = format_SungaiSegoroMadu_0.readFeatures(json_SungaiSegoroMadu_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SungaiSegoroMadu_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SungaiSegoroMadu_0.addFeatures(features_SungaiSegoroMadu_0);
var lyr_SungaiSegoroMadu_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SungaiSegoroMadu_0, 
                style: style_SungaiSegoroMadu_0,
                popuplayertitle: 'SungaiSegoroMadu',
                interactive: true,
                title: '<img src="styles/legend/SungaiSegoroMadu_0.png" /> SungaiSegoroMadu'
            });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BatasDesaSegoroMadu1_2 = new ol.format.GeoJSON();
var features_BatasDesaSegoroMadu1_2 = format_BatasDesaSegoroMadu1_2.readFeatures(json_BatasDesaSegoroMadu1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDesaSegoroMadu1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesaSegoroMadu1_2.addFeatures(features_BatasDesaSegoroMadu1_2);
var lyr_BatasDesaSegoroMadu1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDesaSegoroMadu1_2, 
                style: style_BatasDesaSegoroMadu1_2,
                popuplayertitle: 'BatasDesaSegoroMadu1',
                interactive: true,
                title: '<img src="styles/legend/BatasDesaSegoroMadu1_2.png" /> BatasDesaSegoroMadu1'
            });
var format_JalanSegoroMadu_3 = new ol.format.GeoJSON();
var features_JalanSegoroMadu_3 = format_JalanSegoroMadu_3.readFeatures(json_JalanSegoroMadu_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanSegoroMadu_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanSegoroMadu_3.addFeatures(features_JalanSegoroMadu_3);
var lyr_JalanSegoroMadu_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanSegoroMadu_3, 
                style: style_JalanSegoroMadu_3,
                popuplayertitle: 'JalanSegoroMadu',
                interactive: true,
                title: '<img src="styles/legend/JalanSegoroMadu_3.png" /> JalanSegoroMadu'
            });
var format_BidangSegoroMadu_4 = new ol.format.GeoJSON();
var features_BidangSegoroMadu_4 = format_BidangSegoroMadu_4.readFeatures(json_BidangSegoroMadu_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BidangSegoroMadu_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BidangSegoroMadu_4.addFeatures(features_BidangSegoroMadu_4);
var lyr_BidangSegoroMadu_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BidangSegoroMadu_4, 
                style: style_BidangSegoroMadu_4,
                popuplayertitle: 'BidangSegoroMadu',
                interactive: true,
    title: 'BidangSegoroMadu<br />\
    <img src="styles/legend/BidangSegoroMadu_4_0.png" /> Hak Guna Bangunan<br />\
    <img src="styles/legend/BidangSegoroMadu_4_1.png" /> Hak Milik<br />\
    <img src="styles/legend/BidangSegoroMadu_4_2.png" /> Hak Pakai<br />\
    <img src="styles/legend/BidangSegoroMadu_4_3.png" /> Kosong<br />\
    <img src="styles/legend/BidangSegoroMadu_4_4.png" /> <br />' });

lyr_SungaiSegoroMadu_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_BatasDesaSegoroMadu1_2.setVisible(true);lyr_JalanSegoroMadu_3.setVisible(true);lyr_BidangSegoroMadu_4.setVisible(true);
var layersList = [lyr_SungaiSegoroMadu_0,lyr_OpenStreetMap_1,lyr_BatasDesaSegoroMadu1_2,lyr_JalanSegoroMadu_3,lyr_BidangSegoroMadu_4];
lyr_SungaiSegoroMadu_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_BatasDesaSegoroMadu1_2.set('fieldAliases', {'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', });
lyr_JalanSegoroMadu_3.set('fieldAliases', {'ID': 'ID', 'LENGTH': 'LENGTH', 'KETERANGAN': 'KETERANGAN', 'JENIS_JALA': 'JENIS_JALA', });
lyr_BidangSegoroMadu_4.set('fieldAliases', {'ID': 'ID', 'WILAYAHID': 'WILAYAHID', 'WILAYAHIND': 'WILAYAHIND', 'KODEWILAYA': 'KODEWILAYA', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'TIPEHAK': 'TIPEHAK', 'TIPEPRODUK': 'TIPEPRODUK', 'TAHUN': 'TAHUN', 'NIB': 'NIB', 'LUASTERTUL': 'LUASTERTUL', 'LUASPETA': 'LUASPETA', 'SUMBERGEOM': 'SUMBERGEOM', 'ALATUKUR': 'ALATUKUR', 'METODUKUR': 'METODUKUR', });
lyr_SungaiSegoroMadu_0.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', 'Shape_Le_1': '', });
lyr_BatasDesaSegoroMadu1_2.set('fieldImages', {'LEFT_FID': 'TextEdit', 'RIGHT_FID': 'TextEdit', });
lyr_JalanSegoroMadu_3.set('fieldImages', {'ID': 'TextEdit', 'LENGTH': 'TextEdit', 'KETERANGAN': 'TextEdit', 'JENIS_JALA': 'TextEdit', });
lyr_BidangSegoroMadu_4.set('fieldImages', {'ID': 'TextEdit', 'WILAYAHID': 'TextEdit', 'WILAYAHIND': 'TextEdit', 'KODEWILAYA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'TIPEHAK': 'TextEdit', 'TIPEPRODUK': 'TextEdit', 'TAHUN': 'TextEdit', 'NIB': 'TextEdit', 'LUASTERTUL': 'TextEdit', 'LUASPETA': 'TextEdit', 'SUMBERGEOM': 'TextEdit', 'ALATUKUR': 'TextEdit', 'METODUKUR': 'TextEdit', });
lyr_SungaiSegoroMadu_0.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_BatasDesaSegoroMadu1_2.set('fieldLabels', {'LEFT_FID': 'no label', 'RIGHT_FID': 'no label', });
lyr_JalanSegoroMadu_3.set('fieldLabels', {'ID': 'no label', 'LENGTH': 'no label', 'KETERANGAN': 'no label', 'JENIS_JALA': 'no label', });
lyr_BidangSegoroMadu_4.set('fieldLabels', {'ID': 'no label', 'WILAYAHID': 'no label', 'WILAYAHIND': 'no label', 'KODEWILAYA': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'TIPEHAK': 'no label', 'TIPEPRODUK': 'no label', 'TAHUN': 'no label', 'NIB': 'no label', 'LUASTERTUL': 'no label', 'LUASPETA': 'no label', 'SUMBERGEOM': 'no label', 'ALATUKUR': 'no label', 'METODUKUR': 'no label', });
lyr_BidangSegoroMadu_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});