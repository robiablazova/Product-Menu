import React, {useState} from "react";
import { useContextStore } from "../store/ContextStore";
import Button from "../UI/Button";
import styled from "styled-components";
import { Modal } from "../UI/Modal";

const ProductList = () => {
  const {
    store = [],
    incProduct,
    decProduct,
    removeProduct,
  } = useContextStore();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRemoveProduct = (id) => {
    setSelectedProduct(id);
    setIsModalOpen(true);
  };

  const handleDelete = () => {
    if (selectedProduct !== null) {
      removeProduct(selectedProduct);
      setIsModalOpen(false);
    }
  };

  const handleCancelDelete = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };
  const totalPrice = store?.product.map((item) => {
    if (item.quantity === 0) {
      const result = { ...item, price: (item.price = 0) };
      return result.price;
    } else {
      return item.price;
    }
  });

  const resultTotal = totalPrice.reduce((a, b) => a + b, 0);
  return (
    <Containet>
      <div>
        <Table>
          <Thead>
            <p className="id">#</p>
            <p>Product Name</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Remove</p>
          </Thead>

          <ol>
            {store.product.map((item) => {
              return (
                item.quantity !== 0 && (
                  <li>
                    <TBody>
                      <TImg>
                        <img src={item.url} alt="photos" />
                      </TImg>
                      <div>{item.productName}</div>
                      <div>${item.price}</div>
                      <ContainerCount>
                        <Button
                          bgColor="grey"
                          width="30px"
                          onClick={() => decProduct(item.id)}
                        >
                          -
                        </Button>
                        <span>{item.quantity}</span>
                        <Button
                          bgColor="grey"
                          width="30px"
                          onClick={() => incProduct(item.id)}
                        >
                          +
                        </Button>
                      </ContainerCount>

                      <div>
                        <Button
                          bgColor="red"
                          height="35px"
                          onClick={() => handleRemoveProduct(item.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </TBody>
                  </li>
                )
              );
            })}
          </ol>
        </Table>
      </div>
      <div>TOTAL: {resultTotal}</div>

      <Modal
        isOpen={isModalOpen}
        >
        <h2 style={{color:'black'}}>Delete Product</h2>
        <p style={{color:'black'}}>Are you sure you want to delete this product?</p>
        <button onClick={handleDelete}>Yes</button>
        <button onClick={handleCancelDelete} >No</button>
      </Modal>
    </Containet>
  );
};

export default ProductList;

const Containet = styled.div`
  margin: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
`;

const Thead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  font-size: 25px;
  font-weight: 600;
  border: 3px solid white;

  .id {
    width: 100px;
    display: flex;
    justify-content: center;
    margin: -10px;
  }

  p {
    width: 240px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const TImg = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100px;
    object-fit: contain;
    border-radius: 20px;
  }
`;

const TBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  border-top: 3px solid white;
  padding: 40px 0 40px 0;

  .id {
    width: 100px;
    font-weight: 600;
    display: flex;
    justify-content: center;
  }
  div {
    width: 240px;
    display: flex;
    justify-content: center;
  }
`;

const ContainerCount = styled.div `
display: flex;
gap: 10px;
`