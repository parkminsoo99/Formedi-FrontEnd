import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useState, useEffect, useCallback } from 'react'

export default function PharmacyMap({ realLat, realLng }) {
    const validatedLat = parseFloat(realLat);
    const validatedLng = parseFloat(realLng);

    const [center, setCenter] = useState({
        lat: isNaN(validatedLat) ? 0 : validatedLat,
        lng: isNaN(validatedLng) ? 0 : validatedLng
    });

    const containerStyle = {
        width: '350px', 
        height: '300px'
    };

    const OPTIONS = {
        minZoom: 4,
        maxZoom: 18
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.GOOGLE_API_KEY
    });

    const [map, setMap] = useState(null);

    const onLoad = useCallback(function callback(map) {
        if (!isLoaded) 
            return;
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map);
    }, [isLoaded, center]); 

    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    }, []);

    return (
        isLoaded ? (
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={OPTIONS}>
                <Marker position={center}></Marker>
            </GoogleMap>
        ) : <div>Loading Map...</div>
    );
}
