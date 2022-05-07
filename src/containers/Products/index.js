import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Modal from "../../components/UI/Modal";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { addClients } from "../../actions";
import "./style.css";
import { gender,married,dependents,education,self_Employed,property_Area,loan_Amount_Term } from "./utils";
import {
  Form,
  Stack,TextInput
} from "carbon-components-react"


/**
 * @author
 * @function Products
 **/

const Products = (props) => {


  const[Applicant_Income, setApplicantIncome] = useState("")
  const[CoApplicantIncome, setCoApplicantIncome] = useState("")
  const[LoanAmount, setLoanAmount] = useState("")

  //const[gender, setGender] = useState("male","female");
  const[marriedStatus, setMarriedStatus] = useState('');
  const[Loan_id, setLoan_ids] = useState('');
  const[dependentsClient, setDependentsClient] = useState('');
  const[educationClient, setEducationClient] = useState('');
  const[self_EmployedClient, setSelf_EmployedClient] = useState('');
  const[property_AreaClient, setProperty_AreaClient] = useState('');
  const[loan_Amount_TermClient, setLoan_Amount_TermClient] = useState('');
  const [genderClient,setGenderClient]=useState('')
  const[credit_History, setCredit_HistoryClient] = useState('');
  const [prediction, setPrediction] = useState();
  const [scores, setScores] = useState([]);




    const dispatch = useDispatch();

    //   const addClient = () => {
    //   const user = {genderClient ,marriedStatus,educationClient,self_EmployedClient,dependentsClient,property_AreaClient,loan_Amount_TermClient,Applicant_Income,CoApplicantIncome,LoanAmount,credit_History }
    //   console.log('add client',user);   
    //   dispatch(addClients(user));
    //  }
     const addClient = (e) => {
      e.preventDefault();
      const user = {
        genderClient ,marriedStatus,educationClient,self_EmployedClient,dependentsClient,property_AreaClient,loan_Amount_TermClient,Applicant_Income,CoApplicantIncome,LoanAmount,credit_History
      }
      dispatch(addClients(user));
  }

  //    const runPred = async (genderClient, marriedStatus, dependentsClient, educationClient,self_EmployedClient,property_AreaClient,loan_Amount_TermClient,Applicant_Income,CoApplicantIncome,LoanAmount) => {
  //    console.log(genderClient, marriedStatus, dependentsClient, educationClient,self_EmployedClient,property_AreaClient,loan_Amount_TermClient,Applicant_Income,CoApplicantIncome,LoanAmount)
  //    setPrediction("Scoring");
  //    const res = await axios.post(`/add`,{
  //      genderClient,
  //      marriedStatus,
  //      dependentsClient,
  //      educationClient,
  //      self_EmployedClient,
  //      property_AreaClient,
  //      loan_Amount_TermClient,
  //      Applicant_Income,
  //      CoApplicantIncome,
  //      LoanAmount,
  //    });
  //    setPrediction(res.data.values[0]);
  //    setScores([
  //      ...scores,
  //      {
  //        group: genderClient + marriedStatus + dependentsClient + educationClient + self_EmployedClient + property_AreaClient + loan_Amount_TermClient + Applicant_Income + CoApplicantIncome + LoanAmount,
  //        value: res.data.values[0][0],
  //      },
  //    ]);
  //    console.log(prediction, scores);
  //  };
   
 
  return (
    <Layout sidebar>
        <h4>Client informations :</h4>
        <div className="container-fluid">
          <Form onSubmit={addClient}>
              <div className="form-control form-control-lg" style={{border:"0 solid black"}}>
                <select
          className="form-control"
          value={genderClient}
          onChange={(e) => setGenderClient(e.target.value)}
        >
          <option>Select gender</option>
          {gender.map((option,i) => (
            <option style={{color:'black'}} key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
    </div>
    <br></br>

   <div className="form-control form-control-lg" style={{border:"0px solid black"}}>
   <select
          className="form-control"
          value={marriedStatus}
          onChange={(e) => setMarriedStatus(e.target.value)}
        >
          <option>Select married</option>
          {married.map((option,i) => (
            <option style={{color:'black'}} key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
    </div>
    <br></br>

    <div className="form-control form-control-lg" style={{border:"0 solid black"}}>
    <select
          className="form-control"
          value={dependentsClient}
          onChange={(e) => setDependentsClient(e.target.value)}
        >
          <option>Select dependents</option>
          {dependents.map((option,i) => (
            <option style={{color:'black'}} key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
    </div>
    <br></br>



    <div className="form-control form-control-lg" style={{border:"0 solid black"}}>
    <select
          className="form-control"
          value={educationClient}
          onChange={(e) => setEducationClient(e.target.value)}
        >
          <option>Select education</option>
          {education.map((option,i) => (
            <option style={{color:'black'}} key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
    </div>
    <br></br>


    <div className="form-control form-control-lg" style={{border:"0 solid black"}}>
    <select
          className="form-control"
          value={self_EmployedClient}
          onChange={(e) => setSelf_EmployedClient(e.target.value)}
        >
          <option>Select Self Employed</option>
          {self_Employed.map((option,i) => (
            <option style={{color:'black'}} key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
    </div>
    <br></br>



    <div className="form-control form-control-lg" style={{border:"0 solid black"}}>
    <select
          className="form-control"
          value={property_AreaClient}
          onChange={(e) => setProperty_AreaClient(e.target.value)}
        >
          <option>Select Property Area</option>
          {property_Area.map((option,i) => (
            <option style={{color:'black'}} key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    <br></br> 

  
    <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text">$</span>
  </div>
  <TextInput
      id="test2"
      className="input-group-text-lg"
      type="number"
      placeholder="Applicant Income"
      onChange={(e) => setApplicantIncome(e.target.value)}
    />

  <div class="input-group-append">
    <span class="input-group-text">.00</span>
  </div>
</div>


    <br></br> 

    <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text">$</span>
  </div>
    <TextInput
      id="test2"
      
      className="input-group-text-lg"
      type="number"
      placeholder="Co Applicant Income"
      onChange={(e) => setCoApplicantIncome(e.target.value)}
    />
      <div class="input-group-append">
    <span class="input-group-text">.00</span>
  </div>
</div>
  
    <br></br> 

    <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text">$</span>
  </div>
    <TextInput
      id="test2"
      type="number"
      className="input-group-text-lg"
      placeholder="Loan Amount"
      onChange={(e) => setLoanAmount(e.target.value)}
    />
    <div class="input-group-append">
    <span class="input-group-text">.00</span>
  </div>
</div>
    <br></br> 

    <div className="form-control form-control-lg" style={{border:"0px solid black"}}>
    <select
          className="form-control"
          value={loan_Amount_TermClient}
          onChange={(e) => setLoan_Amount_TermClient(e.target.value)}
        >
          <option>Select Loan Amount Term</option>
          {loan_Amount_Term.map((option,i) => (
            <option style={{color:'black'}} key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
<br></br>

<button class="btn btn-primary d-flex justify-content-center lg-10" style={{height:'40px'}}>
  Predict
</button>
</Form>
  </div>    

    </Layout>
  );
};

export default Products;
