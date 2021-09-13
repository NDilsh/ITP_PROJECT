import React from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Styles.css';
import './Register.css';
import './Tables.css';

toast.configure()
class UpdateAdmin extends React.Component{
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
        const id = this.props.match.params.id;
        console.log('successfull', this.state)
        const Admin = {
            adminID: this.state.adminID,
            username: this.state.username,
            email: this.state.email,
            Password: this.state.Password
        }
        axios.put(`http://localhost:8070/admins/update/${id}`,Admin).then(()=>{
            // alert("Admin Data Updated successfully");
            toast.success('Admin Data Updated successfully',{position:toast.POSITION.TOP_CENTER})
        }).catch(error=>{
            alert(error.message);
        });
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://localhost:8070/admins/posts/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    adminID: res.data.search.adminID,
                    username: res.data.search.username,
                    email: res.data.search.email,
                    Password: res.data.search.Password
                });
                // console.log(this.state.search);
            }
        });
    }

    render(){
        return(
            <div className="container3">
                <h1>Update Admin Data</h1>
                <br/>
                <form>
                <div class="mb-3">
                    <input type="text" class="form-control" id="exampleInputId" placeholder="REGISTRATION NUMBER" value={this.state.adminID} onChange={this.setAdminID} readOnly/>
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control" id="exampleInputusername" placeholder="USERNAME" value={this.state.username} onChange={this.setAdminUsername}/>
                </div>
                <div class="mb-3">
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" value={this.state.email} onChange={this.setAdminEmail}/>
                </div>
                <div class="mb-3">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="NEW PASSWORD" value={this.state.Password} onChange={this.setAdminPwd}/>
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
                        <button type="submit" class="button button-block2" onClick={this.saveAdmindata}>Update</button>
                    </div>
                </div>
                </form>
            </div>
        )
    }
}

export default UpdateAdmin;