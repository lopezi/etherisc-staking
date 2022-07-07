import { Card, Col, Row} from 'antd';
import React from 'react';

//import PoliciesPieResume            from "../modules/ChartsGraphsPlots/PoliciesPieResume";
import PoliciesPremiumsClaims       from "./ChartsGraphsPlots/PoliciesPremiumsClaims";
import PoliciesTableResume          from "./Tables/PoliciesTableResume";
import RiskpoolTableResume          from "./Tables/RiskpoolTableResume";
import RiskpoolColumnResume         from "./ChartsGraphsPlots/RiskpoolColumnResume";
import HowItWorks                    from "../components/HowDoesITWork";



const PoliciesHome = () => {
    return (
        <div className="site-card-wrapper">
            <Row gutter={16}>
                <Col span={12} sm={24} xs={24} md={12}>

                    <Card style={{backgroundColor: "#f0f2f5"}} title="Policies data" bordered={false} loading={false}>
                        <Card style={{backgroundColor: "#fff"}} title="Premiums vs claims" bordered={false} loading={false}>
                            <PoliciesPremiumsClaims />
                        </Card>
                        <PoliciesTableResume />
                        {/*<Card style={{backgroundColor: "#fff"}} title="Distribution ratio" bordered={false} loading={false}>
                            <PoliciesPieResume />
                        </Card> */}
                    </Card>
                </Col>
                <Col span={12} sm={24} xs={24} md={12}>
                    <Card title="Risk pool data" style={{backgroundColor: "#f0f2f5"}} bordered={false}>
                        <RiskpoolTableResume />
                        <Card title="Riskpool analysis" style={{backgroundColor: "#fff", margin: "40px 0"}} bordered={false}>
                            <RiskpoolColumnResume/>
                        </Card>
                    </Card>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={24} sm={24} xs={24} md={24}>
                    <HowItWorks />
                </Col>
            </Row>

        </div>
    )
}

export default PoliciesHome;
