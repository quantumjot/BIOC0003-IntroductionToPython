// AUTORUN ALL CELLS ON NOTEBOOK-LOAD!

var cssPath = "./resources/style.css";
var cssLink = "<link rel='stylesheet' id='extracss' href='"+cssPath+"' type='text/css' />";

require(
    ['base/js/namespace', 'jquery'],
    function(jupyter, $) {
        $(jupyter.events).on("kernel_ready.Kernel", function () {
            // console.log("Auto-running all cells-below...");
            // jupyter.actions.call('jupyter-notebook:run-all-cells-below');
            // jupyter.actions.call('jupyter-notebook:save-notebook');
            $("head").append(cssLink);
        }
    )}
);

// re-run this if necessary
$("head").append(cssLink);
