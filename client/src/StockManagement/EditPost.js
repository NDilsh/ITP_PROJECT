import React,{Component} from 'react'
import axios from 'axios';
import FileBase64 from 'react-file-base64';
import Logo from './logo.png';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default class EditPost extends Component {


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
    const id = this.props.match.params.id;

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
      axios.put(`/post/update/${id}`,data).then((res) =>{
            if(res.data.success)
            //alert("Post Updated Successfully")
            toast.success('Post Updated Successfully',{position:toast.POSITION.TOP_CENTER});
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


  //fill form
  componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`/post/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          topic:res.data.post.topic,
          description:res.data.post.description,
          postCategory:res.data.post.postCategory,
          availability:res.data.post.availability,
          price:res.data.post.price,
          image:res.data.post.image
        });

        console.log(this.state.post);

      }
    });
  }

    render() {
      return (

          <div>










          <div className="divPossionPostDetails" id="displayform">
        
        <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Edit Item</h1>
        <form className="needs-validation" noValidate>
            <div className="form-group" style={{marginBottom:"0px"}}>
              <label style={{marginBottom:'5px'}}>Topic</label>  
              <input type="text"
              className="form-control"
              name="topic"
              placeholder="Enter Topic"
              value={this.state.topic}
              onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{marginBottom:"0px"}}>
              <label style={{marginBottom:'5px'}}>Post Description</label>
              <input type="text"
              className="form-control"
              name="description"
              placeholder="Enter Discription"
              value={this.state.description}
              onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{marginBottom:"0px"}}>
              <label style={{marginBottom:'5px'}}>Post Category</label>
              <input type="text"
              className="form-control"
              name="postCategory"
              placeholder="Enter Category"
              value={this.state.postCategory}
              onChange={this.handleInputChange} />
            </div>

          
            <div className="form-group" style={{marginBottom:"0px"}}>
              <label style={{marginBottom:'5px'}}>Availibility</label>
              <input type="text"
              className="form-control"
              name="availability"
              placeholder="Availibility"
              value={this.state.availability}
              onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{marginBottom:"0px"}}>
              <label style={{marginBottom:'5px'}}>price</label>
              <input type="text"
              className="form-control"
              name="price"
              placeholder="Enter price"
              value={this.state.price}
              onChange={this.handleInputChange} />
            </div>
            &nbsp;
            <div>
                    <FileBase64
                          type="file"
                          name="image"
                          multiple={ false }
                          onDone={({ base64 }) => this.setState({ image: base64 })}
                    />
            </div>

          <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit} >
            <i className="far fa-check-square"></i>
            &nbsp; UPDATE
          </button>

        </form>
    </div>
    </div>
    </div>
    
      )
    }
  }