// Google map
// See https://visgl.github.io/react-google-maps/docs/get-started
import { APIProvider, Map } from "@vis.gl/react-google-maps";

const center = {
  lat: 40.712775, // default latitude
  lng: -74.005973, // default longitude
};

export default function GoogleMap({ styles }) {
  return (
    <div>
      <APIProvider apiKey="">
        <Map
          id="googleMap"
          className={styles.googleMap}
          defaultZoom={18}
          defaultCenter={center}
          gestureHandling={"greedy"}
        ></Map>
      </APIProvider>
    </div>
  );
}
