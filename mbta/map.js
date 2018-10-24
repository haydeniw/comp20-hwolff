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
var fields_loc = {lat: 42.300093, lng: -71.061667};
var fields_title = 'Fields Corner';
var central_loc = {lat: 42.365486, lng: -71.103802};
var central_title = 'Central Square';
var braintree_loc = {lat: 42.2078543, lng: -71.0011385};
var braintree_title = 'Braintree';

var stations = [
{position: alewife_loc, stop_name: "Alewife", stop_id: "place-alcfcl", marker: null},
{position: davis_loc, stop_name: "Davis", stop_id: "place-davis", marker: null},
{position: porter_loc, stop_name: "Porter Square", stop_id: "place-pptr", marker: null}, 
{position: harvard_loc, stop_name: "Harvard Square", stop_id: "place-hrsq", marker: null}, 
{position: central_loc, stop_name: "Central Square", stop_id: "place-cntsq", marker: null},
{position: kendall_loc, stop_name: "Kendall/MIT", stop_id: "place-knncl", marker: null},
{position: charles_loc, stop_name: "Charles/MGH", stop_id: "place-chnml", marker: null},
{position: park_loc, stop_name: "Park Street", stop_id: "place-pktrm", marker: null},
{position: dtcross_loc, stop_name: "Downtown Crossing", stop_id: "place-dwnxg", marker: null},
{position: south_loc, stop_name: "South Station", stop_id: "place-sstat", marker: null},
{position: broadway_loc, stop_name: "Broadway", stop_id: "place-brdwy", marker: null},
 {position: andrew_loc, stop_name: "Andrew", stop_id: "place-andrw", marker: null},
{position: jfk_loc, stop_name: "JFK/UMASS", stop_id: "place-jfk", marker: null}, 
 {position: nquincy_loc, stop_name: "North Quincy", stop_id: "place-nqncy", marker:null},
{position: wollaston_loc, stop_name: "Wollaston", stop_id: "place-wlsta", marker:null},
 {position: quincyc_loc, stop_name: "Quincy Center", stop_id: "place-qnctr", marker:null},
{position: quincya_loc, stop_name: "Quincy Adams", stop_id: "place-qamnl", marker:null},
{position: braintree_loc, stop_name: "Braintree", stop_id: "place-brntn", marker:null}, 
{position: savin_loc, stop_name: "Savin Hill", stop_id: "place-shmnl", marker: null}, 
{position: fields_loc, stop_name: "Fields Corner", stop_id: "place-fldcr", marker: null},
{position: shawmut_loc, stop_name: "Shawmut", stop_id: "place-smmnl", marker: null},
{position: ashmont_loc, stop_name: "Ashmont", stop_id: "place-asmnl", marker: null}
];	

var extension_stats = [jfk_loc, savin_loc, fields_loc, 
					  shawmut_loc, ashmont_loc];			 

var markers;

var gmap_ray = [];

var myLat;
var myLng;
var me;
var map;
var loc_data;
// var infoWindow;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
    	center: {lat: 42.352271, lng: -71.05524200000001},
     	zoom: 17
    });
 	setMarkers();
 	generatePolylines();
 	extension_polylines();
    getUserLoc();
    makeRequest();
    foo();
}

function setMarkers() {
	var image = 'pin_marker.png';
	for (i = 0; i < (stations.length); i+= 1) {
		marker = new google.maps.Marker({
			position: stations[i].position,
			map: map,
			icon: image	
		});
		stations[i].marker = marker;
		// marker.content = "hi"; // CHANGE TO DATA
	}
}

function generatePolylines() {
	for (var i = 0; i < (stations.length)-5; i+=1) {
		var flightPlanCoordinates = [stations[i].position, stations[i+1].position];
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

function getUserLoc() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(myPos)
		{
			myLat = myPos.coords.latitude;
			myLng = myPos.coords.longitude;
			me = new google.maps.LatLng(myLat, myLng);
			map.panTo(me);
			setMyMarker();		
		});
	
	} else {
		alert("Geolocation not supported :(");
	}
}

function setMyMarker() {
	var user_icon = 'user_loc2.png';
	my_marker = new google.maps.Marker({
		position: me,
		map: map,
		icon: user_icon
	});
}


function makeRequest() {

	var stop_info;
	stations.forEach(function(station) {
	var all_content = "";
	var curr_id = station.stop_id;
	var train_info = [];

	google.maps.event.addListener(station.marker, 'click', function() {
	var request = new XMLHttpRequest();
	request.open("GET", "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=" + curr_id + "&page[limit]=10&page[offset]=0&sort=departure_time&api_key=" + "80f86788e44e4a7c94219e24af52eda0", true);
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			var theData = request.responseText;
			loc_data = JSON.parse(theData);
			loc_data["data"].forEach(function(info) {
				var a_time = info["attributes"]["arrival_time"];
				var a_direction = info["attributes"]["direction_id"];
				train_info.push({time: a_time, direction: a_direction})
			});
			
			console.log("hi");
			for (n = 0; n < 10; n+=1) {
				t = train_info[n].time;
				d = train_info[n].direction;
				if (d == 0) {
					d = "Southbound ";
				} else {
					d = "Northbound ";
				}
				if (t == null) {
					t = "TBD "
				}
				all_content += "Direction: " + d + "<br>" + "Arrival Time: " + t + "<br>" + "<br>";
			}
			console.log(all_content);
			var infoWindow = new google.maps.InfoWindow({
				// content: station.stop_name + "<br>" + "Direction: " + d + "<br>" + "Arrival Time: " + t
				content: station.stop_name + "<br>" + "<br>" + "Upcoming trains: " + "<br>" + all_content
			});
			infoWindow.open(map, station.marker);
		}
	}
		request.send();
	});
});
}

function foo() {

for (a = 0; a < gmap_ray.length; a+=1) {
	console.log("here");
	console.log(gmap_ray[a]);
}

}








