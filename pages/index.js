import React, { useState } from 'react'
import Main from '../components/main'
import Footer from '../components/footer'
import Header from '../components/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Header />
      <Main />
      <Footer/>      
    </div>
  )
}