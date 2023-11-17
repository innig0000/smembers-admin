import Header from "@/app/(front)/_shared/layout/header";
import {Table} from "react-bootstrap";

const ApprovedMember = () => {
    return(
        <main className="flex min-h-screen flex-col p-24">
            <Header/>
            <h1 className="flex text-xl font-bold m-3">회원관리 > 인증 회원</h1>
            <span className='m-3'>
            <button className="mr-2 border-2 rounded-4 pl-4 pr-4">
                회원ID <span className='text-gray-300 text-sm'>&#x25BC;</span>
            </button>
            <input className="mr-2 rounded-4 outline-none pl-5 pr-10 pt-1 pb-1"/>
                <button className="rounded-2 pl-10 pr-10 bg-gray-300">
                    검색
                </button>
            </span>
            <Table>
                <thead>
                <tr>
                    <th style={{width: "5%"}}>
                        NO
                    </th>
                    <th>
                        회원 ID
                    </th>
                    <th>
                        이름
                    </th>
                    <th>
                        지갑 주소
                    </th>
                    <th style={{width: "20%"}} colSpan="2">
                        인증 현황<br/>(인플루언서 인증, 가게 인증)
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>
                        <span className="border-2 rounded-full border-secondary-subtle text-black-50 pr-1 pl-1">&#10004;</span>
                    </td>
                    <td>
                        -
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>
                        수락 대기
                    </td>
                    <td>
                        <span className="border-2 rounded-full border-secondary-subtle text-black-50 pr-1 pl-1">&#10004;</span>
                    </td>
                </tr>
                </tbody>
            </Table>
        </main>
    )
}

export default ApprovedMember;