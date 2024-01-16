var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ITINERAIREDACCES_1 = new ol.format.GeoJSON();
var features_ITINERAIREDACCES_1 = format_ITINERAIREDACCES_1.readFeatures(json_ITINERAIREDACCES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ITINERAIREDACCES_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ITINERAIREDACCES_1.addFeatures(features_ITINERAIREDACCES_1);
var lyr_ITINERAIREDACCES_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ITINERAIREDACCES_1, 
                style: style_ITINERAIREDACCES_1,
                interactive: true,
                title: '<img src="styles/legend/ITINERAIREDACCES_1.png" /> ITINERAIRE D\'ACCES'
            });
var format_ViaRhna_2 = new ol.format.GeoJSON();
var features_ViaRhna_2 = format_ViaRhna_2.readFeatures(json_ViaRhna_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViaRhna_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViaRhna_2.addFeatures(features_ViaRhna_2);
var lyr_ViaRhna_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViaRhna_2, 
                style: style_ViaRhna_2,
                interactive: true,
                title: '<img src="styles/legend/ViaRhna_2.png" /> ViaRhôna'
            });
var format_LIAISONSCYCLABLES_3 = new ol.format.GeoJSON();
var features_LIAISONSCYCLABLES_3 = format_LIAISONSCYCLABLES_3.readFeatures(json_LIAISONSCYCLABLES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIAISONSCYCLABLES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIAISONSCYCLABLES_3.addFeatures(features_LIAISONSCYCLABLES_3);
var lyr_LIAISONSCYCLABLES_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIAISONSCYCLABLES_3, 
                style: style_LIAISONSCYCLABLES_3,
                interactive: true,
    title: 'LIAISONS CYCLABLES<br />\
    <img src="styles/legend/LIAISONSCYCLABLES_3_0.png" /> EXISTANT<br />\
    <img src="styles/legend/LIAISONSCYCLABLES_3_1.png" /> COURT TERME<br />\
    <img src="styles/legend/LIAISONSCYCLABLES_3_2.png" /> MOYEN TERME<br />'
        });
var format_POLETOURISTIQUEASIGNALER_4 = new ol.format.GeoJSON();
var features_POLETOURISTIQUEASIGNALER_4 = format_POLETOURISTIQUEASIGNALER_4.readFeatures(json_POLETOURISTIQUEASIGNALER_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLETOURISTIQUEASIGNALER_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLETOURISTIQUEASIGNALER_4.addFeatures(features_POLETOURISTIQUEASIGNALER_4);
var lyr_POLETOURISTIQUEASIGNALER_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POLETOURISTIQUEASIGNALER_4, 
                style: style_POLETOURISTIQUEASIGNALER_4,
                interactive: true,
                title: '<img src="styles/legend/POLETOURISTIQUEASIGNALER_4.png" /> POLE TOURISTIQUE A SIGNALER'
            });
var format_POLEUTILITAIREASIGNALER_5 = new ol.format.GeoJSON();
var features_POLEUTILITAIREASIGNALER_5 = format_POLEUTILITAIREASIGNALER_5.readFeatures(json_POLEUTILITAIREASIGNALER_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLEUTILITAIREASIGNALER_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLEUTILITAIREASIGNALER_5.addFeatures(features_POLEUTILITAIREASIGNALER_5);
var lyr_POLEUTILITAIREASIGNALER_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POLEUTILITAIREASIGNALER_5, 
                style: style_POLEUTILITAIREASIGNALER_5,
                interactive: true,
                title: '<img src="styles/legend/POLEUTILITAIREASIGNALER_5.png" /> POLE UTILITAIRE A SIGNALER'
            });
var format_PROGRAMMESIGNALISATION_6 = new ol.format.GeoJSON();
var features_PROGRAMMESIGNALISATION_6 = format_PROGRAMMESIGNALISATION_6.readFeatures(json_PROGRAMMESIGNALISATION_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROGRAMMESIGNALISATION_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROGRAMMESIGNALISATION_6.addFeatures(features_PROGRAMMESIGNALISATION_6);
var lyr_PROGRAMMESIGNALISATION_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PROGRAMMESIGNALISATION_6, 
                style: style_PROGRAMMESIGNALISATION_6,
                interactive: true,
    title: 'PROGRAMME SIGNALISATION<br />\
    <img src="styles/legend/PROGRAMMESIGNALISATION_6_0.png" /> PHASE 1<br />\
    <img src="styles/legend/PROGRAMMESIGNALISATION_6_1.png" /> PHASE 2<br />\
    <img src="styles/legend/PROGRAMMESIGNALISATION_6_2.png" /> PHASE 3<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_ITINERAIREDACCES_1.setVisible(true);lyr_ViaRhna_2.setVisible(true);lyr_LIAISONSCYCLABLES_3.setVisible(true);lyr_POLETOURISTIQUEASIGNALER_4.setVisible(true);lyr_POLEUTILITAIREASIGNALER_5.setVisible(true);lyr_PROGRAMMESIGNALISATION_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ITINERAIREDACCES_1,lyr_ViaRhna_2,lyr_LIAISONSCYCLABLES_3,lyr_POLETOURISTIQUEASIGNALER_4,lyr_POLEUTILITAIREASIGNALER_5,lyr_PROGRAMMESIGNALISATION_6];
lyr_ITINERAIREDACCES_1.set('fieldAliases', {'VOCATION': 'VOCATION', 'ANTENNE': 'ANTENNE', 'REMARQUES': 'REMARQUES', 'SECURISE': 'SECURISE', 'TRAFIC': 'TRAFIC', });
lyr_ViaRhna_2.set('fieldAliases', {'name': 'name', });
lyr_LIAISONSCYCLABLES_3.set('fieldAliases', {'Nom': 'Nom', 'Priorite': 'Priorite', 'No_Liaison': 'No_Liaison', 'UTILITAIRE': 'UTILITAIRE', 'LOISIR': 'LOISIR', 'TOURISME': 'TOURISME', 'ETAT': 'ETAT', 'VOCATION': 'VOCATION', 'LINEAIRE': 'LINEAIRE', });
lyr_POLETOURISTIQUEASIGNALER_4.set('fieldAliases', {'SITES TOUR': 'SITES TOUR', 'Type d\'obj': 'Type d\'obj', 'Nom': 'Nom', 'Type d\'o_1': 'Type d\'o_1', 'Sous type1': 'Sous type1', 'Accueil V�': 'Accueil V�', 'Classement': 'Classement', 'Commune': 'Commune', 'Ouverture': 'Ouverture', 'Isolé': 'Isolé', 'Distance d': 'Distance d', 'Classé Po': 'Classé Po', 'HIERARCHIS': 'HIERARCHIS', });
lyr_POLEUTILITAIREASIGNALER_5.set('fieldAliases', {'NOM': 'NOM', 'ID': 'ID', 'CATEGORIE': 'CATEGORIE', 'SOUS CATEG': 'SOUS CATEG', });
lyr_PROGRAMMESIGNALISATION_6.set('fieldAliases', {'Identifian': 'Identifian', 'TYPE PROGR': 'TYPE PROGR', 'EPCI impla': 'EPCI impla', 'Commune im': 'Commune im', 'Voie d\'imp': 'Voie d\'imp', 'Photo': 'Photo', 'Identifi_1': 'Identifi_1', 'Code carre': 'Code carre', 'Code mât': 'Code mât', 'Code lame': 'Code lame', 'Type panne': 'Type panne', 'Typologie': 'Typologie', 'Site signa': 'Site signa', 'Type signa': 'Type signa', 'EPCI Site': 'EPCI Site', 'Site sig_1': 'Site sig_1', 'Type sig_1': 'Type sig_1', 'EPCI Sit_1': 'EPCI Sit_1', 'Site sig_2': 'Site sig_2', 'Type sig_2': 'Type sig_2', 'EPCI Sit_2': 'EPCI Sit_2', 'Sens flèc': 'Sens flèc', 'ID SC2': 'ID SC2', 'Logo écha': 'Logo écha', 'Mention 1': 'Mention 1', 'ID site si': 'ID site si', 'Distance 1': 'Distance 1', 'Mention 2': 'Mention 2', 'ID site _1': 'ID site _1', 'Distance 2': 'Distance 2', 'Mention 3': 'Mention 3', 'ID site _2': 'ID site _2', 'Dimension': 'Dimension', 'Dimensio_1': 'Dimensio_1', 'MAITRE D\'O': 'MAITRE D\'O', 'PHASAGE': 'PHASAGE', 'REMARQUES': 'REMARQUES', });
lyr_ITINERAIREDACCES_1.set('fieldImages', {'VOCATION': '', 'ANTENNE': '', 'REMARQUES': '', 'SECURISE': '', 'TRAFIC': '', });
lyr_ViaRhna_2.set('fieldImages', {'name': 'TextEdit', });
lyr_LIAISONSCYCLABLES_3.set('fieldImages', {'Nom': '', 'Priorite': '', 'No_Liaison': '', 'UTILITAIRE': '', 'LOISIR': '', 'TOURISME': '', 'ETAT': '', 'VOCATION': '', 'LINEAIRE': '', });
lyr_POLETOURISTIQUEASIGNALER_4.set('fieldImages', {'SITES TOUR': 'TextEdit', 'Type d\'obj': 'TextEdit', 'Nom': 'TextEdit', 'Type d\'o_1': 'TextEdit', 'Sous type1': 'TextEdit', 'Accueil V�': 'TextEdit', 'Classement': 'TextEdit', 'Commune': 'TextEdit', 'Ouverture': 'TextEdit', 'Isolé': 'TextEdit', 'Distance d': 'TextEdit', 'Classé Po': 'TextEdit', 'HIERARCHIS': 'TextEdit', });
lyr_POLEUTILITAIREASIGNALER_5.set('fieldImages', {'NOM': 'TextEdit', 'ID': 'TextEdit', 'CATEGORIE': 'TextEdit', 'SOUS CATEG': 'TextEdit', });
lyr_PROGRAMMESIGNALISATION_6.set('fieldImages', {'Identifian': 'TextEdit', 'TYPE PROGR': 'TextEdit', 'EPCI impla': 'TextEdit', 'Commune im': 'TextEdit', 'Voie d\'imp': 'TextEdit', 'Photo': 'TextEdit', 'Identifi_1': 'TextEdit', 'Code carre': 'TextEdit', 'Code mât': 'TextEdit', 'Code lame': 'TextEdit', 'Type panne': 'TextEdit', 'Typologie': 'TextEdit', 'Site signa': 'TextEdit', 'Type signa': 'TextEdit', 'EPCI Site': 'TextEdit', 'Site sig_1': 'TextEdit', 'Type sig_1': 'TextEdit', 'EPCI Sit_1': 'TextEdit', 'Site sig_2': 'TextEdit', 'Type sig_2': 'TextEdit', 'EPCI Sit_2': 'TextEdit', 'Sens flèc': 'TextEdit', 'ID SC2': 'TextEdit', 'Logo écha': 'TextEdit', 'Mention 1': 'TextEdit', 'ID site si': 'TextEdit', 'Distance 1': 'TextEdit', 'Mention 2': 'TextEdit', 'ID site _1': 'TextEdit', 'Distance 2': 'TextEdit', 'Mention 3': 'TextEdit', 'ID site _2': 'TextEdit', 'Dimension': 'TextEdit', 'Dimensio_1': 'TextEdit', 'MAITRE D\'O': 'TextEdit', 'PHASAGE': 'TextEdit', 'REMARQUES': 'TextEdit', });
lyr_ITINERAIREDACCES_1.set('fieldLabels', {'VOCATION': 'inline label', 'ANTENNE': 'inline label', 'REMARQUES': 'inline label', 'SECURISE': 'inline label', 'TRAFIC': 'inline label', });
lyr_ViaRhna_2.set('fieldLabels', {'name': 'inline label', });
lyr_LIAISONSCYCLABLES_3.set('fieldLabels', {'Nom': 'inline label', 'Priorite': 'inline label', 'No_Liaison': 'inline label', 'UTILITAIRE': 'inline label', 'LOISIR': 'inline label', 'TOURISME': 'inline label', 'ETAT': 'inline label', 'VOCATION': 'inline label', 'LINEAIRE': 'inline label', });
lyr_POLETOURISTIQUEASIGNALER_4.set('fieldLabels', {'SITES TOUR': 'inline label', 'Type d\'obj': 'inline label', 'Nom': 'inline label', 'Type d\'o_1': 'inline label', 'Sous type1': 'inline label', 'Accueil V�': 'inline label', 'Classement': 'inline label', 'Commune': 'inline label', 'Ouverture': 'inline label', 'Isolé': 'no label', 'Distance d': 'inline label', 'Classé Po': 'no label', 'HIERARCHIS': 'inline label', });
lyr_POLEUTILITAIREASIGNALER_5.set('fieldLabels', {'NOM': 'inline label', 'ID': 'inline label', 'CATEGORIE': 'inline label', 'SOUS CATEG': 'inline label', });
lyr_PROGRAMMESIGNALISATION_6.set('fieldLabels', {'Identifian': 'inline label', 'TYPE PROGR': 'inline label', 'EPCI impla': 'inline label', 'Commune im': 'inline label', 'Voie d\'imp': 'inline label', 'Photo': 'inline label', 'Identifi_1': 'inline label', 'Code carre': 'inline label', 'Code mât': 'inline label', 'Code lame': 'inline label', 'Type panne': 'inline label', 'Typologie': 'inline label', 'Site signa': 'inline label', 'Type signa': 'inline label', 'EPCI Site': 'inline label', 'Site sig_1': 'inline label', 'Type sig_1': 'inline label', 'EPCI Sit_1': 'inline label', 'Site sig_2': 'inline label', 'Type sig_2': 'inline label', 'EPCI Sit_2': 'inline label', 'Sens flèc': 'inline label', 'ID SC2': 'inline label', 'Logo écha': 'inline label', 'Mention 1': 'inline label', 'ID site si': 'inline label', 'Distance 1': 'inline label', 'Mention 2': 'inline label', 'ID site _1': 'inline label', 'Distance 2': 'inline label', 'Mention 3': 'inline label', 'ID site _2': 'inline label', 'Dimension': 'inline label', 'Dimensio_1': 'inline label', 'MAITRE D\'O': 'inline label', 'PHASAGE': 'inline label', 'REMARQUES': 'inline label', });
lyr_PROGRAMMESIGNALISATION_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});