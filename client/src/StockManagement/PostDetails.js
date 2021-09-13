import React,{Component} from 'react';
import axios from 'axios';
import Logo from './logo.png';

export default class PostDetails extends Component {
  
  constructor(props){
    super(props);

    this.state={
      post:{}
    };
  }

  componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`/post/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          post:res.data.post
        });

        console.log(this.state.post);

      }
    });
  }

    render() {
     


      const {topic,description,postCategory,availability,price,image} = this.state.post;

      return (

        <div>









        

        <div className="divPossionPostDetails" id="displayform">
        <div style={{marginTop:'10px'}}>
        <h2 style={{marginBottom:'30px', color:'black', fontSize:'50px'}}>{topic}</h2>
              


    <dl className="row" style={{marginLeft:'25%'}}>
        
        <dt className="col-sm-3">Description</dt>
        <dd className="col-sm-9">{description}</dd>

        <dt className="col-sm-3">Post Category</dt>
        <dd className="col-sm-9">{postCategory}</dd>

        <dt className="col-sm-3">Post Availability</dt>
        <dd className="col-sm-9">{availability}</dd>

        <dt className="col-sm-3">Post price</dt>
        <dd className="col-sm-9">{price}</dd>

    </dl>
    </div>

    <center>
        <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" style={{ width: '40%', height: '40%' }} src={image}/>
        </div>
    </center>

    
    </div>
        
    <button className="continue" type="button"><a href="/" style={{textDecoration:'none',color:'white'}}>CONTINUE</a></button>
  </div>
      )
    }
  }