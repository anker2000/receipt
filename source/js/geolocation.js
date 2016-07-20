function setIOSNativeAppLocation(lat , lng){
  // console.log(lat, lng);
  // https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&name=cruise&key=YOUR_API_KEY
  var jqxhr = $.getJSON( "https://maps.googleapis.com/maps/api/place/nearbysearch/json", {
  	location: lat+","+lng,
  	radius: 500,
  	type:"restaurant",
  	key:"AIzaSyCYceEkrVRzKuzBD9dNlFu0ztmZgGcbwjg"
  }, function(data) {
		console.log(data);
	
	}).done(function() {
		// console.log( "second success" );
	})
	.fail(function(e) {
		console.log( "error",e );
	})
}
