import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Jumbotron, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../actions";

const Users = (props) => {
  const dispatch = useDispatch();

  const [dataState, SetDataState] = useState([]);
  const usersData = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <Layout sidebar>
      <h3>Users :</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">FullName</th>
            <th scope="col">Email</th>
            <th scope="col">nbr_gifts</th>
            <th scope="col">remise_defaut</th>
            <th scope="col">actions</th>
          </tr>
        </thead>
        <tbody>
          {usersData.length > 0 &&
            usersData.map((item) => {
              return (
                <tr>
                  <th scope="row">{item._id}</th>
                  <td>{item.FullName}</td>
                  <td>{item.email}</td>
                  <td>{item.nbr_gifts}</td>
                  <td>{item.remise_defaut}</td>
                  <td>
                    <button
                      className="btn btn-ganger"
                      style={{ background: "red", color: "white" }}
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Layout>
  );
};

export default Users;
