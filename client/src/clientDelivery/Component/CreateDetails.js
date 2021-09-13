import React, { Component } from 'react'
import axios from 'axios'
import './Deliver.css'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()



//import { useHistory } from 'react-router-dom';
//import {BrowserRouter,Route} from 'react-router-dom'

export default class CreateDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      fname: "",
      lname: "",
      telno: "",
      address: "",
      city: "",
      //new object
      post:{}
    }

    

  }

  handleInputchange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { email, fname, lname, telno, address, city } = this.state;

    const data = {
      email: email,
      fname: fname,
      lname: lname,
      telno: telno,
      address: address,
      city: city
    }

    console.log(data)

    axios.post("http://localhost:8000/optdetails/add", data).then((res) => {
      alert("Successfully added details");
    // toast.success('Admin Data Updated successfully',{position:toast.POSITION.TOP_CENTER})
      console.log('thisitha : ', res);
      if (res.data.success) {
        this.setState(
          {
            email: "",
            fname: "",
            lname: "",
            telno: "",
            address: "",
            city: ""
          }
        )

       window.location.href = `/details/${res.data._id}`;
      }
    })

  }

  // new get
  componentDidMount(){
    
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/post/${id}`).then((res) =>{
        if(res.data.success){
            this.setState({
                post:res.data.post
            });

            console.log(this.state.post);
        }
    });

 }
  //new get end





   






  render() {
 
    const{topic,description,postCategory} = this.state.post;
        
    return (
       <div>


         <br/>
              {/**/}
              <div class="wrapper">    
              <div class="container">
                <div class="row p-3 mb-2 bg-light text-dark">
                <div class="col-sm">
                <br/>
                <h1 style={{color:"#3FD5AF"}}>Getting your order</h1>
                <br/>
                  
               
             {/**/}
             
      <div class="container border border-info" style={{backgroundColor: "#E9E2E2"}}>   {/*className="col-md-8 mt-4 mx-auto"*/}
         <br/>
        <h1 className="h3 mb-3 front-weight-normal">&nbsp;&nbsp;Optional Details</h1>
        <hr/>
        <form className="need-validation" noValidate>


          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label class="font-weight-bold" style={{ marginBottom: '5px' }}>&nbsp;&nbsp;Email</label>
            <input type="text"
              className="form-control"
              name="email"
              placeholder="Enter E-mail"
              value={this.state.email}
              onChange={this.handleInputchange} 
              aria-describedby="emailHelp"
              required/>
              
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label class="font-weight-bold" style={{ marginBottom: '5px' }}>&nbsp;&nbsp;First Name</label>
            <input type="text"
              className="form-control"
              name="fname"
              placeholder="Enter First Name"
              value={this.state.fname}
              onChange={this.handleInputchange} 
              required/>
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label class="font-weight-bold" style={{ marginBottom: '5px' }}>&nbsp;&nbsp;Last Name</label>
            <input type="text"
              className="form-control"
              name="lname"
              placeholder="Enter Last Name"
              value={this.state.lname}
              onChange={this.handleInputchange} 
              required/>
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label class="font-weight-bold" style={{ marginBottom: '5px' }}>&nbsp;&nbsp;Tel No</label>
            <input type="text"
              className="form-control"
              name="telno"
              placeholder="Enter Tel No"
              value={this.state.telno}
              onChange={this.handleInputchange} 
              required/>
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label class="font-weight-bold" style={{ marginBottom: '5px' }}>&nbsp;&nbsp;Address</label>
            <textarea type="text"
              className="form-control"
              name="address"
              placeholder="Enter Address"
              value={this.state.address}
              onChange={this.handleInputchange} 
              required></textarea>
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label class="font-weight-bold" style={{ marginBottom: '5px' }}>&nbsp;&nbsp;City</label>
            <input type="text"
              className="form-control"
              name="city"
              placeholder="Enter City"
              value={this.state.city}
              onChange={this.handleInputchange} 
              required/>
          </div>
          
          <br/>
         
        </form>
        
         
      
      </div>
      <br/><br/><br/><br/>
          {/**/}
          
          </div>

               <div class="col-1">
                   <br/>
                        <div class="vl"></div>
                        
               </div>
          
          <div class="col-sm">
                  
               
          {/*1 column s*/}
                <br/><br/>
               <h4 style={{color:"#3FD5AF"}}><i class="fas fa-cart-arrow-down" style={{color:"black"}}></i>&nbsp;Order Summary</h4>
               <br/>
               <div class="border border-info" style={{backgroundColor: "#E9E2E2"}}>
               <div class="row">
               <div class="col">
               
                    {/**/}

                     
                   <div class="container"  style={{marginTop:'20px'}}>
                   
                   <h4>{topic}</h4>
                    <hr/>


                      <dl className="raw">
                       <dt className="col-sm-3">Description</dt>
                       <dd className="col-sm-9">{description}</dd>

                       <dt className="col-sm-3">Post Category</dt>
                         <dd className="col-sm-9">{postCategory}</dd>
                  </dl>    
                  

                  </div>
                  {/**/} 
                   
                  </div>
                  </div>
                  </div>  
                  

                  <br/><br/><br/>

                  <div class="d-grid gap-2 col-6 mx-auto">

                  
                  <a className="btn btn-warning" href="/">
                  <i className="fas fa-arrow-alt-circle-left">&nbsp;&nbsp;&nbsp;&nbsp;</i>Back
                     </a>


                  <button className="btn btn-success" type="submit" style={{ marginTop: '15x' }} onClick={this.onSubmit} >
                  <i className="fas fa-arrow-alt-circle-right #3FD5AF"></i>
                  &nbsp; Continue

                  </button>
                  </div>

                  {/*1 column e*/} 
                  </div>
               </div>
               </div>
               </div>

             {/**/}
             <br/><br/><br/>
         </div>
         




      

     
    )
  }
}