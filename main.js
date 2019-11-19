function initMap(){
    var location = {lat: 20.798363, lng: -156.331924};
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}