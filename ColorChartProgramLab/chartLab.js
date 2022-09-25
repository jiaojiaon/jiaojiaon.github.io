anychart.onDocumentReady(function () {
  
    // JSON data
    var chart = anychart.fromJson({
      "chart": {
        // chart type 
        "type": "column",
        "yScale": {       // y scale
  "minimum": 100, // set minimum value
  "maximum": 350  // set maximum value
        },
        // chart series
        "series":[{
  // series data
        "data": [
            {"x": "Strawbeery", "value": "15", fill: "red"},
            {"x": "Peach", "value": "10", fill: "orange"},
            {"x": "Banana", "value": "25", fill: "yellow"},
            {"x": "Pear", "value": "10", fill: "green"},
            {"x": "Grape", "value": "20", fill: "purple"},
          ],
        // chart container
        "container": "container"
      }
    });
  
    chart.draw();
  });