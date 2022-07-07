import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import { Layout} from 'antd';
import "antd/dist/antd.css";
import './App.css';

import Navbar           from "./components/Navbar";
import Breadcrumbs      from "./components/Breadcrumbs";
import Footer           from "./components/Footer"

import Home             from "./pages/Home";
import Claims           from "./pages/insurance/Claims";
import Epochs           from "./pages/insurance/Epochs";
import Policies         from "./pages/insurance/Policies";
import Tokens           from "./pages/blockchain/Tokens";
import Transactions     from "./pages/blockchain/Transactions";
import Contracts        from "./pages/blockchain/Contracts";
import Primary          from "./pages/riskpool/Primary";
import Secondary        from "./pages/riskpool/Secondary";



const { Content } = Layout;

const App = () => (
    <BrowserRouter>
        <Layout className="layout">
            <Navbar/>

            <Content className="contentEStake">
                <Breadcrumbs/>
                <div className="site-layout-content">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                    </Routes>
                    <Routes>
                        <Route path="/insurance/claims" element={<Claims />} />
                    </Routes>
                    <Routes>
                        <Route path="/insurance/epochs" element={<Epochs />} />
                    </Routes>
                    <Routes>
                        <Route path="/insurance/policies" element={<Policies />} />
                    </Routes>
                    <Routes>
                        <Route path="/blockchain/tokens" element={<Tokens />} />
                    </Routes>
                    <Routes>
                        <Route path="/blockchain/transactions" element={<Transactions />} />
                    </Routes>
                    <Routes>
                        <Route path="/blockchain/contracts" element={<Contracts />} />
                    </Routes>
                    <Routes>
                        <Route path="/riskpool/primary" element={<Primary />} />
                    </Routes>
                    <Routes>
                        <Route path="/riskpool/secondary" element={<Secondary />} />
                    </Routes>
                </div>
            </Content>
            <Footer className="footer">

            </Footer>
        </Layout>
    </BrowserRouter>
);

export default App;
