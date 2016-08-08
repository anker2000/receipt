var Places = function() {
	var map;
	var service;
	var infowindow;
	var lat;
	var lng;

	function initialize(lat,lng) {
		console.log("hey",lat,lng);
		
	}

	function newReceiptShowNearbyStoresCallback(results, status) {
	  if (status == google.maps.places.PlacesServiceStatus.OK) {
	    for (var i = 0; i < results.length; i++) {
	      // var place = results[i];
	      // createMarker(results[i]);
	      console.log(results[i].name);

	      $(".nearby_stores").append("<li>"+results[i].name+"</li>");
	      console.log($("#nearby_stores"));
	    }
	  }
	}
	return {
		Init: function(iosLat, iosLng) {
			localStorage.setItem("lat", iosLat);
			localStorage.setItem("lng", iosLng);
		},
		newReceiptShowNearbyStores: function() {
			console.log("getting nearby stores");
			var request = {
				location:  new google.maps.LatLng(localStorage.getItem("lat"),localStorage.getItem("lng")),
				radius: '100',
				types: ['store']
			};
			var outputContainer = $('.nearby_stores')[1];
			service = new google.maps.places.PlacesService(outputContainer);
			service.nearbySearch(request, newReceiptShowNearbyStoresCallback);
		}
	}
}()

function setIOSNativeAppLocation(lat, lng) {
	Places.Init(lat,lng);
}
