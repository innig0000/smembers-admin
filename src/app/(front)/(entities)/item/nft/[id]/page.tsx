import Header from "@/app/(front)/_shared/layout/header";
import {Col, Container, Row} from "react-bootstrap";

const NftDetail = () => {
    return(
        <main className="flex min-h-screen flex-col p-24">
            <Header/>
            <h1 className="flex text-xl font-bold m-3">상품 관리 > 상세 정보</h1>
            <Container>
                <Row className="m-3">
                    <Col md={{ span: 2, offset: 10}}>
            <div className="flex ml-auto mt-auto">
                <span className="border-2 rounded-full border-secondary-subtle text-black-50 pr-1 pl-1 me-3">&#10004;</span>
                핫딜 상품 등록
            </div>
                    </Col>
                </Row>
                <Row className="m-5">
                <Col>
                    <div className="border-2 rounded-5 bg-secondary-subtle h-full p-3">
                    <img src="your-image-path.jpg" alt="Image" className="w-full h-auto" />
                    </div>
                    </Col>
                <Col>
                    <ul>
                        <li className="border-2 rounded-5 p-2 mb-3 flex justify-content-between">
                            <span>NFT 명</span>
                            <span>1</span>
                        </li>
                        <li className="border-2 rounded-5 p-2 mb-3 flex justify-content-between">
                            <span>가격</span>
                            <span>1</span>
                        </li>
                        <li className="border-2 rounded-5 p-2 mb-3 flex justify-content-between">
                            <span>할인율</span>
                            <span>1</span>
                        </li>
                        <li className="border-2 rounded-5 p-2 mb-3 flex justify-content-between">
                            <span>발행량</span>
                            <span>1</span>
                        </li>
                        <li className="border-2 rounded-5 p-2 mb-3 flex justify-content-between">
                            <span>사용처</span>
                            <span>1</span>
                        </li>
                        <li>
                            <div className="flex justify-content-between">
                            <span className="border-2 rounded-5 p-2 mb-3 me-3 w-[170px] flex justify-content-between">
                                <span>유효 기간 시작</span>
                                <span>1</span>
                            </span>
                            <span className="mt-2 font-bold">
                                ~
                            </span>
                            <span className="border-2 rounded-5 p-2 mb-3 ms-3 w-[170px] flex justify-content-between">
                                <span>유효 기간 종료</span>
                                <span>1</span>
                            </span>
                            </div>
                        </li>
                        <li className="border-2 rounded-5 p-2 mb-3 flex justify-content-between">
                            <span>발행처</span>
                            <span>1</span>
                        </li>
                        <li>
                            <div className="flex justify-content-between">
                            <span className="border-2 rounded-5 p-2 mb-3 me-3 w-[180px] flex justify-content-between">
                                <span>좋아요 수</span>
                                <span>1</span>
                            </span>
                            <span className="border-2 rounded-5 p-2 mb-3 ms-3 w-[180px] flex justify-content-between">
                                <span>VIEW 수</span>
                                <span>1</span>
                            </span>
                            </div>
                        </li>
                    </ul>
            </Col>
                <Col>
                    <div className="border-2 rounded-5 p-3 h-full">
                        <p>상품 내용</p>
                    </div>
                </Col>
                </Row>
            </Container>
        </main>
    )
}

export default NftDetail;