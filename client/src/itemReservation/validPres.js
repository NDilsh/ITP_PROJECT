import React, {Component} from 'react'
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
export default class validPres extends Component{
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
        axios.get("/posts2").then(res =>{
            if(res.data.success){
                this.setState({
                    posts:res.data.existingPosts
                });
                
                console.log(this.state.posts);
            }
        })  
    }

    onDelete = (id) =>{
        axios.delete(`/post2/delete/${id}`).then((res) =>{
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

        axios.get("/posts2").then(res =>{
            if(res.data.success){

                this.filterData(res.data.existingPosts, searchKey);
            }
        });
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                <center>
                <h4 style={{fontSize:"37px", color:'white'}}>Valid Prescriptions Details</h4><br/>

                <div className="col-6 col-sm-3">
                    <input
                    className="form-control"
                    type="search"
                    placeholder="Search"  
                    name="searchQuery"
                    onChange={this.handleSearchArea}>
                    </input>
                    
                </div>
            </center>

            </div>
            <br/>
            <div class="table-wrapper">
                <table class="fl-table">
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
                                            <a href={`/valid/disp/${posts._id}`} style={{textDecoration:'none'}}>
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
            </div>
        )
    }
}
