import Header from "@/app/(front)/_shared/layout/header";
import Link from "next/link";

const ManagerEnroll = () => {
    return(
    <main className="flex min-h-screen items-center justify-center p-24">
        <Header/>
        <h1 className="absolute left-20 top-20 text-xl font-bold m-3">회원관리 > 관리자 등록</h1>
        <div className="border border-gray-500 p-6 items-center rounded-md max-w-md w-full">
            <h1 className='text-2xl font-semibold text-black text-center'>관리자 등록</h1>
            <div className='mt-10'>
                <label
                    htmlFor='email'
                    className='block text-sm text-gray-800 dark:text-gray-500'
                >
                    아이디
                </label>
                <div className='mt-1'>
                    <input
                        id='email'
                        name='email'
                        type='email'
                        required
                        autoFocus={true}
                        className='mt-2 block w-full rounded-md bg-gray-300 px-4 py-2 focus:outline-none'
                    />
                </div>
            </div>
            <div className='mt-4'>
                <label
                    htmlFor='password'
                    className='block text-sm text-gray-800 dark:text-gray-500'
                >
                    비밀번호
                </label>
                <div className='mt-1'>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        className='mt-2 block w-full rounded-md bg-gray-300 px-4 py-2 focus:outline-none'
                    />
                </div>
            </div>
            <div className='mt-4'>
                <label
                    htmlFor='name'
                    className='block text-sm text-gray-800 dark:text-gray-500'
                >
                    관리자 명
                </label>
                <div className='mt-1'>
                    <input
                        type='name'
                        id='name'
                        name='name'
                        className='mt-2 block w-full rounded-md bg-gray-300 px-4 py-2 focus:outline-none'
                    />
                </div>
            </div>

            <div className='flex justify-center mt-6'>
                <Link href="/member/manager">
                <button
                    className='transform rounded-md bg-gray-300 px-4 py-2 mx-2 tracking-wide transition-colors duration-200 text-black'
                >
                    취소
                </button>
                </Link>
                    <button
                        className='transform rounded-md bg-white btn-outline-secondary border-1 px-4 py-2 mx-2 tracking-wide transition-colors duration-200 text-black'
                    >
                        등록
                    </button>
            </div>
        </div>
    </main>
    )
}

export default ManagerEnroll;