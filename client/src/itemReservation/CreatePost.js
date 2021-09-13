import React, { Component } from 'react'
import axios from 'axios'
import FileBase64 from 'react-file-base64';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


toast.configure()
export default class CreatePost extends Component {
    
    constructor(props){
        super(props);
        this.state={
            cusID:"",
            name:"",
            pNum:"",
            presImage:"",
            presImage2:""
        }
    }
    //identyfy the input data
    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }  
    /*getFiles(presImage2){
        this.setState({ presImage2: presImage2 });
      }*/

    onSubmit = (e) =>{
        e.preventDefault();

        const {cusID,name,pNum,presImage,presImage2} = this.state;
        //assign collected data from input fields to variables
        const data ={
            cusID:cusID,
            name:name,
            pNum:pNum,
            presImage:presImage,
            presImage2:presImage2
        }

        console.log(data)
        //passing collected data to save into the database
        axios.post("/post/save", data).then((res) =>{
            if(res.data.success){
                toast.success('Data uploaded successfully',{position:toast.POSITION.TOP_CENTER})
                this.setState(
                    {
                        cusID:"",
                        name:"",
                        pNum:"",
                        presImage:"",
                        presImage2:""
                    }
                )
                //if success, then store data to database, retrieve data and show details on next page
            this.props.history.push(`/add/next/${cusID}`);
            }
        })
    }
    
    render() {
        return(
            <div className="divPossion" id="createform">
            <div className="col-md-8 mt-4 mx-auto"><center>
                <h1 className="h3 mb-3 font-weight-normal">Upload Prescription File</h1></center>
               <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Customer ID:</label>
                        <input type="text"
                         name="cusID"
                         className="form-control"
                         placeholder="ID with 5 digits"
                         value={this.state.cusID}
                         onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <label for="exampleInputPassword1">Customer Name:</label>
                        <input type="text"
                        name="name"
                        className="form-control"
                        placeholder="First or Last name"
                        value={this.state.name}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <label for="exampleInputPassword1">Phone Number:</label>
                        <input type="text"
                        name="pNum"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Home/Mobile number"
                        value={this.state.pNum}
                        onChange={this.handleInputChange}/>                            
                    </div>

                    <div className="form-group">
                    <label for="exampleFormControlTextarea1">Enter prescription details</label>
                    <textarea className="form-control"rows="3"
                        name="presImage"
                        value={this.state.presImage}
                        onChange={this.handleInputChange}/> 
                    </div>
                    <br/>
                    <div>
                    <FileBase64
                        type="file"
                        name="presImage2"
                        multiple={ false }
                        onDone={({ base64 }) => this.setState({ presImage2: base64 })}
                        />
                    </div>
                    
                    <small  className="form-text text-muted">Upload images below 30mb</small>
                    &nbsp;
                    <br/>
                    <br/>
                    <div class="d-grid gap-2">
                        <button class="btn btn-info" type="submit" onClick={this.onSubmit}>
                        <i class="fas fa-arrow-circle-up"></i> Upload</button>
                    </div>
                    <br/>
               </form>
            </div>
           </div> 
        )
    }
}