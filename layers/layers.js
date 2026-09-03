var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SIDAPADU_1 = new ol.format.GeoJSON();
var features_SIDAPADU_1 = format_SIDAPADU_1.readFeatures(json_SIDAPADU_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIDAPADU_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SIDAPADU_1.addFeatures(features_SIDAPADU_1);
var lyr_SIDAPADU_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SIDAPADU_1, 
                style: style_SIDAPADU_1,
                popuplayertitle: 'SIDAPADU',
                interactive: true,
    title: 'SIDAPADU<br />\
    <img src="styles/legend/SIDAPADU_1_0.png" /> <br />\
    <img src="styles/legend/SIDAPADU_1_1.png" /> 19.00000000000<br />\
    <img src="styles/legend/SIDAPADU_1_2.png" /> 34.00000000000<br />\
    <img src="styles/legend/SIDAPADU_1_3.png" /> 47.00000000000<br />\
    <img src="styles/legend/SIDAPADU_1_4.png" /> 52.00000000000<br />\
    <img src="styles/legend/SIDAPADU_1_5.png" /> 57.00000000000<br />\
    <img src="styles/legend/SIDAPADU_1_6.png" /> 70.00000000000<br />' });
var format_PendampinganLokusDesa_2 = new ol.format.GeoJSON();
var features_PendampinganLokusDesa_2 = format_PendampinganLokusDesa_2.readFeatures(json_PendampinganLokusDesa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PendampinganLokusDesa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PendampinganLokusDesa_2.addFeatures(features_PendampinganLokusDesa_2);
var lyr_PendampinganLokusDesa_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PendampinganLokusDesa_2, 
                style: style_PendampinganLokusDesa_2,
                popuplayertitle: 'Pendampingan Lokus Desa',
                interactive: true,
                title: '<img src="styles/legend/PendampinganLokusDesa_2.png" /> Pendampingan Lokus Desa'
            });

lyr_OSMStandard_0.setVisible(true);lyr_SIDAPADU_1.setVisible(true);lyr_PendampinganLokusDesa_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_SIDAPADU_1,lyr_PendampinganLokusDesa_2];
lyr_SIDAPADU_1.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', 'Intrvnsi_I': 'Rekomendasi Intervensi 1', 'Stunting': 'Jumlah Anak Stunting', 'R_Stunting': 'Jumlah Keluarga Resiko Stunting', 'Desil_I': 'Jumlah Desil 1', 'Desil_II': 'Jumlah Desil 2', 'Intrvns_II': 'Rekomendasi Intervensi 2', 'NIK': 'Jumlah Kepala Keluarga', 'D_III': 'Jumlah Desil 3', 'D_IV': 'Jumlah Desil 4', 'D_V': 'Jumlah Desil 5', 'D_VI': 'Jumlah Desil 6', 'Desa': 'Jumlah Desa', });
lyr_PendampinganLokusDesa_2.set('fieldAliases', {'Name': 'Name', 'Kecamatan': 'Kecamatan', 'Foto': 'Foto', });
lyr_SIDAPADU_1.set('fieldImages', {'KECAMATAN': 'TextEdit', 'Intrvnsi_I': 'TextEdit', 'Stunting': 'TextEdit', 'R_Stunting': 'TextEdit', 'Desil_I': 'TextEdit', 'Desil_II': 'TextEdit', 'Intrvns_II': 'TextEdit', 'NIK': 'TextEdit', 'D_III': 'TextEdit', 'D_IV': 'TextEdit', 'D_V': 'TextEdit', 'D_VI': 'TextEdit', 'Desa': 'TextEdit', });
lyr_PendampinganLokusDesa_2.set('fieldImages', {'Name': 'TextEdit', 'Kecamatan': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_SIDAPADU_1.set('fieldLabels', {'KECAMATAN': 'inline label - always visible', 'Intrvnsi_I': 'inline label - always visible', 'Stunting': 'inline label - always visible', 'R_Stunting': 'inline label - always visible', 'Desil_I': 'inline label - always visible', 'Desil_II': 'inline label - always visible', 'Intrvns_II': 'inline label - always visible', 'NIK': 'inline label - always visible', 'D_III': 'inline label - always visible', 'D_IV': 'inline label - visible with data', 'D_V': 'inline label - always visible', 'D_VI': 'inline label - always visible', 'Desa': 'inline label - always visible', });
lyr_PendampinganLokusDesa_2.set('fieldLabels', {'Name': 'no label', 'Kecamatan': 'no label', 'Foto': 'inline label - always visible', });
lyr_PendampinganLokusDesa_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});