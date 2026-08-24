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
    <img src="styles/legend/SIDAPADU_1_0.png" /> 0<br />\
    <img src="styles/legend/SIDAPADU_1_1.png" /> 19.00000000000<br />\
    <img src="styles/legend/SIDAPADU_1_2.png" /> 34.00000000000<br />\
    <img src="styles/legend/SIDAPADU_1_3.png" /> 47.00000000000<br />\
    <img src="styles/legend/SIDAPADU_1_4.png" /> 52.00000000000<br />\
    <img src="styles/legend/SIDAPADU_1_5.png" /> 57.00000000000<br />\
    <img src="styles/legend/SIDAPADU_1_6.png" /> 70.00000000000<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_SIDAPADU_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_SIDAPADU_1];
lyr_SIDAPADU_1.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', 'NIK': 'Jumlah Kepala Keluarga', 'Desa': 'Jumlah Desa', 'Inter_I': 'Rekomendasi Intervensi I', 'Inter_II': 'Rekomendasi Intervensi II', 'Stunting': 'Jumlah Anak Stunting', 'R_Stunting': 'Jumlah Keluarga Resiko Stunting', 'D_I': 'Jumlah Desil I', 'D_II': 'Jumlah Desil II', 'D_III': 'Jumlah Desil III', 'D_IV': 'Jumlah Desil IV', 'D_V': 'Jumlah Desil V', 'D_VI': 'Jumlah Desil VI', });
lyr_SIDAPADU_1.set('fieldImages', {'KECAMATAN': 'TextEdit', 'NIK': 'TextEdit', 'Desa': 'TextEdit', 'Inter_I': 'TextEdit', 'Inter_II': 'TextEdit', 'Stunting': 'TextEdit', 'R_Stunting': 'TextEdit', 'D_I': 'TextEdit', 'D_II': 'TextEdit', 'D_III': 'TextEdit', 'D_IV': 'TextEdit', 'D_V': 'TextEdit', 'D_VI': 'TextEdit', });
lyr_SIDAPADU_1.set('fieldLabels', {'KECAMATAN': 'inline label - always visible', 'NIK': 'inline label - always visible', 'Desa': 'inline label - always visible', 'Inter_I': 'inline label - always visible', 'Inter_II': 'inline label - always visible', 'Stunting': 'inline label - always visible', 'R_Stunting': 'inline label - always visible', 'D_I': 'inline label - always visible', 'D_II': 'inline label - always visible', 'D_III': 'inline label - always visible', 'D_IV': 'inline label - always visible', 'D_V': 'inline label - always visible', 'D_VI': 'inline label - always visible', });
lyr_SIDAPADU_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});