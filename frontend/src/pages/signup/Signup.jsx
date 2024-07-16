import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



import useSignup from '../../hooks/useSignup';

const Signup = () => {

    const [input, setInput]= useState({
        fullName: '',
        username:'',
        password:'',
        confirmPassword:'',
        gender:''
    });

    const {loading , signup} = useSignup();

    const handleCheckboxChange =(gender)=>{
        setInput({...input, gender})
    };

    const handleSubmit= async(e)=>{
        e.preventDefault();
        await signup(input);
    };

    return (
        <div className='flex lg:px-96 flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-14 bg-purple-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100'>
                <h1 className='text-3xl font-se text-center text-white'> Signup
                    <span className='text-blue-500'> ChitChat</span></h1>

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className='label p-2'>
                                <span className='text-base label-text'>Full Name</span>
                            </label>
                            <input type='text' placeholder='John Doe' className='w-full input input-bordered h-10' value={input.fullName} onChange={(e)=>setInput({...input, fullName: e.target.value})}/>
                        </div>

                        <div>
                            <label className='label p-2'>
                                <span className='text-base label-text'>Username</span>
                            </label>
                            <input type='text' placeholder='johndoe' className='w-full input input-bordered h-10' value={input.username} onChange={(e)=>setInput({...input, username: e.target.value})}/>
                        </div>

                        <div>
                            <label className='label p-2'>
                                <span className='text-base label-text'>Password</span>
                            </label>
                            <input type='text' placeholder='Enter Password' className='w-full input input-bordered h-10' value={input.password} onChange={(e)=>setInput({...input, password: e.target.value})}/>
                        </div>

                        <div>
                            <label className='label p-2'>
                                <span className='text-base label-text'>Confirm Password</span>
                            </label>
                            <input type='text' placeholder='Confirm Password' className='w-full input input-bordered h-10' value={input.confirmPassword} onChange={(e)=>setInput({...input, confirmPassword: e.target.value})}/>
                        </div>

                        <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={input.gender}/>

                        <Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Already have an account?</Link>

                        <div>
                        <button className='btn btn-block btn-sm mt-2' disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                        </button>
                    </div>
                    </form>

            </div>
        </div>
    )
}

export default Signup;


