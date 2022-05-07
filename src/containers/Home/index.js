import React from 'react';
import Layout from '../../components/Layout';
import { Jumbotron, Row, Col, Container } from 'react-bootstrap';
import './style.css';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Home
**/

const Home = (props) => {

  return (
    <Layout sidebar >
      <Jumbotron  className="section1" >
        <div className='titre'>
        <span>Loan </span>
        <span>Data</span>
        <span> Prediction</span>
        </div>
        </Jumbotron>



          <div className='section2'>

          <div className='col'>
            <h3>Data Analysis</h3>
            <p>
            •	Size: 400 Kb<br></br>
            •	Shape: 613 Rows and 13 Columns <br></br>
            •	Platform: Jupyter
            </p>
          </div>
          <div className='col'>
            <h3>Default Prediction</h3>
            <p>
            •	Decision Tree<br></br>
            •	Logistique Regression <br></br>
            •	Random Forest

            </p>
          </div>
          <div className='col'>
            <h3>Data Visualization</h3>
            <p>
            •	Matplotlib <br></br>
            •	Seaborn
            </p>
          </div>
        </div>

        <div>
          <div >
             <p className='para'>
              Pour filtrer les demandes de pret : les clients qui peuvent obtenir des credit ou qui doivent etre rejetees est un processus chronophage et lent.
              <br></br>
              L'automatisation  de ce processus est une solution qui engendre par la suite l’amélioration de l’activité financière et accroître l'efficacité des banques.
            </p>
          </div>
          <div >
             <p className='features'>
               <h4>Feature Engineering and using models Logistique Regression, Decision Tree, Random Forest</h4>
              <br></br>
              <p>
              We see that the most correlate variables are:
              <li>Loan Amount</li>
              <li>Applicant Income </li>
              <li>Co-applicant Income</li>
              <li>Credit History</li>
              <li>Loan Amount Term</li>

              </p>
            </p>
          </div>
          <div >
             <p className='picfeaut'>
               <h4></h4>
            </p>
          </div>
          <footer>
            
          </footer>
        </div>
    </Layout>
  )

}

export default Home