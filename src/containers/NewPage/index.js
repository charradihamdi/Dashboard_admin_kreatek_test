import React, { useState, useEffect } from 'react';
import Modal from '../../components/UI/Modal';
import Layout from '../../components/Layout';
import Input from '../../components/UI/Input';
import { Container, Row, Col } from 'react-bootstrap';
import linearCategories from '../../helpers/linearCategories';
import { useSelector, useDispatch } from 'react-redux';
import { createPage } from '../../actions';
import data from "./client_info.json";   
import "./pageTable.css"

/**
* @author
* @function NewPage
**/

require ("es6-promise").polyfill();
require("isomorphic-fetch");



const NewPage = (props) => {

const [contacts, setContacts] = useState(data)
        return (
        <Layout sidebar key={data._id}>
                          <h1>Affichage des clients : </h1>  
                        <div className=''>
                            <table className=''>
                                <thead>
                                    <tr>
                                        <th>Loan ID</th>
                                        <th>Gender</th>
                                        <th>Married</th>
                                        <th>Dependents</th>
                                        <th>Education</th>
                                        <th>Self Employed</th>
                                        <th>ApplicantIncome</th>
                                        <th>CoapplicantIncome</th>
                                        <th>LoanAmount</th>
                                        <th>Loan Amount Term</th>
                                        <th>Credit History</th>
                                        <th>Property Area</th>
                                        <th>Loan Status</th>
                                    </tr>
                                </thead> 
                                <tbody>
                                    {contacts.map((contact) => 
                                            <tr>

                                                <td>{contact.Loan_ID}</td>
                                                <td>{contact.Gender}</td>
                                                <td>{contact.Married}</td>
                                                <td>{contact.Dependents}</td>
                                                <td>{contact.Education}</td>
                                                <td>{contact.Self_Employed}</td>
                                                <td>{contact.ApplicantIncome}</td>
                                                <td>{contact.CoapplicantIncome}</td>
                                                <td>{contact.LoanAmount}</td>
                                                <td>{contact.Loan_Amount_Term}</td>
                                                <td>{contact.Credit_History}</td>
                                                <td>{contact.Property_Area}</td>
                                                <td>{contact.Loan_Status}</td>
                                
                                
                                            </tr>)}

                                </tbody>
                            </table>
                        </div>
        </Layout>
    )
    }

export default NewPage