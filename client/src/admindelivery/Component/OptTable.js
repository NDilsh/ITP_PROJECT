import React, {Component, component} from 'react'
import axios from 'axios'
import './admin.css'

export default class OptTable extends Component{
 constructor(props){
  super(props);

  this.state={
     posts:[]
  };
 }

 componentDidMount(){
    this.retrivePosts();
 }






 retrivePosts(){
  axios.get("http://localhost:8050/optdetails").then(res =>{
   if(res.data.success){
     this.setState({
       posts:res.data.existingDetails
     });

     console.log(this.state.posts);
   }

  })
 }


 onDelete = (id) =>{

  axios.delete(`http://localhost:8050/optdetails/delete/${id}`).then((res) =>{
    alert("Delete Successfully");
    this.retrivePosts();
  })

 }


 

 //search start

 filterData(posts,searchKey){

  const result = posts.filter((optdetails) =>
  optdetails.email.toLowerCase().includes(searchKey) ||
  optdetails.email.toUpperCase().includes(searchKey)  ||
   optdetails.fname.toLowerCase().includes(searchKey) ||
   optdetails.fname.toUpperCase().includes(searchKey) ||
   optdetails.lname.toLowerCase().includes(searchKey) ||
  optdetails.lname.toUpperCase().includes(searchKey)  ||
  optdetails.city.toLowerCase().includes(searchKey) ||
  optdetails.city.toUpperCase().includes(searchKey)  
   
   

  )

  this.setState({posts:result})

 }





 
 handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value;

  axios.get("http://localhost:8050/optdetails").then(res =>{
   if(res.data.success){
   
     this.filterData(res.data.existingDetails,searchKey)
 }

 });

 }

 //search end






 

 
  render(){
    return (

      <div className="container">


       
        {/* search bar start */}
         
          
        <div className="raw">
              <div className="col-lg-9 mt-2 mb-2">
              <h1 style={{marginLeft: "30%"}}>ALL Optional delivery details</h1><br/> 
              </div>
              <div class="alg"> 
              <div className="col-lg-9 mt-2 mb-2">
                <input 
                className="form-control "
                type="search"
                placeholder="search"
                name="searchQuery"
                onChange={this.handleSearchArea}>
                
                </input>
                </div> 
              </div>

            </div>
            
                 <br/> 
         {/* search bar end */}

          {/*style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}*/}


     
      <div class="table-wrapper">
       <table class="fl-table"  >  {/* className="table" */}
          <thead >
            <tr>
              <th scope="col">Number</th>
              <th scope="col">E-mail</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Address</th>
              <th scope="col">City</th>
              <th scope="col">Action</th>
              
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts,index) =>(
               <tr key={index}>
                 <th scope="raw">{index+1}</th>
                 <td>{posts.email}</td>
                 <td>{posts.fname}</td>
                 <td>{posts.lname}</td>
                 <td>{posts.telno}</td>
                 <td>{posts.address}</td>
                 <td>{posts.city}</td>
                 <td>
                   
                   <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(posts._id)}>
                     <i className="far fa-trash-alt"></i>&nbsp;Delete
                   </a>
                    
                 </td>
               </tr>
            ))}
          </tbody>

       </table>
       </div>
     </div>

       

      

    )
  }
}