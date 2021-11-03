import * as React from "react";
import vegaEmbed from "vega-embed";
import cloneDeep from "lodash/cloneDeep";

import stackedVegaSpec from "../static/charts/stackedhorizontalbar.json";
import util from "../services/util";
import "./HorizontalBarChart.scss";
import { getColorsUsingStaticDefinition } from "../services/colorcoding";

const vegaEmbedOptions = {
  actions: false,
};

const sumReducer = (previousValue, currentItem) => {
  if (currentItem?.recent?.waarde) {
    return previousValue + currentItem?.recent?.waarde;
  }
  return previousValue;
};

const StackedHorizontalBarChart = ({ title, config, gwb }) => {
  const chartRef = React.useRef<HTMLDivElement>(null);

  async function updateData() {
    const colors = getColorsUsingStaticDefinition(config);
    const chartdata = await util.getLatestConfigCijfers(gwb, config);
    const cityAverage = await util.getLatestConfigCijfers(
      { volledige_code: "STAD", naam: "Amsterdam" },
      config
    );
    const chartBase = cloneDeep(stackedVegaSpec);

    const baseMultiplier = 100 / chartdata.reduce(sumReducer, 0);

    const cityMultiplier = 100 / cityAverage.reduce(sumReducer, 0);

    const filteredChartData = chartdata.filter((d) => d.recent);
    const filteredCityAverage = cityAverage.filter((d) => d.recent);

    chartBase.data.values = filteredChartData.map((d, i) => ({
      i,
      key: d.label,
      value: Math.round(d?.recent?.waarde * baseMultiplier) || 0,
      label:
        d.recent && d.recent.waarde !== null
          ? d.recent.waarde
          : "Geen gegevens",
      color: colors[i],
      gebied: d?.gebied?.naam,
      position:
        i === 0
          ? d.recent.waarde / 2
          : filteredChartData.slice(0, i).reduce(sumReducer, 0) +
            d.recent.waarde / 2,
    }));

    chartBase.data.values = chartBase.data.values.concat(
      filteredCityAverage.map((d, i) => ({
        i,
        key: d.label,
        value: Math.round(d?.recent?.waarde * cityMultiplier) || 0,
        label:
          d.recent && d.recent.waarde !== null
            ? d.recent.waarde
            : "Geen gegevens",
        color: colors[i],
        gebied: d?.gebied?.naam,
        position:
          i === 0
            ? d.recent.waarde / 2
            : filteredCityAverage.slice(0, i).reduce(sumReducer, 0) +
              d.recent.waarde / 2,
      }))
    );

    chartBase.layer[0].encoding.color["scale"] = {
      domain: config.map((i) => i.label),
      range: colors,
    };

    console.log("chartBase", JSON.stringify(chartBase));

    if (chartRef.current) {
      vegaEmbed(chartRef.current, chartBase, vegaEmbedOptions);
    }
  }

  React.useEffect(() => {
    if (!gwb) {
      return;
    }

    updateData();
  }, [gwb]);

  return (
    <div className="block-container">
      <h3>{title}</h3>
      <div ref={chartRef}></div>
    </div>
  );
};

export default StackedHorizontalBarChart;
