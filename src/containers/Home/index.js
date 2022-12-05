import React from "react";
import Layout from "../../components/Layout";
import { Jumbotron, Row, Col, Container } from "react-bootstrap";
import "./style.css";
import { NavLink } from "react-router-dom";

/**
 * @author
 * @function Home
 **/

const Home = (props) => {
  return (
    <Layout sidebar>
      <Jumbotron className="section1">
        <div className="titre">
          <span>Kreatek Marketplace </span>
        </div>
      </Jumbotron>
    </Layout>
  );
};

export default Home;
