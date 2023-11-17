import Link from "next/link";

const Login = () => {

    return(
        <div className="border p-6 rounded-md max-w-md w-full mt-20">
        <h1 className='text-2xl font-semibold text-black text-center'>SMEMBERS</h1>
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
            <div className='mt-4 flex items-center'>
                <input
                    type='checkbox'
                    id='rememberMe'
                    className='mr-2'
                />
                <label
                    htmlFor='rememberMe'
                    className='text-sm text-gray-800 dark:text-gray-500'
                >
                    로그인 정보 저장
                </label>
            </div>

            <div className='mt-6'>
                <Link href="/dashboard">
                <button
                    className='w-full transform rounded-md bg-gray-300 px-4 py-2 tracking-wide transition-colors duration-200 text-black'
                >
                    로그인
                </button>
                </Link>
            </div>
        </div>
)
}

export default Login;