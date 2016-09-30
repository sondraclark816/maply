

var citySt;

     function initMap() {
         var lat = result.results["0"].geometry.location.lat;
         var long = result.results["0"].geometry.location.lng;
           citySt = result.results[0].address_components[1].short_name + "," +
            result.results[0].address_components[3].short_name;
             map = new google.maps.Map(document.getElementById('map'), {
          center: {lat, lng},
          zoom: 8
        });
      }
       $("#map").append(templateDiv);
      
    };





function getLatLong_Complete(result) {
  var lat = result.results["0"].geometry.location.lat;
  var long = result.results["0"].geometry.location.lng;
        citySt = result.results[0].address_components[1].short_name + "," +
              result.results[0].address_components[3].short_name;


function getLatLong(city,state,zipcode) {
    var address = "";
    if (zipcode.length !=0) {
        address = zipcode.trim();
    }
    else if ( city.length !=0 && state.length !=0) {
        address = city.trim() + ", " + state;
    }
    else {
        return;
    }


var googleApi = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&keyAIzaSyAJ26HH37c3QHc0Ede-f-ZXA_C1HvL981E&callback=initMap";
var getInfo = {
    url: googleApi,
    success: initMap  
};
$.ajax(getInfo)
}


function getZip_Click() {
    var zipcode = $("#lookup").val();
    console.log('This is your area  ' + zipcode + '.');
    getLatLong('','',zipcode);
    
}


$(function() {
    $("#add").on("click", getZip_Click)
    
});
