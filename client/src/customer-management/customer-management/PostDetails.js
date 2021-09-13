import React, { Component } from 'react';
import axios from 'axios';
import posts from './Home';

export default class PostDetails extends Component {
    constructor(props) {
        super(props);

        this.state={
            post:{}
        };
    }


    componentDidMount() {

        const id = this.props.match.params.id;

        axios.get(`/post/${id}`).then((res) => {

            if(res.data.success){
                this.setState({ 
                    post: res.data.post
                });

                console.log(this.state.post);

            }
        });

    }


    render() {

        const {fname,lname,email,pass,tpnum,idvisa,gender,address,btype,allergies,issues} = this.state.post;

        return (

            <div>
            <div class="container">
           <div class="main-body">
          

      <div class="row gutters-sm">
        <div class="col-md-4 mb-5">
          <div class="card">
            <div class="card-body">
              <div class="d-flex flex-column align-items-center text-center">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
                <div class="mt-3">
                    <br/>
                  <h4>{fname} {lname}</h4>
                  <br/>
                </div>
              </div>
            </div>
          </div>
        
                               

        </div>
        <div class="col-md-8">
          <div class="card mb-3">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">First Name</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {fname}
                  <br/>
                </div>
              </div>
              <hr/>
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Last Name</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {lname}
                </div>
              </div>
              <hr/>
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">E mail</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {email}
                </div>
              </div>
              <hr/>
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Mobile</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                 {tpnum}
                </div>
              </div>


              <hr/>
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">ID/VISA</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                 {idvisa}
                </div>
              </div>

              <hr/>
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Address</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                 {address}
                </div>
                
              </div>
            


              <hr/>
              <div class="row">
                <div class="col-sm-12">
                  <a class="btn btn-info" href={`/edit/${posts._id}`}>Edit</a>
                </div>
              </div>
            </div>
          </div>





        </div>
      </div>

    </div>
</div>
        </div>
    )
}
}