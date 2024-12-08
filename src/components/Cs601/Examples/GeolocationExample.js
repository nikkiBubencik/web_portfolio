function GeolocationExample(){
    const locationInfo = document.getElementById('location-info');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
    // Geolocation is not supported, display a message to the user.
    locationInfo.textContent = "Geolocation is not supported by this browser.";
    }
    function successCallback(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const locationInfo = document.getElementById('location-info');
        locationInfo.textContent = `Your location: Latitude: ${latitude}, Longitude: ${longitude}`;
    }

    function errorCallback(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                locationInfo.textContent = "User denied geolocation permission.";
                console.error("User denied location permission.");
                break;
            case error.POSITION_UNAVAILABLE:
                locationInfo.textContent = "Location information unavailable.";
                console.error("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                locationInfo.textContent = "Geolocation request timed out.";
                console.error("Geolocation request timed out.");
                break;
            default:
                locationInfo.textContent = "An unknown error occurred.";
                console.error("An unknown error occurred.");
                break;
        }
    }

    return(
        <div>
            <p id="location-info">Finding your location...</p>
        </div>
    )
}

export default GeolocationExample;