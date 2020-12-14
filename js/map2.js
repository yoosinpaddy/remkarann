//       function initMap() {
//         var uluru = {lat:51.508742, lng: -0.120850};
//         var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 14,
//           center: uluru,
//           scrollwheel:false,
//           styles:
// [
//     {
//         "featureType": "administrative",
//         "elementType": "labels.text",
//         "stylers": [
//             {
//                 "visibility": "on"
//             }
//         ]
//     },
//     {
//         "featureType": "poi",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "off"
//             }
//         ]
//     },
//     {
//         "featureType": "transit.station.rail",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "simplified"
//             },
//             {
//                 "saturation": "-100"
//             }
//         ]
//     },
//     {
//         "featureType": "water",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "on"
//             }
//         ]
//     }
// ]
//         });
//         var marker = new google.maps.Marker({
//           position: uluru,
//           map: map
//         });
//       }




function initMap() {
    var latlng = new google.maps.LatLng(51.508742,-0.120850);
    var latlng2 = new google.maps.LatLng(51.508742,-0.120850);
    var myOptions2 =  {
        zoom: 12,
        center: latlng2,
        styles: [
    {
        "featureType": "administrative",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    }
]
    };

    
    var map2 = new google.maps.Map(document.getElementById("map2"), myOptions2);

    var myMarker2 = new google.maps.Marker(
    {
        position: latlng2,
        map: map2,
        icon: 'images/marker.png',
        title:"Beijing"
    });
}



    
// $(document).on("ready", function(){

//     var gap = $(".container").offset().left;
//     $(".about-conf").css({
//         "padding-left": gap
//     });


// });