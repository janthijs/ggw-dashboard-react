import * as React from "react";
import { Column, Row } from "@amsterdam/asc-ui";

import DataTable from "../components/DataTable";
import HorizontalBarChart from "../components/HorizontalBarChart";
import InAantallen from "../components/InAantallen";

import woningVoorraad from "../static/links/woningvoorraad.json";
import sociaalEconomisch from "../static/links/sociaaleconomisch.json";
import leeftijd from "../static/links/leeftijd.json";
import migratieAchtergrond from "../static/links/migratieachtergrond.json";

const GebiedInHetKort = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 card">
          <div className="row">
            <div className="col-lg-6">
              <p>Pano</p>
            </div>
            <div className="col-lg-6 content-centered">
              <InAantallen></InAantallen>
            </div>
          </div>
        </div>
      </div>

      <h2>Samenstelling woningvoorraad en bevolking vangwb.naam</h2>
      <Row>
        <Column
          wrap
          span={{
            small: 1,
            medium: 2,
            big: 2,
            large: 6,
            xLarge: 6,
          }}
        >
          <HorizontalBarChart
            title="Woningvoorraad"
            icon="wonen_en_leefomgeving.png"
            config={woningVoorraad}
          ></HorizontalBarChart>
        </Column>
        <Column
          wrap
          span={{
            small: 1,
            medium: 2,
            big: 2,
            large: 6,
            xLarge: 6,
          }}
        >
          <HorizontalBarChart
            title="Sociaal-economisch"
            icon="werk_en_inkomen.png"
            config={sociaalEconomisch}
          ></HorizontalBarChart>
        </Column>
      </Row>
      <Row>
        <Column
          wrap
          span={{
            small: 1,
            medium: 2,
            big: 2,
            large: 6,
            xLarge: 6,
          }}
        >
          <HorizontalBarChart
            title="Leeftijd"
            icon="kind_icoon_met_bal.png"
            config={leeftijd}
          ></HorizontalBarChart>
        </Column>
        <Column
          wrap
          span={{
            small: 1,
            medium: 2,
            big: 2,
            large: 6,
            xLarge: 6,
          }}
        >
          <HorizontalBarChart
            title="Migratie-achtergrond"
            icon="locaties.png"
            config={migratieAchtergrond}
          ></HorizontalBarChart>
        </Column>
      </Row>

      <div className="row">
        <div className="col-12 card">
          <div className="row">
            <div className="col-12 grid-title">
              <h2>Ontwikkeling van gwbnaam</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 content-centered">
              <DataTable config="positieOntwikkeling" isCentered></DataTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GebiedInHetKort;
