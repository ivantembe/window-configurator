import React, { Component } from "react";
import { Card } from "antd";
const { Meta } = Card;

export class Verglassung extends Component {
  render() {
    const {
      getData,
      verglassungOnClick,
      imageSource,
      clickedElement,
      card,
      cardOnClick
    } = this.props;

    return (
      <div className="d-flex">
        {getData.map(data =>
          data.verglassung.map(verglassung => (
            <Card
              key={verglassung.type}
              hoverable
              style={verglassung.type === clickedElement ? cardOnClick : card}
              cover={<img src={imageSource} alt={verglassung.type} />}
              onClick={() =>
                verglassungOnClick(verglassung.type, verglassung.price)
              }
            >
              <Meta
                title={verglassung.type}
                description={`ab ${verglassung.price} EURO`}
              />
            </Card>
          ))
        )}
      </div>
    );
  }
}

export default Verglassung;
