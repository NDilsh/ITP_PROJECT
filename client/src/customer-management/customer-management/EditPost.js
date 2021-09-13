import React, { Component } from 'react';
import axios from 'axios';
import '../css/bs.css'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


export default class EditPost extends Component {

    constructor(props) {
        super(props);
        this.state={
            fname:"",
            lname:"",
            email:"",
            pass:"",
            tpnum:"",
            idvisa:"",
            gender:"",
            address:"",
            btype:"",
            allergies:"",
            issues:""
        }
    }


    handleInputChange = (e) => {
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]: value

        })
    }

    onSubmit = (e) => {

        e.preventDefault();
        const id = this.props.match.params.id;

        const{fname,lname,email,pass,tpnum,idvisa,gender,address,btype,allergies,issues} = this.state
        const data ={
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
            issues:issues
        }
        console.log(data)

    axios.put(`/post/update/${id}`,data).then((res) => {
        if(res.data.success){
           // alert("Post Updated Sucessfully.....!")
           toast.success('Post Updated Sucessfully.....!',{position:toast.POSITION.TOP_CENTER})
            this.setState(
                {
                    fname:"",
                    lname:"",
                    email:"",
                    pass:"",
                    tpnum:"",
                    idvisa:"",
                    gender:"",
                    address:"",
                    btype:"",
                    allergies:"",
                    issues:""
                }
            )
        }
    })

    }

    componentDidMount() {

        const id = this.props.match.params.id;

        axios.get(`/post/${id}`).then((res) => {

            if(res.data.success){
                this.setState({ 
                   //topic:res.data.post.topic,
                   //description:res.data.post.description,
                   //postCategory:res.data.post.postCategory
                   fname:res.data.post.fname,
                   lname:res.data.post.lname,
                   email:res.data.post.email,
                   pass:res.data.post.pass,
                   tpnum:res.data.post.tpnum,
                   idvisa:res.data.post.idvisa,
                   gender:res.data.post.gender,
                   address:res.data.post.address,
                   btype:res.data.post.btype,
                   allergies:res.data.post.allergies,
                   issues:res.data.post.issues
                });

                console.log(this.state.post);

            }
        });

    }


    render() {
        return (
                <form className="submit-form">
                <section className="h-100 h-custom bg-dark text-black h5" style={{ borderRadius: "25px" }}>
                  <br />
                  <h1>
                    {/* <center className="text-white">
                        Inside The Black Bar
                    </center> */}
                  </h1>
                  <div className="container py-5 h-60">
                    <div className="row d-flex justify-content-center align-items-center h-60">
                      <div className="col-12">
                        <div
                          className="card card-registration card-registration-3 bg-"
                          style={{ borderRadius: "25px",backgroundColor: "#f2f2f2" ,textSize:'2x'}}
                        >
                          <div className="card-body p-0">
                            <div className="row g-0">
                              <div className="col-lg-6">
                                <div className="p-5">
                                  <h3 className="fw-normal mb-5">Change User Profile</h3>
                           
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
                                          value={this.state.fname}
                                          onChange={this.handleInputChange}
                                          />
          
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
                                          value={this.state.lname}
                                          onChange={this.handleInputChange}
                                        />
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
                                        value={this.state.tpnum}
                                        onChange={this.handleInputChange}/>
                                    
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
                                          value={this.state.idvisa}
                                          onChange={this.handleInputChange}/>
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
                                value={this.state.gender}
                                  onChange={this.handleInputChange}/>
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
    
                                        value={this.state.email}
                                        onChange={this.handleInputChange}/>
    
                                    </div>
                                  </div>
          
                                  <div className="row">
                                    <div className="col-md-6 mb-4 pb-2">
                                      <div className="form-outline">
                                        <label className="form-label" htmlFor="pass">
                                         Change Password
                                        </label>
                                        <input
                                          type="text"
                                          id="pass"
                                          className="form-control form-control-lg"
                                          autoComplete="off"
                                          required 
                                          name="pass"
                                          value={this.state.pass}
                                        onChange={this.handleInputChange}/>
                                        
                                        
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
                                        value={this.state.address}
                                        onChange={this.handleInputChange}>
                                        </textarea>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="col-lg-6 bg-white"
                                style={{ borderRadius: "25px" }}>
                                <div className="p-5">
                                  <div className="mb-2 pb- w-25">
                                    <div className="form-outline form-white">
                                      <label className="form-label">
                                          <br/><br/><br/>

                                          {/* User Image Insert */}

                                        Blood Type
                                        
                                      </label>
                                      <input
                                        type="text"
                                        id="btype"
                                        name="btype"
                                        className="form-control form-control-lg"
          
                                        value={this.state.btype}
                                        onChange={this.handleInputChange}/>
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
                                        value={this.state.allergies}
                                        onChange={this.handleInputChange}>
                                        </textarea>
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
          
                                        value={this.state.issues}
                                        onChange={this.handleInputChange}>
                                        </textarea>
                                    </div>
                                  </div>
          
                                 
          
                                  <button type="submit" className="btn btn-success" onClick={this.onSubmit}>
                                    <i className="fa fa-check-square"></i>
                                    &nbsp; Update</button>
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
        }      

