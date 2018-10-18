	function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 42.352271, lng: -71.05524200000001},
        zoom: 17
        });

var south_loc = {lat:42.352271 , lng: -71.05524200000001};
var south_title = 'South Station';
var andrew_loc = {lat:42.330154, lng: -71.057655};
var andrew_title = 'Andrew';
var porter_loc = {lat:42.3884, lng: -71.11914899999999};
var porter_title = 'Porter Square';
var harvard_loc = {lat:42.373362, lng: -71.118956};
var harvard_title = 'Harvard Square';
var jfk_loc = {lat:42.320685, lng: -71.052391};
var jfk_title = 'JFK/UMass';
var savin_loc = {lat:42.31129, lng: -71.053331};
var savin_title = 'Savin Hill';
var park_loc = {lat:42.35639457, lng: -71.0624242};
var park_title = 'Park Street';
var broadway_loc = {lat:42.342622, lng: -71.056967};
var broadway_title = 'Broadway'; 
var nquincy_loc = {lat:42.275275, lng: -71.029583};
var nquincy_title = 'North Quincy';
var shawmut_loc = {lat:42.29312583, lng: -71.06573796000001};
var shawmut_title = 'Shawmut'; 
var davis_loc = {lat:42.39674, lng: -71.121815};
var davis_title = 'Davis'; 
var alewife_loc = {lat:42.395428, lng: -71.142483};
var alewife_title = 'Alewife'; 
var kendall_loc = {lat:42.36249079, lng: -71.08617653};
var kendall_title = 'Kendall/MIT'; 
var charles_loc = {lat:42.361166, lng: -71.070628};
var charles_title = 'Charles/MGH'; 
var dtcross_loc = {lat:42.355518, lng: -71.060225};
var dtcross_title = 'Downtown Crossing'; 
var quincyc_loc = {lat:42.251809, lng: -71.005409};
var quincyc_title = 'Quincy Center'; 
var quincya_loc = {lat:42.233391, lng: -71.007153};
var quincya_title = 'Quincy Adams'; 
var ashmont_loc = {lat:42.284652, lng: -71.06448899999999};
var ashmont_title = 'Ashmont'; 
var wollaston_loc = {lat:42.2665139, lng: -71.0203369};
var wollaston_title = 'Wollaston';
var fields_loc = {lat:42.300093, lng: -71.061667};
var fields_title = 'Fields Corner';
var central_loc = {lat:42.365486, lng: -71.103802};
var central_title = 'Central Square';
var braintree_loc = {lat:42.2078543, lng: -71.0011385};
var braintree_title = 'Braintree';


var markers = [];
/*
var marker_ray = [south_loc, andrew_loc, porter_loc,
				 harvard_loc, jfk_loc, savin_loc, park_loc, 
				 broadway_loc, nquincy_loc, shawmut_loc,
				 davis_loc, alewife_loc, kendall_loc,
				 charles_loc, dtcross_loc, quincyc_loc, 
				 quincya_loc, ashmont_loc, wollaston_loc,
				 fields_loc, central_loc, braintree_loc]; */

var marker_ray = [alewife_loc, davis_loc, porter_loc,
				 harvard_loc, central_loc, kendall_loc,
				 charles_loc, park_loc, dtcross_loc,
				 south_loc, broadway_loc, andrew_loc, 
				 jfk_loc, nquincy_loc, wollaston_loc, 
				 quincyc_loc, quincya_loc, braintree_loc,
				 savin_loc, shawmut_loc, ashmont_loc,
				 fields_loc];

var extension_stats = [jfk_loc, savin_loc, fields_loc, 
					  shawmut_loc, ashmont_loc];

var title_ray = [south_title, andrew_title, porter_title, 
				 harvard_title, jfk_title, savin_title, 
				 park_title, broadway_title, nquincy_title,
				 shawmut_loc, davis_loc, alewife_loc, kendall_loc,
				 charles_loc, dtcross_loc, quincyc_loc, 
				 quincya_loc, ashmont_loc, wollaston_loc,
				 fields_loc, central_loc, braintree_loc];

var image = 'pin_marker.png';
for (var i = 0; i < marker_ray.length; i+= 1) {
	var marker = new google.maps.Marker({
		position: marker_ray[i],
		map: map,
		//title: title_ray[i],
		icon: image
	});
}

for (var i = 0; i < (marker_ray.length) - 5; i+=1) {
var flightPlanCoordinates = [marker_ray[i], marker_ray[i+1]];
var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: .5,
    strokeWeight: 2
  });
flightPath.setMap(map);
}

for (var i = 0; i < (extension_stats.length) - 1; i+=1) {
var flightPlanCoordinates = [extension_stats[i], extension_stats[i+1]];
var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: .5,
    strokeWeight: 3
  });
flightPath.setMap(map);
}

// putting marker on user's current location
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(somePos) {
		var user_lat = somePos.coords.latitude;
		var user_long = somePos.coords.longitude;
		var user_loc = {lat:user_lat, lng: user_long};
		var user_marker = new google.maps.Marker({
		position: user_loc,
		map: map,
		//title: title_ray[i],
		icon: "user_loc2.png"
		});
		map.setCenter(user_marker.getPosition());

	});
}


var min_dist = -1;
for (var i = 0; i < (marker_ray.length); i+=1) {
	dist = google.maps.geometry.spherical.computeDistanceBetween(user_loc, marker_ray[i]);
	console.log("distance: ", dist);
}




// var my_lat;
// var my_long;
// function showPosition(position) {
//      my_lat = position.coords.latitude
//      my_long = position.coords.longitude; 
//     console.log("lat: ", my_lat);
//     console.log("long: ", my_long);
// }


/*
var marker = new 
	google.maps.Marker({
    position: south_stat_loc,
    map: map,
    title: 'South Station'
  });

var marker = new 
	google.maps.Marker({
    position: south_stat_loc,
    map: map,
    title: 'South Station'
  });
  */

}


