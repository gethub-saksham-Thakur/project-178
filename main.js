let latitude=28.6687232, longitude=77.2210688;

mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';


var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom: 16
});

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOption: {
            enableHighAccuracy: true
        },
        trackuserLocation: true
    })
);

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    'top-right'
);
