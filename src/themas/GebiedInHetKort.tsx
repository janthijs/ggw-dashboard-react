import { Column, Row } from "@amsterdam/asc-ui";

import DataTable from "../components/DataTable";
import HorizontalBarChart from "../components/HorizontalBarChart";
import InAantallen from "../components/InAantallen";

import woningVoorraad from "../static/links/woningvoorraad.json";
import sociaalEconomisch from "../static/links/sociaaleconomisch.json";
import leeftijd from "../static/links/leeftijd.json";
import migratieAchtergrond from "../static/links/migratieachtergrond.json";

const GebiedInHetKort = ({ gwb }) => {
  return (
    <div className="container">
      <Row>
        <Column span={6}>
          <p>Pano</p>
        </Column>
        <Column span={6}>
          {" "}
          <InAantallen></InAantallen>
        </Column>
        <Column span={12}>
          <h2>Samenstelling woningvoorraad en bevolking vangwb.naam</h2>
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
            title="Woningvoorraad"
            icon="wonen_en_leefomgeving.png"
            config={woningVoorraad}
            gwb={gwb}
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
            gwb={gwb}
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
            gwb={gwb}
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
            gwb={gwb}
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
