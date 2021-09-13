import React, { Component } from 'react'
import '../css/login.css'

export default class login2 extends Component {
    render() {
        return (
            <div>
                <div class="wrapper">
                <form class="login">
                <p class="title">Log in</p>
                <input type="text" placeholder="Username" autofocus/>
                <i class="fa fa-user"></i>
                <input type="password" placeholder="Password" />
                <i class="fa fa-key"></i>
                <a href="http://boudra.me/">Forgot your password?</a>
                <button>
                <i class="spinner"></i>
                <span class="state">Log in</span>
                </button>
            </form>
            <footer><a target="blank" href="http://boudra.me/">boudra.me</a></footer> 
            </div>     
            </div>
        
                       
        )
    }
}
