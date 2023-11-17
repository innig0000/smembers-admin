"use client"
import Header from "@/app/(front)/_shared/layout/header";
import {Container, Form} from "react-bootstrap";
import {useEffect, useRef, useState} from "react";
import Link from "next/link";

const NoticeEnroll = () => {
    const [fileName, setFileName] = useState("파일명")
    const fileInputRef = useRef(null);

    useEffect(() => {
        handleFileChange();
    }, [])

    const handleFileChange = () => {
        const fileInput = fileInputRef.current;
        if (fileInput.files.length > 0) {
            setFileName(fileInput.files[0].name);
        } else {
            setFileName('파일명');
        }
    };

    const handleRemoveFile = () => {
        fileInputRef.current.value = null;
            setFileName('파일명');
    };

    return(
        <main className="flex min-h-screen flex-col p-24">
            <Header/>
            <h1 className="flex text-xl font-bold m-3">고객지원 > 공지사항 > 등록 </h1>
            <Container>
                <Form className="border-2 rounded-3 p-3 my-4">
                    <div className="grid grid-cols-1 md:grid-cols-10 gap-0">
                        <div className="col-span-1 flex flex-col m-1">
                            <label className="text-lg font-bold mb-1 text-center mt-3">
                                제목
                            </label>
                        </div>
                        <div className="col-span-9 flex flex-col m-3">
                        <textarea
                             className="border rounded-md p-2 border-gray-300 w-full h-[45px]"
                            />
                        </div>

                        <div className="col-span-1 flex flex-col m-1">
                            <label className="text-lg font-bold  mb-1 text-center mt-3">
                                언어설정
                            </label>
                        </div>
                        <div className="col-span-2 flex flex-col m-3">
                            <button className="border rounded-md p-2 border-gray-300 flex items-end mr-2">
                                한국어
                                <span className="text-sm ml-auto text-black-50">&#9660;</span>
                            </button>
                        </div>
                        <div className="col-span-7 flex flex-col m-3">

                        </div>
                        <div className="col-span-1 flex flex-col m-1">
                            <label className="text-lg font-bold  mb-1 text-center mt-3">
                                게시기간
                            </label>
                        </div>
                        <div className="col-span-4 flex flex-col m-3">
                           <input
                               type="date"
                               className="border rounded-md p-2 border-gray-300 w-full h-[45px] bg-white"
                           />
                        </div>
                        <div className="col-span-1 flex flex-col text-lg font-bold  mb-1 text-center mt-4">
                        ~
                        </div>
                        <div className="col-span-4 flex flex-col m-3">
                           <input
                               type="date"
                               className="border rounded-md p-2 border-gray-300 w-full h-[45px] bg-white"
                           />
                        </div>
                        <div className="col-span-1 flex flex-col m-1">
                            <label className="text-lg font-bold mb-1 text-center mt-3">
                                첨부파일
                            </label>
                        </div>
                        <div className="col-span-7 flex flex-col m-3 ">
                            <label
                                htmlFor="fileInput"
                                className="cursor-pointer border rounded-md p-2 border-gray-30 h-[45px] mr-2 d-flex justify-content-center">
                                버튼을 누르거나 파일을 드래그 해주세요
                            </label>
                        </div>
                        <input
                            type="file"
                            id="fileInput"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            onClick={(e) => e.stopPropagation()}
                            className="hidden border rounded-md p-2 border-gray-300 w-full h-[45px] bg-white"
                        />
                        <div className="col-span-2 flex flex-col m-3">
                            <label
                                htmlFor="fileInput"
                                className="cursor-pointer border rounded-md p-2 border-gray-30 h-[45px] relative text-center"
                            >
                                {fileName}
                                {fileName !== '파일명' && (
                                    <button
                                        className="border-black-50 pl-1 pr-1 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary-subtle text-black-50 border cursor-pointer"
                                        onClick={handleRemoveFile}
                                    >
                                        <span className="rounded-3 text-black-50 border cursor-pointer">&times;</span>
                                    </button>
                                )}
                            </label>
                        </div>
                        <div className="col-span-1 flex flex-col m-1">
                            <label className="text-lg font-bold mb-1 text-center mt-3">
                                내용
                            </label>
                        </div>
                        <div className="col-span-9 flex flex-col m-3">
                        <textarea
                            className="border rounded-md p-2 border-gray-300 w-full h-[300px]"
                            style={{ overflowY: 'auto' }}
                            autoFocus
                        />
                        </div>
                        <div className="col-span-3 flex flex-col m-3">
                        </div>
                        <div className="col-span-5 flex flex-row m-3 space-x-10 justify-center mt-6">
                            <Link href="/support/notice">
                                <button className='transform rounded-md bg-gray-300 px-4 py-2 mx-2 tracking-wide transition-colors duration-200 text-black'>
                                    취소
                                </button>
                            </Link>
                            <button className='transform rounded-md bg-white btn-outline-secondary border-1 px-4 py-2 mx-2 tracking-wide transition-colors duration-200 text-black'>
                                등록
                            </button>
                        </div>
                    </div>
                </Form>
            </Container>
        </main>
    )
}

export default NoticeEnroll;