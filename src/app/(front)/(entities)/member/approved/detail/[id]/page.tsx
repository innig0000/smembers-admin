import Header from "@/app/(front)/_shared/layout/header";
import {Table} from "react-bootstrap";

const ApprovedMemberDetail = () => {
    return(
        <main className="flex min-h-screen flex-col p-24">
            <Header/>
            <h1 className="flex text-xl font-bold m-3">회원관리 > 인증 회원 > 상세 정보</h1>
            <Table>
                <thead>
                <tr>
                    <th>
                        회원 ID
                    </th>
                    <th>
                        이름
                    </th>
                    <th>
                        지갑 주소
                    </th>
                    <th colSpan={2} style={{width: "20%"}}>
                        인증 현황<br/>(인플루언서 인증, 가게 인증)
                    </th>
                    <th style={{width: "10%"}}>
                        가입 날짜
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td> <span className="border-2 rounded-full border-secondary-subtle text-black-50 pr-1 pl-1">&#10004;</span></td>
                    <td>수락 대기</td>
                    <td>6</td>
                </tr>
                </tbody>
            </Table>
            <h1 className="flex text-lg font-bold m-3">인플루언서</h1>
            <Table>
                <thead>
                <tr>
                    <th>
                        SNS 계정
                    </th>
                    <th>
                        수락여부
                    </th>
                    <th>
                        요청일자
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td><span className="border-2 rounded-full border-danger text-danger pr-1 pl-1">&#10004;</span></td>
                    <td>3</td>
                </tr>
                </tbody>
            </Table>
            <h1 className="flex text-lg font-bold m-3">가게 등록</h1>
            <Table>
                <thead>
                <tr>
                    <th>
                        매장명
                    </th>
                    <th>
                        매장 번호
                    </th>
                    <th>
                        매장 주소
                    </th>
                    <th>
                        사업자 등록증
                    </th>
                    <th>
                        수락여부
                    </th>
                    <th>
                        요청 날짜
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td><span className="border-2 rounded-full border-danger text-danger pr-1 pl-1">&#10004;</span></td>
                    <td>3</td>
                </tr>
                </tbody>
            </Table>
            <h1 className="flex text-lg font-bold m-3">구매내역</h1>
            <Table>
                <thead>
                <tr>
                    <th>
                        NFT명
                    </th>
                    <th>
                        가격
                    </th>
                    <th>
                        유효기간
                    </th>
                    <th style={{width: "15%"}}>
                        구매 날짜
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                </tr>
                </tbody>
            </Table>
            <h1 className="flex text-lg font-bold m-3">NFT 발행 내역</h1>
            <Table>
                <thead>
                <tr>
                    <th>
                        NO
                    </th>
                    <th>
                        NFT명
                    </th>
                    <th>
                        발행 수량
                    </th>
                    <th>
                        가격
                    </th>
                    <th>
                        사용처
                    </th>
                    <th>
                        할인율
                    </th>
                    <th style={{width: "15%"}}>
                        유효기간
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                </tr>
                </tbody>
            </Table>
        </main>
    )
}

export default ApprovedMemberDetail;