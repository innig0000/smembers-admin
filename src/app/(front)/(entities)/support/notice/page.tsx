"use client"
import Header from "@/app/(front)/_shared/layout/header";
import {Button, Modal, Table} from "react-bootstrap";
import {useState} from "react";
import Link from "next/link";

const Notice = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <main className="flex min-h-screen flex-col p-24">
            <Header/>
            <h1 className="flex text-xl font-bold m-3">고객지원 > 공지사항</h1>
            <span className='m-3'>
            <button className="mr-2 border-2 rounded-4 pl-4 pr-4">
                제목 <span className='text-gray-300 text-sm'>&#x25BC;</span>
            </button>
            <input className="mr-2 rounded-4 outline-none pl-5 pr-10 pt-1 pb-1"/>
                <button className="rounded-2 pl-10 pr-10 bg-gray-300">
                    검색
                </button>
                <Link href="/support/notice/enroll">
                <button className="absolute right-20 rounded-2 pl-5 pr-5 bg-gray-300 text-black">
                    공지사항 등록
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
                        공지사항 제목
                    </th>
                    <th>
                        등록일
                    </th>
                    <th>
                        작성자
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
                        <Link href="">
                        <button className="rounded-2 pl-5 pr-5 pt-1 pb-1 bg-gray-300 text-black">
                            수정
                        </button>
                        </Link>
                    </td>
                    <td>
                        <button className="rounded-2 pl-5 pr-5 pt-1 pb-1 border-2" onClick={handleShow}>
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
                        <Link href="/support/notice/edit">
                        <button className="rounded-2 pl-5 pr-5 pt-1 pb-1 bg-gray-300 text-black">
                            수정
                        </button>
                        </Link>
                    </td>
                    <td>
                        <button className="rounded-2 pl-5 pr-5 pt-1 pb-1 border-2" onClick={handleShow}>
                        삭제
                        </button>
                    </td>
                </tr>
                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>삭제 됩니다.</Modal.Title>
                </Modal.Header>
                <Modal.Body>'공지사항 제목' 공지사항을 정말 삭제 하시겠습니까?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        취소
                    </Button>
                        <Button
                            type="submit"
                            variant="outline-danger"
                        >
                            확인
                        </Button>
                </Modal.Footer>
            </Modal>
        </main>
    )
}

export default Notice;