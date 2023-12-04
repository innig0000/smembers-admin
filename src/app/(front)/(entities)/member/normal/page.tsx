"use client"
import Header from "@/app/(front)/_shared/layout/header";
import {Container, Spinner, Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";
import MyPagination from "@/app/(front)/_shared/layout/pagination";
import Link from "next/link";

const NormalMember = () => {
    const [data, setData] = useState({
        data: [],
        total_items: 0,
        current_page: 1,
        total_pages: 0,
        page_size: 0
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [words, setWords] = useState('');
    const [searchWords, setSearchWords] = useState('')
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        postSubmit();
    },[currentPage, searchWords])

    const postSubmit = async () => {
        try {
            const response = await fetch(`/api/member/normal/table?page=${currentPage}&q=name:${searchWords}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
            });
            const responseData = await response.json();
            setData(responseData);
            setIsLoading(false);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const onClickUpload = () => {
        setSearchWords(words);
        setCurrentPage(1);
    }

    const formattedDate = (date) => {
        const originalDate = date;
        const parsedDate = new Date(originalDate);
        const year = String(parsedDate.getFullYear()).slice(-2);
        const month = String(parsedDate.getMonth()).padStart(2, '0');
        const day = String(parsedDate.getDate()).padStart(2, '0');
        return `${year}.${month}.${day}`
    }

    return(
        <main className="flex min-h-screen flex-col p-24">
            <Header/>
            <h1 className="flex text-xl font-bold m-3">회원관리 > 일반 회원</h1>
            <span className='m-3'>
            <button className="mr-2 border-2 rounded-4 pl-4 pr-4">
                회원ID <span className='text-gray-300 text-sm'>&#x25BC;</span>
            </button>
            <input className="mr-2 rounded-4 outline-none pl-5 pr-10 pt-1 pb-1"
                   onChange={(e)=>setWords(e.target.value)} onKeyDown={event => event.key.toLocaleUpperCase() === 'ENTER' ? onClickUpload() : ''}/>
                <button className="rounded-2 pl-10 pr-10 bg-gray-300"  onClick={onClickUpload}>
                    검색
                </button>
            </span>
            {isLoading ? (
                <div className="flex min-h-screen flex-col space-y-10 p-24 items-center">
                    <Spinner animation="border" role="status">
                    </Spinner>
                </div>
            ):(
                data.data && data.data.length > 0 ? (
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
                {data.data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>
                            <Link href={`/member/normal/${item.id}`}><button className="text-black">{item.name}</button></Link>
                        </td>
                        <td>{item.address} {item.address_etc}</td>
                        <td>{item.phone}</td>
                        <td>{formattedDate(item.createdAt)}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
                ) : (
                    !isLoading &&(
                        <div className="alert alert-secondary">
                            No Members found
                        </div>
                    )
                )
                )}
            <MyPagination totalPage={data.total_pages} currentPage={currentPage} onPageChange={handlePageChange}/>
        </main>
    )
}

export default NormalMember;