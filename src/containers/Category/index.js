import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
    getAllCategory,
    addCategory,
    updateCategories,
    deleteCategories as deleteCategoriesAction
} from '../../actions';
import Modal from '../../components/UI/Modal';
import CheckboxTree from 'react-checkbox-tree';
import {
    IoIosCheckboxOutline,
    IoIosCheckbox,
    IoIosArrowForward,
    IoIosArrowDown,
    IoIosAdd,
    IoIosTrash,
    IoIosCloudUpload
} from 'react-icons/io'

import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import './style.css';

/**
* @author
* @function Category
**/

const Category = (props) => {

    return (
        <Layout sidebar>
            <Container >
                <div className='div_dashbored'> 
                    <h1>Dashboard:</h1>
                    <iframe title="dashbored implement1" width="1100" height="1140" src="https://app.powerbi.com/reportEmbed?reportId=718dcede-9b03-40a5-8c05-c9396a54fe04&autoAuth=true&ctid=27eb98f4-aaeb-46db-b3bf-c50f361c6b9d&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWFmcmljYS1ub3J0aC1hLXByaW1hcnktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D" frameborder="0" allowFullScreen="true"></iframe>                </div>
            </Container>
        </Layout>
    )

}

export default Category