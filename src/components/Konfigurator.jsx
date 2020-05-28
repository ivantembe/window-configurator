import React, { Component } from "react";
import RenderAllComponents from "./childComponents/RenderAllComponents";
import { getUserInterfaceDATA } from "../service/fakeUserInterfaceDataService";
import { getServerDATA } from "../service/fakeServerDataService";

export class Konfigurator extends Component {
  state = {
    DATA: getUserInterfaceDATA(),
    serverData: getServerDATA(),
    imageSource: "https://via.placeholder.com/210X150",
    material: "",
    bauform: "",
    verglassung: "",
    breite: "",
    hoehe: ""
  };

  handleMaterialOnClick = (material, materialPrice) => {
    this.setState({
      material,
      materialPrice
    });
  };

  handleBauformOnClick = bauform => {
    this.setState({
      bauform
    });
  };

  handleVerglassungOnClick = (verglassung, verglassungPrice) => {
    this.setState({
      verglassung,
      verglassungPrice
    });
  };

  handleBreiteOnChange = value => {
    this.setState({
      breite: value
    });
  };

  handleHoeheOnChange = value => {
    this.setState({
      hoehe: value
    });
  };

  render() {
    const {
      DATA,
      serverData,
      imageSource,
      material,
      bauform,
      verglassung,
      breite,
      hoehe
    } = this.state;

    console.log("I AM DATA: " + DATA);

    return (
      <RenderAllComponents
        getData={DATA}
        serverData={serverData}
        imageSource={imageSource}
        material={material}
        bauform={bauform}
        verglassung={verglassung}
        breite={breite}
        hoehe={hoehe}
        materialOnClick={this.handleMaterialOnClick}
        materialClicked={material}
        bauformOnClick={this.handleBauformOnClick}
        bauformClicked={bauform}
        verglassungOnClick={this.handleVerglassungOnClick}
        verglassungClicked={verglassung}
        onBreiteChange={this.handleBreiteOnChange}
        onHoeheChange={this.handleHoeheOnChange}
      />
    );
  }
}

export default Konfigurator;
