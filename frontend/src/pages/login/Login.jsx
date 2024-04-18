import React from 'react'

const Login = () => {
    return (
        <div className='flex lg:px-96 flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-14 bg-purple-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100'>
                <h1 className='text-3xl font-se text-center text-white'> LOGIN 
                <span className='text-blue-500'> ChitChat</span></h1>

                <form>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10'/>
                    </div>

                    <div>
                    <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type='text' placeholder='Enter password' className='w-full input input-bordered h-10'/>
                    </div>

                    <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>{"Don't"} have an account?</a>

                    <div>
                        <button className='btn btn-block btn-sm mt-2'>Login</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login;


/*import React from 'react'

const Login = () => {
    return (
        <div className='flex lg:px-96 flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-14 bg-purple-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100'>
                <h1 className='text-3xl font-se text-center text-white'> LOGIN 
                <span className='text-blue-500'> ChitChat</span></h1>

                <form>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10'/>
                    </div>

                    <div>
                    <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type='text' placeholder='Enter password' className='w-full input input-bordered h-10'/>
                    </div>

                    <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>{"Don't"} have an account?</a>

                    <div>
                        <button className='btn btn-block btn-sm mt-2'>Login</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login*/
