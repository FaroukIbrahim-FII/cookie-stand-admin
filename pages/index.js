import React, { useState } from 'react'
import CookieStandAdmin from '../components/CookieStandAdmin'
import Footer from '../components/footer'
import Header from '../components/head'
import BodyHeader from '../components/BodyHeader'
import LoginForm from '../components/LoginForm'
import axios from 'axios';


const baseUrl ='https://fii-cookie-stand-api.herokuapp.com/';
const tokenUrl = baseUrl+'api/token/';




export default function Home() {
  const [token, setToken] = useState('');

  const submitHandler = async (e, credintials) => {
    e.preventDefault();
    axios.post(tokenUrl, credintials).then(data => {
      setToken(data.data.access)
    });
    console.log(credintials)
  }

  if (!token) return <LoginForm submitHandler={submitHandler} />
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Header />
      <CookieStandAdmin
      token={token}
      />
    </div>
  )
}
