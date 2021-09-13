import React, { Component } from 'react';
import './style.css';

export default class AdminPanel extends Component {
    render() {
        return (
            <div>
            {/* top navigation bar */}
            <nav class="navbar navbar-expand-lg navbar-light fixed-top">
            <div class="container-fluid">
                {/* <!-- offcanvas trigger --> */}
                <button
                class="navbar-toggler me-2"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
                >
                <span class="navbar-toggler-icon"></span>
                </button>
                {/* <!-- offcanvas trigger --> */}
                <a class="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold" data-bs-toggle="offcanvas" href="#offcanvasExample" aria-controls="offcanvasExample">REMEDI</a>
                <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#topNavBar"
                aria-controls="topNavBar"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="topNavBar">
                <form class="d-flex ms-auto">
                    <div class="input-group my-3 my-lg-0" >
                    <input type="search" class="form-control" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-primary" type="submit" id="button-addon2">
                        <i class="bi bi-search"></i>
                    </button>
                    </div>
                </form>

                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle ms-2" href="." role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-person-circle"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href=".">Action</a></li>
                        <li><a class="dropdown-item" href=".">Another action</a></li>
                        <li>
                        <a class="dropdown-item" href=".">Something else here</a>
                        </li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            {/* <!-- top navigation bar --> */}

            {/* <!-- offcanvas --> */}
            <div class="offcanvas offcanvas-start sidebar-nav" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">ADMIN PANEL</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body p-0">
                <nav class="navbar-dark">
                <ul class="navbar-nav">
                    <li>
                    <div class="text-muted small fw-bold text-uppercase px-3">CORE</div>
                    </li>
                    <li>
                    <a href="." class="nav-link px-3 active">
                        <span class="me-2">
                        <i class="bi bi-speedometer2"></i>
                        </span>
                        <span>Dashboard</span>
                    </a>
                    </li>
                    <li class="my-2"><hr class="dropdown-divider bg-dark" /></li>
                    <li>
                    <div class="text-muted small fw-bold text-uppercase px-3 mb-3">
                        Operation
                    </div>
                    </li>
                    <li>
                    <div class="d-grid gap-3 col-11 mx-auto">
                        <button type="button" class="button1 btn btn-light">Customer Management</button>
                        <a href="/" style={{textDecoration:'none'}}>
                            <button type="button" class="button1 btn btn-light">Admin Management</button>
                        </a>
                        <button type="button" class="button1 btn btn-light">Stock Management</button>
                        <button type="button" class="button1 btn btn-light">Reservation Management</button>
                        <button type="button" class="button1 btn btn-light">History Management</button>
                        <button type="button" class="button1 btn btn-light">Delivery Management</button>
                        <button type="button" class="button1 btn btn-light">Inquiries Management</button>
                    </div>
                    </li>
                    <li class="my-2"><hr class="dropdown-divider bg-dark"/></li>
                    <li>
                    <div class="text-muted small fw-bold text-uppercase px-3 mb-3">
                        Addons
                    </div>
                    </li>
                    <li>
                    <a href="." class="nav-link px-3">
                        <span class="me-2"><i class="bi bi-graph-up"></i></span>
                        <span>Charts</span>
                    </a>
                    </li>
                    <li>
                    <a href="." class="nav-link px-3">
                        <span class="me-2"><i class="bi bi-table"></i></span>
                        <span>Tables</span>
                    </a>
                    </li>
                </ul>
                </nav>
            </div>
            </div>
            {/* <!-- offcanvas --> */}
            </div>
        )
    }
}
