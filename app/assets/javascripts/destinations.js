

$(document).ready(function (){

function initialize() {
  var myCoords = new google.maps.LatLng(latitude, longitude);
  
  var mapOptions = {
    zoom: 15,
    center: myCoords,
    scrollwheel: false    
  }

  var map = new google.maps.Map(document.getElementById('destination-map'), mapOptions);

  var image = "<%= asset_path 'lama.png'%>"
    var marker = new google.maps.Marker({
      position: myCoords,
      map: map,
      title: address,
      icon: image,
	  animation: google.maps.Animation.DROP
  });

  var contentString = '<h2>' + address +
   '</h2>';

  var infowindow = new google.maps.InfoWindow({
   content: contentString
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });

}

google.maps.event.addDomListener(window, 'load', initialize);
});