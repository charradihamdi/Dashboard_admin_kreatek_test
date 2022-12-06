import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Jumbotron, Row, Col, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../actions";
import Axios from "axios";
import Input from "../../components/UI/Input";
import Modal from "../../components/UI/Modal";

const Users = (props) => {
  const [show, setShow] = useState(false);
  const [FullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remise_defaut, setRemise_defaut] = useState(0);
  const [nbr_gifts, setNbr_gifts] = useState(0);
  const dispatch = useDispatch();
  const [dataState, SetDataState] = useState([]);
  const usersData = useSelector((state) => state.users);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
  };

  const renderUsers = () => {
    return (
      <Table style={{ fontSize: 12 }} responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>FullName</th>
            <th>email</th>
            <th>remise_defaut</th>
            <th>nbr_gifts</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {usersData.length > 0
            ? usersData.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.FullName}</td>
                  <td>{user.email}</td>
                  <td>{user.remise_defaut}</td>
                  <td>{user.nbr_gifts}</td>

                  <td>
                    <button
                      onClick={() => {
                        Axios.delete(
                          `http://localhost:5000/api/admin/${user._id}`
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
  const submitClientForm = () => {
    const Form = {
      FullName: FullName,
      email: email,
      password: password,
      remise_defaut: remise_defaut,
      nbr_gifts: nbr_gifts,
    };

    console.log("Form", Form);
    Axios.post(`http://localhost:5000/api/signup`, Form).then(() =>
      setShow(false)
    );
  };
  const renderAddUserModal = () => {
    return (
      <Modal
        show={show}
        handleClose={handleClose}
        modalTitle={"Add New user"}
        onSubmit={submitClientForm}
      >
        <Input
          label="FullName"
          value={FullName}
          placeholder={`FullName`}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Input
          label="email"
          value={email}
          placeholder={`email`}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="password"
          value={password}
          placeholder={`password`}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          label="remise_defaut"
          value={remise_defaut}
          placeholder={`remise_defaut`}
          onChange={(e) => setRemise_defaut(e.target.value)}
        />
        <Input
          label="nbr_gifts"
          value={nbr_gifts}
          placeholder={`nbr_gifts`}
          onChange={(e) => setNbr_gifts(e.target.value)}
        />
      </Modal>
    );
  };
  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Users</h3>
              <button onClick={handleShow}>Add</button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>{renderUsers()}</Col>
        </Row>
      </Container>
      {renderAddUserModal()}
    </Layout>
  );
};

export default Users;
