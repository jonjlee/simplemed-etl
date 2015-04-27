init = function() {
    var monthsRange = months(['1/2007', '12/2015']);
    makeSliderRangeParam('#param1', 'monthRange', monthsRange, { text: monthsText(monthsRange) });
};

calc = function() {
    // Generate random data
    graphDataX = _.range(100),
    graphDataY = _.map(graphDataX, function() { return Math.floor(Math.random()*50); });

    // Histogram of data above
    histogramData = histogram().range([0,50]).bins(5)(graphDataY);
};

render = function() {
    // Draw a 2x2 outcomes table 
    drawTable('#table1', [
        ['', 'Disease +', 'Disease -'],
        ['Test +', 100, 5],
        ['Test -', 2, 203],
    ]);

    drawBarGraph('#graph1', { x: graphDataX, y: graphDataY });
    drawHistogram('#histogram1', { x0: 0, dx: histogramData.dx, y: histogramData.values } );
}