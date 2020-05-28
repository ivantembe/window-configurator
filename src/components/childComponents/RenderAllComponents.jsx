import React, { Component } from "react";
import Material from "./Material";
import Bauform from "./Bauform";
import Verglassung from "./Verglassung";
import Masse from "./Masse";
import Ergebniss from "./Ergebniss";
import Aside from "./Aside";
import { Collapse, Icon } from "antd";
const { Panel } = Collapse;

export class RenderAllComponents extends Component {
  render() {
    const {
      getData,
      serverData,
      imageSource,
      material,
      bauform,
      verglassung,
      breite,
      hoehe,
      materialOnClick,
      materialClicked,
      bauformOnClick,
      bauformClicked,
      verglassungOnClick,
      verglassungClicked,
      onBreiteChange,
      onHoeheChange
    } = this.props;

    const card = {
      display: "inline-block",
      justifyContent: "center",
      margin: "0 4% 4% 0"
    };
    const cardOnClick = {
      backgroundColor: "#90949c",
      margin: "0 4% 4% 0"
    };

    return (
      <div className="layout">
        <div className="layout-aside">
          <Aside
            getData={getData}
            material={material}
            bauform={bauform}
            verglassung={verglassung}
            breite={breite}
            hoehe={hoehe}
          />
        </div>
        <Collapse
          className="layout-main"
          accordion
          bordered={false}
          defaultActiveKey={["0"]}
          expandIcon={({ isActive }) => (
            <Icon type={isActive ? "minus-circle" : "plus-circle"} />
          )}
        >
          <Panel header="MATERIAL" key="1" className="panel">
            <p>Bitte wählen Sie das Material</p>
            <Material
              getData={getData}
              materialOnClick={materialOnClick}
              clickedElement={materialClicked}
              imageSource={imageSource}
              card={card}
              cardOnClick={cardOnClick}
            />
          </Panel>

          <Panel header="BAUFORM" key="2" className="panel">
            <p>Bitte wählen Sie die Bauform</p>
            <Bauform
              getData={getData}
              bauformOnClick={bauformOnClick}
              clickedElement={bauformClicked}
              imageSource={imageSource}
              card={card}
              cardOnClick={cardOnClick}
            />
          </Panel>

          <Panel header="VERGLASSUNG" key="3" className="panel">
            <p>Bitte wählen Sie die Verglassung</p>
            <Verglassung
              getData={getData}
              verglassungOnClick={verglassungOnClick}
              clickedElement={verglassungClicked}
              imageSource={imageSource}
              card={card}
              cardOnClick={cardOnClick}
            />
          </Panel>

          <Panel header="MAßE" key="4" className="panel">
            <p>Bitte wählen Sie die Maße in mm</p>
            <Masse
              getData={getData}
              onBreiteChange={onBreiteChange}
              onHoeheChange={onHoeheChange}
            />
          </Panel>

          <Panel header="ERGEBNISS" key="5" className="panel">
            <Ergebniss
              getServerData={serverData}
              materialSelected={materialClicked}
              bauformSelected={bauformClicked}
              verglassungSelected={verglassungClicked}
              breite={breite}
              hoehe={hoehe}
            />
          </Panel>
        </Collapse>
      </div>
    );
  }
}

export default RenderAllComponents;
