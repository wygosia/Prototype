var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;
var markers = [];
    function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        addMarker(uluru,map);
        google.maps.event.addListener(map, 'click', function(event) {
        	markers.forEach(function(m, i) {
        		if(m.position==event.latLng){
        			markers.splice(i,1);
        			m.setMap(null);
        			return;
        		}
        	});
       		addMarker(event.latLng, map);
       	});
       	google.maps.event.addListener(map, 'rightclick', function(event) {
        	markers.forEach(function(m, i) {
        		if(m.position==event.latLng){
        			markers.splice(i,1);
        			m.setMap(null);
        			return;
        		}
        	});
        });
       	var image = 'https://maps.google.com/mapfiles/kml/shapes/target.png';
      	function addMarker(location, map) {
        	var marker = new google.maps.Marker({
        		position: location,
        		label: labels[labelIndex++ % labels.length],
        		draggable: true,
        		icon: image,
        		map: map
       		});
       		markers.push(marker);
       		google.maps.event.addListener(marker, 'rightclick', function(event) {
	        	markers.forEach(function(m, i) {
	        		if(m.position==event.latLng){
	        			markers.splice(i,1);
	        			m.setMap(null);
	        			return;
	        		}
        	});
        });
      	}
     }
     google.maps.event.addDomListener(window, 'load', initialize);
