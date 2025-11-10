function iniciarMap(){
  var ubicacion = {lat: -20.2327283 ,lng: -70.1427897 };
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 16,
    center : ubicacion
  });
  var marker = new google.maps.Marker({
    position: ubicacion,
    map: map,
    title: "Othan Store",
  });
}
