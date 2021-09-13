import React, { Component } from 'react'
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
export default class postDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            _id:"",
            cusID:"",
            name:"",
            pNum:"",
            presImage:"",
            presImage2:"",
            post:{} //initialize as an empty obeject
        }
    }
    componentDidMount(){ //this will retrive data from model to display on screen (1)

        //get unique id of the post
        const id = this.props.match.params.id;

        axios.get(`/post/${id}`).then((res) =>{
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
            //alert("Delete Successfully");
        })
    }
    //onClick will invoke onSubmit function to transfer data to model2 (3)
    //onSubmit for model2 (valid)
    onSubmit = (e) =>{
        e.preventDefault();

        const {_id,cusID,name,pNum,presImage,presImage2} = this.state.post;
        //assign collected data from input fields to variables
        const data ={
            _id:_id,
            cusID:cusID,
            name:name,
            pNum:pNum,
            presImage:presImage,
            presImage2:presImage2
        }

        console.log(data)
        //passing collected data to save into the database model2
        axios.post("/post2/save", data).then((res) =>{
            if(res.data.success){
                this.setState(
                    {
                        cusID:"",
                        name:"",
                        pNum:"",
                        presImage:"",
                        presImage2:""
                    }
                )
                //if succes, then delete data from original database model after moving to model2 (4)
                this.onDelete(data._id);
                //if success, then store data to database, then redirect to validPres component (5)
                toast.info('Moved to valid presecription section',{position:toast.POSITION.TOP_CENTER})
            this.props.history.push(`/valid`);
            }
        })
    }

    //onClick will invoke onSubmit function to transfer data to model2 (3)
    //onSubmit for model3 (Invalid)
    onSubmit2 = (e) =>{
        e.preventDefault();

        const {_id,cusID,name,pNum,presImage,presImage2} = this.state.post;
        //assign collected data from input fields to variables
        const data ={
            _id:_id,
            cusID:cusID,
            name:name,
            pNum:pNum,
            presImage:presImage,
            presImage2:presImage2
        }

        console.log(data)
        //passing collected data to save into the database model2
        axios.post("/post3/save", data).then((res) =>{
            if(res.data.success){
                this.setState(
                    {
                        cusID:"",
                        name:"",
                        pNum:"",
                        presImage:"",
                        presImage2:""
                    }
                )
                //if succes, then delete data from original database model after moving to model2 (4)
                this.onDelete(data._id);
                //if success, then store data to database, then redirect to validPres component (5)
                toast.info('Moved to Invalid presecription section',{position:toast.POSITION.TOP_CENTER})
            this.props.history.push(`/invalid`);
            }
        })
    }

    render() {
        //collected data is set (destructing) to display on screen (2)
        const {cusID,name,pNum,presImage,presImage2,postDate} = this.state.post;

        return(

            <div className="divPossionPostDetails" id="displayform">
            <div style={{margin:'20px'}}>
                <center><h2 style={{ color:"black", fontSize:"40px"}} >Customer Prescription</h2></center>
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
                    <img className="activator" style={{ width: '100%', height: 500 }} src={presImage2}/>
                    </div>
                    <br/>


                                    {/* grid 2 */}
                <div class="col-6">
                {/* image */}

                {/* button */}    
                    <button className="btn btn-success btn-lg" style={{ width: '100%' ,margin: '10px'}} onClick={this.onSubmit}>
                        <i className="fas fa-check-circle"></i>&nbsp;Mark as Valid
                    </button>
                {/* button */}
                    <button className="btn btn-danger btn-lg" style={{ width: '100%' ,margin: '10px'}} onClick={this.onSubmit2}>
                        <i className="fas fa-times-circle"></i>&nbsp;Mark as Invalid
                    </button>
                
                </div>
                </center>
            </div>
            </div>
        )













            
        
    }
}




