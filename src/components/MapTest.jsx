
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
const MapTest = () => {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        rotate: [0, 0, 0],
        center: [-66.3, -11.6],
        scale: 865
      }}
      style={{width: '100%', height: '100%'}}
    >
      <Geographies geography="/clipmap.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#212121"
              stroke="#38bff8"
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapTest;