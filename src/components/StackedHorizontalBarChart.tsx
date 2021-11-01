import * as React from "react";
import vegaEmbed from "vega-embed";
import cloneDeep from "lodash/cloneDeep";

import stackedVegaSpec from "../static/charts/stackedhorizontalbar.json";
import util from "../services/util";
import "./HorizontalBarChart.scss";

const vegaEmbedOptions = {
  actions: false,
};

const sumReducer = (previousValue, currentItem) => {
  if (currentItem?.recent?.waarde) {
    return previousValue + currentItem?.recent?.waarde;
  }
  return previousValue;
};

const StackedHorizontalBarChart = ({ title, icon, config, gwb }) => {
  const chartRef = React.useRef<HTMLDivElement>(null);

  async function updateData() {
    const chartdata = await util.getLatestConfigCijfers(
      gwb,
      config.indicatoren
    );
    const cityAverage = await util.getLatestConfigCijfers(
      { volledige_code: "STAD", naam: "Amsterdam" },
      config.indicatoren
    );
    const chartBase = cloneDeep(stackedVegaSpec);

    const baseMultiplier = 100 / chartdata.reduce(sumReducer, 0);

    const cityMultiplier = 100 / cityAverage.reduce(sumReducer, 0);

    chartBase.data.values = chartdata
      .filter((d) => d.recent)
      .map((d, i) => ({
        key: d.label,
        value: d?.recent?.waarde * baseMultiplier || 0,
        label:
          d.recent && d.recent.waarde !== null
            ? d.recent.waarde
            : "Geen gegevens",
        color: config.kleuren[i],
        i,
        gebied: d?.gebied?.naam,
      }));

    chartBase.data.values = chartBase.data.values.concat(
      cityAverage
        .filter((d) => d.recent)
        .map((d, i) => ({
          key: d.label,
          value: d?.recent?.waarde * cityMultiplier || 0,
          label:
            d.recent && d.recent.waarde !== null
              ? d.recent.waarde
              : "Geen gegevens",
          color: config.kleuren[i],
          i,
          gebied: d?.gebied?.naam,
        }))
    );

    chartBase.encoding.color["scale"] = {
      domain: config.indicatoren.map((i) => i.label),
      range: config.kleuren,
    };

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
