import React from "react";
import axios from "axios";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';

toast.configure()
class CreateAdmin extends React.Component{
    constructor(props){
        super(props);
        this.setAdminID = this.setAdminID.bind(this)
        this.setAdminUsername = this.setAdminUsername.bind(this)
        this.setAdminEmail = this.setAdminEmail.bind(this)
        this.setAdminPwd = this.setAdminPwd.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.saveAdmindata = this.saveAdmindata.bind(this)
        this.state = {
            adminID: '',
            username: '',
            email: '',
            Password: ''
        }
    }
    setAdminID(e){
        // console.log(e.target.value)
        this.setState({
            adminID:e.target.value
        });
    }
    setAdminUsername(e){
        this.setState({
            username:e.target.value
        });
    }
    setAdminEmail(e){
        this.setState({
            email:e.target.value
        });
    }
    setAdminPwd(e){
        this.setState({
            Password:e.target.value
        });
    }
    handleInputChange(Event){
        const {name,value} = Event.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }
    saveAdmindata(e){
        e.preventDefault();
        console.log('successfull', this.state)
        const Admin = {
            adminID: this.state.adminID,
            username: this.state.username,
            email: this.state.email,
            Password: this.state.Password
        }
        axios.post('http://localhost:8070/admins/add',Admin).then(()=>{
            // alert("New Admin Data successfully inserted");
            toast.success('New Admin Data successfully inserted',{position:toast.POSITION.TOP_CENTER})
            this.setState({
                adminID: '',
                username: '',
                email: '',
                Password: ''
            })
        }).catch(error=>{
            alert(error.message);
        });
    }

    render(){
        return(
            <div className="container2">
                <h1>Add Admin Data</h1>
                <br/>
                <form>
                <div class="mb-3">
                    <input type="text" class="form-control" id="exampleInputId" placeholder="REGISTRATION NUMBER" value={this.state.adminID} onChange={this.setAdminID} required/>
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control" id="exampleInputusername" placeholder="USERNAME" value={this.state.username} onChange={this.setAdminUsername} required/>
                </div>
                <div class="mb-3">
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" value={this.state.email} onChange={this.setAdminEmail} required/>
                </div>
                <div class="mb-3">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="NEW PASSWORD" value={this.state.Password} onChange={this.setAdminPwd} required/>
                </div>
                {/* <div class="mb-3">
                    <input type="password" class="form-control" id="exampleInputPassword2" placeholder="CONFIRM PASSWORD"/>
                </div>
                <br/> */}
                <br/>
                <div class="row">
                    <div class="col">
                        <a className="button button-block1" href="/" style={{textDecoration:'none'}}>
                            <i style={{textDecoration:'none'}}></i>BACK
                        </a> 
                    </div>
                    <div class="col">
                        <button type="submit" class="button button-block2" onClick={this.saveAdmindata}>SignUp</button>
                    </div>
                </div>
                </form>
            </div>               
        );
    }
}

export default CreateAdmin;