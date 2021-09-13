import React from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Tables.css';

toast.configure()
class Alladmins extends React.Component{
    constructor(props){
        super(props);

        this.state={
            admins:[]
        };
    }

    componentDidMount(){
        this.retrieveAdmins();
    }

    retrieveAdmins(){
        axios.get('http://localhost:8070/admins/posts').then(res=>{
            if(res.data.success){
                this.setState({
                    admins:res.data.existingAdmins
                });
                console.log(this.state.admins)   
            }
        })
    }

    onDelete(id){
        axios.delete(`http://localhost:8070/admins/post/delete/${id}`).then((res)=>{
            // alert("Delete Successfully");
            toast.success('Delete Successfully',{position:toast.POSITION.TOP_CENTER})
            this.retrieveAdmins();
        })
    }

    render(){
        return(
            <div className="container">
                    <table className="table1">
                        <thead className="thead1">
                            <th className="th1">ADMIN MANAGEMENT</th>
                            <th className="th2">
                                <a name="addAdmin" id="addAdmin" class="btn btn-primary" href="/add" role="button">
                                    <b>ADD ADMIN</b>
                                </a>
                            </th>
                        </thead>
                    </table>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <table>
                            <thead>
                                <th scope="col">#</th>    
                                <th scope="col">ID</th>
                                <th scope="col">USERNAME</th>
                                <th scope="col">EMAIL</th>
                                <th scope="col">PASSWORD</th>
                                <th scope="col">ACTION</th>
                            </thead>
                            <tbody>
                                {this.state.admins.map((admins,index)=>(
                                    <tr>
                                        <th scope="row">{index+1}</th>
                                        <th>{admins.adminID}</th>
                                        <th>{admins.username}</th>
                                        <th>{admins.email}</th>
                                        <th>{admins.Password}</th>
                                        <th>
                                            <a className="btn btn-secondary" href={`/posts/${admins._id}`}>
                                                <i className="fas fa-eye"></i>&nbsp;VIEW
                                            </a>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <a className="btn btn-warning" href={`/edit/${admins._id}`}>
                                                <i className="fas fa-edit"></i>&nbsp;EDIT
                                            </a>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <a className="btn btn-danger" href="." onClick={()=>this.onDelete(admins._id)}>
                                                <i className="fas fa-trash-alt"></i>&nbsp;DELETE
                                            </a>
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                    </table>
            </div>
        )
    }
}

export default Alladmins;