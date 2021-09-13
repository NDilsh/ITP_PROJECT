import React, { Component } from 'react';
import axios from 'axios';

//import { Link, Redirect } from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export default class Login extends Component {

    constructor(props) {
  
      super(props);
      this.userLoginSubmit = this.userLoginSubmit.bind(this)
      this.handleClose = this.handleClose.bind(this)

      this.state = {
        email: "",
        pass: "",
        token: "",
        open: false
      }
    }

    async userLoginSubmit(e) {
      e.preventDefault()
      const userData = {
        email: this.state.email,
        pass: this.state.pass,
       // id: this.state.id
      }

      await axios.post("post/Login",userData)

      .then((res) => {
        this.setState({
          token: res.data.token
        })
        localStorage.setItem("Authorization", res.data.token)
        window.location = "/profile"
        console.log(res.data.token);
        //alert("loging successfull");
        toast.success('Registration Success',{position:toast.POSITION.TOP_CENTER})
      })
      .catch((err) => {
        console.log(err)
        this.setState({open: true})
        //("Invalid Email or Password")
        toast.error('Invalid Email or Password',{position:toast.POSITION.TOP_CENTER})
      })
    }
    handleClose(reason) {
      if (reason === 'clickaway') {
         return;
      }
      this.setState({open: false})
   };


    render() {
        return (
            <form className="submit-form" onSubmit={this.userLoginSubmit}>
            <section className="h-100 h-custom bg-dark text-black" style={{ borderRadius: "25px" }}>
              <br />
              <h1>
                <center className="text-white">REMEDI LOGIN</center>
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
                              <h3 className="fw-normal mb-5">Login</h3>
                       
                            
      
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

                                    onChange={e => this.setState({email: e.target.value})} required/>

                                </div>
                              </div>
      
                              <div className="row">
                                <div className="mb-4 pb-2">
                                  <div className="form-outline">
                                    <label className="form-label" htmlFor="pass" >
                                     Password
                                    </label>
                                    <input
                                      type="text"
                                      id="pass"
                                      className="form-control form-control-lg"
                                      autoComplete="off"
                                      name="pass"
                                      onChange={e => this.setState({pass: e.target.value})} required/>
                                    
                                    
                                  </div>
                                </div>
                                <div>

                                <button type="submit" className="btn btn-lg btn-dark">
                                 <i className="fa fa-check-square"></i>
                                 &nbsp; Cancel</button>
                                 &nbsp; &nbsp;

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
                </div>
                <hr className="my-5" style={{color:"#f57d00"}}/>
              </div>
              </div>
            </section>
          </form>
        );
      }
    }      