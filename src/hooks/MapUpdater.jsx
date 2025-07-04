import { useEffect } from "react";
import { useMap } from "react-leaflet";

const MapUpdater = ({ lat, lng }) => {
  const map = useMap();

  useEffect(() => {
    if (lat && lng) {
      map.setView([lat, lng], 13);
    }
  }, [lat, lng, map]);

  return null;
};

export default MapUpdater;
