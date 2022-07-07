import React, { useState } from 'react';
import {Button, Menu, Modal, Form, Input} from "antd";
import logo from "../logo-welcome.svg";


const Login = () => {
    const [modalLogin, setModalLoginVisible] = useState(false);
    const [modalRegister, setModalRegisterVisible] = useState(false);
    return (
        <>
            <Menu.Item className={"login"} key="xxxtwo">
                <Button onClick={() => setModalLoginVisible(true)} type="primary" shape="round" className={"login-first-button"} ghost>
                    Login
                </Button>
                <Button onClick={() => setModalRegisterVisible(true)} type="primary" shape="round" >
                    Register
                </Button>
            </Menu.Item>

            <Modal
                    title="Login"
                    okText="Login"
                    centered
                    visible={modalLogin}
                    onOk={() => setModalLoginVisible(false)}
                    onCancel={() => setModalLoginVisible(false)}
                    okButtonProps={{ shape: "round" }}
                    cancelButtonProps={{ shape: "round" }}
                >
                <div className="logo-welcome-wrapper">
                    <img className="logo-welcome" src={logo} width="100%" alt="Etherisc logotype"/>
                </div>
                <Form
                    name="login"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Form>
            </Modal>

            <Modal
                title="Register"
                okText="Register"
                centered
                visible={modalRegister}
                onOk={() => setModalRegisterVisible(false)}
                onCancel={() => setModalRegisterVisible(false)}
                okButtonProps={{ shape: "round" }}
                cancelButtonProps={{ shape: "round" }}
            >
                <div className="logo-welcome-wrapper">
                    <img className="logo-welcome" src={logo} width="100%" alt="Etherisc logotype"/>
                </div>
                <Form
                    name="register"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Full name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your full name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )

};
export default Login;
