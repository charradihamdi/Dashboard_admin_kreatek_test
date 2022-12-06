import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Container, Row, Col, Table } from "react-bootstrap";
import Input from "../../components/UI/Input";
import Modal from "../../components/UI/Modal";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, deleteProductById, getProducts } from "../../actions";
import "./style.css";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import { useEffect } from "react";
/**
 * @author
 * @function Products
 **/

const Products = (props) => {
  const [Libelle, setLibelle] = useState("");
  const [prix_ttc, setPrixTTC] = useState("");
  const [inStock, setInStock] = useState(false);
  const [is_gift, setIsGift] = useState(false);

  const [show, setShow] = useState(false);
  const [productDetailModal, setProductDetailModal] = useState(false);
  const [productDetails, setProductDetails] = useState(null);

  const product = useSelector((state) => state.product);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleClose = () => {
    setShow(false);
  };
  console.log("isstock", inStock, is_gift);
  const submitProductForm = () => {
    const Form = {
      posterId: auth.user._id,
      libelle: Libelle,
      prix_ttc: prix_ttc,
      en_stock: inStock,
      is_gift: is_gift ? 1 : 0,
    };
    console.log("form", Form);
    dispatch(addProduct(Form)).then(() => setShow(false));
  };
  const handleShow = () => setShow(true);

  const renderProducts = () => {
    return (
      <Table style={{ fontSize: 12 }} responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>is_gift</th>
            <th>en_stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {product.products.length > 0
            ? product.products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.libelle}</td>
                  <td>{product.prix_ttc}</td>
                  <td>{product.is_gift ? "is gifted" : "not gifted"}</td>
                  <td>{product.en_stock ? "in stock" : "not available"}</td>

                  <td>
                    <button
                      onClick={() => {
                        Axios.delete(
                          `http://localhost:5000/api/product/${product._id}`
                        );
                      }}
                    >
                      del
                    </button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    );
  };

  const renderAddProductModal = () => {
    return (
      <Modal
        show={show}
        handleClose={handleClose}
        modalTitle={"Add New Product"}
        onSubmit={submitProductForm}
      >
        <Input
          label="Libelle"
          value={Libelle}
          placeholder={`Product Name`}
          onChange={(e) => setLibelle(e.target.value)}
        />
        <Input
          label="Price"
          value={prix_ttc}
          placeholder={`Price`}
          onChange={(e) => setPrixTTC(e.target.value)}
        />
        <div className="row ml-2">
          <Input
            style={{ height: "20px", width: "20px" }}
            type="checkbox"
            value={inStock}
            placeholder={`inStock`}
            onChange={(e) => setInStock(!inStock)}
          />
          <label className="col-10 pb-3">inStock</label>
        </div>
        <div className="row ml-2">
          <Input
            style={{ height: "20px", width: "20px" }}
            type="checkbox"
            value={is_gift}
            placeholder={`is_gift`}
            onChange={(e) => setIsGift(!is_gift)}
          />
          <label className="col-10 pb-3">is_gift</label>
        </div>
      </Modal>
    );
  };

  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Products</h3>
              <button onClick={handleShow}>Add</button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>{renderProducts()}</Col>
        </Row>
      </Container>
      {renderAddProductModal()}
    </Layout>
  );
};

export default Products;
