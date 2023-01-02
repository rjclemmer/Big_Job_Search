const mapStyle = [
  {
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{ visibility: "on" }, { color: "#fcfcfc" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ visibility: "on" }, { color: "#bfd4ff" }],
  },
];
let map;
let censusMin = Number.MAX_VALUE,
  censusMax = -Number.MAX_VALUE;

function initMap() {
  // load the map
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40, lng: -100 },
    zoom: 4,
    styles: mapStyle,
  });
  // set up the style rules and events for google.maps.Data
  map.data.setStyle(styleFeature);
  map.data.addListener("mouseover", mouseInToRegion);
  map.data.addListener("mouseout", mouseOutOfRegion);

  // wire up the button
  const selectBox = document.getElementById("census-variable");

  google.maps.event.addDomListener(selectBox, "change", () => {
    clearCensusData();
    loadCensusData(selectBox.options[selectBox.selectedIndex].value);
  });
  // state polygons only need to be loaded once, do them now
  loadMapShapes();
}

/** Loads the state boundary polygons from a GeoJSON source. */
function loadMapShapes() {
  // load US state outline polygons from a GeoJson file
  map.data.loadGeoJson(
    "https://storage.googleapis.com/mapsdevsite/json/states.js",
    { idPropertyName: "STATE" }
  );
  // wait for the request to complete by listening for the first feature to be
  // added
  google.maps.event.addListenerOnce(map.data, "addfeature", () => {
    google.maps.event.trigger(
      document.getElementById("census-variable"),
      "change"
    );
  });
}

/**
 * Loads the census data from a simulated API call to the US Census API.
 *
 * @param {string} variable
 */
function loadCensusData(variable) {
  // load the requested variable from the census API (using local copies)
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "http://api.census.gov/data/2012/acs5/profile?get=" +
  variable + "&for=state:*&key=a267ac4aa15d46f2340f7a0a7e741ecf65ac937d" + ".json");
  xhr.onload = function () {
    const censusData = JSON.parse(xhr.responseText);

    censusData.shift(); // the first row contains column names
    censusData.forEach((row) => {
      const censusVariable = parseFloat(row[0]);
      const stateId = row[1];

      // keep track of min and max values
      if (censusVariable < censusMin) {
        censusMin = censusVariable;
      }

      if (censusVariable > censusMax) {
        censusMax = censusVariable;
      }

      const state = map.data.getFeatureById(stateId);

      // update the existing row with the new data
      if (state) {
        state.setProperty("census_variable", censusVariable);
      }
    });
    // update and display the legend
    document.getElementById("census-min").textContent =
      censusMin.toLocaleString();
    document.getElementById("census-max").textContent =
      censusMax.toLocaleString();
  };

  xhr.send();
}

/** Removes census data from each shape on the map and resets the UI. */
function clearCensusData() {
  censusMin = Number.MAX_VALUE;
  censusMax = -Number.MAX_VALUE;
  map.data.forEach((row) => {
    row.setProperty("census_variable", undefined);
  });
  document.getElementById("data-box").style.display = "none";
  document.getElementById("data-caret").style.display = "none";
}

/**
 * Applies a gradient style based on the 'census_variable' column.
 * This is the callback passed to data.setStyle() and is called for each row in
 * the data set.  Check out the docs for Data.StylingFunction.
 *
 * @param {google.maps.Data.Feature} feature
 */
function styleFeature(feature) {
  const low = [5, 69, 54]; // color of smallest datum
  const high = [151, 83, 34]; // color of largest datum
  // delta represents where the value sits between the min and max
  const delta =
    (feature.getProperty("census_variable") - censusMin) /
    (censusMax - censusMin);
  const color = [];

  for (let i = 0; i < 3; i++) {
    // calculate an integer color based on the delta
    color.push((high[i] - low[i]) * delta + low[i]);
  }

  // determine whether to show this shape or not
  let showRow = true;

  if (
    feature.getProperty("census_variable") == null ||
    isNaN(feature.getProperty("census_variable"))
  ) {
    showRow = false;
  }

  let outlineWeight = 0.5,
    zIndex = 1;

  if (feature.getProperty("state") === "hover") {
    outlineWeight = zIndex = 2;
  }
  return {
    strokeWeight: outlineWeight,
    strokeColor: "#fff",
    zIndex: zIndex,
    fillColor: "hsl(" + color[0] + "," + color[1] + "%," + color[2] + "%)",
    fillOpacity: 0.75,
    visible: showRow,
  };
}

/**
 * Responds to the mouse-in event on a map shape (state).
 *
 * @param {?google.maps.MapMouseEvent} e
 */
function mouseInToRegion(e) {
  // set the hover state so the setStyle function can change the border
  e.feature.setProperty("state", "hover");

  const percent =
    ((e.feature.getProperty("census_variable") - censusMin) /
      (censusMax - censusMin)) *
    100;

  // update the label
  document.getElementById("data-label").textContent =
    e.feature.getProperty("NAME");
  document.getElementById("data-value").textContent = e.feature
    .getProperty("census_variable")
    .toLocaleString();
  document.getElementById("data-box").style.display = "block";
  document.getElementById("data-caret").style.display = "block";
  document.getElementById("data-caret").style.paddingLeft = percent + "%";
}

/**
 * Responds to the mouse-out event on a map shape (state).
 *
 */
function mouseOutOfRegion(e) {
  // reset the hover state, returning the border to normal
  e.feature.setProperty("state", "normal");
}

window.initMap = initMap;


// fetch('https://api.census.gov/data/2017/ecnbasic?get=NAICS2017_LABEL,EMP,NAME,GEO_ID&for=us:*&NAICS2017=54&ley=a267ac4aa15d46f2340f7a0a7e741ecf65ac937d') 

//   .then(function (response) {
//     return response.json
//   })
//   .then(function (data) {
//     console.log(data);   
//     } )







  var stats = 'B01001_001E,B17001_002E';
  var census = 'http://api.census.gov/data/2015/acs/acs1?get=NAME,' + stats + '&for=urban+area:*';
  var headerLabels = ['Name', 'Population', 'Poverty', '%'];
  var numberFormat = d3.format(',');
  d3.json(census, function(response) {
    console.log('json', response);
    var table = d3.select('body').append('table');
    var thead = table.append('thead').append('tr');
    var tbody = table.append('tbody');
    // First item in response array is an array of column labels.
    // Not user-friendly so throw them away.
    response.shift();
    response.forEach(function(row) {
      // Calculate percentage below the poverty line.
      row.push(((row[2] / row[1]) * 100).toFixed(2));
      // Remove the urban area number identifier.
      row.splice(3,1);
    });
    thead.selectAll('th')
      .data(headerLabels)
      .enter()
      .append('th')
      .text(function(d) { return d; });
    tbody.selectAll('tr')
      .data(response)
      .enter()
      .append('tr')
        .selectAll('td')
        .data(function(d) { return d; })
        .enter()
        .append("td").text(function(d, i) {
          if ( i === 1 || i === 2 ) {
            return numberFormat(d);
          } else {
            return d;
          }
        });
  });
  
  // window.initMap = initMap;

var vaCount = []; 

/*var itJobsByState = [
  {
      "State": Alabama,
      "Count": []
  },
  {
      "State": Alaska,
      "Count": []
  },
  {
      "State": Arizona,
      "Count": []
  },
  {
      "State": Arkansas,
      "Count": []
  },
  {
      "State": "California",
      "Count": []
  },
  {
      "State": "Colorado",
      "Count": []
  },
  {
      "State": "Connecticut",
      "Count": []
  },
  {
      "State": "Delaware",
      "Count": []
  },
  {
      "State": "District Of Columbia",
      "Count": []
  },
  {
      "State": "Federated States Of Micronesia",
      "Count": []
  },
  {
      "State": "Florida",
      "Count": []
  },
  {
      "State": "Georgia",
      "Count": []
  },
  {
      "State": "Guam",
      "Count": []
  },
  {
      "State": "Hawaii",
      "Count": []
  },
  {
      "State": "Idaho",
      "Count": []
  },
  {
      "State": "Illinois",
      "Count": []
  },
  {
      "State": "Indiana",
      "Count": []
  },
  {
      "State": "Iowa",
      "Count": []
  },
  {
      "State": "Kansas",
      "Count": []
  },
  {
      "State": "Kentucky",
      "Count": []
  },
  {
      "State": "Louisiana",
      "Count": []
  },
  {
      "State": "Maine",
      "Count": []
  },
  {
      "State": "Maryland",
      "Count": []
  },
  {
      "State": "Massachusetts",
      "Count": []
  },
  {
      "State": "Michigan",
      "Count": []
  },
  {
      "State": "Minnesota",
      "Count": []
  },
  {
      "State": "Mississippi",
      "Count": []
  },
  {
      "State": "Missouri",
      "Count": []
  },
  {
      "State": "Montana",
      "Count": []
  },
  {
      "State": "Nebraska",
      "Count": []
  },
  {
      "State": "Nevada",
      "Count": []
  },
  {
      "State": "New Hampshire",
      "Count": []
  },
  {
      "State": "New Jersey",
      "Count": []
  },
  {
      "State": "New Mexico",
      "Count": []
  },
  {
      "State": "New York",
      "Count": []
  },
  {
      "State": "North Carolina",
      "Count": []
  },
  {
      "State": "North Dakota",
      "Count": []
  },
  {
      "State": "Ohio",
      "Count": []
  },
  {
      "State": "Oklahoma",
      "Count": []
  },
  {
      "State": "Oregon",
      "Count": []
  },
  {
      "State": "Pennsylvania",
      "Count": []
  },
  {
      "State": "Puerto Rico",
      "Count": []
  },
  {
      "State": "Rhode Island",
      "Count": []
  },
  {
      "State": "South Carolina",
      "Count": []
  },
  {
      "State": "South Dakota",
      "Count": []
  },
  {
      "State": "Tennessee",
      "Count": []
  },
  {
      "State": "Texas",
      "Count": []
  },
  {
      "State": "Utah",
      "Count": []
  },
  {
      "State": "Vermont",
      "Count": []
  },
  {
      "State": "Virgin Islands",
      "Count": []
  },
  {
      "State": "Virginia",
      "Count": []
  },
  {
      "State": "Washington",
      "Count": []
  },
  {
      "State": "West Virginia",
      "Count": []
  },
  {
      "State": "Wisconsin",
      "Count": []
  },
  {
      "State": "Wyoming",
      "Count": []
  }
]

*/



//   function getAPI() {
//     var url = "https://jooble.org/api/";
//     var key = "d2716e90-80f7-4683-a523-b23685b4dfa1";
//     var param1 = "{ keywords: 'it', location: 'Virginia'}"
//     //create xmlHttpRequest object
//     var http = new XMLHttpRequest();
//     //open connection. true - asynchronous, false - synchronous
//     http.open("POST", url + key, true);
//     //Send the proper header information
//     http.setRequestHeader("Content-type", "application/json");
//     //Callback when the state changes
//     http.onreadystatechange = function() {
//        if(http.readyState == 4 && http.status == 200) {
//           //alert(http.responseText);
//           var data = JSON.parse(http.response);
//           var dataTotal = data.totalCount;
//           console.log(data);
//           console.log('Virginia', dataTotal);
//           console.log(data.jobs);
//           // console.log(repoList.jobs[0].title);
//           // var StatesTotal = repoList.totalCount

      

       
//     }
//     //Send request to the server
//     http.send(param1);
//     console.log(vaCount);
//   }
    

  

//     // http.send(param2);

//  getAPI();



 /* #regionMain */
 ///  https://github.com/NelliaFC/HighLife/blob/02a9f72099c5fa1294b604291c9b26f34381985e/assets/js/jobs.js

//  var searchFormEl = document.querySelector("#search-form");
// var mainContainerEl = document.querySelector("#container");
// var jobsUlEl = document.querySelector("#jobs-ul");
// var resultLiId = 1

// // array to hold the bookmarked elements
// var bookmarkedAr = [];
// let resultsAr = [];


// // retrieve input from search bar that was placed in our URL using the GET method in out form.  This variable will be placed at the end of the API URL in our "getData" function as the parameter value. 
// var url_string = window.location;
// var url = new URL(url_string);
// var keyword = url.searchParams.get("keyword");
// var state = url.searchParams.get("state")



// // FETCH FUNTION // retrieves the data, converts the data from XML to JSON for object data handling and send that object to displayContent function
// // var getData = function() {
// var getJoobleData = function() {
//   var url = "https://jooble.org/api/";
//   var key = "d2716e90-80f7-4683-a523-b23685b4dfa1";
//   var params = "{ keywords: '" + keyword + "', location: '" + state + "'}"
//   console.log(params);
  
//   //create xmlHttpRequest object
//   var http = new XMLHttpRequest();
//   //open connection. true - asynchronous, false - synchronous
//   http.open("POST", url + key, true);
  
//   //Send the proper header information
//   http.setRequestHeader("Content-type", "application/json");
    
//   //Callback when the state changes
//   http.onreadystatechange = function() {
//     if(http.readyState == 4 && http.status == 200) {
//       var response = JSON.parse(http.responseText);
//       console.log(response.jobs.slice(0, 20));
//       // geocorderApi(response.jobs.slice(0, 10));
//       console.log(response.jobs);
//     }
//   }
//   //Send request to the server
//   http.send(params);
// }

// // loadBookmarked();
// getJoobleData();

/* #endregion */


