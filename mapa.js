function iniciarMap(){
  var coordinates = {lat: ,lgn: };
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 25,
    center : coordinates
  });
  var marker = new google.maps.Marker({
    position: coordinates,
    map: map
  })
}
