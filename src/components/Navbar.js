import React from "react";
import logo from "../logo.svg";
import {Layout, Menu} from "antd";
import { NavLink } from "react-router-dom";
import Login from "./Login"

const { Header } = Layout;

const Navbar = () => {
    return (
        <Header>
            <NavLink to="/">
                <img width="222px" className="logo" src={logo} alt="Etherisc staking logo" />
            </NavLink>
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="/home">
                    <NavLink to="/">
                        Home
                    </NavLink>
                </Menu.Item>

                <Menu.SubMenu key="SubMenu" title="Insurance">
                    <Menu.Item key="two">
                        <NavLink to="/insurance/claims">
                        Claims
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="three">
                        <NavLink to="/insurance/epochs">
                            Epochs
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="four">
                        <NavLink to="/insurance/policies">
                            Policies
                        </NavLink>
                    </Menu.Item>
                </Menu.SubMenu>

                <Menu.SubMenu key="SubMenuBlock" title="Blockchain">
                    <Menu.Item key="btwo">
                        <NavLink to="/blockchain/tokens">
                            Tokens
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="bthree">
                        <NavLink to="/blockchain/transactions">
                            Transactions
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="bfour">
                        <NavLink to="/blockchain/contracts">
                            Contracts
                        </NavLink>
                    </Menu.Item>
                </Menu.SubMenu>

                <Menu.SubMenu key="riskPool" title="Risk Pools">
                    <Menu.Item key="rtwo">
                        <NavLink to="/riskpool/primary">
                            Primary
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="rthree">
                        <NavLink to="/riskpool/secondary">
                            Secondary
                        </NavLink>
                    </Menu.Item>
                </Menu.SubMenu>
                <Login />
            </Menu>
        </Header>
    )
}

export default Navbar;
