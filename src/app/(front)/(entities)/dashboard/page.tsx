import Header from "@/app/(front)/_shared/layout/header";
import {Card, Col, Container, Row} from "react-bootstrap";
import './dashboard.scss';

const Dashboard = () => {
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header/>
            <Container>
                <Row className="row-margin">
                    <Col>
                        <Card body>
                            <h1 className="text-xl font-bold m-3">SMEMBERS 가입자 현황</h1>
                            <div className="circle-container">
                            <div id="circle">
                                <div id="text">전체 회원</div>
                                <div id="content">1</div>
                            </div>
                            <div id="circle">
                                <div id="text">이달의 신규 회원</div>
                                <div id="content">2</div>
                            </div>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                            <Card body>
                                <h1 className="text-xl font-bold m-3">민팅수</h1>
                                <div className="circle-container">
                                    <div id="circle">
                                        <div id="text">전체</div>
                                        <div id="content">1</div>
                                    </div>
                                    <div id="circle">
                                        <div id="text">이달의 신규 민팅</div>
                                        <div id="content">2</div>
                                    </div>
                                </div>
                            </Card>
                    </Col>
                </Row>
                <Row className="row-margin">
                    <Col>
                        <Card body>
                            <h1 className="text-xl font-bold m-3">작품 거래 수</h1>
                            <div className="circle-container">
                                <div id="circle">
                                    <div id="text">전체 거래량</div>
                                    <div id="content">1</div>
                                </div>
                                <div id="circle">
                                    <div id="text">이달의 신규 거래량</div>
                                    <div id="content">2</div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card body>
                            <h1 className="text-xl font-bold m-3">전체 거래 금액</h1>
                            <div className="circle-container">
                                <div id="circle">
                                    <div id="text">전체 거래액</div>
                                    <div id="content">1</div>
                                </div>
                                <div id="circle">
                                    <div id="text">이달의 신규 거래액</div>
                                    <div id="content">2</div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Dashboard;