import React from "react";
import { useContextStore } from "../store/ContextStore";
import Button from "../UI/Button";
import styled from "styled-components";

const Product = () => {
  const { store, addProduct } = useContextStore();
  return (
    <>
      <Main>
        {store.product.map((item) => (
          <Container>
            <img
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "20px 20px 0 0",
              }}
              src={item.url}
              alt=""
            />
            <div>
              <h2 style={{ color: "white" }}>
                {item.productName} - ${item.staticPrice}
              </h2>
              <Button
                width="150px"
                height="40px"
                bgColor="green"
                onClick={() => addProduct(item.id)}
                disabled={item.quantity > 0}
              >
                Add
              </Button>
            </div>
          </Container>
        ))}
      </Main>
    </>
  );
};

export default Product;

const Main = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
`;

const Container = styled.div`
  background-color: #2d2c2c;
  padding-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100px;
  border: 1px solid white;
  border-radius: 20px;
  height: 400px;
  width: 250px;
  box-shadow: 1px 1px 11px 4px rgb(151, 151, 151);
`;
