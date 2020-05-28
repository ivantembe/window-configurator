import React, { Component } from "react";
import { Card } from "antd";
const { Meta } = Card;

export class Ergebniss extends Component {
  render() {
    const {
      getServerData,
      materialSelected,
      bauformSelected,
      verglassungSelected,
      breite,
      hoehe
    } = this.props;

    //(Höhe x Breite x verglassungPrice) + ((2 x Höhe) + (2x Breite)) x MeterialPrice
    const breiteInMeter = breite / 1000;
    const hoeheInMeter = hoehe / 1000;

    let materialPrice, verglassungPrice;

    return (
      <div className="ergebniss-container">
        {getServerData.hersteller.map(hersteller => (
          <Card
            style={{
              width: "50%",
              margin: "0 1% 1% 0"
            }}
            key={hersteller.name}
            title={hersteller.name}
          >
            <Meta />
            {/* Material */}
            <span>
              {hersteller.material.map(material =>
                material.type === materialSelected ? (
                  <div className="ergebniss-card-content">
                    <span key={material.type}>{material.type}</span>
                    <span className="ergebniss-info-ml">
                      {material.price
                        ? `${(materialPrice = material.price.toFixed(2))}`
                        : ""}
                    </span>
                  </div>
                ) : (
                  ""
                )
              )}
            </span>
            {/* Bauform */}
            <span>
              {hersteller.bauform.map(bauform =>
                bauform.type === bauformSelected ? (
                  <div className="ergebniss-card-content">
                    <span key={bauform.type}>{bauform.type}</span>
                    <span className="ergebniss-info-ml">
                      {bauform.price ? `${bauform.price.toFixed(2)}` : "-"}
                    </span>
                  </div>
                ) : (
                  ""
                )
              )}
            </span>
            {/* Verglassung */}
            <span>
              {hersteller.verglassung.map(verglassung =>
                verglassung.type === verglassungSelected ? (
                  <div className="ergebniss-card-content">
                    <span key={verglassung.type}>{verglassung.type}</span>
                    <span className="ergebniss-info-ml">
                      {verglassung.price
                        ? `${(verglassungPrice = verglassung.price.toFixed(2))}`
                        : ""}
                    </span>
                  </div>
                ) : (
                  ""
                )
              )}
            </span>
            {/* Maße */}
            <div style={{ marginBottom: "2%" }}>
              <span>{breite && hoehe ? `B: ${breite} x H: ${hoehe}` : ""}</span>
              {/* <div>{hoehe ? `Höhe: ${hoehe} mm` : ""}</div> */}
            </div>{" "}
            {/* Gesamtpreis */}
            <div className="ergebniss-card-content text-bold">
              <span>Gesamtpreis:</span>
              {breiteInMeter &&
              hoeheInMeter &&
              verglassungPrice &&
              materialPrice
                ? ` 
                ${(
                  breiteInMeter * hoeheInMeter * verglassungPrice +
                  (2 * hoeheInMeter + 2 * breiteInMeter) * materialPrice
                ).toFixed(2)} EURO`
                : ""}
            </div>
          </Card>
        ))}
      </div>
    );
  }
}

export default Ergebniss;
