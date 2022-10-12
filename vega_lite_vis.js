var vg_1 = "map/choropleth_map.json";
vegaEmbed("#choropleth_map", vg_1,{"actions": false}).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);



var vg_2 = "raw_line/raw_line.json";
vegaEmbed("#raw_line", vg_2,{"actions": false}).then(function(result) {

}).catch(console.error);

var vg_3 = "bump_chart.json";
vegaEmbed("#bump_chart", vg_3,{"actions": false}).then(function(result) {

}).catch(console.error);

var vg_4 = "heat_map.json";
vegaEmbed("#heat_map", vg_4,{"actions":false}).then(function(result) {

}).catch(console.error);


var vg_5 = "gdp_suicide.json";
vegaEmbed("#scatter_plot", vg_5,{"actions":false}).then(function(result) {

}).catch(console.error);

var vg_6 = "bubble_chart/gdp.json";
vegaEmbed("#scatter_plot2", vg_6,{"actions":false}).then(function(result) {

}).catch(console.error);



