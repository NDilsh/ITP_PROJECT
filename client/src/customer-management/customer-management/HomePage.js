import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        return (
            <div className='gp'>
               
                        <button type="button" class="btn btn-success btn-lg">
                                 <a className="text-white" style={{textDecoration: 'none'}} href={`/Registration`}>Register</a>
                        </button>
                       <br/>
                       <br/>
                        <button type="button" class="btn btn-danger btn-lg">
                                 <a className="text-white" style={{textDecoration: 'none'}} href={`/Login`}>Login</a>
                        </button>
            </div>
        );
    }
}


export default HomePage;

