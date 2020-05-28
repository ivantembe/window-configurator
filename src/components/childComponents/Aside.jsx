import React, { Component } from "react";
import { Card, Icon } from "antd";

export class Aside extends Component {
  render() {
    const { material, bauform, verglassung, breite, hoehe } = this.props;

    const icon = <Icon type="info-circle" />;
    const message = " Bitte wählen Sie alle Felder aus";

    return (
      <div>
        <Card
          title="IHRE KONFIGURATION"
          bordered={false}
          style={{ padding: "20px" }}
        >
          <div className="aside-info">
            <span>Maaterial:</span>
            <span className="aside-info-ml">{material}</span>
          </div>
          <div className="aside-info">
            <span>Bauform: </span>
            <span className="aside-info-ml">{bauform}</span>
          </div>

          <div className="aside-info">
            <span>Verglassung: </span>
            <span className="aside-info-ml">{verglassung}</span>
          </div>

          <div className="aside-info">
            <span>Maße (mm): </span>
            <span className="aside-info-ml">
              B: {breite} x H: {hoehe}
            </span>
          </div>

          <div style={{ color: "red", marginTop: "6%" }}>
            {(material && bauform && verglassung && breite && hoehe) === ""
              ? icon
              : ""}
            {(material && bauform && verglassung && breite && hoehe) === ""
              ? message
              : ""}
          </div>
        </Card>
      </div>
    );
  }
}

export default Aside;
