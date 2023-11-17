import Header from "@/app/(front)/_shared/layout/header";
import {Table} from "react-bootstrap";
import Link from "next/link";

const Manager = () => {
    return(
        <main className="flex min-h-screen flex-col p-24">
            <Header/>
            <h1 className="flex text-xl font-bold m-3">회원관리 > 관리자</h1>
            <span className='m-3'>
            <button className="mr-2 border-2 rounded-4 pl-4 pr-4">
                관리자ID <span className='text-gray-300 text-sm'>&#x25BC;</span>
            </button>
            <input className="mr-2 rounded-4 outline-none pl-5 pr-10 pt-1 pb-1"/>
                <button className="rounded-2 pl-10 pr-10 bg-gray-300">
                    검색
                </button>
                <Link href="manager/enroll">
                <button className="absolute right-20 rounded-2 pl-5 pr-5 bg-gray-300 text-black">
                    관리자 등록
                </button>
                </Link>
            </span>
            <Table>
                <thead>
                <tr>
                    <th style={{width: "5%"}}>
                        NO
                    </th>
                    <th>
                        관리자 ID
                    </th>
                    <th>
                        생성일자
                    </th>
                    <th>
                        관리자 명
                    </th>
                    <th style={{width: "20%"}} colSpan="2">
                        설정
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
                        <button className="rounded-2 pl-5 pr-5 pt-1 pb-1 bg-gray-300">
                        중지
                        </button>
                    </td>
                    <td>
                        <button className="rounded-2 pl-5 pr-5 pt-1 pb-1 border-2">
                            삭제
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>
                        <button className="rounded-2 pl-5 pr-5 pt-1 pb-1 bg-gray-300">
                            중지
                        </button>
                    </td>
                    <td>
                        <button className="rounded-2 pl-5 pr-5 pt-1 pb-1 border-2">
                            삭제
                        </button>
                    </td>
                </tr>
                </tbody>
            </Table>
        </main>
    )
}

export default Manager;