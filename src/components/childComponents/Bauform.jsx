import React, { Component } from "react";
import { Card } from "antd";
const { Meta } = Card;

export class Bauform extends Component {
  render() {
    const {
      getData,
      bauformOnClick,
      imageSource,
      clickedElement,
      card,
      cardOnClick
    } = this.props;

    return (
      <div className="d-flex">
        {getData.map(data =>
          data.bauform.map(bauform => (
            <Card
              key={bauform.type}
              hoverable
              style={bauform.type === clickedElement ? cardOnClick : card}
              cover={<img src={imageSource} alt={bauform.type} />}
              onClick={() => bauformOnClick(bauform.type)}
            >
              <Meta title={bauform.type} />
            </Card>
          ))
        )}
      </div>
    );
  }
}

export default Bauform;
