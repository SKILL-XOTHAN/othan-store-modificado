function iniciarMap(){
  var coordinates = {lat:-20.2327283 ,lgn:-70.1427897 };
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 25,
    center : coordinates
  });
  var marker = new google.maps.Marker({
    position: coordinates,
    map: map
  })
}
