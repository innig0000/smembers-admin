"use client"
import {useState, useEffect, useRef} from "react";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal} from "react-bootstrap";

const Header = () => {
    const [isMemberOpen, setMemberOpen] = useState(false);
    const [isItemOpen, setItemOpen] = useState(false);
    const [isSupportOpen, setSupportOpen] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const toggleMember = () => {
        setMemberOpen(!isMemberOpen);
        setItemOpen(false);
        setSupportOpen(false);
    };

    const toggleItem = () => {
        setItemOpen(!isItemOpen);
        setMemberOpen(false);
        setSupportOpen(false);
    }

    const toggleSupport = () => {
        setSupportOpen(!isSupportOpen);
        setMemberOpen(false);
        setItemOpen(false);
    }

    return(
    <header className="absolute h-20 top-0 left-0 right-0 p-3 ...">
        <div className="container mx-auto flex items-center justify-between font-semibold">
            <Link href="/dashboard">
            <button className="logo">
                SMEMBERS
            </button>
            </Link>
            <button onClick={toggleMember}>
               <span className="header">회원관리</span>
                {isMemberOpen && (
                    <div className="absolute top-full">
                        <Link href="/member/normal" className="menu">
                            일반 회원
                        </Link>
                        <Link href="/member/approved" className="menu">
                            인증 회원
                        </Link>
                        <Link href="/member/manager" className="menu">
                            관리자
                        </Link>
                        <Link href="/member/withdrew" className="menu">
                            탈퇴 회원
                        </Link>
                    </div>
                )}
            </button>
            <button onClick={toggleItem}>
                <span className="header">상품관리</span>
                {isItemOpen && (
                    <div className="absolute top-full bg-gray-400">
                        <Link href="/item/nft" className="menu">
                            가맹점 NFT
                        </Link>
                    </div>
                )}
            </button>
            <button onClick={toggleSupport}>
                <span className="header">고객지원</span>
                {isSupportOpen && (
                    <div className="absolute top-full bg-gray-400">
                        <Link href="/support/notice" className="menu">
                            공지사항
                        </Link>
                        <Link href="/support/qna" className="menu">
                            문의내역
                        </Link>
                        <Link href="/support/popup" className="menu">
                            팝업
                        </Link>
                    </div>
                )}
            </button>
            <button className="logout" onClick={handleShow}>
                Logout
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>로그아웃 됩니다.</Modal.Title>
                </Modal.Header>
                <Modal.Body>정말로 로그아웃 하시겠습니까?</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>
                        취소
                    </Button>
                    <Link href="/">
                    <Button
                        type="submit"
                        variant="secondary"
                       >
                        확인
                    </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </div>
    </header>
    )
}

export default Header;