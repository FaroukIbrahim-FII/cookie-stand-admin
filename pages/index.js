import React, { useState } from 'react'
import CookieStandAdmin from '../components/CookieStandAdmin'
import Footer from '../components/footer'
import Header from '../components/head'
import BodyHeader from '../components/BodyHeader'


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Header />
      <CookieStandAdmin />     
    </div>
  )
}