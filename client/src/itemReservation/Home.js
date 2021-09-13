import React, {Component} from 'react'
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
export default class Home extends Component{
    constructor(props){
        super(props);

        this.state={
            posts:[]
        };

    }
    componentDidMount(){
        this.retrievePosts();
    }

    retrievePosts(){
        axios.get("/posts").then(res =>{
            if(res.data.success){
                this.setState({
                    posts:res.data.existingPosts
                });
                
                console.log(this.state.posts);
            }
        })  
    }

    onDelete = (id) =>{
        axios.delete(`/post/delete/${id}`).then((res) =>{
            //alert("Delete Successfully");
            toast.success('Deleted successfully',{position:toast.POSITION.TOP_CENTER})
            this.retrievePosts();
        })
    }

    filterData(posts,searchKey){

        const result = posts.filter((post) =>
        post.cusID.toLowerCase().includes(searchKey)||
        post.name.toLowerCase().includes(searchKey)||
        post.pNum.toLowerCase().includes(searchKey)
        )

        this.setState({posts:result});
    }

    handleSearchArea = (e) =>{
        //console.log(e.currentTarget.value);
        const searchKey = e.currentTarget.value;

        axios.get("/posts").then(res =>{
            if(res.data.success){

                this.filterData(res.data.existingPosts, searchKey);
            }
        });
    }

    render(){
        return (
            <div>


                    <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <div className="container-fluid">

                        <a className="navbar-brand" href="/" style={{color:"green"}}></a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                            <span className="navbar-toggler-icon"></span>

                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <form className="d-flex">

                            <input id="searchNav" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleSearchArea}/>

                        </form>

                    </div>
                    </div>
                    </nav>

                <div className="row">
                    <div className="col-lg-9 mt-2 mb-2">
                <center>
                <br/>
                <h4 style={{marginLeft:'33%', color:'white', fontSize:'40px'}}>All Prescription Details</h4>
                </center>
                <br/>
                </div>
                
                </div>
            <div class="table-wrapper"><table class="fl-table">
                
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Customer ID</th>
                                    <th scope="col">Customer Name</th>
                                    <th scope="col">Phone Number</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.posts.map((posts,index) =>(
                                    <tr key={index}>
                                        <th scope="row">{index+1}</th>
                                        <td>
                                            <a href={`/post/${posts._id}`} style={{textDecoration:'none'}}>
                                               {posts.cusID}
                                            </a> 
                                        </td>
                                        <td>{posts.name}</td>
                                        <td>{posts.pNum}</td>
                                        <td>
                                            &nbsp;
                                            <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(posts._id)}>
                                                <i className="far fa-trash-alt"></i>&nbsp;Delete
                                            </a> 
                                        </td> 
                                    </tr>
                                   )
                                )}
                            </tbody>
                        </table>
                        </div>
                    <div class="d-grid gap-2">   
                    <button className="btn1">
                    <a href="/add" style={{textDecoration:'none', color:'white'}}>Create New Post</a></button>
                    <button className="btn1">
                    <i class="fas fa-chevron-circle-right"></i>
                    <a href="/valid" style={{textDecoration:'none', color:'white'}}> Valid Prescriptions</a></button>
                    <button className="btn1">
                    <i class="fas fa-chevron-circle-right"></i>
                    <a href="/Invalid" style={{textDecoration:'none', color:'white'}}> Invalid Prescriptions</a></button>
                    </div>
                    </div>


            </div>
        )
    }
}