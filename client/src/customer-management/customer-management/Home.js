import React, { Component } from 'react';
import axios from 'axios';
import '../css/bs.css'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()



export default class Home extends Component {
constructor(props) {
    super(props);

    this.state = {
        posts: []
    };
}

componentDidMount() {
    this.retrievePosts();
}

retrievePosts() {
    axios.get("/posts").then(res=>{
       if(res.data.success){
           this.setState({   
            posts: res.data.existingPosts
        });

       
        console.log(this.state.posts);
       }
      
    });
}

onDelete = (id) => {

    axios.delete(`/post/delete/${id}`).then((res)=>{
        //alert("Delete Sucessfully");
        toast.info('Registration Success',{position:toast.POSITION.TOP_CENTER})
        this.retrievePosts();
    })

}

filterData(posts,searchKey){


    const result = posts.filter((post) =>
    
    post.fname.toLowerCase().includes(searchKey))
    
    this.setState({posts:result});
    }
    

handleSearchArea = (e) =>{
    const searchKey = e.currentTarget.value;
    axios.get("/posts").then(res =>{

if(res.data.success){



this.filterData(res.data.existingPosts, searchKey);

}

});

}



    render() {
        return (
           
          

            <div className="container responsive" style={{marginLeft:'-50px'}} id="siz"> 
                 
                <div className="row">
                <div className="col-lg-9 mt-2 mb-2">
                <p>All Posts</p>
                </div>
                <div className="col-lg-3 mt-2 mb-2">
                    <input
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        name="searchQuery"
                        //onChange="{this.handleSearchArea}"
                        onChange={this.handleSearchArea}
                        >
                            </input>
                    </div>
                    </div>

               <table className="table table-striped table-inverse table-responsive table-bordered" style={{
                   fontSize: '4',
                   color:'#4a54f1',
                   paddingTop: "100px"
                   
                   }}>
                   <thead>
                       <tr key={Home.table}>
                        <th scope="col" >#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">E mail</th>
                        {/* <th scope="col">Password</th> */}
                        <th scope="col">Telephone Num</th>
                        <th scope="col">ID/VISA</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Address</th>
                        <th scope="col">Blood Type</th>
                        <th scope="col">Allergies</th>
                        <th scope="col">Issues</th>
                        <th scope="col" colspan="2">
                            <center>
                            Functions
                                </center>
                        </th>
                        

                       </tr>
                    </thead>

                <tbody>

                    {this.state.posts.map((posts,index) =>(

                    <tr key={posts.index}>
                        <th scope="row">{index+1}</th>

                        <td>
                            <a href={`/post/${posts._id}`} style={{ textDecoration:'none'}}>
                            {posts.fname}
                            </a>
                        </td>

                        {/* <td>{posts.fname}</td> */}
                        <td>{posts.lname}</td>
                        <td>{posts.email}</td>
                        {/* <td>{posts.pass}</td> */}
                        <td>{posts.tpnum}</td>
                        <td>{posts.idvisa}</td>
                        <td>{posts.gender}</td>
                        <td>{posts.address}</td>
                        <td>{posts.btype}</td>
                        <td>{posts.allergies}</td>
                        <td>{posts.issues}</td>
                     

                        <td>
                            <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                                <i className="fa fa-edit"></i>&nbsp;Edit
                            </a>
                        </td>
                        <td>
                            
                            <a className="btn btn-danger" href="/dashboard/data" onClick={() =>this.onDelete(posts._id)}>
                                <i className="fa fa-trash"></i>&nbsp;Delete
                            </a>
                        </td>
                    </tr>

                    ))}

                </tbody>
            
               </table>

                        <button className="btn btn-success">
                            <a href="/Registration" style={{textDecoration:'none',color:'white'}}>
                            Create New Post</a>
                        </button>
                        
            </div>
      
                   
                       
            

        )
        

        
    }

    
}


