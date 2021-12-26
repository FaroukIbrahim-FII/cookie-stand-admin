import React from 'react'
import {useState} from 'react';

export default function LoginForm({submitHandler}) {
    const [credintials, setCredentials] = useState({username: '', password:''});
    const userNameHandler = (e) =>{
        // console.log(e.target.value);
        setCredentials({username: e.target.value});
    }
    const passwordChangeHandler = (e) =>{
        setCredentials({...credintials, password:e.target.value});
    }
    return (
        <form
            className="flex flex-col w-1/2 gap-4 p-8 mx-auto my-4 text-center bg-green-200 border-2 border-green-400 rounded-lg text-md" onSubmit={e=>submitHandler(e,credintials)} method='post'
        >
            <div className="flex flex-col items-center justify-center">
                <label className="mb-2 font-bold uppercase text-grey-darkest">
                    User Name
                </label>
                <input
                    className="w-10/12 px-3 py-2 border text-grey-darkest" type="text" name="username" id="username" required onChange={userNameHandler}
                />
            </div>

            <div className="flex flex-col items-center justify-center">
                <label className="mb-2 font-bold uppercase text-grey-darkest">
                    Password
                </label>
                <input
                    className="w-10/12 px-3 py-2 border text-grey-darkest" type="password" name="password" id="password" required onChange={passwordChangeHandler} 
                />
            </div>

            <button
                className="px-3 py-4 mt-8 uppercase bg-green-500 rounded text-green hover:bg-green-600 text-gray-50 " type="submit"
            >
                Sign In
            </button>
        </form>
    )
}