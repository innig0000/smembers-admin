import Header from "@/app/(front)/_shared/layout/header";
import {Table} from "react-bootstrap";

const NormalMemberDetail = () => {
    return(
        <main className="flex min-h-screen flex-col p-24">
            <Header/>
            <h1 className="flex text-xl font-bold m-3">회원관리 > 일반 회원 > 상세정보</h1>
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
                    <th style={{width: "15%"}}>
                        가입날짜
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
        </main>
    )
}

export default NormalMemberDetail;