import React from 'react';
import './style.css';
import logo from '../../assets/aguinaldo-rosto.jpg'


function Menu({ links }) {
    return (
        <nav class="navbar navbar-expand-lg p-3" data-bs-theme="light" id='menu'>
            <div class="container-fluid">
                <a class="navbar-brand" href="#menu"><img src={logo} alt="" id='menu-logo' /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            links.map((item) => {
                                return <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href={item.url} target={item.target} >{item.label}</a>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;
