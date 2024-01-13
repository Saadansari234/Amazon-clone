import "./Style.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import Bucketlist from "./Bucketlist";
import { useMyContext } from './MyContext';



function Header(props) {

    const { count } = useMyContext();


    return (
        <>
            <section className="header">
                <div className="menu-logo"> {props.logo} </div>
                <div className="menu-address">
                    <p>deleviry to mumbai 400043</p>
                    <div>
                        <i class="bi bi-geo-alt"></i>
                        <p>update location</p>
                    </div>
                </div>

                <div className="bucketlist">
                    <Bucketlist prod1="all"
                        prod2="alexa skills"
                        prod3="amazon device"
                        prod4="amazon fresh"
                        prod5="amazon fashon"
                        prod6="appliances"
                        prod7="games and stuff"
                        prod8="books"
                        prod9="beauty"
                        prod10="baby"
                        prod11="clothing"
                        prod12="car"
                    />
                    <input placeholder="search amazon.in" />
                    <div><i class="bi bi-search"></i></div>
                </div>
                <div className="menu-langaue">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/india-flag-icon.png" />
                    <select name="language">
                        <option>EN</option>
                    </select>
                </div>

                <div className="menu-signin">
                    <p>hello, sign in</p>
                    <select name="account">
                        <option>account & list</option>
                    </select>
                </div>

                <div className="menu-returnorder">
                    <p>return</p>
                    <h4>& orders</h4>
                </div>

                <div className="menu-cart">
                    <i class="bi bi-cart3"></i>
                    <p>{count}</p>
                </div>
            </section>
        </>
    )
}

export default Header