// Assign the specification to a local variable vlSpec.
// Bar with interactive legend
vLSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "width": 1100, 
  "height": 700,
  "data": {"url": "meteorites.csv"},
  // "transform": [
  //   {"filter": {
  //     "field": "maincategory",
  //     "oneOf": ["H", "L", "C", "Angrite", "L6", "H4"],
  //   }
         
  //   }],
  "mark": {
        "type": "bar",
        "tooltip": true
    },
  "selection": {
    "Meteorite": {
      "type": "single", "fields": ["maincategory"], "bind": {"input": "select", "options": [null, "Chondrite", "Achondrite", "Magnetic Iron", "Unknown", "Nonmagnetic Iron", "Mesosiderite", "Pallasite"]}
    }
  },
  "encoding": {
    "x": {
      "timeUnit": "year", "field": "year", "type": "temporal",
      "axis": {"domain": false, "format": "%Y", "tickSize": 0}
    },
    "y": {
      "aggregate": "count", 
      "field": "maincategory",
      "type": "quantitative",
      // "stack": "center", "axis": null
    },
    "color": {
      "field":"maincategory", "type": "nominal",
      "scale": {"scheme": "dark2"}
    },
    "opacity": {
      "condition": {"selection": "Meteorite", "value": 1},
      "value": 0.2
    }
  }
}
// Embed the visualization in the container with id `vis2`
vegaEmbed('#vis2', vLSpec);