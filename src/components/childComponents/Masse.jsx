import React, { Component } from "react";
import { InputNumber } from "antd";

export class Masse extends Component {
  render() {
    const { onBreiteChange, onHoeheChange } = this.props;

    const inputMasse = [onBreiteChange, onHoeheChange];

    return (
      <div>
        {inputMasse.map(input => (
          <InputNumber
            key={input}
            style={{ width: "auto", marginRight: "4%" }}
            min={900}
            max={2000}
            placeholder={
              input === onBreiteChange ? "Gesamtbreite" : "Gesamthöhe"
            }
            onChange={input}
          />
        ))}
      </div>
    );
  }
}

export default Masse;
