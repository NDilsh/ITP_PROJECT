import React, { Component } from 'react'
import axios from 'axios'
import FileBase64 from 'react-file-base64'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


toast.configure()
export default class EditUpload extends Component {

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

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }     
    
    onSubmit = (e) =>{
        
        e.preventDefault();
        const id = this.props.match.params.id;

        const {cusID,name,pNum,presImage,presImage2} = this.state;

        const data ={
            cusID:cusID,
            name:name,
            pNum:pNum,
            presImage:presImage,
            presImage2:presImage2
        }

        console.log(data)

        axios.put(`/post/update/${id}`, data).then((res) =>{
            if(res.data.success){
                //alert("Post Updated Succesfully");
                toast.success('Updated successfully',{position:toast.POSITION.TOP_CENTER})
                
                this.setState(
                    {
                        cusID:"",
                        name:"",
                        pNum:"",
                        presImage:"",
                        presImage2:""
                    }
                )
            }
        })
    }   
    //retrive data and fowarding to next page to display
    componentDidMount(){ //load all details

        //get unique id of the post
        const id = this.props.match.params.id;

        axios.get(`/post/${id}`).then((res) =>{
            //handle the response for the promise
            if(res.data.success){
                this.setState({
                    cusID:res.data.post.cusID,
                    name:res.data.post.name,
                    pNum:res.data.post.pNum,
                    presImage:res.data.presImage,
                    presImage2:res.data.presImage2
                });
    
                console.log(this.state.post);
                
            }
        });
    }
    
    render() {

        return(
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Edit Prescription Details</h1>
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

                    <div>
                    <FileBase64
                        type="file"
                        name="presImage2"
                        multiple={ false }
                        onDone={({ base64 }) => this.setState({ presImage2: base64 })}
                        />
                    </div>

                    <small  className="form-text text-muted">Only accepted image file types: JPEG</small>
                    &nbsp;
                    <button type="submit" className="btn btn-primary" style={{marginTop:'20px'}} onClick={this.onSubmit}>
                    <i className="far fa-check-sqaure"></i>
                    &nbsp; Upload
                    </button>
               </form>
            </div>
        )
    }
}