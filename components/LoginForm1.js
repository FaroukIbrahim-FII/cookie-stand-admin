// import React from 'react'
// import {useState} from 'react';

// export default function LoginForm({submitHandler}) {
//     const [credintials, setCredentials] = useState({username: '', password:''});
//     const userNameHandler = (e) =>{
//         // console.log(e.target.value);
//         setCredentials({username: e.target.value});
//     }
//     const passwordChangeHandler = (e) =>{
//         setCredentials({...credintials, password:e.target.value});
//     }
//     return (
//         <form
//             className="flex flex-col w-1/2 gap-4 p-8 mx-auto my-4 text-center bg-green-200 border-2 border-green-400 rounded-lg text-md" onSubmit={e=>submitHandler(e,credintials)} method='post'
//         >
//             <div className="flex flex-col items-center justify-center">
//                 <label className="mb-2 font-bold uppercase text-grey-darkest">
//                     User Name
//                 </label>
//                 <input
//                     className="w-10/12 px-3 py-2 border text-grey-darkest" type="text" name="username" id="username" required onChange={userNameHandler}
//                 />
//             </div>

//             <div className="flex flex-col items-center justify-center">
//                 <label className="mb-2 font-bold uppercase text-grey-darkest">
//                     Password
//                 </label>
//                 <input
//                     className="w-10/12 px-3 py-2 border text-grey-darkest" type="password" name="password" id="password" required onChange={passwordChangeHandler} 
//                 />
//             </div>

//             <button
//                 className="px-3 py-4 mt-8 uppercase bg-green-500 rounded text-green hover:bg-green-600 text-gray-50 " type="submit"
//             >
//                 Sign In
//             </button>
//         </form>
//     )
// }

import React, {useState} from "react";


export default function Login(props) {
    const [credintials, setCredentials] = useState({ username: '', password: '' });
    const userNameHandler = (e) => {
        console.log(e.target.value);
        setCredentials({ username: e.target.value });
    }
    const passwordChangeHandler = (e) => {
        setCredentials({ ...credintials, password: e.target.value });
    }
    console.log(credintials);
        return (
            <>
                <div className="container mx-auto px-4 h-full">
                    <div className="flex content-center items-center justify-center h-full">
                        <div className="w-full lg:w-4/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                                <div className="rounded-t mb-0 px-6 py-6">
                                    <div className="text-center mb-3">
                                    </div>
                                    <hr className="mt-6 border-b-1 border-blueGray-300" />
                                </div>
                                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                    <form onSubmit={e=>props.submitHandler(e,credintials)} method='post'>
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="text"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="Email"
                                                onChange={userNameHandler}
                                            />
                                        </div>

                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="Password"
                                                onChange={passwordChangeHandler}
                                            />
                                        </div>
                                        <div>
                                            <label className="inline-flex items-center cursor-pointer">
                                                <input
                                                    id="customCheckLogin"
                                                    type="checkbox"
                                                    className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                                                />
                                                <span className="ml-2 text-sm font-semibold text-blueGray-600">
                                                    Remember me
                                                </span>
                                            </label>
                                        </div>

                                        <div className="text-center mt-6">
                                            <input
                                                className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                                type="submit"
                                            />
                                                Sign In
                                            {/* </button> */}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
