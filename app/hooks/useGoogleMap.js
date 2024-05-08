import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useState, useCallback } from 'react';

export default function PharmacyMap({ realLat, realLng }) {
  const validatedLat = parseFloat(realLat);
  const validatedLng = parseFloat(realLng);
  const [center] = useState({
    lat: Number.isNaN(validatedLat) ? 0 : validatedLat,
    lng: Number.isNaN(validatedLng) ? 0 : validatedLng,
  });

  const containerStyle = {
    width: '350px',
    height: '300px',
  };

  const OPTIONS = {
    minZoom: 4,
    maxZoom: 18,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_API_KEY,
  });

  const onLoad = useCallback((loadedMap) => {
    if (!isLoaded) return;
    const bounds = new window.google.maps.LatLngBounds(center);
    loadedMap.fitBounds(bounds);
  }, [isLoaded, center]);

  const onUnmount = useCallback(() => {
  }, []);

  return (
    isLoaded ? (
      <GoogleMap mapContainerStyle={containerStyle} center={center} onLoad={onLoad} onUnmount={onUnmount} options={OPTIONS}>
        <Marker position={center} />
      </GoogleMap>
    ) : <div>Loading Map...</div>
  );
}
