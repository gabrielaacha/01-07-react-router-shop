import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const ProductInfo = (props) => {
  console.log(props);
  // const selectedItem = props.data.filter((item) => item.id == match.params.id);
  const selectedItem = props.data.filter((item) => item.id == props.id);
  const moreInfo = selectedItem.map((item) => {
    const { id, productName, image, price, inventory, icon } = item;
    const add = (itemId) => {};
    return (
      <div className="component-main-container" key={id}>
        <Card>
          <CardImg
            top
            style={{ width: "100%" }}
            src={image}
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
      </div>
    );
  });
  return (
    <React.Fragment>
      <h3>Product further infos</h3>
      {moreInfo}
    </React.Fragment>
  );
};

export default ProductInfo;
