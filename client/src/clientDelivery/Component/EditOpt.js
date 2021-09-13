import React, { Component } from 'react'
import axios from 'axios'
import './Deliver.css'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()

//import {BrowserRouter,Route} from 'react-router-dom'

  export default class EditOpt extends Component {
    constructor(props){
        super(props);
          this.state={
            email: "",
            fname: "",
            lname: "",
            telno: "",
            address: "",
            city: ""
         }
    }

    handleInputchange = (e) =>{
        const {name,value} = e.target;
    
             this.setState({
              ...this.state,
             [name]:value
            })
       }

       onSubmit = (e) =>{
    
        e.preventDefault();
        const id = this.props.match.params.id;

        const {email,fname,lname,telno,address,city} = this.state;

       const data ={
            email:email,
            fname:fname,
            lname:lname,
            telno:telno,
            address:address,
            city:city
       }

       console.log(data)

       axios.put(`http://localhost:8000/optdetails/update/${id}`,data).then((res) =>{
         console.log('thisitha : ', res);
          if(res.data.success){
            toast.success('Admin Data Updated successfully',{position:toast.POSITION.TOP_CENTER})
              alert("Details updated Successfully")
                this.setState(
                   {
                       email:"",
                       fname:"",
                       lname:"",
                       telno:"",
                       address:"",
                       city:""
                   }
          
                )
              
                window.location.href = `/details/${res.data._id}`;

            }
       })

    } 
     
      
        componentDidMount(){
        
               const id = this.props.match.params.id;
    
              axios.get(`http://localhost:8000/optdetails/${id}`).then((res) =>{
                 if(res.data.success){
                   this.setState({
                      email:res.data.post.email,
                      fname:res.data.post.fname,
                      lname:res.data.post.lname,
                      telno:res.data.post.telno,
                      address:res.data.post.address,
                      city:res.data.post.city
                   });
    
                  console.log(this.state.post);
               }
           });
    
       }
    
       render() {
           
          return(
            <div>
               <br/><br/>
               <div className="col-md-8 mt-4 mx-auto p-3 mb-2 bg-light text-dark wrapper">
              <h1 style={{color:"#3FD5AF"}}>Optional Details</h1>
               <form className="need-validation" noValidate>
               <br/>
                          
               <div class="container border border-info " style={{backgroundColor: "#E9E2E2"}}>
               <br/>

               <div className="form-group" style={{ marginBottom: '15px' }}>
              <label class="font-weight-bold" style={{ marginBottom: '5px' }}>&nbsp;&nbsp;E-mail</label>
               <input type="text"
                className="form-control"
                name="email"
                placeholder="Enter E-mail"
                value={this.state.email}
                onChange={this.handleInputchange} />
              </div>

              

              <div className="form-group" style={{ marginBottom: '15px' }}>
              <label class="font-weight-bold" style={{ marginBottom: '5px' }}>&nbsp;&nbsp;First Name</label>
              <input type="text"
              className="form-control"
              name="fname"
              placeholder="Enter First Name"
              value={this.state.fname}
              onChange={this.handleInputchange} />
               </div>

               <div className="form-group" style={{ marginBottom: '15px' }}>
              <label class="font-weight-bold" style={{ marginBottom: '5px' }}>&nbsp;&nbsp;Last Name</label>
              <input type="text"
              className="form-control"
              name="lname"
              placeholder="Enter Last Name"
              value={this.state.lname}
              onChange={this.handleInputchange} />
              </div>

              <div className="form-group" style={{ marginBottom: '15px' }}>
              <label class="font-weight-bold" style={{ marginBottom: '5px' }}>&nbsp;&nbsp;Telephone Number</label>
              <input type="text"
              className="form-control"
              name="telno"
              placeholder="Enter Tel No"
              value={this.state.telno}
              onChange={this.handleInputchange} />
              </div>

              <div className="form-group" style={{ marginBottom: '15px' }}>
               <label class="font-weight-bold" style={{ marginBottom: '5px' }}>&nbsp;&nbsp;Address</label>
              <input type="text"
              className="form-control"
              name="address"
              placeholder="Enter Address"
              value={this.state.address}
              onChange={this.handleInputchange} />
               </div>

               <div className="form-group" style={{ marginBottom: '15px' }}>
               <label class="font-weight-bold" style={{ marginBottom: '5px' }}>&nbsp;&nbsp;City</label>
              <input type="text"
              className="form-control"
              name="city"
              placeholder="Enter City"
              value={this.state.city}
              onChange={this.handleInputchange} />
               </div>
               <br/>

               </div>
               <br/>
    
               <button className="btn btn-success" type="submit" style={{marginTop:'15x'}} onClick={this.onSubmit}>
                   <i className="fas fa-marker"></i>
                   &nbsp; update
               </button>
    
             </form>
            
             <br/>
              </div>
              <br/><br/>
              </div>
         
            )
       }
   }