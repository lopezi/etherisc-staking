import React from 'react';
import logo from "../logo-no-animation.svg";


const Footer = () => {
    return (
        <div className="home-page-wrapper footer-wrapper">
            <div className="footer">
                <div className="ant-row home-page">
                    <div className="ant-col block ant-col-xs-24 ant-col-md-6">
                        <img className="logo-footer" src={logo} width="100%" alt="Etherisc logotype"/>
                    </div>
                    <div className="ant-col block ant-col-xs-24 ant-col-md-6">
                        <h2>Header I</h2>
                        <div>
                            <a href="#">Link</a>
                            <a href="#">API</a>
                        </div>
                    </div>
                    <div className="ant-col block ant-col-xs-24 ant-col-md-6">
                        <h2>Header II</h2>
                        <div>
                            <a href="#" >FAQ</a>
                            <a href="#">Link</a>
                        </div>
                    </div>
                    <div className="ant-col block ant-col-xs-24 ant-col-md-6">
                        <h2>Header III</h2>
                        <div>
                            <a href="#">One</a>
                            <a href="#" >Two</a>
                        </div>
                    </div>
                </div>
                <div className="copyright-wrapper">
                    <div className="home-page">
                        <div className="copyright">
                            ©2022 by
                            <a href="https://etherisc.com"> Etherisc </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
