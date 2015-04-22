$(function() {
    function init() {
        // Init data table
        var $table = $('#table1'),
            tpl = _.template($('#table-template').html());
        $table.append(tpl({
            num_header_rows: 1,
            num_header_cols: 1,
            rows: [
                ['', 'Disease +', 'Disease -'],
                ['Test +', 100, 5],
                ['Test -', 2, 203],
            ]
        }));
    }

    function drawGraph(elId, x, y, options) {
        x = x || [];
        y = y || [];
        options = options || {};

        var dd1 = [],
            graph = $(elId)[0];
        for (var i = 0; i < x.length; i++) {
            dd1.push([x[i], y[i]]);
        }
        Flotr.draw(graph, [
                { 
                    data: dd1,
                    bars: { show: true },
                    points: { show: false },
                    markers: {
                        show: false,
                        position: 'rt',
                        labelFormatter: function(o) { return o.y; },
                    },
                }
            ], {
                colors: ['#00A8F0', '#C0D800', '#9440ED'],
                xaxis: options.xaxis || {},
                yaxis: options.yaxis || {},
                mouse: {
                    position: 'ne',
                    track: true,
                    trackDecimals: 0,
                    sensibility: 30,
                    trackY: true,
                },
            }
        );
    }

    function refresh() {
        // Draw graph
        var x = [], y = [];
        for (var i = 0; i < 100; i++) {
            x.push(i);
            y.push(Math.floor(Math.random() * 50));
        }
        drawGraph('#graph1', x, y);
    }

    // -----------------------------------------------------
    init();
    refresh();
});