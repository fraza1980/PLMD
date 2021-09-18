require(["esri/Map", "esri/PopupTemplate", "esri/views/MapView", "esri/layers/MapImageLayer", "esri/views/SceneView", "esri/layers/FeatureLayer", "esri/widgets/Print", "esri/WebMap", "esri/WebScene", "esri/layers/SceneLayer", "esri/widgets/Search", "esri/widgets/Expand", "esri/widgets/LayerList", "esri/widgets/CoordinateConversion", "esri/widgets/BasemapGallery", "esri/widgets/Bookmarks", "esri/widgets/Legend", "esri/core/lang", "esri/core/promiseUtils", "esri/core/watchUtils", "esri/widgets/Fullscreen", "esri/layers/GraphicsLayer", "esri/tasks/QueryTask", "esri/tasks/support/Query", "esri/geometry/geometryEngine", "esri/Graphic", "esri/widgets/Home", "esri/renderers/support/jsonUtils", "dojo/dom", "dojo/on",  "esri/widgets/DirectLineMeasurement3D",
    "esri/widgets/AreaMeasurement3D", "esri/layers/support/LabelClass", "esri/widgets/Sketch/SketchViewModel", "esri/symbols/WebStyleSymbol", "esri/widgets/Directions", "esri/widgets/Sketch/SketchViewModel", "esri/widgets/Slider", "esri/tasks/support/Date","dojo/domReady!"], function (Map, PopupTemplate, MapView, MapImageLayer, SceneView, FeatureLayer, Print, WebMap, WebScene, SceneLayer, Search, Expand, LayerList, CoordinateConversion, BasemapGallery, Bookmarks, Legend, lang, promiseUtils, watchUtils, Fullscreen, GraphicsLayer, QueryTask, Query, geometryEngine, Graphic, Home, rendererJsonUtils, dom, on, DirectLineMeasurement3D,
        AreaMeasurement3D, LabelClass, SketchViewModel, WebStyleSymbol, Directions, SketchViewModel, Slider,Date) {
    var activeWidget = null;
    
    var layer = new GraphicsLayer();
    var bldtmlinelayer = new FeatureLayer({
        url: building2dUrl,
        definitionExpression: "YEARBUILT is not null",
        title: "Building Footprints" 
    });
   
    var scene = new WebScene({ basemap: "topo-vector", layers: [layer] });
    const view = new SceneView({
        map: scene,
        container: "MapDiv",
        camera: {
            position: [54.3452, 24.466,770],
            tilt: 40,
            
        }
      
    });


        var applicationDiv = document.getElementById("sliderContainer");
        var slider = document.getElementById("slider");
        var sliderValue = document.getElementById("sliderValue");
        var playButton = document.getElementById("playButton");
        var titleDiv = document.getElementById("titleDiv");
        var animation = null;
        function inputHandler() {stopAnimation(); setYear(parseInt(slider.value)); }
        slider.addEventListener("input", inputHandler);
        slider.addEventListener("change", inputHandler);
        playButton.addEventListener("click", function () { if (playButton.classList.contains("toggled")) { stopAnimation(); } else { startAnimation(); } });
        view.whenLayerView(bldtmlinelayer).then(setupHoverTooltip);
        setYear(1978);
        function setYear(value) {
            sliderValue.innerHTML = Math.floor(value);
            slider.value = Math.floor(value);
            bldtmlinelayer.renderer = createRenderer(value);}
        function createRenderer(year) {var opacityStops = [{ opacity: 1, value: year},{opacity: 0, value: year + 1}];
       
                    return {
                        type: "simple",
                        symbol: {
                            type: "polygon-3d",
                            symbolLayers: [{
                                type: "extrude",
                                material: {
                                    color: "rgb(0,0,0)"
                                }
                            }]
                        },
                        visualVariables: [{
                            type: "opacity",
                            field: attrib.BUILDINGS.YEARBUILT,
                            stops: opacityStops,
                            legendOptions: {
                                showLegend: false
                            }
                        }, {
                            type: "color",
                            field: "YEARBUILT",
                            legendOptions: {
                                title: "Built:"
                            },
                            stops: [{
                                value: year,
                                color: [255, 235, 190, 1],
                                label: "in " + Math.floor(year),

                            }, {
                                value: year - 10,
                                color: [255, 0, 0, 1],


                                label: "in " + (Math.floor(year) - 10),
                            }, {
                                value: year - 20,
                                color: [7, 29, 173, 1],
                                label: "before " + (Math.floor(year) - 20),

                            }]
                        }
                        , {
                            type: "size",
                            field: "height"
                        }
                        ]
                    };
                

            }
   
        function setupHoverTooltip(layerview) {
            var promise;
            var highlight;

            var tooltip = createTooltip();

            view.on("pointer-move", function (event) {
                if (promise) {
                    promise.cancel();
                }

                promise = view.hitTest(event.x, event.y)
                  .then(function (hit) {
                      promise = null;

                      // remove current highlighted feature
                      if (highlight) {
                          highlight.remove();
                          highlight = null;
                      }

                      var results = hit.results.filter(function (result) {
                          return result.graphic.layer === bldtmlinelayer;
                      });


                      if (results.length) {
                          var graphic = results[0].graphic;
                          var screenPoint = hit.screenPoint;

                          highlight = layerview.highlight(graphic);
                          tooltip.show(screenPoint, "Built in " + graphic.getAttribute(attrib.BUILDINGS.YEARBUILT));
                      } else {
                          tooltip.hide();
                      }
                  });
            });
        }


        function startAnimation() {
            stopAnimation();
            animation = animate(parseFloat(slider.value));
            playButton.classList.add("toggled");
        }


        function stopAnimation() {
            if (!animation) {
                return;
            }

            animation.remove();
            animation = null;
            playButton.classList.remove("toggled");
        }


        function animate(startValue) { var animating = true; var value = startValue;
 var frame = function (timestamp) { if (!animating) { return;} value += 0.5; if (value > 2022) { value = 1978;}

                setYear(value);

                // Update at 30fps
                setTimeout(function () {
                    requestAnimationFrame(frame);
                }, 1000 / 3);
            };

            frame();

            return {
                remove: function () {
                    animating = false;
                }
            };
        }

        function createTooltip() {
            var tooltip = document.createElement("div");
            var style = tooltip.style;

            tooltip.setAttribute("role", "tooltip");
            tooltip.classList.add("tooltip");

            var textElement = document.createElement("div");
            textElement.classList.add("esri-widget");
            tooltip.appendChild(textElement);

            view.container.appendChild(tooltip);

            var x = 0;
            var y = 0;
            var targetX = 0;
            var targetY = 0;
            var visible = false;

            // move the tooltip progressively
            function move() {
                x += (targetX - x) * 0.1;
                y += (targetY - y) * 0.1;

                if (Math.abs(targetX - x) < 1 && Math.abs(targetY - y) < 1) {
                    x = targetX;
                    y = targetY;
                } else {
                    requestAnimationFrame(move);
                }

                style.transform = "translate3d(" + Math.round(x) + "px," + Math.round(y) + "px, 0)";
            }
            return {
                show: function (point, text) { if (!visible) { x = point.x;  y = point.y;} targetX = point.x; targetY = point.y; style.opacity = 1; visible = true; textElement.innerHTML = text; move();},
                hide: function () { style.opacity = 0; visible = false; }
            };
        }

    scene.add(bldtmlinelayer);



var groupsearch=[]; var tgroupsearch=[]; var varselect=[];   var paramas=[]; var qTask=[]; var tsearchbut=[]; var Results=[]; var param=[]; var queTask=[]; var varclick=[];

for (obj in searchlayers) {
    groupsearch = searchlayers[obj].searchopts;
    if (searchlayers[obj].firsturl) {


        queTask[obj] = new FeatureLayer({ url: searchlayers[obj].firsturl, outFields: ["*"], visible: false });

        try { throw obj }
        catch (oj) {
            scene.add(queTask[oj]);
            queTask[oj].when(function () { var query = queTask[oj].createQuery(); return queTask[oj].queryFeatures(query); })
                     .then(getValues)
                     .then(getUniqueValues)
                     .then(addToSelect);
            function getValues(response) {
                var features = response.features;
                var values = features.map(function (feature) {
                    return feature.attributes[searchlayers[oj].firstattr];
                });

                return values;
            }
            function getUniqueValues(values) {
                var uniqueValues = [];
                values.forEach(function (item, i) {
                    if ((uniqueValues.length < 1 || uniqueValues.indexOf(item) === -1) &&
                      (item !== "")) {
                        uniqueValues.push(item);
                    }
                });
                return uniqueValues;
            }
            function addToSelect(values) {
                values.sort();
                var optiondc = document.createElement("option");
                optiondc.text = searchlayers[oj].firstselecttext;
                var taddings = document.getElementById(searchlayers[oj].firstselect);
                taddings.add(optiondc, taddings[0]);
                values.forEach(function (value) {
                    var option = document.createElement("option");
                    document.body.appendChild(option);
                    var atts = document.createAttribute("value");
                    atts.value = value;
                    option.setAttributeNode(atts);
                    option.text = value;
                    taddings.add(option);
                });
                return taddings.value;
            }
        }
    }
for (obs in groupsearch){ tsearchbut.push(groupsearch[obs]); tgroupsearch.push(searchlayers[obj]);}}

for (obj in tsearchbut){

varselect[obj] = document.getElementById(tsearchbut[obj].selectid);
try{throw obj}
    catch(ii) {
varselect[ii].addEventListener("change", funcquery);	
function funcquery(){
layer.graphics.removeAll();
	paramas[ii] = new Query({ returnGeometry: true, returnZ: true, outFields: ["*"] });
	qTask[ii] = new QueryTask({ url: tsearchbut[ii].selecturl });
var querymaker="";
var querylength=tsearchbut[ii].selectwhere.length-1;
var queryclauses="";
var queryop="";
if(tsearchbut[ii].selectclause){queryclauses=tsearchbut[ii].selectclause; queryop="%";}  else {queryclauses="=";queryop="";}
for ( j in tsearchbut[ii].selectwhere){ if(j>0){querymaker +=" AND "}; var lk=parseInt(ii-querylength); var boss=parseInt(lk)+parseInt(j);  querymaker +=tsearchbut[ii].selectwhere[j]+" "+queryclauses+" '"+queryop+varselect[boss].value +queryop+"'"; }
console.log(querymaker);
paramas[ii].where = querymaker;
            qTask[ii].execute(paramas[ii])
             .then(getResults)
           .then(getUniqueValues)
           .then(addToSelect); 
        }
function getResults(response) {
           Results[ii] = response.features.map(function (
              feature) {
               
                     if (val === "is2D") {

                    feature.symbol = {
                        type: "simple-fill",
                        color: [115, 223, 255, 0.6],
                        outline: {
                            color: [115, 223, 255, 1],
                            width: "2px"
                        }
                    };
                } if (val === "is3D") {
                    var height1 = feature.attributes[tgroupsearch[ii].zvalue];
console.log(feature.attributes[tgroupsearch[ii].zvalue]);
                    feature.symbol = {
                        type: "polygon-3d",  // autocasts as new PolygonSymbol3D()
                        symbolLayers: [{
                            type: "extrude",  // autocasts as new ExtrudeSymbol3DLayer()
                            size: height1,    // height of the extrusion in meters
                            material: {
                                color: [115, 223, 255, 0.6]
                            },
                            edges: {
                                type: "solid",
                                color: [115, 223, 255, 1],
                                size: 1
                            }
                        }]
                    };
                }
                    feature.popupTemplate = tgroupsearch[ii].popuptemp;
                return feature;
            });
            layer.addMany(Results[ii]);
            view.goTo(Results[ii]).then(function () {
                view.popup.open({
                    features: Results[ii],
                    featureMenuOpen: true,
                    updateLocationEnabled: true
                });
            });
         var len = Results[ii].length;
var reportline1="";
var legounit = "";
 if(tgroupsearch[ii].report1){
 var tcalc = 0;
       for (var i = 0; i < len; i++) {tcalc += Results[ii][i].attributes[tgroupsearch[ii].report1];  }
            var tcal = tcalc.toFixed(2);
            var tca; 
if (tcal>=100000 && tcal<1000000){ tca = parseInt(tcalc) / 1000; legounit = "Thousand"} else if (tcal >= 1000000) { tca = parseInt(tcalc) / 1000000; legounit = "Million" } else { tca = parseInt(tcal); legounit=""; }
var tcarea =0; tcarea = tca.toFixed(2); 
reportline1="<br><br> <b>"+tgroupsearch[ii].namereport1+" : </b>" + tcarea + " " + legounit + " m<sup>2</sup>";
}
var munires;
if (varselect[ii].value === "ADM") { munires = "Abu Dhabi"; } else if (varselect[ii].value === "AAM") { munires = "Al Ain"; } else if (varselect[ii].value === "WRM") { munires = "Al Dhafra"; } else {munires = varselect[ii].value;}
if(tsearchbut[ii].listdepend){ var yno=" in " + munires;} else {var yno ="";}
            document.getElementById(tgroupsearch[ii].finalresultid).innerHTML =  len +" "+ tsearchbut[ii].resline +yno  + reportline1;
           var DistResults = response.features.map(function (feature) { document.getElementById(tsearchbut[ii].listdepend).options.length = 0; 
		var tstrfind=tsearchbut[ii].listupdate;
               return feature.attributes[tstrfind]; });
            return DistResults;
        }
     
    function getUniqueValues(DistResults) {
            var DistUniqueValues = [];

            DistResults.forEach(function (item, i) {
                if ((DistUniqueValues.length < 1 || DistUniqueValues.indexOf(item) === -1) &&
                  (item !== "")) {
                    DistUniqueValues.push(item);

                }
            });
           
            return DistUniqueValues;
        }
        function addToSelect(DistResults) {
            DistResults.sort();
 
            var optiond = document.createElement("option");
            optiond.text = tsearchbut[ii].listtext;
var tadding=document.getElementById(tsearchbut[ii].listdepend);
            tadding.add(optiond, tadding[0]);
            DistResults.forEach(function (value) {
                var option = document.createElement("option");
                document.body.appendChild(option);
                var att = document.createAttribute("value");
                att.value = value;
                option.setAttributeNode(att);
                option.text = value;
                tadding.add(option);
            });
            return tadding.value;
        }
} // catch
}  // for for (obj in tsearchbut)




        //define search parameters         
        var searchWidget = new Search({
            view: view,
            includeDefaultSources: false,
            locationEnabled: false,
            allPlaceholder: "PLOTS,BUILDING,FLOOR",
            sources: [
                {
                    featureLayer: {
                        url: plotUrl,
                        popupTemplate: templates[2]
                    },
                    searchFields: [attrib.PLOTS.PLOTNUMBER, attrib.PLOTS.DISTRICTENG, attrib.PLOTS.COMMUNITYENG, attrib.PLOTS.MUNICIPALITYENG, attrib.PLOTS.SECUSEENG],
                    suggestionTemplate: "{"+attrib.PLOTS.MUNICIPALITYENG+"}-{"+attrib.PLOTS.DISTRICTENG+"}-{"+attrib.PLOTS.COMMUNITYENG+"}-{"+attrib.PLOTS.PLOTNUMBER+"}",
                    displayField: attrib.PLOTS.PLOTNUMBER,
                    maxResults: 12,
                    maxSuggestions: 12,
                    exactMatch: false,
                    outFields: ["*"],
                    name: "PLOT",
                    placeholder: "example: P1",
                    zoomScale: 500000,
                },
            {
                featureLayer: {
                    url: building2dUrl,
                    popupTemplate: templates[0]
                },
                searchFields: [attrib.BUILDINGS.NAMEENGLISH, attrib.BUILDINGS.AREANAME, attrib.BUILDINGS.PRIMARYUSAGETYPE, attrib.BUILDINGS.SECONDARYUSAGETYPE],
                suggestionTemplate: "{"+attrib.BUILDINGS.NAMEENGLISH+"}, {"+attrib.BUILDINGS.AREANAME+"}",
                exactMatch: false,
                maxResults: 12,
                maxSuggestions: 12,
                outFields: ["*"],
                placeholder: "example: ADNOC HQ",
                name: "BUILDING",
                zoomScale: 500000,
            },
            {
                featureLayer: {
                    url: floor2dUrl,
                    popupTemplate: templates[1]
                },
                searchFields: [attrib.FLOORS.NAMEENGLISH, attrib.FLOORS.AREANAME,attrib.FLOORS.FLOORNAME, attrib.FLOORS.PRIMARYUSAGETYPE, attrib.FLOORS.SECONDARYUSAGETYPE, attrib.FLOORS.FACILITIESAVAILABLE],
                suggestionTemplate: "{"+attrib.FLOORS.FLOORNAME+"},{"+attrib.FLOORS.NAMEENGLISH+"}, {"+attrib.FLOORS.AREANAME+"}",
                exactMatch: false,
                maxResults: 12,
                maxSuggestions: 12,
                outFields: ["*"],
                placeholder: "example: ADNOC HQ",
                name: "FLOORS",
                zoomScale: 500000,
            }
            ]
        });





        // sketch widget
        /*
        const blue = [82, 82, 122, 0.9];
        const white = [255, 255, 255, 0.8];

        // polygon symbol used for sketching the extruded building footprints
        const extrudedPolygon = {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 10, // extrude by 10 meters
                    material: {
                        color: white
                    },
                    edges: {
                        type: "solid",
                        size: "3px",
                        color: blue
                    }
                }
            ]
        };

        // polyline symbol used for sketching routes
        const route = {
            type: "line-3d",
            symbolLayers: [
                {
                    type: "line",
                    size: "3px",
                    material: {
                        color: blue
                    }
                },
                {
                    type: "line",
                    size: "10px",
                    material: {
                        color: white
                    }
                }
            ]
        };

        // point symbol used for sketching points of interest
        const point = {
            type: "point-3d",
            symbolLayers: [
                {
                    type: "icon",
                    size: "20px",
                    resource: { primitive: "kite" },
                    outline: {
                        color: blue,
                        size: "3px"
                    },
                    material: {
                        color: white
                    }
                }
            ]
        };

        // define the SketchViewModel and pass in the symbols for each geometry type
        const sketchVM = new SketchViewModel({
            layer: gLayer,
            view: view,
            pointSymbol: point,
            polygonSymbol: extrudedPolygon,
            polylineSymbol: route
        });

        // after drawing the geometry, enter the update mode to update the geometry
        // and the deactivate the buttons
        sketchVM.on("create", function (event) {
            if (event.state === "complete") {
                sketchVM.update(event.graphic);
                deactivateButtons();
            }
        });

        const drawButtons = Array.prototype.slice.call(
            document.getElementsByClassName("esri-button")
        );

        // set event listeners to activate sketching graphics
        drawButtons.forEach(function (btn) {
            btn.addEventListener("click", function (event) {
                deactivateButtons();
                event.target.classList.add("esri-button--secondary");
                // to activate sketching the create method is called passing in the geometry type
                // from the data-type attribute of the html element
                sketchVM.create(event.target.getAttribute("data-type"));
            });
        });

        function deactivateButtons() {
            drawButtons.forEach(function (element) {
                element.classList.remove("esri-button--secondary");
            });
        }

        view.ui.add("sketchPanel", "top-right"); */
   //define widgets
        var print = new Print({
            view: view,
            printServiceUrl: printurl
        });
        var layerList = new LayerList({
            view: view,
            container: document.createElement("div")
        });
        var basemapGallery = new BasemapGallery({
            view: view,
            container: document.createElement("div")
        });
        var ccWidget = new CoordinateConversion({
            view: view
        });

        
        var directionsWidget = new Directions({
            view: view,
            // Point the URL to a valid route service that uses an
            // ArcGIS Online hosted service proxy instead of the default service
            routeServiceUrl:
                "https://utility.arcgis.com/usrsvcs/appservices/Ix5tsAA3gaQoyZur/rest/services/World/Route/NAServer/Route_World/"
        });

        // Add the Directions widget to the top right corner of the view

		     


        // define expand widgets
   
        var galleryexpand = new Expand({
            view: view,
            content: basemapGallery
        });
      
        var ssexpand = new Expand({
            view: view,
            content: searchWidget
        });
        var ccexpand = new Expand({
            view: view,
            content: ccWidget
        });

        var fullscreen = new Fullscreen({
            view: view
        });
        var legend = new Legend({
            view: view,
        });
        var directionsWidgetexpand = new Expand({
            view: view,
            content: directionsWidget
        });

      /*  var legendcc = new Expand({
            view: view,
            content: legend
        });

*/
	var legendcc = new Expand({
          
		content: new Legend({
                view: view,
                 style: "card"}),
          
		view: view,
          
		expanded: true
        
		});


        view.ui.add(ssexpand, "top-right");
        view.ui.add(galleryexpand, "top-right");
        view.ui.add(directionsWidgetexpand, {
            position: "top-right"
        });
            
	view.ui.add(legendcc, "top-right");

 
        view.ui.add(ccexpand, "top-right");
        view.ui.add(fullscreen, "top-left");



        //define feature layers


var tlayer=[]; var layeringgroup=[]; var groupname=[]; var layeringsubgroup=[]; var dstToggle=[];  var layers=[]; var rendo=[]; var defexp=[]; var tbuttons=[]; var tpanelid=[]; var tchecked=[]; var layeros=[]; var layerosub=[]; 
var tmaindiv = [], tcpaneldiv = [], tcpanelid = [], tcpanelsubdiv = [], buttonsumname = [], butspan = [], butdiv = [], tlayers = [],tcexception=[];
for (obj in legendlayers){ 
    if (legendlayers[obj].layering) {
        layeringgroup.push(legendlayers[obj].layering); tbuttons.push(legendlayers[obj].legendlyrid); tpanelid.push(legendlayers[obj].legendlyrdivclass); 
    var layergroup = legendlayers[obj].layering;
    for (o in layergroup) { tcpanelid.push(layergroup[o]); tcpaneldiv.push(legendlayers[obj].legendlyrdivclass); tcpanelsubdiv.push(legendlayers[obj].legendlyrdivclass); tmaindiv.push(buttonlayers[0].buttondivclass); if (legendlayers[obj].exception) { tcexception.push(legendlayers[obj].exception); } else { tcexception.push(0); } }
}


if (legendlayers[obj].sublegend) {
    groupname = legendlayers[obj].sublegend; tbuttons.push(legendlayers[obj].legendlyrid);
    for (obs in groupname){ layeringgroup.push(groupname[obs].layering); tbuttons.push(groupname[obs].legendsubid); tpanelid.push(groupname[obs].legendsubdivclass);
    layersubgroup = groupname[obs].layering;
    for (o in layersubgroup) { tcpanelid.push(layersubgroup[o]); tcpaneldiv.push(legendlayers[obj].legendlyrdivclass); tcpanelsubdiv.push(groupname[obs].legendsubdivclass); tmaindiv.push(buttonlayers[0].buttondivclass);   if (groupname[obs].exception) { tcexception.push(groupname[obs].exception); } else { tcexception.push(0);}}


}}
}
tlayer= [].concat.apply([], layeringgroup);

for (ob in tlayer){  if(tlayer[ob].renderer3d){rendo[ob]=tlayer[ob].renderer3d;} else {rendo[ob]=tlayer[ob].renderer; }
if(tlayer[ob].definitionexp){ defexp[ob]=tlayer[ob].definitionexp;} else {defexp[ob]="1=1"}
if(tlayer[ob].Server==="MapServer"){ layers[ob] = new MapImageLayer({
          url: tlayer[ob].url,
visible: tlayer[ob].visible});

} else {
layers[ob] = new FeatureLayer({ url: tlayer[ob].url,
            visible: tlayer[ob].visible,
            outFields: ["*"],
          popupTemplate: tlayer[ob].popupTemplate,
       renderer: rendo[ob],
       labelingInfo: [tlayer[ob].labelingInfo],
	definitionExpression: defexp[ob],
        });
}

 scene.add(layers[ob]);
}
for (var i=0; i<layers.length; i++){
dstToggle[i] = dom.byId(tlayer[i].layerid);
 try{throw i}
    catch(ii) {
        on(dstToggle[ii], "change", function () {
            layers[ii].visible = dstToggle[ii].checked;
        });
    }
}


for (obj in searchlayers) { layers.push(layer); tbuttons.push(searchlayers[obj].buttonid); tpanelid.push(searchlayers[obj].buttondivclass); tcpanelid.push(searchlayers[obj]); tcpaneldiv.push(searchlayers[obj].buttondivclass); tcpanelsubdiv.push(searchlayers[obj].buttondivclass); tmaindiv.push(buttonlayers[1].buttondivclass); if (searchlayers[obj].exception) { tcexception.push(searchlayers[obj].exception); } else { tcexception.push(0); } }
for (obj in buttonlayers) { tbuttons.push(buttonlayers[obj].buttonid); tpanelid.push(buttonlayers[obj].buttondivclass); tcpanelid.push(buttonlayers[obj]); tcpaneldiv.push(buttonlayers[obj].buttondivclass); tcpanelsubdiv.push(buttonlayers[obj].buttondivclass); tmaindiv.push(buttonlayers[obj].buttondivclass); if (buttonlayers[obj].exception) { tcexception.push(buttonlayers[obj].exception); } else { tcexception.push(0); } }
layers.push(layer);
layers.push(layer);
layers.push(bldtmlinelayer);

var Toggle=[];var layrres=[]; var butdiv=[]; var butpan=[]; var lyrtask=[]; var lytak=[]; var lytaks=[]; var lytako=[]; var lyrarrs=[]; var lyrnum=[];

for (obj in tbuttons) {
    butdiv[obj] = document.getElementById(tbuttons[obj]);
 
Toggle[obj] = dom.byId(tbuttons[obj]);
 try{throw obj}
    catch(ii) {
        on(Toggle[ii], "click", function () { 
            butpan[ii] = butdiv[ii].nextElementSibling;
if (butpan[ii].style.display === "none") {
if (butpan[ii].classList[0].search("panel_sub_")===0){layer.visible = false; layer.graphics.removeAll();}
//if (butpan[ii].classList[0].search("panel_sub2")===0){layer.visible = false; layer.graphics.removeAll();} 
else {
    for (o in tpanelid) {
    
        if (tcpanelid[o].layerid) {
            if (tcpanelid[o].checked) { layers[o].visible = true; } else {layers[o].visible = false; layer.visible = false; layer.graphics.removeAll(); bldtmlinelayer.visible = false; }
}
        }
    }
} else {
    var tevens = [];
    for (o in tcpaneldiv) {
        if (butpan[ii].classList[0] === tmaindiv[o]) { if (tmaindiv[o] === "panel") { for (oj in tcpanelid) { if (tcpanelid[oj].layerid) { tevens.push(oj); } } } else { tevens.push(o);  if (tcexception[o] !== 0) {  for (j in tcpanelid) { if (tcexception[o].includes(tcpanelid[j].layerid)) { tevens.push(j); } } } } }
        else if (butpan[ii].classList[0] !== tmaindiv[o] && butpan[ii].classList[0] === tcpaneldiv[o]) { tevens.push(o); if (tcexception[o] !== 0) { for (j in tcpanelid) { if (tcexception[o].includes(tcpanelid[j].layerid)) { tevens.push(j); } } } }
        else if (butpan[ii].classList[0] !== tmaindiv[o] && butpan[ii].classList[0] !== tcpaneldiv[o] && butpan[ii].classList[0] === tcpanelsubdiv[o]) { tevens.push(o); if (tcexception[o] !== 0) { for (j in tcpanelid) { if (tcexception[o].includes(tcpanelid[j].layerid)) { tevens.push(j); } } } }
    }
    for (o in tcpaneldiv) {   
        if (tevens.includes(o)) {
            if (tcpanelid[o].layerid) { layer.visible = false; layer.graphics.removeAll(); bldtmlinelayer.visible = false; if (tcpanelid[o].checked === "yes") { layers[o].visible = true; } else { layers[o].visible = false; } } else {
                layers[o].visible = true;
            }
        } else { if (tcpanelid[o].layerid) { layers[o].visible = false; } }
    } 
} // else of display
});  // function end
 } // catch
} // tbuttons for loop




        var homeBtn = new Home({
            view: view
        }, "homeDiv1");



        // add the toolbar for the measurement widgets
        view.ui.add("topbar", "top-right");

        document
            .getElementById("distanceButton")
            .addEventListener("click", function () {
                setActiveWidget(null);
                if (!this.classList.contains("active")) {
                    setActiveWidget("distance");
                } else {
                    setActiveButton(null);
                }
            });

        document
            .getElementById("areaButton")
            .addEventListener("click", function () {
                setActiveWidget(null);
                if (!this.classList.contains("active")) {
                    setActiveWidget("area");
                } else {
                    setActiveButton(null);
                }
            });

        function setActiveWidget(type) {
            switch (type) {
                case "distance":
                    activeWidget = new DirectLineMeasurement3D({
                        view: view
                    });

                    // skip the initial 'new measurement' button
                    activeWidget.viewModel.newMeasurement();

                    view.ui.add(activeWidget, "top-right");
                    setActiveButton(document.getElementById("distanceButton"));
                    break;
                case "area":
                    activeWidget = new AreaMeasurement3D({
                        view: view
                    });

                    // skip the initial 'new measurement' button
                    activeWidget.viewModel.newMeasurement();

                    view.ui.add(activeWidget, "top-right");
                    setActiveButton(document.getElementById("areaButton"));
                    break;
                case null:
                    if (activeWidget) {
                        view.ui.remove(activeWidget);
                        activeWidget.destroy();
                        activeWidget = null;
                    }
                    break;
            }
        }

        function setActiveButton(selectedButton) {
            // focus the view to activate keyboard shortcuts for sketching
            view.focus();
            var elements = document.getElementsByClassName("active");
            for (var i = 0; i < elements.length; i++) {
                elements[i].classList.remove("active");
            }
            if (selectedButton) {
                selectedButton.classList.add("active");
            }
        }



        window.view = view;
        // add a GraphicsLayer for the sketches and the buffer
        const sketchLayer = new GraphicsLayer();
        const bufferLayer = new GraphicsLayer();
        view.map.addMany([bufferLayer, sketchLayer]);

        let sceneLayer = null;
        let sceneLayerView = null;
        let bufferSize = 0;

        // Assign scene layer once webscene is loaded and initialize UI
        scene.load().then(function () {
            sceneLayer = scene.layers.find(function (layer) {
                return layer.title === "Helsinki textured buildings";
            });
            sceneLayer.outFields = ["buildingMaterial", "yearCompleted"];

            view.whenLayerView(sceneLayer).then(function (layerView) {
                sceneLayerView = layerView;
                queryDiv.style.display = "block";
            });
        });

        view.watch("updating", function (updating) {
            if (!updating) {
                runQuery();
            }
        });

        view.ui.add([queryDiv], "bottom-left");
        view.ui.add([resultDiv], "top-right");

        // use SketchViewModel to draw polygons that are used as a query
        let sketchGeometry = null;
        const sketchViewModel = new SketchViewModel({
            layer: sketchLayer,
            defaultUpdateOptions: {
                tool: "reshape",
                toggleToolOnClick: false
            },
            view: view
        });

        sketchViewModel.on("create", function (event) {
            if (event.state === "complete") {
                sketchGeometry = event.graphic.geometry;
                runQuery();
            }
        });

        sketchViewModel.on("update", function (event) {
            if (event.state !== "cancel" && event.graphics.length) {
                sketchGeometry = event.graphics[0].geometry;
                runQuery();
            }
        });
        // draw geometry buttons - use the selected geometry to sktech
        document
            .getElementById("point-geometry-button")
            .addEventListener("click", geometryButtonsClickHandler);
        document
            .getElementById("line-geometry-button")
            .addEventListener("click", geometryButtonsClickHandler);
        document
            .getElementById("polygon-geometry-button")
            .addEventListener("click", geometryButtonsClickHandler);
        function geometryButtonsClickHandler(event) {
            const geometryType = event.target.value;
            clearGeometry();
            sketchViewModel.create(geometryType);
        }

        const bufferNumSlider = new Slider({
            container: "bufferNum",
            min: 0,
            max: 500,
            steps: 1,
            labelsVisible: true,
            precision: 0,
            labelFormatFunction: function (value, type) {
                return value.toString() + "m";
            },
            values: [0]
        });
        // get user entered values for buffer
        bufferNumSlider.on("value-change", bufferVariablesChanged);
        function bufferVariablesChanged(event) {
            bufferSize = event.value;
            runQuery();
        }
        // Clear the geometry and set the default renderer
        document
            .getElementById("clearGeometry")
            .addEventListener("click", clearGeometry);

        // Clear the geometry and set the default renderer
        function clearGeometry() {
            sketchGeometry = null;
            sketchViewModel.cancel();
            sketchLayer.removeAll();
            bufferLayer.removeAll();
            clearHighlighting();
            clearCharts();
            resultDiv.style.display = "none";
        }

        // set the geometry query on the visible SceneLayerView
        var debouncedRunQuery = promiseUtils.debounce(function () {
            if (!sketchGeometry) {
                return;
            }

            resultDiv.style.display = "block";
            updateBufferGraphic(bufferSize);
            return promiseUtils.eachAlways([
                queryStatistics(),
                updateSceneLayer()
            ]);
        });

        function runQuery() {
            debouncedRunQuery().catch((error) => {
                if (error.name === "AbortError") {
                    return;
                }

                console.error(error);
            });
        }

        // Set the renderer with objectIds
        var highlightHandle = null;
        function clearHighlighting() {
            if (highlightHandle) {
                highlightHandle.remove();
                highlightHandle = null;
            }
        }

        function highlightBuildings(objectIds) {
            // Remove any previous highlighting
            clearHighlighting();
            const objectIdField = sceneLayer.objectIdField;
            document.getElementById("count").innerHTML = objectIds.length;

            highlightHandle = sceneLayerView.highlight(objectIds);
        }

        // update the graphic with buffer
        function updateBufferGraphic(buffer) {
            // add a polygon graphic for the buffer
            if (buffer > 0) {
                var bufferGeometry = geometryEngine.geodesicBuffer(
                    sketchGeometry,
                    buffer,
                    "meters"
                );
                if (bufferLayer.graphics.length === 0) {
                    bufferLayer.add(
                        new Graphic({
                            geometry: bufferGeometry,
                            symbol: sketchViewModel.polygonSymbol
                        })
                    );
                } else {
                    bufferLayer.graphics.getItemAt(0).geometry = bufferGeometry;
                }
            } else {
                bufferLayer.removeAll();
            }
        }

        function updateSceneLayer() {
            const query = sceneLayerView.createQuery();
            query.geometry = sketchGeometry;
            query.distance = bufferSize;
            return sceneLayerView.queryObjectIds(query).then(highlightBuildings);
        }

        var yearChart = null;
        var materialChart = null;

        function queryStatistics() {
            const statDefinitions = [
                {
                    onStatisticField:
                        "CASE WHEN buildingMaterial = 'concrete or lightweight concrete' THEN 1 ELSE 0 END",
                    outStatisticFieldName: "material_concrete",
                    statisticType: "sum"
                },
                {
                    onStatisticField:
                        "CASE WHEN buildingMaterial = 'brick' THEN 1 ELSE 0 END",
                    outStatisticFieldName: "material_brick",
                    statisticType: "sum"
                },
                {
                    onStatisticField:
                        "CASE WHEN buildingMaterial = 'wood' THEN 1 ELSE 0 END",
                    outStatisticFieldName: "material_wood",
                    statisticType: "sum"
                },
                {
                    onStatisticField:
                        "CASE WHEN buildingMaterial = 'steel' THEN 1 ELSE 0 END",
                    outStatisticFieldName: "material_steel",
                    statisticType: "sum"
                },
                {
                    onStatisticField:
                        "CASE WHEN buildingMaterial IN ('concrete or lightweight concrete', 'brick', 'wood', 'steel') THEN 0 ELSE 1 END",
                    outStatisticFieldName: "material_other",
                    statisticType: "sum"
                },
                {
                    onStatisticField:
                        "CASE WHEN (yearCompleted >= '1850' AND yearCompleted <= '1899') THEN 1 ELSE 0 END",
                    outStatisticFieldName: "year_1850",
                    statisticType: "sum"
                },
                {
                    onStatisticField:
                        "CASE WHEN (yearCompleted >= '1900' AND yearCompleted <= '1924') THEN 1 ELSE 0 END",
                    outStatisticFieldName: "year_1900",
                    statisticType: "sum"
                },
                {
                    onStatisticField:
                        "CASE WHEN (yearCompleted >= '1925' AND yearCompleted <= '1949') THEN 1 ELSE 0 END",
                    outStatisticFieldName: "year_1925",
                    statisticType: "sum"
                },
                {
                    onStatisticField:
                        "CASE WHEN (yearCompleted >= '1950' AND yearCompleted <= '1974') THEN 1 ELSE 0 END",
                    outStatisticFieldName: "year_1950",
                    statisticType: "sum"
                },
                {
                    onStatisticField:
                        "CASE WHEN (yearCompleted >= '1975' AND yearCompleted <= '1999') THEN 1 ELSE 0 END",
                    outStatisticFieldName: "year_1975",
                    statisticType: "sum"
                },
                {
                    onStatisticField:
                        "CASE WHEN (yearCompleted >= '2000' AND yearCompleted <= '2015') THEN 1 ELSE 0 END",
                    outStatisticFieldName: "year_2000",
                    statisticType: "sum"
                }
            ];
            const query = sceneLayerView.createQuery();
            query.geometry = sketchGeometry;
            query.distance = bufferSize;
            query.outStatistics = statDefinitions;

            return sceneLayerView.queryFeatures(query).then(function (result) {
                const allStats = result.features[0].attributes;
                updateChart(materialChart, [
                    allStats.material_concrete,
                    allStats.material_brick,
                    allStats.material_wood,
                    allStats.material_steel,
                    allStats.material_other
                ]);
                updateChart(yearChart, [
                    allStats.year_1850,
                    allStats.year_1900,
                    allStats.year_1925,
                    allStats.year_1950,
                    allStats.year_1975,
                    allStats.year_2000
                ]);
            }, console.error);
        }

        // Updates the given chart with new data
        function updateChart(chart, dataValues) {
            chart.data.datasets[0].data = dataValues;
            chart.update();
        }

        function createYearChart() {
            const yearCanvas = document.getElementById("year-chart");
            yearChart = new Chart(yearCanvas.getContext("2d"), {
                type: "horizontalBar",
                data: {
                    labels: [
                        "1850-1899",
                        "1900-1924",
                        "1925-1949",
                        "1950-1974",
                        "1975-1999",
                        "2000-2015"
                    ],
                    datasets: [
                        {
                            label: "Build year",
                            backgroundColor: "#149dcf",
                            stack: "Stack 0",
                            data: [0, 0, 0, 0, 0, 0]
                        }
                    ]
                },
                options: {
                    responsive: false,
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: "Build year"
                    },
                    scales: {
                        xAxes: [
                            {
                                stacked: true,
                                ticks: {
                                    beginAtZero: true,
                                    precision: 0
                                }
                            }
                        ],
                        yAxes: [
                            {
                                stacked: true
                            }
                        ]
                    }
                }
            });
        }
        function createMaterialChart() {
            const materialCanvas = document.getElementById("material-chart");
            materialChart = new Chart(materialCanvas.getContext("2d"), {
                type: "doughnut",
                data: {
                    labels: ["Concrete", "Brick", "Wood", "Steel", "Other"],
                    datasets: [
                        {
                            backgroundColor: [
                                "#FD7F6F",
                                "#7EB0D5",
                                "#B2E061",
                                "#BD7EBE",
                                "#FFB55A"
                            ],
                            borderWidth: 0,
                            data: [0, 0, 0, 0, 0]
                        }
                    ]
                },
                options: {
                    responsive: false,
                    cutoutPercentage: 35,
                    legend: {
                        position: "bottom"
                    },
                    title: {
                        display: true,
                        text: "Building Material"
                    }
                }
            });
        }

        function clearCharts() {
            updateChart(materialChart, [0, 0, 0, 0, 0]);
            updateChart(yearChart, [0, 0, 0, 0, 0, 0]);
            document.getElementById("count").innerHTML = 0;
        }

        createYearChart();
        createMaterialChart();
});  //end of require main function