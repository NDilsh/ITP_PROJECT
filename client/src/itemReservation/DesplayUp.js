import React, { Component } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
export default class DesplayUp extends Component {

    constructor(props){
        super(props);

        this.state={
            post:{} //initialize as an empty obeject
        }
    }
    componentDidMount(){ //load all details

        //get unique id of the post
        const id = this.props.match.params.id;

        axios.get(`/alt/post/${id}`).then((res) =>{
            //handle the response for the promise
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });
    
                console.log(this.state.post);
            }
        });
    }
    onDelete = (id) =>{
        axios.delete(`/post/delete/${id}`).then((res) =>{
            toast.success('Deleted successfully',{position:toast.POSITION.TOP_CENTER})
            //alert("Delete Successfully");
            //redirect to home
            this.props.history.push(`/`);
        })
    }
    render() {
        //getting data by destructing

        const {_id,cusID,name,pNum,presImage,presImage2,postDate} = this.state.post;
        return(
            <div style={{margin:'20px'}}>
                <center><h2>Upload Successful !</h2></center>
                <hr/>
                
                <dl className="row">
                    <dt className="col-sm-3">Customer ID:</dt>
                    <dd className="col-sm-9">{cusID}</dd>

                    <dt className="col-sm-3">Customer name:</dt>
                    <dd className="col-sm-9">{name}</dd>

                    <dt className="col-sm-3">Phone number:</dt>
                    <dd className="col-sm-9">{pNum}</dd>

                    <dt className="col-sm-3">Customer prescription details:</dt>
                    <dd className="col-sm-9">{presImage}</dd>

                    <dt className="col-sm-3">Upload date:</dt>
                    <dd className="col-sm-9">{postDate}</dd>

                </dl>
                <center>
                    <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" style={{ width: '50%', height: 500 }} src={presImage2}/></div>
                    <br/>
                    <a className="btn btn-warning btn-lg" style={{ width: '300px' ,margin: '10px'}} href={`/edit/${_id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                        &nbsp;
                     <a className="btn btn-danger btn-lg" style={{ width: '300px' ,margin: '10px'}} href="#" onClick={() =>this.onDelete(_id)}>
                        <i className="far fa-trash-alt"></i>&nbsp;Delete
                    </a> 
                </center>
            </div>
            
        )
    }
    }

