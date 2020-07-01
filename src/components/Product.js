import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const Product = (props) => {
  const items = props.data.map((item) => {
    const { id, productName, image, price, inventory, icon } = item;
    const add = (itemId) => {};
    return (
      <div>
        <li className="Product">
          <Link key={id} to={`/product/${id}`}>
            <Card>
              <CardImg
                top
                style={{ width: "100%" }}
                src={image && image}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>{productName}</CardTitle>
                <CardSubtitle>price: {price} €</CardSubtitle>
                <CardText></CardText>
                <Button onClick={add(id)} disabled={inventory === 0}>
                  {inventory > 0 ? "Add to cart" : "Sold out"}
                </Button>
              </CardBody>
            </Card>
          </Link>
        </li>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="component-main-container">
        {" "}
        <h3>Products</h3>
        <ul className="Products">{items}</ul>
      </div>
    </React.Fragment>
  );
};

export default Product;
