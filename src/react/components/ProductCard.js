import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ProductCard = props => {
  return (
    <Card style={{ width: "225px", margin: "10px" }}>
      <Image
        style={{
          height: "225px",
          width: "225px",
          overflow: "hidden",
          margin: "auto"
        }}
        src={props.product.productImgs[0]}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>
          <Link to={`/details/${props.product.id}`}>
            {props.product.productName}
          </Link>
        </Card.Header>
        <Card.Meta>
          <span className="category">{props.product.productCategory}</span>
        </Card.Meta>
        <Card.Description>{props.product.productDescription}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default ProductCard;
