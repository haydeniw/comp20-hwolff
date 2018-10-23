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
				 shawmut_title, davis_title, alewife_title, kendall_title,
				 charles_title, dtcross_title, quincyc_title, 
				 quincya_title, ashmont_title, wollaston_title,
				 fields_title, central_title, braintree_title];
var gmap_ray = [];
var map;


function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
    	center: {lat: 42.352271, lng: -71.05524200000001},
     	zoom: 17
    });
    create_markers();
    create_polylines();
    check_clicks();
    extension_polylines();
    get_user_loc();

}

function create_markers() {
var image = 'pin_marker.png';
for (var i = 0; i < marker_ray.length; i+= 1) {
	var marker = new google.maps.Marker({
		position: marker_ray[i],
		map: map,
		title: title_ray[i],
		icon: image
		
	});
	gmap_ray.push(marker);
}
}


function create_polylines() {
for (var i = 0; i < (marker_ray.length) - 5; i+=1) {
var flightPlanCoordinates = [marker_ray[i], marker_ray[i+1]];
var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: .5,
    strokeWeight: 3
  });
flightPath.setMap(map);
}
}

function extension_polylines() {
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
}


function check_clicks() {
var infowindow;
for (var k = 0; k < gmap_ray.length; k+=1) {
gmap_ray[k].addListener('click', function() {
          console.log("click");
          infowindow = new google.maps.InfoWindow({
    	  content: title_ray[k]
  		});
        infowindow.open(map, gmap_ray[k]); 
        });
}
}

function get_user_loc() {
	var me;
	if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(somePos) {
			myLat=somePos.coords.latitude;
			myLng=somePos.coords.longitude;
		console.log("user lat: ", myLat);
		console.log("user long: ", myLng);
		me = new google.maps.LatLng(myLat, myLng);
		map.panTo(me);
	});

	var user_marker = new google.maps.Marker({
		center: me,
		position: me,
		map: map,
		icon: 'user_loc2.png'
	});
}
}




