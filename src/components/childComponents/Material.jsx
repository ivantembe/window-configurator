import React, { Component } from "react";
import { Card } from "antd";
const { Meta } = Card;

export class Material extends Component {
  render() {
    const {
      getData,
      imageSource,
      materialOnClick,
      clickedElement,
      cardOnClick,
      card
    } = this.props;

    console.log(cardOnClick, card);

    return (
      <div className="d-flex">
        {getData.map(data =>
          data.material.map(material => (
            <Card
              key={material.type}
              hoverable
              style={material.type === clickedElement ? cardOnClick : card}
              cover={<img src={imageSource} alt={material.type} />}
              onClick={() => materialOnClick(material.type, material.price)}
            >
              <Meta
                title={material.type}
                description={`_ab ${material.price} EURO`}
              />
            </Card>
          ))
        )}
      </div>
    );
  }
}

export default Material;
