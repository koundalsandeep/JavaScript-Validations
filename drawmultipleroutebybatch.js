  directionsDisplay = new google.maps.DirectionsRenderer({
                                polylineOptions: {
                                    strokeColor: "black"
                                },
                                suppressMarkers: true
                            });
                            directionsDisplay.setMap(map);
                            var directionsService = new google.maps.DirectionsService();
                            var request = {
                                travelMode: "DRIVING"
                            };
                            var number = 20;
                            var newList = [], length = (response.data.length / number);
                            for (i = 0; i <= length; i++) {
                                if ((i == length - 1) && (response.data.length % number) > 0)
                                {
                                    newList[i] = response.data.slice(newList.length, response.data.length)
                                } else {
                                    newList[i] = response.data.slice(i * number, ((i + 1) * number))
                                }
                            }
                            var newLength = newList.length;
                            for (var j = 0; j < newLength; j++) {
                                request.waypoints = [];
                                subLength = newList[j].length;
                                if (j == 0) {
                                    var source = newList[j][0]
                                    marker = createMarker('S', source)
                                } else if (j == (newLength - 1)) {
                                    var destination = newList[j][subLength - 1]
                                    marker = createMarker('D', destination)
                                }
                                request.origin = new google.maps.LatLng(source.lat, source.long);
                                for (var i = 0; i < subLength; i++)
                                {
                                    text = (i + (j * number)).toString();
                                    marker = createMarker(text, newList[j][i])
                                    if (i == (subLength - 1)) {
                                        source = newList[j][(subLength - 1)]
                                        destination = newList[j][(subLength - 1)]
                                    }
                                    if (!request.waypoints)
                                        request.waypoints = [];
                                    request.waypoints.push({
                                        location: marker.getPosition(),
                                        stopover: true
                                    });
                                }
                                request.destination = new google.maps.LatLng(destination.lat, destination.long);
                                directionsService.route(request, function (result, status) {
                                    if (status == google.maps.DirectionsStatus.OK) {
                                        directionsDisplay.setDirections(result);
                                    }
                                });
                            }
                            var markerLength = routeMarkers.length
                            for (var z = 0; z < markerLength; z++) {
                                routeMarkers[z].setMap(map);
                            }
                            
                            
