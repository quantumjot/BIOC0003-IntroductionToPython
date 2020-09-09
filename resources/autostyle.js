// AUTORUN ALL CELLS ON NOTEBOOK-LOAD!
require(
    ['base/js/namespace', 'jquery'],
    function(jupyter, $) {
        $(jupyter.events).on("kernel_ready.Kernel", function () {
            console.log("Auto-running all cells-below...");
            // jupyter.actions.call('jupyter-notebook:run-all-cells-below');
            // jupyter.actions.call('jupyter-notebook:save-notebook');

            $("head").append("<link rel='stylesheet' id='extracss' href='./resources/style.css' type='text/css' />");
        }
    )}
);

$("head").append("<link rel='stylesheet' id='extracss' href='./resources/style.css' type='text/css' />");
