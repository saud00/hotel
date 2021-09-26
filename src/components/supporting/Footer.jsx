import React from 'react'
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Footer() {

    return (
        <div >
            <div className="contanier py-5 bg-dark">
                <div className="row">
                    <div className="col-12 text-center">
                        <h3 className="text-warning" >Restaurent</h3>
                        <p className=" text-light">Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
                        <div className="justify-content-center my-5">
                        <div>
                            <Button className="btn btn-dark" style={{borderRadius:"100px"}} ><NavLink  to="https://www.facebook.com/saud_A-malik/"activeStyle={{ color: "#c76f0a" }} > <Icon icon="mdi:facebook" className="social-logo" width="30" height="30"/></NavLink></Button>
                            <Button className="btn btn-dark"  style={{borderRadius:"100px"}} ><NavLink to="https://www.twitter.com/saud_sahib" activeStyle={{ color: "#c76f0a" }}> <Icon icon="mdi:twitter" className="social-logo" width="30" height="30"/></NavLink></Button>
                            <Button className="btn btn-dark" style={{borderRadius:"100px"}} ><NavLink to="https://www.linkedin.com/in/saud-malik%F0%9F%92%AD-2b50a2120/" activeStyle={{ color: "#c76f0a" }}> <Icon icon="carbon:logo-linkedin" className="social-logo" width="30" height="30"/></NavLink></Button>
                            <Button className="btn btn-dark" style={{borderRadius:"100px"}} ><NavLink to="https://www.instagram.com/saud_a-malik" activeStyle={{ color: "#c76f0a" }}> <Icon icon="mdi:instagram" className="social-logo" width="30" height="30"/></NavLink></Button>
                        </div>
                        </div>
                        <div className="text-light">
                        © Copyright <strong> Restaurent</strong>. All Rights Reserved
                        </div>
                        <div className="text-light">
                        Designed by 
            <span className="text-warning"> Saud </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
