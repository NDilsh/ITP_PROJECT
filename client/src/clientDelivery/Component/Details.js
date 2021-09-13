import React, { Component } from 'react';
//import {BrowserRouter,Route} from 'react-router-dom'
import axios from 'axios';
import './Deliver.css'

export default class Details extends Component {
  constructor(props){
    super(props);

    this.state={
        post:{}
    };

}
 

  componentDidMount(){
 
     const id = this.props.match.params.id;

     axios.get(`http://localhost:8000/optdetails/${id}`).then((res) =>{
         if(res.data.success){
             this.setState({
                 post:res.data.post
             });

             console.log(this.state.post);

         }
     });

  }


    


     // new get
 /* componentDidMount(){
    
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/post/${id}`).then((res) =>{
        if(res.data.success){
            this.setState({
                post:res.data.post
            });

            console.log(this.state.post);
        }
    });

 }*/
  //new get end






  render() {

      const{email, fname, lname, telno, address, city} = this.state.post;
      //new
      //const{topic,description,postCategory} = this.state.post;
    return(

       
      <div class="container">

         
            {/*1st col*/}
      <br/><br/>
      <div class="wrapper p-3 mb-2 bg-light text-dark">  
      <div   style={{marginLeft:'30px'}} >
     

      <div class="center">
      <dl  className="raw">
          <br/><br/>
      <h1 style={{color:"#3FD5AF"}}>Optional Details</h1>
      <br/>

      <div class="border border-info" style={{backgroundColor: "#E9E2E2"}}>
          
                <div class="container">
                <div class="row">
                <div class="col-sm">
          <br/>
          <dt className="col-sm-3 ">E-mail</dt>
          <dd className="col-sm-9">{email}</dd>

          <hr/>

          <dt className="col-sm-3">First Name</dt>
          <dd className="col-sm-9">{fname}</dd>

          <hr/>

          <dt className="col-sm-3">Last Name</dt>
          <dd className="col-sm-9">{lname}</dd>

          <hr/>

          <dt className="col-sm-6">Telephone Number</dt>
          <dd className="col-sm-9">{telno}</dd>

          <hr/>
          
          <dt className="col-sm-3">Address</dt>
          <dd className="col-sm-9">{address}</dd>
          
          <hr/>
          
          <dt className="col-sm-3">City</dt>
          <dd className="col-sm-9">{city}</dd>
          <br/>

          </div>
          </div>
          </div>
          
               
        </div>
          {/*<button className="btn btn-success">
             <a href="/edit/" style={{textDecoration:'none',color:'white'}} >Edit</a>
             </button>*/}
          
       
         

          <br/><br/>
          <td>
                      <a className="btn btn-warning" href={`/edit/${this.state.post._id}`}>
                        <i className="fas fa-edit"></i>&nbsp;Edit
                     </a>&nbsp;&nbsp;

                     <a className="btn btn-warning" href="#">
                        <i className="fas fa-arrow-alt-circle-right"></i>&nbsp;Payment
                     </a>
                      
                       
           </td>
        
       </dl>    
       </div> 
       </div>
          <br/><br/>
       </div>
       {/*1st col end*/}


                 


       <br/><br/>
       </div>
        
       
  
    )
 }
}