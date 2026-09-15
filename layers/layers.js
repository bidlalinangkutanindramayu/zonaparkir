var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ZONAD_1 = new ol.format.GeoJSON();
var features_ZONAD_1 = format_ZONAD_1.readFeatures(json_ZONAD_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONAD_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONAD_1.addFeatures(features_ZONAD_1);
var lyr_ZONAD_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONAD_1, 
                style: style_ZONAD_1,
                popuplayertitle: 'ZONA D',
                interactive: true,
                title: '<img src="styles/legend/ZONAD_1.png" /> ZONA D'
            });
var format_ZONAC_2 = new ol.format.GeoJSON();
var features_ZONAC_2 = format_ZONAC_2.readFeatures(json_ZONAC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONAC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONAC_2.addFeatures(features_ZONAC_2);
var lyr_ZONAC_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONAC_2, 
                style: style_ZONAC_2,
                popuplayertitle: 'ZONA C',
                interactive: true,
                title: '<img src="styles/legend/ZONAC_2.png" /> ZONA C'
            });
var format_ZONAB_3 = new ol.format.GeoJSON();
var features_ZONAB_3 = format_ZONAB_3.readFeatures(json_ZONAB_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONAB_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONAB_3.addFeatures(features_ZONAB_3);
var lyr_ZONAB_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONAB_3, 
                style: style_ZONAB_3,
                popuplayertitle: 'ZONA B',
                interactive: true,
                title: '<img src="styles/legend/ZONAB_3.png" /> ZONA B'
            });
var format_ZONAA_4 = new ol.format.GeoJSON();
var features_ZONAA_4 = format_ZONAA_4.readFeatures(json_ZONAA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONAA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONAA_4.addFeatures(features_ZONAA_4);
var lyr_ZONAA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONAA_4, 
                style: style_ZONAA_4,
                popuplayertitle: 'ZONA A',
                interactive: true,
                title: '<img src="styles/legend/ZONAA_4.png" /> ZONA A'
            });
var format_ZONADPotensi_5 = new ol.format.GeoJSON();
var features_ZONADPotensi_5 = format_ZONADPotensi_5.readFeatures(json_ZONADPotensi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONADPotensi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONADPotensi_5.addFeatures(features_ZONADPotensi_5);
var lyr_ZONADPotensi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONADPotensi_5, 
                style: style_ZONADPotensi_5,
                popuplayertitle: 'ZONA D Potensi',
                interactive: true,
                title: '<img src="styles/legend/ZONADPotensi_5.png" /> ZONA D Potensi'
            });
var format_ZONACPotensi_6 = new ol.format.GeoJSON();
var features_ZONACPotensi_6 = format_ZONACPotensi_6.readFeatures(json_ZONACPotensi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONACPotensi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONACPotensi_6.addFeatures(features_ZONACPotensi_6);
var lyr_ZONACPotensi_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONACPotensi_6, 
                style: style_ZONACPotensi_6,
                popuplayertitle: 'ZONA C Potensi',
                interactive: true,
                title: '<img src="styles/legend/ZONACPotensi_6.png" /> ZONA C Potensi'
            });
var format_ZONABPotensi_7 = new ol.format.GeoJSON();
var features_ZONABPotensi_7 = format_ZONABPotensi_7.readFeatures(json_ZONABPotensi_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONABPotensi_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONABPotensi_7.addFeatures(features_ZONABPotensi_7);
var lyr_ZONABPotensi_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONABPotensi_7, 
                style: style_ZONABPotensi_7,
                popuplayertitle: 'ZONA B Potensi',
                interactive: true,
                title: '<img src="styles/legend/ZONABPotensi_7.png" /> ZONA B Potensi'
            });
var format_ZONAAPotensi_8 = new ol.format.GeoJSON();
var features_ZONAAPotensi_8 = format_ZONAAPotensi_8.readFeatures(json_ZONAAPotensi_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONAAPotensi_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONAAPotensi_8.addFeatures(features_ZONAAPotensi_8);
var lyr_ZONAAPotensi_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONAAPotensi_8, 
                style: style_ZONAAPotensi_8,
                popuplayertitle: 'ZONA A Potensi',
                interactive: true,
                title: '<img src="styles/legend/ZONAAPotensi_8.png" /> ZONA A Potensi'
            });

lyr_GoogleSatelite_0.setVisible(true);lyr_ZONAD_1.setVisible(true);lyr_ZONAC_2.setVisible(true);lyr_ZONAB_3.setVisible(true);lyr_ZONAA_4.setVisible(true);lyr_ZONADPotensi_5.setVisible(true);lyr_ZONACPotensi_6.setVisible(true);lyr_ZONABPotensi_7.setVisible(true);lyr_ZONAAPotensi_8.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_ZONAD_1,lyr_ZONAC_2,lyr_ZONAB_3,lyr_ZONAA_4,lyr_ZONADPotensi_5,lyr_ZONACPotensi_6,lyr_ZONABPotensi_7,lyr_ZONAAPotensi_8];
lyr_ZONAD_1.set('fieldAliases', {'id': 'id', 'NAMA JALAN': 'NAMA JALAN', 'PANJANG km': 'PANJANG km', });
lyr_ZONAC_2.set('fieldAliases', {'id': 'id', 'NAMA JALAN': 'NAMA JALAN', 'PANJANG km': 'PANJANG km', });
lyr_ZONAB_3.set('fieldAliases', {'id': 'id', 'NAMA JALAN': 'NAMA JALAN', 'PANJANG km': 'PANJANG km', });
lyr_ZONAA_4.set('fieldAliases', {'id': 'id', 'NAMA JALAN': 'NAMA JALAN', 'PANJANG km': 'PANJANG km', });
lyr_ZONADPotensi_5.set('fieldAliases', {'id': 'id', 'NAMA JALAN': 'NAMA JALAN', 'PANJANG km': 'PANJANG km', });
lyr_ZONACPotensi_6.set('fieldAliases', {'id': 'id', 'NAMA JALAN': 'NAMA JALAN', 'PANJANG km': 'PANJANG km', });
lyr_ZONABPotensi_7.set('fieldAliases', {'id': 'id', 'NAMA JALAN': 'NAMA JALAN', 'PANJANG km': 'PANJANG km', });
lyr_ZONAAPotensi_8.set('fieldAliases', {'id': 'id', 'NAMA JALAN': 'NAMA JALAN', 'PANJANG km': 'PANJANG km', });
lyr_ZONAD_1.set('fieldImages', {'id': 'TextEdit', 'NAMA JALAN': 'TextEdit', 'PANJANG km': '', });
lyr_ZONAC_2.set('fieldImages', {'id': 'TextEdit', 'NAMA JALAN': 'TextEdit', 'PANJANG km': '', });
lyr_ZONAB_3.set('fieldImages', {'id': 'TextEdit', 'NAMA JALAN': 'TextEdit', 'PANJANG km': '', });
lyr_ZONAA_4.set('fieldImages', {'id': 'TextEdit', 'NAMA JALAN': 'TextEdit', 'PANJANG km': 'TextEdit', });
lyr_ZONADPotensi_5.set('fieldImages', {'id': 'TextEdit', 'NAMA JALAN': 'TextEdit', 'PANJANG km': 'TextEdit', });
lyr_ZONACPotensi_6.set('fieldImages', {'id': 'TextEdit', 'NAMA JALAN': 'TextEdit', 'PANJANG km': 'TextEdit', });
lyr_ZONABPotensi_7.set('fieldImages', {'id': 'TextEdit', 'NAMA JALAN': 'TextEdit', 'PANJANG km': '', });
lyr_ZONAAPotensi_8.set('fieldImages', {'id': 'TextEdit', 'NAMA JALAN': 'TextEdit', 'PANJANG km': 'TextEdit', });
lyr_ZONAD_1.set('fieldLabels', {'id': 'inline label - visible with data', 'NAMA JALAN': 'inline label - visible with data', 'PANJANG km': 'inline label - visible with data', });
lyr_ZONAC_2.set('fieldLabels', {'id': 'inline label - visible with data', 'NAMA JALAN': 'inline label - visible with data', 'PANJANG km': 'inline label - visible with data', });
lyr_ZONAB_3.set('fieldLabels', {'id': 'inline label - visible with data', 'NAMA JALAN': 'inline label - visible with data', 'PANJANG km': 'inline label - visible with data', });
lyr_ZONAA_4.set('fieldLabels', {'id': 'inline label - visible with data', 'NAMA JALAN': 'inline label - visible with data', 'PANJANG km': 'inline label - visible with data', });
lyr_ZONADPotensi_5.set('fieldLabels', {'id': 'inline label - visible with data', 'NAMA JALAN': 'inline label - visible with data', 'PANJANG km': 'inline label - visible with data', });
lyr_ZONACPotensi_6.set('fieldLabels', {'id': 'inline label - visible with data', 'NAMA JALAN': 'inline label - visible with data', 'PANJANG km': 'inline label - visible with data', });
lyr_ZONABPotensi_7.set('fieldLabels', {'id': 'inline label - visible with data', 'NAMA JALAN': 'inline label - visible with data', 'PANJANG km': 'inline label - visible with data', });
lyr_ZONAAPotensi_8.set('fieldLabels', {'id': 'inline label - visible with data', 'NAMA JALAN': 'inline label - visible with data', 'PANJANG km': 'inline label - visible with data', });
lyr_ZONAAPotensi_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});