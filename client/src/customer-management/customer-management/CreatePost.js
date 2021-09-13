// import React, { Component } from 'react';
// import axios from 'axios';



// export default class CreatePost extends Component {


//     constructor(props) {
//         super(props);
//         this.state={
//             fname:"",
//             lname:"",
//             email:"",
//             pass:"",
//             tpnum:"",
//             idvisa:"",
//             gender:"",
//             address:"",
//             btype:"",
//             allergies:"",
//             issues:""

//         }
//     }


//     handleInputChange = (e) => {
//         const {name,value} = e.target;

//         this.setState({
//             ...this.state,
//             [name]: value

//         })
//     }

//     onSubmit = (e) => {
//         e.preventDefault();

//         const{fname,lname,email,pass,tpnum,idvisa,gender,address,btype,allergies,issues} = this.state
//         const data ={
//             fname:fname,
//             lname:lname,
//             email:email,
//             pass:pass,
//             tpnum:tpnum,
//             idvisa:idvisa,
//             gender:gender,
//             address:address,
//             btype:btype,
//             allergies:allergies,
//             issues:issues,
//         }
//         console.log(data)

//     axios.post("/post/save",data).then((res) => {
//         if(res.data.success){
//            window.alert("Post Created Sucessfully.....!")
//             this.setState(
//                 {
//                     fname:"",
//                     lname:"",
//                     email:"",
//                     pass:"",
//                     tpnum:"",
//                     idvisa:"",
//                     gender:"",
//                     address:"",
//                     btype:"",
//                     allergies:"",
//                     issues:""
//                 }
//             )
//         }
       
//     })

   
//     }

import React,{useState} from "react";
import axios from "axios";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export default function CreatePost(){

    

    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    const [pass1, setpass1] = useState("");
    const [tpnum, settpnum] = useState("");
    const [idvisa, setidvisa] = useState("");
    const [gender, setgender] = useState("");
    const [address, setaddress] = useState("");
    const [btype, setbtype] = useState("");
    const [allergies, setallergies] = useState("");
    const [issues, setissues] = useState("");
    // const [pwd2, setPassowrd2] = useState("");
    // const [imageUrl, setImageUrl] = useState("");
    //let fullName = null; 


    const sendData = async (e) => {
        e.preventDefault();
        
        let data = {
              fname:fname,
              lname:lname,
              email:email,
              pass:pass,
              tpnum:tpnum,
              idvisa:idvisa,
              gender:gender,
              address:address,
              btype:btype,
              allergies:allergies,
               issues:issues,
        }

        if (pass === pass1) { 
        axios.post("/post/save",data)
        .then(()=>{
            //alert("Registration Success")
            toast.success('Registration Success',{position:toast.POSITION.TOP_CENTER})

        }).catch((err)=>{
            alert(err);
        })

        }else{
            //alert("Password dismatch")
            toast.warning('Password dismatch',{position:toast.POSITION.TOP_CENTER})
        }

        setfname("");
        setlname("");
        setemail("");
        setpass("");
        setpass1("");
        settpnum("");
        setidvisa("");
        setgender("");
        setaddress("");
        setbtype("");
        setallergies("");
        setissues("");
        // setPassowrd2("");
        // setImageUrl("");  
      
    }


    
        return (
      
            <form className="submit-form" onSubmit={sendData}>
            <section className="h-100 h-custom bg-dark text-black" style={{ borderRadius: "25px" }}>
              <br />
              <h1>
                <center className="text-white">REMEDI REGISTRATION</center>
              </h1>
              <div className="container py-5 h-60">
                <div className="row d-flex justify-content-center align-items-center h-60">
                  <div className="col-12">
                    <div
                      className="card card-registration card-registration-3 bg-"
                      style={{ borderRadius: "25px",backgroundColor: "#f2f2f2" ,textSize:'20px'}}
                    >
                      <div className="card-body p-0">
                        <div className="row g-0">
                          <div className="col-lg-6">
                            <div className="p-5">
                              <h3 className="fw-normal mb-5">General Infomation</h3>
                       
                              <div className="row">
                                <div className="col-md-6 mb-4 pb-6">
                                  <div className="form-outline">
                                    <label className="form-label">
                                      First name
                                    </label>
      
                                    <input
                                      type="text"
                                      id="fname"
                                      name="fname"
                                      className="form-control form-control-lg"
                                      //value={this.state.fname}
                                      onChange={(e)=> {
                                        setfname(e.target.value) }}/>
                                  </div>
                                </div>
                                <div className="col-md-6 mb-4 pb-6">
                                  <div className="form-outline">
                                    <label className="form-label">
                                      Last name
                                    </label>
                                    <input
                                      type="text"
                                      id="lname"
                                      name="lname"
                                      className="form-control form-control-lg"
                                      //value={this.state.lname}
                                      onChange={(e)=> {
                                        setlname(e.target.value) }}/>
                                  </div>
                                </div>
                              </div>
      
                              <div className="mb-4 pb-2">
                                <div className="form-outline">
                                  <label className="form-label">
                                    Mobile Number
                                  </label>
                                  <input
                                    type="text"
                                    id="tpnum"
                                    name="tpnum"
                                    className="form-control form-control-lg"
                                    onChange={(e)=> {
                                      settpnum(e.target.value) }}/>
                                
                                </div>
                              </div>
      
                              <div className="row">
                                <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                                  <div className="form-outline">
                                    <label className="form-label">
                                      ID card Num/Visa Card
                                    </label>
                                    <input
                                      type="text"
                                      id="idvisa"
                                      name="idvisa"
                                      className="form-control form-control-lg"
                                      onChange={(e)=> {
                                        setidvisa(e.target.value) }}/>
                                  </div>

                                </div>
                            <br/>
                            <div className="form-group" style={{marginTop:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Gender</label>
                             <input type="text"
                             placeholder="Enter Gender"
                                 className="form-control"
                             name="gender"
                              //id="exampleInputEmail1"
                              onChange={(e)=> {
                                setgender(e.target.value) }}/>
                                </div>
                              </div>
      
                              <div className="mb-4 pb-2" style={{marginTop:'15px'}}>
                                <div className="form-outline">
                                  <label className="form-label">
                                    Email
                                  </label>
                                  <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    className="form-control form-control-lg"
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                    onChange={(e)=> {
                                      setemail(e.target.value) }}/>

                                </div>
                              </div>
      
                              <div className="row">
                                <div className="col-md-6 mb-4 pb-2">
                                  <div className="form-outline">
                                    <label className="form-label" htmlFor="pass">
                                      Type Password
                                    </label>
                                    <input
                                      type="text"
                                      id="pass"
                                      className="form-control form-control-lg"
                                      autoComplete="off"
                                      required 
                                      name="pass"
                                      onChange={(e)=> {
                                        setpass(e.target.value) }}/>
                                    
                                    
                                  </div>
                                </div>
                                <div className="col-md-6 mb-4 pb-2">
                                  <div className="form-outline">
                                    <label className="form-label">
                                      Retype Password
                                    </label>
                                    <input
                                      type="text"
                                      id="pass1"
                                      className="form-control form-control-lg"
                                      autoComplete="off"
                                      required 
                                      name="pass1"
                                      onChange={(e)=> {
                                        setpass1(e.target.value) }}/>

                                  </div>
                                </div>
      
                                <div className="form-outline w-100 mb-4">
                                  <label className="form-label">
                                    Address
                                  </label>
                                  <textarea
                                    className="form-control"
                                    id="address"
                                    rows="3"
                                    name="address"
                                    onChange={(e)=> {
                                      setaddress(e.target.value) }}/>
                                    
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-6 bg-indigo"
                            style={{ borderRadius: "25px" }}
                          >
                            <div className="p-5">
                              <h3 className="fw-normal mb-3">Contact Details</h3>
      
                              <div className="form-check d-flex justify-content-start mb-3 pb-6">
                                <input
                                  className="form-check-input me-3"
                                  type="checkbox"
                                  value=""
                                  id="form2Example3c"
                                />
                                <label
                                  className="form-check-label text-black"
                                  htmlFor="form2Example3"
                                >
                                  <h4>Optional Information</h4>
                                </label>
                              </div>
      
                              <div className="mb-2 pb- w-25">
                                <div className="form-outline form-white">
                                  <label className="form-label">
                                    Blood Type
                                  </label>
                                  <input
                                    type="text"
                                    id="btype"
                                    name="btype"
                                    className="form-control form-control-lg"
      
                                    onChange={(e)=> {
                                      setbtype(e.target.value) }}/>
                                </div>
                              </div>
      

                              <div className="mb-4 pb-2">
                                <div className="form-outline form-white">
                                  <label className="form-label">
                                    Allergies
                                  </label>
                                  <textarea
                                    className="form-control"
                                    id="allergies"
                                    rows="5"
                                    name="allergies"
                                    onChange={(e)=> {
                                      setallergies(e.target.value) }}/>
                                </div>
                              </div>
      
                              <div className="mb-4 pb-2">
                                <div className="form-outline form-white">
                                  <label className="form-label">
                                    Any Other Issues
                                  </label>
                                  <textarea
                                    className="form-control"
                                    id="issues"
                                    rows="5"
                                    name="issues"
      
                                    onChange={(e)=> {
                                      setissues(e.target.value) }}/>
                                </div>
                              </div>
      
                              <div className="form-check d-flex justify-content-start mb-4 pb-3">
                                <input
                                  className="form-check-input me-3"
                                  type="checkbox"
                                  value=""
                                  id="form2Example4c"
                                />
                                <label
                                  className="form-check-label text-black"
                                  htmlFor="form2Example3"
                                >
                                  I accept the{" "}
                                  {/* <a href="#!" className="text-black">
                                    <u>Terms and Conditions</u>
                                  </a> */}
                                  
                                </label>
                              </div>
      
                                <button type="submit" className="btn btn-lg btn-success">
                                 <i className="fa fa-check-square"></i>
                                 &nbsp; Save</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-5" style={{color:"#f57d00"}}/>
              </div>
              
            </section>
          </form>
        );
      
    }
          