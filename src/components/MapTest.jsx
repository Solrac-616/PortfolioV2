
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
const MapTest = () => {
  return (
    <ComposableMap>
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