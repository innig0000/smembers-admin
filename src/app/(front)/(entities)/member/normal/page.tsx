import Header from "@/app/(front)/_shared/layout/header";
import {Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const NormalMember = () => {

    return(
        <main className="flex min-h-screen flex-col p-24">
            <Header/>
            <h1 className="flex text-xl font-bold m-3">회원관리 > 일반 회원</h1>
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
                        <th style={{width: "15%"}}>
                            가입일
                        </th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                </tr>
                </tbody>
            </Table>
        </main>
    )
}

export default NormalMember;