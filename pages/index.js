// import React, { useState } from 'react'
// import CookieStandAdmin from '../components/CookieStandAdmin'
// import Footer from '../components/footer'
// import Header from '../components/head'
// import BodyHeader from '../components/BodyHeader'
// import LoginForm from '../components/LoginForm'
// import axios from 'axios';


// // const baseUrl ='https://fii-cookie-stand-api.herokuapp.com/';
// const baseUrl ='http://127.0.0.1:8000/';
// const tokenUrl = baseUrl+'api/token/';




// export default function Home() {
//   const [token, setToken] = useState('');

//   const submitHandler = async (e, credintials) => {
//     e.preventDefault();
//     axios.post(tokenUrl, credintials).then(data => {
//       setToken(data.data.access)
//     });
//     console.log(credintials)
//   }

//   if (!token) return <LoginForm submitHandler={submitHandler} />
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen py-2">
//       <Header />
//       <CookieStandAdmin
//       token={token}
//       />
//     </div>
//   )
// }


/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import axios from "axios"
import Login from "../components/LoginPage.js"
import Dashboard from "../components/Dashboard.js"


const baseUrl = 'http://127.0.0.1:8000/';
const tokenUrl = baseUrl + 'api/token/';

export default function Index() {
  // const [patch, setPatch] = useState(null)
  // const flag = false
  // const patchNotesUrl = process.env.NEXT_PUBLIC_PATCH_NOTES_URL
  // async function fetchPatch() {
  //   const response = await axios.get(`${patchNotesUrl}`)
  //   setPatch(response.data["patch-notes"])
  //   const flag = true
  // }
  // if (flag == false) {
  //   fetchPatch(patch)
  // }
  // console.log(patch);
  // return (
  //   patch ?
  //     <div className="flex flex-col items-center justify-center pl-5 text-xl text-left text-white align-middle bg-gray-900 ">
  //       <div dangerouslySetInnerHTML={{ __html: patch.replace("\n", "") }} />
  //     </div>
  //     : <div className="text-3xl font-bold"> Loading. . .</div>
  // )

  const [token, setToken] = useState('');

  const submitHandler = async (e, credintials) => {
    e.preventDefault();
    console.log(credintials)
    axios.post(tokenUrl, credintials).then(data => {
      setToken(data.data.access)
    });
  }

  if (!token) return <Login submitHandler={submitHandler} />
  return (
    <>
      <Dashboard 
      token={token}
      />
    </>
  );
}
