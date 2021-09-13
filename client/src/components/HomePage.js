import React, { Component } from 'react'
import NavBar from './NavBar';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="">
                    <NavBar />
                    <a href="store">
                        <button >Go To Store</button>
                    </a>
                </div>
            </div>
        )
    }
}
