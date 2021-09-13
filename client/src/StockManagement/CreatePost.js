import React,{Component} from 'react'
import axios from 'axios';
import FileBase64 from 'react-file-base64';
import Logo from './logo.png';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

export default class CreatePost extends Component {
  constructor(props){
    super(props);
    this.state={
      topic:"",
      description:"",
      postCategory:"",
      availability:"",
      price:"",
      image:""
    }
  }
  
  handleInputChange = (e)=>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }

  onSubmit = (e) =>{
    e.preventDefault();

    const {topic,description,postCategory,availability,price,image} = this.state;

    const data={
      topic:topic,
      description:description,
      postCategory:postCategory,
      availability:availability,
      price:price,
      image:image
    }
    console.log(data)
      //save data
      axios.post("/post/save",data).then((res) =>{
            if(res.data.success)
           // alert("New Post Added Successfully")
           toast.success('New Post Added Successfully',{position:toast.POSITION.TOP_CENTER});
            this.setState(
              {
                topic:"",
                description:"",
                postCategory:"",
                availability:"",
                price:"",
                image:""
              }
            )
      });
  }



    render() {
      return (

    <div>

   

        <div className="divPossion" id="createform">
        <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Create New Post</h1>
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:"15px"}}>
                      <label style={{marginBottom:'5px'}}>Topic</label>  
                      <input type="text"
                      className="form-control"
                      name="topic"
                      placeholder="Enter Topic"
                      value={this.state.topic}
                      onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{marginBottom:"15px"}}>
                      <label style={{marginBottom:'5px'}}>Post Description</label>
                      <input type="text"
                      className="form-control"
                      name="description"
                      placeholder="Enter description"
                      value={this.state.description}
                      onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{marginBottom:"15px"}}>
                      <label style={{marginBottom:'5px'}}>Post Category</label>
                      <input type="text"
                      className="form-control"
                      name="postCategory"
                      placeholder="Enter Category"
                      value={this.state.postCategory}
                      onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{marginBottom:"15px"}}>
                      <label style={{marginBottom:'5px'}}>Post availability</label>
                      <input type="text"
                      className="form-control"
                      name="availability"
                      placeholder="Enter availability"
                      value={this.state.availability}
                      onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{marginBottom:"15px"}}>
                      <label style={{marginBottom:'5px'}}>Post price</label>
                      <input type="text"
                      className="form-control"
                      name="price"
                      placeholder="Enter Prise"
                      value={this.state.price}
                      onChange={this.handleInputChange} />
                    </div>

                    <div>
                    <FileBase64
                          type="file"
                          name="image"
                          multiple={ false }
                          onDone={({ base64 }) => this.setState({ image: base64 })}
                    />
                    </div>

                    

                  <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                    <i className="far fa-check-square"></i>
                    &nbsp; SAVE
                  </button>

                </form>
        </div>
        </div>
        </div>
      )
    }
  }