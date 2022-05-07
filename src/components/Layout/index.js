import React from 'react';
import Header from '../Header';
import { Container, Row, Col } from 'react-bootstrap'; 
import { NavLink } from 'react-router-dom';
import './style.css';

/**
* @author
* @function Layout
**/
// objectnull ? si oui-> <div>oui</div>:<div>non</div>
const Layout = (props) => {
  return(
    <>
       <Header />
       {
         props.sidebar ?
         <Container fluid>
          <Row>
            <Col md={2} className="sidebar">
              <ul>
                <li><NavLink exact to={`/`}>Home</NavLink></li>
                <li><NavLink to={`/page`}>Clients</NavLink></li>
                <li><NavLink to={`/category`}>Dashboard</NavLink></li>
                <li><NavLink to={`/products`}>Prediction</NavLink></li>
              </ul>
            </Col>
            <Col md={10} style={{ marginLeft: 'auto', paddingTop: '60px' }}>
              {props.children}
            </Col>
          </Row>
        </Container>
        :
        props.children
       }
        
        
    </>
   )

 }

export default Layout;