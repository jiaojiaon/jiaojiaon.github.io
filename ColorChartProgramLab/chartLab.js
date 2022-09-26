anychart.onDocumentReady(function () {

    // JSON data
    var json = {
        // chart settings
        "chart": {
            // chart type
            "type": "column",
            // set chart title
            "title": "Color Chart Program Lab",
            // series settings
            "series": [{
                // first series data
                "data": [
                    { "x": "Strawbeery", "value": "15", fill: "red" },
                    { "x": "Peach", "value": "10", fill: "orange" },
                    { "x": "Banana", "value": "25", fill: "yellow" },
                    { "x": "Pear", "value": "10", fill: "green" },
                    { "x": "Grape", "value": "20", fill: "purple" },
                ]
            }],
            // chart container
            "container": "container"
        }
    };

    // get JSON data
    var chart = anychart.fromJson(json);

    // draw chart
    chart.draw();
});