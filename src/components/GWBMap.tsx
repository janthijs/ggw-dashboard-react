import * as React from "react";

import { getGWBShapes, drawShapes, amsMap } from "../services/map";
import { COLOR } from "../services/colorcoding";

const GWBMap = ({ gwb }) => {
  const mapRef = React.useRef<HTMLDivElement>(null);
  const map = React.useRef<{
    removeLayer: (layer: any) => void;
    remove: () => void;
  } | null>(null);

  const gwbLayer = React.useRef(null);

  const updateData = () => {
    if (gwbLayer.current && map.current) {
      map.current.removeLayer(gwbLayer.current);
    }

    if (!gwb || !map.current) {
      return;
    }

    const shapes = getGWBShapes(gwb, () => ({
      color: COLOR["ams-rood"],
    }));

    gwbLayer.current = drawShapes(shapes, map.current);
  };

  React.useEffect(() => {
    if (map.current === null) {
      map.current = amsMap(mapRef.current);
    }

    console.log("map gwb", gwb);

    updateData();
  }, [gwb]);

  return (
    <div style={{ position: "relative", width: "100%", height: "200px" }}>
      <div
        className="map"
        style={{ height: "100%", width: "100%" }}
        ref={mapRef}
      ></div>
    </div>
  );
};

export default GWBMap;
