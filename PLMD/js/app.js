
var printurl = "https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task";

/*

//var plotUrl = "https://adnoconegisdev.adnoc.ae/portal/rest/services/Hosted/PropertyMaps/FeatureServer/6";
var plotUrl = "https://adnoconegisdev.adnoc.ae/portal/rest/services/Hosted/PropertyMaps/FeatureServer/3";
//var building2dUrl = "https://adnoconegisdev.adnoc.ae/portal/rest/services/Hosted/PropertyMaps/FeatureServer/7";

var building2dUrl="https://adnoconegisdev.adnoc.ae/portal/rest/services/Hosted/GSPU_3D_DATA/FeatureServer/1";
var floor2dUrl = "https://adnoconegisdev.adnoc.ae/portal/rest/services/Hosted/PropertyMaps/FeatureServer/4";
var rzoneUrl ="https://adnoconegisdev.adnoc.ae/portal/rest/services/Hosted/PropertyMaps/FeatureServer/3";
var rzonepUrl = "https://adnoconegisdev.adnoc.ae/portal/rest/services/Hosted/PropertyMaps/FeatureServer/5";

var dstreamplUrl = "https://adnoconegisdev.adnoc.ae/portal/rest/services/Hosted/PropertyMaps/FeatureServer/2";
var cispaUrl = "https://adnoconegisdev.adnoc.ae/portal/rest/services/Hosted/PropertyMaps/FeatureServer/0";
var exiscispaUrl = "https://adnoconegisdev.adnoc.ae/portal/rest/services/Hosted/PropertyMaps/FeatureServer/1";
*/
var plotUrl = "https://services9.arcgis.com/bFbEJDatCUwZ4T6r/arcgis/rest/services/Dexa_gdb/FeatureServer/8";
var building2dUrl = "https://services9.arcgis.com/bFbEJDatCUwZ4T6r/arcgis/rest/services/Dexa_gdb/FeatureServer/0";
var floor2dUrl = "https://services9.arcgis.com/bFbEJDatCUwZ4T6r/arcgis/rest/services/Dexa_gdb/FeatureServer/1";
var rzoneUrl = "https://services9.arcgis.com/bFbEJDatCUwZ4T6r/arcgis/rest/services/Dexa_gdb/FeatureServer/6";
var rzonepUrl = "https://services9.arcgis.com/bFbEJDatCUwZ4T6r/arcgis/rest/services/Dexa_gdb/FeatureServer/5";
var dstreamplUrl = "https://services9.arcgis.com/bFbEJDatCUwZ4T6r/arcgis/rest/services/Dexa_gdb/FeatureServer/2";
var cispaUrl = "https://services9.arcgis.com/bFbEJDatCUwZ4T6r/arcgis/rest/services/Dexa_gdb/FeatureServer/3";
var exiscispaUrl = "https://services9.arcgis.com/bFbEJDatCUwZ4T6r/arcgis/rest/services/Dexa_gdb/FeatureServer/4";
/*
var abkurl="http://10.63.1.28:6080/arcgis/rest/services/iCARTAv2/iCARTAv2_ABK/MapServer";
var adocurl="http://10.63.1.28:6080/arcgis/rest/services/iCARTAv2/iCARTAv2_ADOC/MapServer";
var alyasaturl="http://10.63.1.28:6080/arcgis/rest/services/iCARTAv2/iCARTAv2_AlYasat/MapServer";
var BaseMapGreyurl="http://10.63.1.28:6080/arcgis/rest/services/iCARTAv2/iCARTAv2_BaseMapGrey/MapServer";
var Boundaryurl="http://10.63.1.28:6080/arcgis/rest/services/iCARTAv2/iCARTAv2_Boundary/MapServer";
var Developmenturl="http://10.63.1.28:6080/arcgis/rest/services/iCARTAv2/iCARTAv2_Development/MapServer";
var Explorationurl="http://10.63.1.28:6080/arcgis/rest/services/iCARTAv2/iCARTAv2_Exploration/MapServer";
var GasProcessingurl="http://10.63.1.28:6080/arcgis/rest/services/iCARTAv2/iCARTAv2_GasProcessing/MapServer";
var HSEurl="http://10.63.1.28:6080/arcgis/rest/services/iCARTAv2/iCARTAv2_HSE/MapServer";
var Islandurl="http://10.63.1.28:6080/arcgis/rest/services/iCARTAv2/iCARTAv2_Island/MapServer";
var MSUurl="http://10.63.1.28:6080/arcgis/rest/services/iCARTAv2/iCARTAv2_MSU/MapServer";
var NTDBurl="http://10.63.1.28:6080/arcgis/rest/services/iCARTAv2/iCARTAv2_NTDB/MapServer";
var Offshoreurl="http://10.63.1.28:6080/arcgis/rest/services/iCARTAv2/iCARTAv2_Offshore/MapServer";
var Onshoreurl="http://10.63.1.28:6080/arcgis/rest/services/iCARTAv2/iCARTAv2_Onshore/MapServer";
var SourGasurl="http://10.63.1.28:6080/arcgis/rest/services/iCARTAv2/iCARTAv2_SourGas/MapServer";
var Wellurl="http://10.63.1.28:6080/arcgis/rest/services/iCARTAv2/iCARTAv2_Well/MapServer";

var AdnocConcurl="http://10.63.1.28:6080/arcgis/rest/services/NOC_Live/ADNOC_Concession/MapServer";
var Adnocstatiurl="http://10.63.1.28:6080/arcgis/rest/services/NOC_Live/ADNOC_Distribution/MapServer";
var gascourl="http://10.63.1.28:6080/arcgis/rest/services/NOC_Live/ADNOC_GasProcessing/MapServer";
var adnoclandurl="http://10.63.1.28:6080/arcgis/rest/services/NOC_Live/ADNOC_GSU/MapServer";
var adnocadmaurl="http://10.63.1.28:6080/arcgis/rest/services/NOC_Live/ADNOC_Offshore_ADMA/MapServer";
var adnoczadcourl="http://10.63.1.28:6080/arcgis/rest/services/NOC_Live/ADNOC_Offshore_ZADCO/MapServer";
var adnocadcourl="http://10.63.1.28:6080/arcgis/rest/services/NOC_Live/ADNOC_Onshore/MapServer";
var adnocppaurl="http://10.63.1.28:6080/arcgis/rest/services/NOC_Live/ADNOC_PPA/MapServer";
var adnoctakurl="http://10.63.1.28:6080/arcgis/rest/services/NOC_Live/ADNOC_Refining/MapServer";
var alhosnurl="http://10.63.1.28:6080/arcgis/rest/services/NOC_Live/ADNOC_SourGas/MapServer";
var adnocupstexpurl="http://10.63.1.28:6080/arcgis/rest/services/NOC_Live/ADNOC_Upstream_Exploration/MapServer";
*/

var attrib = {
    "PLOTS": {
        "CALCULATEDAREA": "CALCULATEDAREA", "COMMUNITYARA":"COMMUNITYARA","COMMUNITYENG":"COMMUNITYENG","COMMUNITYID":"COMMUNITYID","CREATIONDATE":"CREATIONDATE","DISTRICTARA":"DISTRICTARA","DISTRICTENG":"DISTRICTENG","DISTRICTID":"DISTRICTID",
    "GISID": "GISID", "MUNICIPALITYARA": "MUNICIPALITYARA", "MUNICIPALITYENG": "MUNICIPALITYENG", "PLOTNUMBER": "PLOTNUMBER", "ROADID": "ROADID", "SECUSEENG": "SECUSEENG", "FLAT_ID": "FLAT_ID", "OWNERSHIP": "OWNERSHIP", "SITECODE": "SITECODE", "PRIMARYUSEENG": "PRIMARYUSEENG", "ADDRESSLOCATION": "ADDRESSLOCATION", "USAGEBYCOMPANY": "USAGEBYCOMPANY",
    "OWNERSHIPTYPE": "OWNERSHIPTYPE", "POSSESIONTYPE": "POSSESIONTYPE", "FACILITYNAME": "FACILITYNAME", "SITEPLANSTATUS": "SITEPLANSTATUS", "SITEPLANISSUEDATE": "SITEPLANISSUEDATE", "LANDVALUEAED": "LANDVALUEAED", "RENTALPERSQM": "RENTALPERSQM", "RENTALVALUEAED": "RENTALVALUEAED", "RENTALSTATUS": "RENTALSTATUS", "VERIFICATIONSTATUS": "VERIFICATIONSTATUS",
    "CONSTRUCTIONSTATUS": "CONSTRUCTIONSTATUS", "UTILITYSTATUS": "UTILITYSTATUS", "SITEPLAN":"SITEPLAN"},
"BUILDINGS":{
"BUILDINGNUMBEROFFLOORS":"BUILDINGNUMBEROFFLOORS","NAMEARABIC":"NAMEARABIC","NAMEENGLISH":"NAMEENGLISH","NAMEPOPULARARABIC":"NAMEPOPULARARABIC","NAMEPOPULARENGLISH":"NAMEPOPULARENGLISH","PRIMARYUSAGETYPE":"PRIMARYUSAGETYPE",
"SECONDARYUSAGETYPE":"SECONDARYUSAGETYPE","MUNICIPALITYARA":"MUNICIPALITYARA","MUNICIPALITYENG":"MUNICIPALITYENG","Height":"Height","BUILDINGAREA":"BUILDINGAREA","SITECODE":"SITECODE","BUILDINGCODE":"BUILDINGCODE",
"BUILDINGID":"BUILDINGID","AREANAME":"AREANAME","NUMBEROFFLATS":"NUMBEROFFLATS","NUMBEROFOFFICES":"NUMBEROFOFFICES","BUILTUPAREA":"BUILTUPAREA","LETTABLEAREA":"LETTABLEAREA","CURRENTVALUE":"CURRENTVALUE",
"REPLACEMENTCOST":"REPLACEMENTCOST","SITEBUILDINGCODE":"SITEBUILDINGCODE","YEARBUILT":"YEARBUILT"},
"FLOORS":{
"BUILDINGNUMBEROFFLOORS":"BUILDINGNUMBEROFFLOORS","NAMEARABIC":"NAMEARABIC","NAMEENGLISH":"NAMEENGLISH","PRIMARYUSAGETYPE":"PRIMARYUSAGETYPE","SECONDARYUSAGETYPE":"SECONDARYUSAGETYPE","MUNICIPALITYARA":"MUNICIPALITYARA",
"MUNICIPALITYENG":"MUNICIPALITYENG","Height":"Height","BUILDINGCODE":"BUILDINGCODE","FLOORNAME":"FLOORNAME","FLOORAREA":"FLOORAREA","FLOORCODE":"FLOORCODE","AREANAME":"AREANAME","NUMBEROFFLATS":"NUMBEROFFLATS",
"NUMBEROFOFFICES":"NUMBEROFOFFICES","BUILTUPAREA":"BUILTUPAREA","LETTABLEAREA":"LETTABLEAREA","FACILITIESAVAILABLE":"FACILITIESAVAILABLE"},
"RUWAIS_ZONE_PLOTS":{"PLOT_NAME":"PLOT_NAME","ZONE":"ZONE"},
"RUWAIS_ZONES":{"ZONE_NAME":"ZONE_NAME"},
"DOWNSTREAMPLOTS":{"STATUS":"STATUS","SITENAME":"SITENAME"},
"EXISTING_CISPA_BOUNDARY":{"INFO":"INFO"}
		};

var symbolplay=[{"legend":"ruwaiszone","symbology":[{"symcolor":[0, 0,0,0],"outlinecolor":[0,0,0, 1],"style":"solid","width":"2px"}],"title":"Ruwais Zones", "label":"Ruwais Zones", "type":"simple-fill"},
		{"legend":"ruwaiszoneplots","symbology":[{"symcolor":[0, 0,0,0],"outlinecolor":[230,0,0, 1],"width":"2px","style":"solid"}],"title":"Ruwais Zone Plots", "label":"Ruwais Zone Plots", "type":"simple-fill"},
		{"legend":"plot","symbology":[{"symcolor":[0, 112, 255, 0.1],"outlinecolor":[0, 112, 255, 1],"width":"3px","style":"solid"}],"title":"Plots", "label":"Plots", "type":"simple-fill"},
		{"legend":"plotlandusage","field":attrib.PLOTS.PRIMARYUSEENG,"symbology":[{"value":"COMMERCIAL","Label":"Commercial","symcolor":[255, 127,127, 0.3],"outlinecolor":[0, 112, 255, 1],"width":"3px","style":"solid"},{"value":"EDUCATIONAL","Label":"Educational","symcolor":[211,255,190, 0.3],"outlinecolor":[0, 112, 255, 1],"width":"3px","style":"solid"},{"value":"INDUSTRIAL","Label":"Industrial","symcolor":[255,170,0, 0.3],"outlinecolor":[0, 112, 255, 1],"width":"3px","style":"solid"},{"value":"MULTIUSE","Label":"Multi Use","symcolor":[255,115,223, 0.3],"outlinecolor":[0, 112, 255, 1],"width":"3px","style":"solid"},{"value":"RESIDENTIAL","Label":"Residential","symcolor":[255,235,190, 0.3],"outlinecolor":[0, 112, 255, 1],"width":"3px","style":"solid"}],"title":"Plot Landuse", "label":"Plot Landuse", "type":"simple-fill"},
{"legend":"builindusage","field":attrib.BUILDINGS.PRIMARYUSAGETYPE,"symbology":[{"value":"ADMINISTRATIVE","Label":"Administrative",symcolor:[209, 229, 253, 1],"outlinecolor":[110, 110, 110, 1],"width":"1px","style":"solid"},{"value":"COMMERCIAL","Label":"Commercial",symcolor:[255, 127, 127, 1],"outlinecolor":[110, 110, 110, 1],"width":"1px","style":"solid"},{"value":"EDUCATIONAL","Label":"Educational",symcolor:[211, 255, 190, 1],"outlinecolor":[110, 110, 110, 1],"width":"1px","style":"solid"},{"value":"GOVERNMENTAL","Label":"Governmental",symcolor:[190, 210, 255, 1],"outlinecolor":[110, 110, 110, 1],"width":"1px","style":"solid"},{"value":"HEALTH","Label":"Health",symcolor:[255, 0, 0, 1],"outlinecolor":[110, 110, 110, 1],"width":"1px","style":"solid"},{"value":"RECREATIONAL","Label":"Recreational",symcolor:[0, 112, 255, 1],"outlinecolor":[110, 110, 110, 1],"width":"1px","style":"solid"},{"value":"RELIGIOUS","Label":"Religious",symcolor:[56, 168, 0, 1],"outlinecolor":[110, 110, 110, 1],"width":"1px","style":"solid"},{"value":"RESIDENTIAL","Label":"Residential",symcolor:[255, 235, 190, 1],"outlinecolor":[110, 110, 110, 1],"width":"1px","style":"solid"},{"value":"SERVICES","Label":"Services",symcolor:[232, 190, 255, 1],"outlinecolor":[110, 110, 110, 1],"width":"1px","style":"solid"},{"value":"SPORTS","Label":"Sports",symcolor:[255, 211, 127, 1],"outlinecolor":[110, 110, 110, 1],"width":"1px","style":"solid"},{"value":"UTILITY","Label":"Utility",symcolor:[255, 190, 232, 1],"outlinecolor":[110, 110, 110, 1],"width":"1px","style":"solid"},{"value":"UNDEFINED","Label":"Undefined",symcolor:[169, 0, 230, 1],"outlinecolor":[110, 110, 110, 1],"width":"1px","style":"solid"}],"title":"Building Usage", "label":"Building Usage", "type":"simple-fill"},
{"legend":"builindusage","field":attrib.BUILDINGS.PRIMARYUSAGETYPE,"symbology":[{"value":"ADMINISTRATIVE","Label":"Administrative","symcolor":[209, 229, 253, 0.7],"outlinecolor":[110, 110, 110, 0.7],"width":1},{"value":"COMMERCIAL","Label":"Commercial","symcolor":[255, 127, 127, 0.7],"outlinecolor":[110, 110, 110, 0.7],"width":1},{"value":"EDUCATIONAL","Label":"Educational","symcolor":[211, 255, 190, 0.7],"outlinecolor":[110, 110, 110, 0.7],"width":1},{"value":"GOVERNMENTAL","Label":"Governmental","symcolor":[190, 210, 255, 0.7],"outlinecolor":[110, 110, 110, 0.7],"width":1},{"value":"HEALTH","Label":"Health","symcolor":[255, 0, 0, 0.7],"outlinecolor":[110, 110, 110, 0.7],"width":1},{"value":"RECREATIONAL","Label":"Recreational","symcolor":[0, 112, 255, 0.7],"outlinecolor":[110, 110, 110, 0.7],"width":1},{"value":"RELIGIOUS","Label":"Religious","symcolor":[56, 168, 0, 0.7],"outlinecolor":[110, 110, 110, 0.7],"width":1},{"value":"RESIDENTIAL","Label":"Residential","symcolor":[255, 235, 190, 0.7],"outlinecolor":[110, 110, 110, 0.7],"width":1},{"value":"SERVICES","Label":"Services","symcolor":[232, 190, 255, 0.7],"outlinecolor":[110, 110, 110, 0.7],"width":1},{"value":"SPORTS","Label":"Sports","symcolor":[255, 211, 127, 0.7],"outlinecolor":[110, 110, 110, 0.7],"width":1},{"value":"UTILITY","Label":"Utility","symcolor":[255, 190, 232, 0.7],"outlinecolor":[110, 110, 110, 0.7],"width":1},{"value":"UNDEFINED","Label":"Undefined","symcolor":[169, 0, 230, 0.7],"outlinecolor":[110, 110, 110, 0.7],"width":1}],"title":"Building Usage", "label":"Building Usage","heightfield":"Height", "type":"polygon-3d"},
{"legend":"downstream","field":attrib.DOWNSTREAMPLOTS.STATUS,"symbology":[{"value":"Existing / Utilized","Label":"Existing / Utilized","symcolor":[255, 127, 127, 0.5],"outlinecolor":[0,92,230, 1],"width":"1px"},{"value":"Future Down Stream Plan","Label":"Future Down Stream Plan","symcolor":[0, 112, 255, 0.5],"outlinecolor":[0,92,230, 1],"width":"1px"},{"value":"ADNOC Fertilizer","Label":"ADNOC Fertilizer","symcolor":[104,104,104, 0.5],"outlinecolor":[0,92,230, 1],"width":"1px"},{"value":"Allocated Future Expansion for ADNOC Refining","Label":"Allocated Future Expansion for ADNOC Refining","symcolor":[230,152,0, 0.5],"outlinecolor":[0,92,230, 1],"width":"1px"},{"value":"ADNOC Beach","Label":"ADNOC Beach","symcolor":[230,0,169, 0.5],"outlinecolor":[0,92,230, 1],"width":"1px"},{"value":"Danat Hotel","Label":"Danat Hotel","symcolor":[0, 168,132, 0.5],"outlinecolor":[0,92,230, 1],"width":"1px"}],"title":"Plot Usage", "label":"Plot Usage", "type":"simple-fill"},
{"legend":"cispaline_rec","symbology":[{"symcolor":"blue","style":"short-dash-dot-dot","width":"3px"}],"title":"CISPA Boundary Limit", "label":"CISPA Boundary Limit", "type":"simple-line"},
{"legend":"cispaline_exist","symbology":[{"symcolor":"red","style":"short-dash-dot-dot","width":"3px"}],"title":"Existing CISPA Boundary", "label":"Existing CISPA Boundary", "type":"simple-line"},
];

var labelclasses = [{"label":"plot", "symcolor": "white", "haloColor": "black", "halosize": "2px", "fontfamily": "Arial", "fontsize": 14, "fontweight": "bold", "minscale": 20000, "labexp": attrib.PLOTS.PLOTNUMBER },
{ "label": "ruwaiszone", "symcolor": "black", "haloColor": "white", "halosize": "2px", "fontfamily": "Arial", "fontsize": 12, "fontweight": "bold", "minscale": 20000, "labexp": attrib.RUWAIS_ZONES.ZONE_NAME },
{ "label": "ruwaiszoneplots", "symcolor": "red", "haloColor": "white", "halosize": "2px", "fontfamily": "Arial", "fontsize": 12, "fontweight": "bold", "minscale": 20000, "labexp": attrib.RUWAIS_ZONE_PLOTS.PLOT_NAME },
{ "label": "bildings", "symcolor": "brown", "haloColor": "white", "halosize": "2px", "fontfamily": "Arial", "fontsize": 8, "fontweight": "bold", "minscale": 4000, "labexp": attrib.BUILDINGS.NAMEENGLISH },
{ "label": "floors", "symcolor": "blue", "haloColor": "white", "halosize": "2px", "fontfamily": "Arial", "fontsize": 8, "fontweight": "bold", "minscale": 4000, "labexp": attrib.FLOORS.FLOORNAME },
{ "label": "downstreamplots", "symcolor": "blue", "haloColor": "white", "halosize": "1px", "fontfamily": "Arial", "fontsize": 8, "fontweight": "bold", "minscale": 80000, "labexp": attrib.DOWNSTREAMPLOTS.SITENAME },
{ "label": "default", "symcolor": "blue", "haloColor": "white", "halosize": "1px", "fontfamily": "Arial", "fontsize": 0, "fontweight": "bold", "minscale": 0, "labexp": "OBJECTID" }
];

var popuptemps = [{"url": building2dUrl, "TITLE": [attrib.BUILDINGS.NAMEENGLISH, attrib.BUILDINGS.AREANAME], "IMAGENAME": [attrib.BUILDINGS.NAMEENGLISH, attrib.BUILDINGS.BUILDINGCODE], "NOPICS": attrib.BUILDINGS.NOOFPICS, "IMAGEINFO": attrib.BUILDINGS.BUILDINGINFO, "CONTENT": "TEXT","HEADINGINFO": [{ "HEADING": "SITE NAME", "VALUE": attrib.BUILDINGS.AREANAME }, { "HEADING": "BUILDING NAME", "VALUE": attrib.BUILDINGS.NAMEENGLISH }, { "HEADING": "NO. OF FLOORS", "VALUE": attrib.BUILDINGS.BUILDINGNUMBEROFFLOORS }, { "HEADING": "NO. OF FLATS", "VALUE": attrib.BUILDINGS.NUMBEROFFLATS }, { "HEADING": "PRIMARY USAGE", "VALUE": attrib.BUILDINGS.PRIMARYUSAGETYPE }, { "HEADING": "SECONDARY USAGE", "VALUE": attrib.BUILDINGS.SECONDARYUSAGETYPE }, { "HEADING": "CURRENT VALUE", "VALUE": attrib.BUILDINGS.CURRENTVALUE, "ADDING": "AED", "FUNC": "NUM" }, { "HEADING": "REPLACEMENT COST", "VALUE": attrib.BUILDINGS.REPLACEMENTCOST, "ADDING": "AED", "FUNC": "NUM" }, { "HEADING": "BUILDING HEIGHT", "VALUE": attrib.BUILDINGS.Height, "ADDING": "m", "FUNC": "NUM" }, { "HEADING": "BUILDING FOOTPRINT AREA", "VALUE": attrib.BUILDINGS.BUILDINGAREA, "ADDING": "m<sup>2</sup>", "FUNC": "NUM" }, { "HEADING": "BUILTUP AREA", "VALUE": attrib.BUILDINGS.BUILTUPAREA, "ADDING": "m<sup>2</sup>", "FUNC": "NUM" }, { "HEADING": "LETTABLE AREA", "VALUE": attrib.BUILDINGS.LETTABLEAREA, "ADDING": "m<sup>2</sup>", "FUNC": "NUM" }]},
{"url": floor2dUrl, "TITLE": [attrib.FLOORS.FLOORNAME, attrib.FLOORS.NAMEENGLISH, attrib.FLOORS.AREANAME], "CONTENT": "TEXT","HEADINGINFO": [{ "HEADING": "SITE NAME", "VALUE": attrib.FLOORS.AREANAME }, { "HEADING": "BUILDING NAME", "VALUE": attrib.FLOORS.NAMEENGLISH }, { "HEADING": "FLOOR NUMBER", "VALUE": attrib.FLOORS.FLOORNAME }, { "HEADING": "PRIMARY USAGE", "VALUE": attrib.FLOORS.PRIMARYUSAGETYPE }, { "HEADING": "SECONDARY USAGE", "VALUE": attrib.FLOORS.SECONDARYUSAGETYPE }, { "HEADING": "HEIGHT OF FLOOR", "VALUE": attrib.FLOORS.Height, "ADDING": "m", "FUNC": "NUM" }, { "HEADING": "FLOOR BUILTUP AREA", "VALUE": attrib.FLOORS.BUILTUPAREA, "ADDING": "m<sup>2</sup>", "FUNC": "NUM" }, { "HEADING": "FLOOR LETTABLE AREA", "VALUE": attrib.FLOORS.LETTABLEAREA, "ADDING": "m<sup>2</sup>", "FUNC": "NUM" }, { "HEADING": "FACILITIES AVAILABLE ON THE FLOOR", "VALUE": attrib.FLOORS.FACILITIESAVAILABLE, "FUNC": "COMMASEP" }]},
    {
        "url": plotUrl, "TITLE": [attrib.PLOTS.PLOTNUMBER, attrib.PLOTS.COMMUNITYENG, attrib.PLOTS.DISTRICTENG], "CONTENT": "TEXT", "HEADINGINFO": [{ "HEADING": "PLOT NUMBER", "VALUE": attrib.PLOTS.PLOTNUMBER }, { "HEADING": "ADDRESS LOCATION", "VALUE": attrib.PLOTS.ADDRESSLOCATION }, { "HEADING": "PLOT AREA", "VALUE": attrib.PLOTS.CALCULATEDAREA, "ADDING": "m<sup>2</sup>", "FUNC": "NUM" }, { "HEADING": "LAND VALUE", "VALUE": attrib.PLOTS.LANDVALUEAED, "ADDING": "AED", "FUNC": "NUM" }, { "HEADING": "DISTRICT NAME", "VALUE": attrib.PLOTS.DISTRICTENG }, { "HEADING": "COMMUNITY NAME", "VALUE": attrib.PLOTS.COMMUNITYENG }, { "HEADING": "MUNICIPALITY NAME", "VALUE": attrib.PLOTS.MUNICIPALITYENG }, { "HEADING": "USAGE BY COMPANY", "VALUE": attrib.PLOTS.USAGEBYCOMPANY }, { "HEADING": "OWNERSHIP TYPE", "VALUE": attrib.PLOTS.OWNERSHIPTYPE }, { "HEADING": "POSSESSION TYPE", "VALUE": attrib.PLOTS.POSSESIONTYPE }, { "HEADING": "OWNER NAME", "VALUE": attrib.PLOTS.OWNERSHIP }, { "HEADING": "PRIMARY USAGE", "VALUE": attrib.PLOTS.PRIMARYUSEENG }, { "HEADING": "SECONDARY USAGE", "VALUE": attrib.PLOTS.SECUSEENG }, { "HEADING": "FACILITY NAME", "VALUE": attrib.PLOTS.FACILITYNAME }, { "HEADING": "SITE PLAN STATUS", "VALUE": attrib.PLOTS.SITEPLANSTATUS }, { "HEADING": "SITE PLAN ISSUE DATE", "VALUE": attrib.PLOTS.SITEPLANISSUEDATE, "FUNC":"DATE" },
            { "HEADING": "RENTAL PER SQM", "VALUE": attrib.PLOTS.RENTALPERSQM, "ADDING": "AED", "FUNC": "NUM" }, { "HEADING": "RENTAL VALUE OF LAND", "VALUE": attrib.PLOTS.RENTALVALUEAED, "ADDING": "AED", "FUNC": "NUM" }, { "HEADING": "RENTAL STATUS", "VALUE": attrib.PLOTS.RENTALSTATUS }, { "HEADING": "CONSTRUCTION STATUS", "VALUE": attrib.PLOTS.CONSTRUCTIONSTATUS }, { "HEADING": "UTILITY STATUS", "VALUE": attrib.PLOTS.UTILITYSTATUS }, { "HEADING": "SITEPLAN (CAFM LINK)", "VALUE": attrib.PLOTS.SITEPLAN, "FUNC": "HLINK" }]
    }
];

var symbolsty=[];
var Renderer=[];
for (k in symbolplay){ var symbologys=symbolplay[k].symbology; var jku=[];
var lengi=symbologys.length-1;



for (j in symbologys){
if(symbolplay[k].type==="simple-fill"){ 
symbolsty[j]={
        type: "simple-fill",
	color: symbologys[j].symcolor,
        outline: {
            color: symbologys[j].outlinecolor,
	    style: symbologys[j].style,
            width: symbologys[j].width
        }
    };
} else if (symbolplay[k].type==="polygon-3d"){
symbolsty[j]={
        type: "polygon-3d", // autocasts as new PolygonSymbol3D()
        symbolLayers: [{
            type: "extrude", // autocasts as new ExtrudeSymbol3DLayer()
            material: {
                color: symbologys[j].symcolor
            },
            edges: {
                type: "solid",
                color: symbologys[j].outlinecolor,
                size: symbologys[j].width
            }
        }]
    };


} else if (lengi===0 && symbolplay[k].type==="simple-line"){
symbolsty[j]={
        type: "simple-line",
	color: symbologys[j].symcolor,
	style: symbologys[j].style,
        width: symbologys[j].width
    };
} 
jku.push(symbolsty[j]);
}  // j loop
if(lengi===0){
Renderer[k] = {
        type: "unique-value",
        legendOptions: {
            title: symbolplay[k].title
        },
        defaultSymbol: symbolsty[0],
        defaultLabel: symbolplay[k].label,
    }; 
}

if(lengi>=1 && symbolplay[k].type==="simple-fill"){ 
var ghu=[];
for ( kd in symbologys){ghu[kd]={value:symbologys[kd].value,symbol:jku[kd], label: symbologys[kd].Label}}
Renderer[k] = {
 	type: "unique-value", 
        legendOptions: {
            title: symbolplay[k].title
        },
        defaultSymbol: symbolsty[lengi],
        defaultLabel: symbolplay[k].title,
        field: symbolplay[k].field,
	uniqueValueInfos:ghu
};
}
if(lengi>=1 && symbolplay[k].type==="polygon-3d"){
var ghus=[];
for ( kd in symbologys){ghus[kd]={value:symbologys[kd].value,symbol:jku[kd], label: symbologys[kd].Label}}
Renderer[k] = {
 	type: "unique-value", 
        legendOptions: {
            title: symbolplay[k].title
        },
        defaultSymbol: symbolsty[lengi],
        defaultLabel: symbolplay[k].title,
        field: symbolplay[k].field,
        uniqueValueInfos: ghus,
	 visualVariables: [{ type: "size", field: symbolplay[k].heightfield, valueUnit: "meters" }]
};
}
}  // k loop


var labelinfos = [];
for (k in labelclasses) {
    labelinfos[k] = {symbol: {
            type: "text", 
            color: labelclasses[k].symcolor,
            haloColor: labelclasses[k].haloColor,
            haloSize: labelclasses[k].halosize,
            font: {
                family: labelclasses[k].fontfamily,
                size: labelclasses[k].fontsize,
                weight: labelclasses[k].fontweight }},
        labelPlacement: "always-horizontal",
        minScale: labelclasses[k].minscale,
        labelExpressionInfo: {
            expression: "$feature."+labelclasses[k].labexp
        }};
}


var templates = [];
var imagehead = [];
for (j in popuptemps) {
    var titlehead = popuptemps[j].TITLE; var kui = ""; for (k in titlehead) { kui += "{" + titlehead[k] + "}"; var origlen = titlehead.length - 1; if (origlen > k) { kui += "-"; } }
    imagehead[j] = popuptemps[j].IMAGENAME;  
    var contentinfo = popuptemps[j].HEADINGINFO;
    var jui = "", liu = "", hyu="";
    if (popuptemps[j].IMAGENAME) {
        liu = "<table class='esri-widget__table' summary='List of attributes and values'><tbody>{" + j + ": imgfunc}</tbody></table>"; 
       hyu=      "<div id='myModal' class='modal'>" +
                 "<span class='close'>&times;</span>" +
                "<div id='modalimg'><img class='modal-content' id='img01'></div>" +
              "<div id='modalstorydiv'>{"+popuptemps[j].IMAGEINFO+"}</div>" +
            "</div>"; }
   
    for (k in contentinfo) {var jkl = "", klm = "";
        if (contentinfo[k].FUNC === "NUM") { jkl = ":templatefunc"; } else if (contentinfo[k].FUNC === "HLINK") { jkl = ":templatefunchlink"; } else if (contentinfo[k].FUNC === "DATE") { jkl = ":templatefuncdate"; } else if (contentinfo[k].FUNC === "COMMASEP") {  jkl = ":templatefunccomma"; } else { jkl = ":templatefuncstr"; }
        if (contentinfo[k].ADDING) { klm = " " +contentinfo[k].ADDING; }
        jui += "<tr><th class='esri-feature__field-header'>" + contentinfo[k].HEADING + "</th><th class='esri-feature__field-data'>{" + contentinfo[k].VALUE + jkl+"}"+klm+"</th></tr>";
    }
    jui += "<tr><td colspan='2'>"+liu+"</td></tr>";
    templates[j] = {title: "<b><font color='dimgray'>" + kui + "</font></b>",
        content: [{ type: "text", text: "<table class='esri-widget__table'summary='List of attributes and values'><tbody>" + jui + "</tbody></table>"+hyu }]
      
    };
}

var templatefunc = function (value, key, data) { var dstring = value; if (dstring) { var dstr = dstring.toFixed(1); } else { var dstr = "N/A"; } return dstr; };
var templatefunchlink = function (value, key, data) { var dstringh = value; if (dstringh) { var dstr2 = "<a href='" + dstringh + "'> Check Site Map <a>"; } else { var dstr2 = "N/A"; } return dstr2; };
var templatefuncdate = function (value, key, data) { var dstringd = value; if (dstringd) { var dstrd3 = new Date(dstringd); /*dstrd3.format = "EEE MMM dd yyyy";*/ var dstr3 = dstrd3; } else { var dstr3 = "N/A"; } return dstr3; };
var templatefuncstr = function (value, key, data) { var dstring1 = value; if (dstring1) { var dstr1 = dstring1; } else { var dstr1 = "N/A"; } return dstr1; };
var templatefunccomma = function(value, key, data){
        var dstring = value;
        if(dstring){
            var newdatafloor=dstring.split(', ');  
            var floorfac=[];
            for (var i=0; i<newdatafloor.length; i++){
                if(newdatafloor[i]=="."||newdatafloor[i]==".."){floorfac[i]="";}
                else{ if(newdatafloor[0]==".."){ floorfac[i]="<img width='60' height='30' src='images/pics/"+newdatafloor[i]+".jpg'><br>"+newdatafloor[i].toUpperCase()+"<br><br>";} else {floorfac[i]="("+i+") "+newdatafloor[i].toUpperCase()+"<br><br>";} }
            }
            return floorfac.join(',').replace(/,/g, ' ');
        }
        else {return "NO DATA AVAILABLE"}
    };
var imgfunc = function (value, key, data) {
    var imageheads = popuptemps[key].IMAGENAME; var kuin = ""; for (k in imageheads) { kuin += data[imageheads[k]]; var origlens = imageheads.length - 1; if (origlens > k) { kuin += "0"; } }
    var dstring2 = data[popuptemps[key].NOPICS];
    if (kuin) {
        return "<tr><th colspan='2' class='esri-feature__field-header'><div class='bldclasspic'>" +
            "<img src='images/pics/" + kuin + ".jpg' onclick=timage(this)></div></th>" +
            "</tr>"; 
    } else { return ""; } 
};

function timage(img) {
var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("img01");
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        //     captionText.src = this.src;
    }
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        modal.style.display = "none";
    } 
}




var legendlayers = [
		{ "legendsrc":"images/layers2.png",
		"legendlayer": "Property Layers",
		 "legendnum": 0, 
		 "legendlyrclass": "accordion_sub_pty",
		 "activeclass": "ative_sub_pty",
		"legendlyrid": "propertybutton", 
		"legendlyrdivclass": "panel_sub_pty", 
		"legendlyrdivid": "propertylyrs",
		"layering": [{ "layers": "Plots", "layernum": 10001, "layerid": "plotsADNOC", "checked": "yes", "url": plotUrl, "popupTemplate": templates[2], "renderer": Renderer[2], "labelingInfo": labelinfos[0], "visible": true }, { "layers": "Buildings", "layernum": 10002, "layerid": "buildingsADNOC", "url": building2dUrl, "popupTemplate": templates[0], "renderer": Renderer[4], "renderer3d": Renderer[5], "labelingInfo": labelinfos[3], "visible": false }, { "layers": "Floors", "layernum": 10003, "layerid": "floorsADNOC", "checked": "yes", "url": floor2dUrl, "popupTemplate": templates[1], "renderer": Renderer[4], "renderer3d": Renderer[5], "visible": true, "labelingInfo": labelinfos[6], "reference": "yes" }, { "layers": "Ruwais Zones", "layerid": "rzonesADNOC", "url": rzoneUrl, "renderer": Renderer[0], "labelingInfo": labelinfos[1], "visible": false }, { "layers": "Ruwais Zone Plots", "layerid": "rzoneplotsADNOC", "url": rzonepUrl, "renderer": Renderer[1], "labelingInfo": labelinfos[2], "visible": false }]
  },{
		"legendsrc":"images/lu.png",
		"legendlayer": "Landuse Layers",
		 "legendnum": 1, 
		 "legendlyrclass": "accordion_sub",
		 "activeclass": "ative_sub",
		"legendlyrid": "landusebutton", 
		"legendlyrdivclass": "panel_sub", 
		"legendlyrdivid": "landuselyrs",
		"sublegend":[{"sublegendnum": 100,
			"sublegend": "Plots",	
			"legendsubclass": "accordion_sub2pl",
			 "legendsubid": "pltclsbutton", 
			"legendsubdivclass": "panel_sub2pl",
			"legendsubdivid": "pltlanduselyrs",
			"exception": ["buildingsADNOC", "floorsADNOC","rzonesADNOC","rzoneplotsADNOC"],
			"layering": [{ "layers": "Commerical", "layernum": 10004, "layerid": "complotADNOC", "url": plotUrl, "popupTemplate": templates[2], "renderer": Renderer[3], "definitionexp": ""+attrib.PLOTS.PRIMARYUSEENG+"='COMMERCIAL'", "visible": false, "labelingInfo": labelinfos[0] }, { "layers": "Educational", "layernum": 10005, "layerid": "eduplotADNOC", "url": plotUrl, "popupTemplate": templates[2], "renderer": Renderer[3], "definitionexp": ""+attrib.PLOTS.PRIMARYUSEENG+"='EDUCATIONAL'", "visible": false, "labelingInfo": labelinfos[0] }, { "layers": "Industrial", "layernum": 10006, "layerid": "indplotADNOC", "url": plotUrl, "popupTemplate": templates[2], "renderer": Renderer[3], "definitionexp": ""+attrib.PLOTS.PRIMARYUSEENG+"='INDUSTRIAL'", "visible": false, "labelingInfo": labelinfos[0] }, { "layers": "Multiuse", "layernum": 10007, "layerid": "muplotADNOC", "url": plotUrl, "popupTemplate": templates[2], "renderer": Renderer[3], "definitionexp": ""+attrib.PLOTS.PRIMARYUSEENG+"='MULTIUSE'", "visible": false, "labelingInfo": labelinfos[0] }, { "layers": "Residential", "layernum": 10008, "layerid": "resplotADNOC", "url": plotUrl, "popupTemplate": templates[2], "renderer": Renderer[3], "definitionexp": ""+attrib.PLOTS.PRIMARYUSEENG+"='RESIDENTIAL'", "visible": false, "labelingInfo": labelinfos[0] }]
},{
			"sublegendnum": 101,
			"sublegend": "Buildings",	
			"legendsubclass": "accordion_sub2bl",
			"activeclass": "ative_sub2bl",
			 "legendsubid": "bldclsbutton", 
			"legendsubdivclass": "panel_sub2bl",
			"legendsubdivid": "bldlanduselyrs",
			 "exception": ["plotsADNOC","rzonesADNOC","rzoneplotsADNOC"],
			 "layering": [{ "layers": "Administrative", "layernum": 10009, "layerid": "adminbldADNOC", "url": building2dUrl, "popupTemplate": templates[0], "renderer": Renderer[4], "renderer3d": Renderer[5], "definitionexp": ""+attrib.BUILDINGS.PRIMARYUSAGETYPE+"='ADMINISTRATION'", "visible": false, "labelingInfo": labelinfos[3] }, { "layers": "Commercial", "layernum": 10010, "layerid": "combldADNOC", "url": building2dUrl, "popupTemplate": templates[0], "renderer": Renderer[4], "renderer3d": Renderer[5], "definitionexp": ""+attrib.BUILDINGS.PRIMARYUSAGETYPE+"='COMMERCIAL'", "visible": false, "labelingInfo": labelinfos[3] }, { "layers": "Educational", "layernum": 10011, "layerid": "edubldADNOC", "url": building2dUrl, "popupTemplate": templates[0], "renderer": Renderer[4], "renderer3d": Renderer[5], "definitionexp": ""+attrib.BUILDINGS.PRIMARYUSAGETYPE+"='EDUCATIONAL'", "visible": false, "labelingInfo": labelinfos[3] }, { "layers": "Governmental", "layernum": 10012, "layerid": "govbldADNOC", "url": building2dUrl, "popupTemplate": templates[0], "renderer": Renderer[4], "renderer3d": Renderer[5], "definitionexp": ""+attrib.BUILDINGS.PRIMARYUSAGETYPE+"='GOVERNMENTAL'", "visible": false, "labelingInfo": labelinfos[3] }, { "layers": "Health", "layernum": 10013, "layerid": "healthbldADNOC", "url": building2dUrl, "popupTemplate": templates[0], "renderer": Renderer[4], "renderer3d": Renderer[5], "definitionexp": ""+attrib.BUILDINGS.PRIMARYUSAGETYPE+"='HEALTH'", "visible": false, "labelingInfo": labelinfos[3] }, { "layers": "Recreational", "layernum": 10014, "layerid": "recbldADNOC", "url": building2dUrl, "popupTemplate": templates[0], "renderer": Renderer[4], "renderer3d": Renderer[5], "definitionexp": ""+attrib.BUILDINGS.PRIMARYUSAGETYPE+"='RECREATIONAL'", "visible": false, "labelingInfo": labelinfos[3] }, { "layers": "Religious", "layernum": 10015, "layerid": "relbldADNOC", "url": building2dUrl, "popupTemplate": templates[0], "renderer": Renderer[4], "renderer3d": Renderer[5], "definitionexp": ""+attrib.BUILDINGS.PRIMARYUSAGETYPE+"='RELIGIOUS'", "visible": false, "labelingInfo": labelinfos[3] }, { "layers": "Residential", "layernum": 10016, "layerid": "resbldADNOC", "url": building2dUrl, "popupTemplate": templates[0], "renderer": Renderer[4], "renderer3d": Renderer[5], "definitionexp": ""+attrib.BUILDINGS.PRIMARYUSAGETYPE+"='RESIDENTIAL'", "visible": false, "labelingInfo": labelinfos[3] }, { "layers": "Services", "layernum": 10017, "layerid": "serbldADNOC", "url": building2dUrl, "popupTemplate": templates[0], "renderer": Renderer[4], "renderer3d": Renderer[5], "definitionexp": ""+attrib.BUILDINGS.PRIMARYUSAGETYPE+"='SERVICES'", "visible": false, "labelingInfo": labelinfos[3] }, { "layers": "Sports", "layernum": 10018, "layerid": "sportbldADNOC", "url": building2dUrl, "popupTemplate": templates[0], "renderer": Renderer[4], "renderer3d": Renderer[5], "definitionexp": ""+attrib.BUILDINGS.PRIMARYUSAGETYPE+"='SPORTS'", "visible": false, "labelingInfo": labelinfos[3] }, { "layers": "Utility", "layernum": 10019, "layerid": "utibldADNOC", "url": building2dUrl, "popupTemplate": templates[0], "renderer": Renderer[4], "renderer3d": Renderer[5], "definitionexp": ""+attrib.BUILDINGS.PRIMARYUSAGETYPE+"='UTILITY'", "visible": false, "labelingInfo": labelinfos[3]}]
},{
			"sublegendnum": 102,
			"sublegend": "Floors",	
			"legendsubclass": "accordion_sub2fl",
			"activeclass": "ative_sub2fl",
			 "legendsubid": "flrclsbutton", 
			"legendsubdivclass": "panel_sub2fl",
			"legendsubdivid": "flrlanduselyrs",
			 "exception": ["plotsADNOC","rzonesADNOC","rzoneplotsADNOC"],
			"layering":[{"layers": "Administrative", "layernum": 10020, "layerid": "adminflrADNOC", "url":floor2dUrl, "popupTemplate": templates[1], "renderer":Renderer[4], "renderer3d":Renderer[5], "definitionexp":""+attrib.FLOORS.PRIMARYUSAGETYPE+"='ADMINISTRATION'", "visible":false,"labelingInfo":labelinfos[6]},{"layers": "Commercial", "layernum": 10021, "layerid": "comflrADNOC", "url":floor2dUrl, "popupTemplate": templates[1], "renderer":Renderer[4],  "renderer3d":Renderer[5], "definitionexp":""+attrib.FLOORS.PRIMARYUSAGETYPE+"='COMMERCIAL'", "visible":false,"labelingInfo":labelinfos[6]},
{"layers": "Educational", "layernum": 10022, "layerid": "eduflrADNOC", "url":floor2dUrl, "popupTemplate": templates[1], "renderer":Renderer[4], "renderer3d":Renderer[5], "definitionexp":""+attrib.FLOORS.PRIMARYUSAGETYPE+"='EDUCATIONAL'", "visible":false,"labelingInfo":labelinfos[6]},{"layers": "Governmental", "layernum": 10023, "layerid": "govflrADNOC", "url":floor2dUrl, "popupTemplate": templates[1], "renderer":Renderer[4], "renderer3d":Renderer[5], "definitionexp":""+attrib.FLOORS.PRIMARYUSAGETYPE+"='GOVERNMENTAL'", "visible":false,"labelingInfo":labelinfos[6]},{"layers": "Health", "layernum": 10024, "layerid": "healthflrADNOC", "url":floor2dUrl, "popupTemplate": templates[1], "renderer":Renderer[4], "renderer3d":Renderer[5], "definitionexp":""+attrib.FLOORS.PRIMARYUSAGETYPE+"='HEALTH'", "visible":false,"labelingInfo":labelinfos[6]},{"layers": "Recreational", "layernum": 10025, "layerid": "recflrADNOC", "url":floor2dUrl, "popupTemplate": templates[1], "renderer":Renderer[4], "renderer3d":Renderer[5], "definitionexp":""+attrib.FLOORS.PRIMARYUSAGETYPE+"='RECREATIONAL'", "visible":false,"labelingInfo":labelinfos[6]},{"layers": "Religious", "layernum": 10026, "layerid": "relflrADNOC", "url":floor2dUrl, "popupTemplate": templates[1], "renderer":Renderer[4], "renderer3d":Renderer[5], "definitionexp":""+attrib.FLOORS.PRIMARYUSAGETYPE+"='RELIGIOUS'", "visible":false,"labelingInfo":labelinfos[6]},{"layers": "Residential", "layernum": 10027, "layerid": "resflrADNOC", "url":floor2dUrl, "popupTemplate": templates[1], "renderer":Renderer[4], "renderer3d":Renderer[5], "definitionexp":""+attrib.FLOORS.PRIMARYUSAGETYPE+"='RESIDENTIAL'", "visible":false,"labelingInfo":labelinfos[6]},
{"layers": "Services", "layernum": 10028, "layerid": "serflrADNOC", "url":floor2dUrl, "popupTemplate": templates[1], "renderer":Renderer[4],  "renderer3d":Renderer[5], "definitionexp":""+attrib.FLOORS.PRIMARYUSAGETYPE+"='SERVICES'", "visible":false,"labelingInfo":labelinfos[6]},{"layers": "Sports", "layernum": 10029, "layerid": "sportflrADNOC", "url":floor2dUrl, "popupTemplate": templates[1], "renderer":Renderer[4], "renderer3d":Renderer[5], "definitionexp":""+attrib.FLOORS.PRIMARYUSAGETYPE+"='SPORTS'", "visible":false,"labelingInfo":labelinfos[6]},{"layers": "Utility", "layernum": 10030, "layerid": "utiflrADNOC", "url":floor2dUrl, "popupTemplate": templates[1], "renderer":Renderer[4], "renderer3d":Renderer[5], "definitionexp":""+attrib.FLOORS.PRIMARYUSAGETYPE+"='UTILITY'", "visible":false,"labelingInfo":labelinfos[6]}]
}]
  },{ 
		"legendlayer": "Downstream Layers",
		 "legendlyrclass": "accordion_dst",
		 "activeclass": "ative_dst",
		"legendlyrid": "dstbutton", 
		"legendlyrdivclass": "panel_dst", 
		"legendlyrdivid": "dstlyrs",
		"layering": [{ "layers": "Plots", "layerid": "dstplots", "url": dstreamplUrl, "renderer": Renderer[6], "labelingInfo": labelinfos[5], "visible": false }, { "layers": "Existing CISPA Boundary", "layerid": "existcispa", "url": exiscispaUrl, "renderer": Renderer[8], "visible": false, "labelingInfo": labelinfos[6] }, { "layers": "CISPA Boundary Limit", "layerid": "cispalimit", "url": cispaUrl, "renderer": Renderer[7], "visible": false, "labelingInfo": labelinfos[6] }]
  }
/*
,
{ 
		"legendlayer": "Upstream Layers",
		 "legendlyrclass": "accordion_ust",
		 "activeclass": "ative_ust",
		"legendlyrid": "ustbutton", 
		"legendlyrdivclass": "panel_ust", 
		"legendlyrdivid": "ustlyrs",
		"layering": [{"Server":"MapServer", "layers": "Abu Al Bukhoosh Facilities", "layerid": "ustabk", "url": abkurl,  "visible": false },{"Server":"MapServer", "layers": "ADOC Mubarraz Field", "layerid": "ustadoc", "url": adocurl,  "visible": false },{"Server":"MapServer", "layers": "Al Yasat Field", "layerid": "ustalyasat", "url": alyasaturl,  "visible": false },{"Server":"MapServer", "layers": "Base map - Grey", "layerid": "ustBaseMapGreyurl", "url": BaseMapGreyurl,  "visible": false },{"Server":"MapServer", "layers": "Emirates boundary", "layerid": "ustBoundaryurl", "url": Boundaryurl,  "visible": false },{"Server":"MapServer", "layers": "Future development project", "layerid": "ustDevelopmenturl", "url": Developmenturl,  "visible": false },{"Server":"MapServer", "layers": "Exploration Well", "layerid": "ustExplorationurl", "url": Explorationurl,  "visible": false },{"Server":"MapServer", "layers": "Gas Processing", "layerid": "ustGasProcessingurl", "url": GasProcessingurl,  "visible": false },{"Server":"MapServer", "layers": "HSE data", "layerid": "ustHSEurl", "url": HSEurl,  "visible": false },{"Server":"MapServer", "layers": "Islands of Abu Dhabi", "layerid": "ustIslandurl", "url": Islandurl,  "visible": false },{"Server":"MapServer", "layers": "Medical Services Unit", "layerid": "ustMSUurl", "url": MSUurl,  "visible": false },{"Server":"MapServer", "layers": "Bayanat Data", "layerid": "ustNTDBurl", "url": NTDBurl,  "visible": false },{"Server":"MapServer", "layers": "ADNOC Offshore Data", "layerid": "ustOffshoreurl", "url": Offshoreurl,  "visible": false },{"Server":"MapServer", "layers": "ADNOC Onshore Data", "layerid": "ustOnshoreurl", "url": Onshoreurl,  "visible": false },{"Server":"MapServer", "layers": "ADNOC Sour Gas", "layerid": "ustSourGasurl", "url": SourGasurl,  "visible": false },{"Server":"MapServer", "layers": "ADNOC Wells", "layerid": "ustWellurl", "url": Wellurl,  "visible": false }]
  },
{ 
		"legendlayer": "NOC Layers",
		 "legendlyrclass": "accordion_noc",
		 "activeclass": "ative_noc",
		"legendlyrid": "nocbutton", 
		"legendlyrdivclass": "panel_noc", 
		"legendlyrdivid": "noclyrs",
		"exception": ["plotsADNOC","rzonesADNOC","rzoneplotsADNOC"],
		"layering": [{"Server":"MapServer", "layers": "ADNOC Concession", "layerid": "AdnocConc", "url": AdnocConcurl,  "visible": false },{"Server":"MapServer", "layers": "Distribution Stations", "layerid": "Adnocstati", "url": Adnocstatiurl,  "visible": false },{"Server":"MapServer", "layers": "GASCO NOC", "layerid": "gasco", "url": gascourl,  "visible": false },{"Server":"MapServer", "layers": "ADNOC Lands", "layerid": "adnocland", "url": adnoclandurl,  "visible": false },{"Server":"MapServer", "layers": "Offshore ADMA NOC", "layerid": "adnocadma", "url": adnocadmaurl,  "visible": false },{"Server":"MapServer", "layers": "ZADCO NOC", "layerid": "adnoczadco", "url": adnoczadcourl,  "visible": false },{"Server":"MapServer", "layers": "ADCO NOC", "layerid": "adnocadco", "url": adnocadcourl,  "visible": false },{"Server":"MapServer", "layers": "PPA NOC", "layerid": "adnocppa", "url": adnocppaurl,  "visible": false },{"Server":"MapServer", "layers": "Takreer NOC", "layerid": "adnoctak", "url": adnoctakurl,  "visible": false },{"Server":"MapServer", "layers": "Al Hosn (Sour Gas)", "layerid": "alhosn", "url": alhosnurl,  "visible": false },{"Server":"MapServer", "layers": "Upstream Exploration", "layerid": "adnocupstexp", "url": adnocupstexpurl,  "visible": false }]
  }*/
];//json close
 
var searchlayers = [
		{"buttonid":"plotsbutton",
		"buttonclass": "accordion_sub_pl",
		"activeclass": "active_sub_pl",
		"buttonname":"Plots",
		"buttondivclass":"panel_sub_pl",
		"buttondivid":	"pltserachpanel",
		"resultdivclass":"comboline",
		"resultdivid":"ppr",
		"finalrseltclass":"namehead",
		"finalresultid":"printResults",
		"report1":attrib.PLOTS.CALCULATEDAREA,
		"namereport1":"Total Area",
		"spacedivid":"pdivbr4",
		"popuptemp":templates[2],
		"searchopts":[

		{"optdivclass":"comboline", "optdivid":"muniplotdiv","namedivclass":"namehead","namediv":"Municipality","type":"select", "selectid":"municipality_type", "selecturl": plotUrl,"selectwhere":[attrib.PLOTS.MUNICIPALITYENG], "listupdate":attrib.PLOTS.DISTRICTENG,"listdepend":"district_type","listtext":"Select District","spacedivid":"pdivbr","resline":"plots available",
		"optionsselect":[
		{"optionval":"","optionvalue":"Select Municipality"},{"optionval":"ADM","optionvalue":"ABU DHABI"},{"optionval":"AAM","optionvalue":"AL AIN"},{"optionval":"WRM","optionvalue":"AL DHAFRA"}]
},
{"optdivclass":"comboline", "optdivid":"distriplotdiv","namedivclass":"namehead","namediv":"District","type":"select", "selectid":"district_type","selecturl": plotUrl,"selectwhere":[attrib.PLOTS.MUNICIPALITYENG,attrib.PLOTS.DISTRICTENG],"listupdate":attrib.PLOTS.COMMUNITYENG,"listdepend":"community_type","listtext":"Select Community","spacedivid":"pdivbr1","resline":"plots available"
},
{"optdivclass":"comboline", "optdivid":"communiplotdiv","namedivclass":"namehead","namediv":"Community","type":"select", "selectid":"community_type","selectwhere":[attrib.PLOTS.MUNICIPALITYENG,attrib.PLOTS.DISTRICTENG,attrib.PLOTS.COMMUNITYENG],"listupdate":attrib.PLOTS.PLOTNUMBER,"listdepend":"plot_type","listtext":"Select Plot Number","selecturl": plotUrl,"spacedivid":"pdivbr2","resline":"plots available"
},
{"optdivclass":"comboline", "optdivid":"plotplotdiv","namedivclass":"namehead","namediv":"Plot No.","type":"select", "selectid":"plot_type","selectwhere":[attrib.PLOTS.MUNICIPALITYENG,attrib.PLOTS.DISTRICTENG,attrib.PLOTS.COMMUNITYENG,attrib.PLOTS.PLOTNUMBER],"selecturl": plotUrl,"spacedivid":"pdivbr3","resline":"plot selected."
}
]},

{"buttonid":"bldsbutton",
"buttonclass": "accordion_sub_bl",
"activeclass": "active_sub_bl",
		"buttonname":"Buildings",
		"buttondivclass":"panel_sub_bl",
		"buttondivid":	"bldserachpanel",
		"resultdivclass":"comboline",
		"resultdivid":"bpr",
		"finalrseltclass":"namehead",
		"finalresultid":"printResults1",
		"zvalue":attrib.BUILDINGS.Height,
		"report1":attrib.BUILDINGS.BUILDINGAREA,
		"namereport1": "Total Area",
		"spacedivid":"pdivbr5",
		"popuptemp":templates[0],
		"searchopts":[
		{"optdivclass":"comboline", "optdivid":"muniblddiv","namedivclass":"namehead","namediv":"Municipality","type":"select", "selectid":"bld_municipality_type","selectwhere":[attrib.BUILDINGS.MUNICIPALITYENG],"listupdate":attrib.BUILDINGS.AREANAME,"listdepend":"bld_area_type","listtext":"Select Area Name","selecturl": building2dUrl, "spacedivid":"bdivbr","resline":"buildings available",
		"optionsselect":[
		{"optionval":"","optionvalue":"Select Municipality"},{"optionval":"ADM","optionvalue":"ABU DHABI"},{"optionval":"WRM","optionvalue":"AL DHAFRA"}]
},
{"optdivclass":"comboline", "optdivid":"areablddiv","namedivclass":"namehead","namediv":"AREA NAME","type":"select", "selectid":"bld_area_type","selectwhere":[attrib.BUILDINGS.MUNICIPALITYENG,attrib.BUILDINGS.AREANAME],"listupdate":attrib.BUILDINGS.PRIMARYUSAGETYPE,"listdepend":"bld_pri_type","listtext":"Select Primary Usage","selecturl": building2dUrl,"spacedivid":"bdivbr1","resline":"buildings available"
},
{"optdivclass":"comboline", "optdivid":"priblddiv","namedivclass":"namehead","namediv":"Primary Usage","type":"select", "selectid":"bld_pri_type","selectwhere":[attrib.BUILDINGS.MUNICIPALITYENG,attrib.BUILDINGS.AREANAME,attrib.BUILDINGS.PRIMARYUSAGETYPE],"listupdate":attrib.BUILDINGS.SECONDARYUSAGETYPE,"listdepend":"bld_sec_type","listtext":"Select Secondary Usage","selecturl": building2dUrl,"spacedivid":"bdivbr2","resline":"buildings available"
},
{"optdivclass":"comboline", "optdivid":"sec_bld_div","namedivclass":"namehead","namediv":"Secondary Usage","type":"select", "selectid":"bld_sec_type","selectwhere":[attrib.BUILDINGS.MUNICIPALITYENG,attrib.BUILDINGS.AREANAME,attrib.BUILDINGS.PRIMARYUSAGETYPE,attrib.BUILDINGS.SECONDARYUSAGETYPE],"listupdate":attrib.BUILDINGS.NAMEENGLISH,"listdepend":"bld_nam_type","listtext":"Select Building Name","selecturl": building2dUrl,"spacedivid":"bdivbr3","resline":"buildings available"
},
{"optdivclass":"comboline", "optdivid":"noblddiv","namedivclass":"namehead","namediv":"Building Name","type":"select", "selectid":"bld_nam_type","selectwhere":[attrib.BUILDINGS.MUNICIPALITYENG,attrib.BUILDINGS.AREANAME,attrib.BUILDINGS.PRIMARYUSAGETYPE,attrib.BUILDINGS.SECONDARYUSAGETYPE,attrib.BUILDINGS.NAMEENGLISH],"selecturl": building2dUrl,"spacedivid":"bdivbr4","resline":"building selected."
}
]},


{"buttonid":"flrsbutton",
"buttonclass": "accordion_sub_fl",
"activeclass": "active_sub_fl",
		"buttonname":"Floors",
		"buttondivclass":"panel_sub_fl",
		"buttondivid":	"flrserachpanel",
		"resultdivclass":"comboline",
		"resultdivid":"pprs",
		"finalrseltclass":"namehead",
		"finalresultid":"printResults3",
		"zvalue":attrib.FLOORS.Height,
		"report1":attrib.FLOORS.FLOORAREA,
		"namereport1": "Total Area",
		"firstselect": "flr_area_type",
		"firsturl": floor2dUrl,
		"firstattr": attrib.FLOORS.AREANAME,
		"firstselecttext":"Select Area Name",
		"spacedivid":"fdivbr4",
		"popuptemp":templates[1],
		"searchopts":[
		{"optdivclass":"comboline", "optdivid":"areaflrdiv","namedivclass":"namehead","namediv":"AREA NAME","type":"select", "selectid":"flr_area_type","selectwhere":[attrib.FLOORS.AREANAME],"listupdate":attrib.FLOORS.NAMEENGLISH,"listdepend":"floor_bld_name_type","listtext":"Select Building Name","selecturl": floor2dUrl,"spacedivid":"flrivbr1","resline":"floors available"},
{"optdivclass":"comboline", "optdivid":"flrbldnamdiv","namedivclass":"namehead","namediv":"Building Name","type":"select", "selectid":"floor_bld_name_type","selectwhere":[attrib.FLOORS.AREANAME,attrib.FLOORS.NAMEENGLISH],"listupdate":attrib.FLOORS.FLOORNAME,"listdepend":"floor_name_type","listtext":"Select Floor Name","selecturl": floor2dUrl,"spacedivid":"flrivbr2","resline":"floors available"
},
{"optdivclass":"comboline", "optdivid":"floor_name_div","namedivclass":"namehead","namediv":"Floor No.","type":"select", "selectid":"floor_name_type","selectwhere":[attrib.FLOORS.AREANAME,attrib.FLOORS.NAMEENGLISH,attrib.FLOORS.FLOORNAME],"selecturl": floor2dUrl,"spacedivid":"flrivbr3","resline":"floor selected."
}
]},

{"buttonid":"facavailbutton",
"buttonclass": "accordion_sub_facav",
"activeclass": "active_sub_facav",
		"buttonname":"Facilities Available",
		"buttondivclass":"panel_sub_facav",
		"buttondivid":	"facavserachpanel",
		"resultdivclass":"comboline",
		"resultdivid":"fars",
		"zvalue":attrib.FLOORS.Height,
		"finalrseltclass":"namehead",
		"finalresultid":"printResults4",
		"spacedivid":"fadivbr4",
		"popuptemp":templates[1],
		"searchopts":[
		{"optdivclass":"comboline", "optdivid":"facavaildiv","type":"select", "selectid":"fac_avail_type","selectwhere":[attrib.FLOORS.FACILITIESAVAILABLE],"selectclause":"LIKE","selecturl": floor2dUrl,"spacedivid":"faivbr1", "resline":"facility selected.",
		"optionsselect":[
		{"optionval":"","optionvalue":"Select Facility Name"},
{"optionvalue":"Abu Dhabi Government Office","optionval":"Abu Dhabi Government Office"},
{"optionvalue":"Abu Dhabi Muncipality Machine","optionval":"Abu Dhabi Muncipality Machine"},
{"optionvalue":"ADCB","optionval":"ADCB"},
{"optionvalue":"ADIB","optionval":"ADIB"},
{"optionvalue":"Advance Catering Services","optionval":"Advance Catering Services"},
{"optionvalue":"Al Ain Ahlya Insurance Company","optionval":"Al Ain Ahlya Insurance Company"},
{"optionvalue":"Al Etihad International Company","optionval":"Etihad"},
{"optionvalue":"Al Hilal Bank","optionval":"Al Hilal Bank"},
{"optionvalue":"Al Masaood Travel Agency","optionval":"Al Masaood Travel Agency"},
{"optionvalue":"ATB Travel","optionval":"ATB Travel"},
{"optionvalue":"Cafe De Roma","optionval":"Cafe De Roma"},
{"optionvalue":"CLEANCO","optionval":"CLEANCO"},
{"optionvalue":"Costa Coffee","optionval":"Costa"},
{"optionvalue":"Daman","optionval":"Daman"},
{"optionvalue":"Di Roma Café","optionval":"Di Roma Café"},
{"optionvalue":"DU","optionval":"DU"},
{"optionvalue":"Etisalat","optionval":"Etisalat"},
{"optionvalue":"Enjazat Service (One Stop Shop)","optionval":"Enjazat Service (One Stop Shop)"},
{"optionvalue":"Exxon Mobinil","optionval":"Exxon Mobinil"},
{"optionvalue":"FAB1 Bank","optionval":"FAB"},
{"optionvalue":"Fusion Caffee","optionval":"Fusion Caffee"},
{"optionvalue":"Hala Travel Management","optionval":"Hala Travel Management"},
{"optionvalue":"Health Quest","optionval":"Health Quest"},
{"optionvalue":"Illy Cafe","optionval":"Sadarah Food & Beverages ( Illy Cafe)"},
{"optionvalue":"Infinity Payment Machine","optionval":"Infinity Payment Machine"},
{"optionvalue":"Jackson Snacks","optionval":"Jackson Snacks"},
{"optionvalue":"Keki","optionval":"Keki"},
{"optionvalue":"Madeinat Al Khair Supermarket","optionval":"Madeinat Al Khair Supermarket"},
{"optionvalue":"Mall Mart","optionval":"Mall Mart"},
{"optionvalue":"MBME Machine","optionval":"MBME"},
{"optionvalue":"NBAD Bank","optionval":"NBAD"},
{"optionvalue":"NT Payment Machine","optionval":"NT Payment Machine"},
{"optionvalue":"Omair Travel Agency","optionval":"Omair Travel Agency"},
{"optionvalue":"PASCAL TEPPER CAFÉ","optionval":"PASCAL TEPPER CAFÉ"},
{"optionvalue":"Physiomins Center","optionval":"Physiomins Center"},
{"optionvalue":"Rahaty Travel Management","optionval":"Rahaty Travel Management"},
{"optionvalue":"Red Crescent","optionval":"Red Crescent"},
{"optionvalue":"Royal Catering Resturant","optionval":"Royal Catering Resturant"},
{"optionvalue":"Sadarah Food & Beverages","optionval":"Sadarah Food & Beverages ( Illy Cafe)"},
{"optionvalue":"Starbucks","optionval":"Starbucks"},
{"optionvalue":"Sushi Bar","optionval":"Sushi Bar"},
{"optionvalue":"Tasheel Services","optionval":"Tasheel Services"},
{"optionvalue":"The Raw Place","optionval":"The Raw Place"},
{"optionvalue":"TVC The Valet Company","optionval":"TVC The Valet Company"},
{"optionvalue":"UNB ATM","optionval":"UNB"}
]
}
]}
];


var buttonlayers = [{"buttonid":"legendbutton", "buttonclass": "accordion", "activeclass": "active", "buttonname":"Layers", "buttondivclass":"panel","buttondivid":"legendlyrs", "sublayers":legendlayers},
		{"buttonid":"searchbutton", "buttonclass": "accordion_search", "activeclass": "active_search", "buttonname":"Searches", "buttondivclass":"panel_search","buttondivid":"serachpanel", "sublayers":searchlayers},
		{ "buttonid": "timeline1", "buttonclass": "accordionb", "activeclass": "activeb", "buttonname": "Timeline", "buttondivclass": "panelb", "buttondivid": "panelb", "exception": ["plotsADNOC","rzonesADNOC","rzoneplotsADNOC"] }];


