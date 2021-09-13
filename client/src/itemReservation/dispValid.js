// TO DISPLAY VALID AND INVALID PRESCRIPTIONS
import React, { Component } from 'react'
import axios from 'axios'


export default class dispValid extends Component {

    constructor(props){
        super(props);

        this.state={
            post:{} //initialize as an empty obeject
        }
    }
    componentDidMount(){ //load all details

        //get unique id of the post
        const id = this.props.match.params.id;
        
        axios.get(`/post2/${id}`).then((res) =>{
            //handle the response for the promise
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });
    
                console.log(this.state.post);
            }
        });
    }

    render() {
        //getting data by destructing

        const {cusID,name,pNum,presImage,presImage2,postDate} = this.state.post;
        return(
            <div className="divPossionPostDetails" id="displayform">
            <div style={{margin:'20px'}}>
                <center><h2 style={{ color:"black", fontSize:"40px"}} >Marked as Valid</h2></center>
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
                    <img className="activator" style={{ width: '100%', height: 500 }} src={presImage2}/></div>
                    <br/>
                </center>
            </div>
            </div>
        )
    }
    }

    