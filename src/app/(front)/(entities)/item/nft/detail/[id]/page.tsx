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
                        <li className="border-2 rounded-5 p-2 mb-3">NFT 명</li>
                        <li className="border-2 rounded-5 p-2 mb-3">가격</li>
                        <li className="border-2 rounded-5 p-2 mb-3">할인율</li>
                        <li className="border-2 rounded-5 p-2 mb-3">발행량</li>
                        <li className="border-2 rounded-5 p-2 mb-3">사용처</li>
                        <li>
                            <div className="flex justify-content-between">
                            <span className="border-2 rounded-5 p-2 mb-3 me-3">
                                유효 기간 시작
                            </span>
                            ~
                            <span className="border-2 rounded-5 p-2 mb-3 ms-3">
                                유효 기간 종료
                            </span>
                            </div>
                        </li>
                        <li className="border-2 rounded-5 p-2 mb-3">발행처</li>
                        <li>
                            <div className="flex justify-content-between">
                            <span className="border-2 rounded-5 p-2 mb-3 me-3">
                                좋아요 수
                            </span>
                            <span className="border-2 rounded-5 p-2 mb-3 ms-3">
                                VIEW 수
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