import Header from "@/app/(front)/_shared/layout/header";
import {Table} from "react-bootstrap";

const Nft = () => {
    return(
        <main className="flex min-h-screen flex-col p-24">
            <Header/>
            <h1 className="flex text-xl font-bold m-3">상품 관리</h1>
            <button className="ml-auto mb-2 rounded-2 pl-5 pr-5 bg-gray-300 text-black">
                최신순
                <span className="ms-2 transform -translate-x-1/2 text-sm text-black-50" style={{ display: 'inline-block', transform: 'rotate(90deg)' }}>》</span>
            </button>
            <Table>
                <thead>
                <tr>
                    <th style={{width: "5%"}}>
                        유형
                    </th>
                    <th>
                        회원 ID
                    </th>
                    <th>
                        NFT명
                    </th>
                    <th>
                        가격
                    </th>
                    <th>
                        유효 기간
                    </th>
                    <th>
                        할인율
                    </th>
                    <th>
                        발행량
                    </th>
                    <th style={{width: "15%"}}>
                        발행 날짜
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
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                </tr>
                </tbody>
            </Table>
        </main>
    )
}

export default Nft;