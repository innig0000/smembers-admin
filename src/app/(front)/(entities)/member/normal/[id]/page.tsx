"use client"
import Header from "@/app/(front)/_shared/layout/header";
import {Spinner, Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import dynamic from "next/dynamic";
import Map from "@/app/(front)/_shared/layout/map";

const NormalMemberDetail = ({ params }: { params: { id: string } }) => {
    const id = Number(params.id);
    const [data, setData] = useState({
        id: "",
        name: "",
        address: "",
        addressEtc: "",
        updatedAt: "",
    })
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
       detailPage();
    },[])

    const detailPage = async () => {
        try {
            const response = await fetch(`/api/member/normal/detail/${id}`, {
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
            <h1 className="flex text-xl font-bold m-3">회원관리 > 일반 회원 > 상세정보</h1>
            {isLoading ? (
                <div className="flex min-h-screen flex-col space-y-10 p-24 items-center">
                    <Spinner animation="border" role="status">
                    </Spinner>
                </div>
            ):(
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
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.address}{data.addressEtc}</td>
                    <td>{formattedDate(data.updatedAt)}</td>
                </tr>
                </tbody>
            </Table>
            )}
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