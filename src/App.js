import logo from './logo.svg'
import './App.css'
import { useEffect } from 'react'
import { gql, useQuery } from '@apollo/client'
import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Login from './components/Login/Login'

function App() {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  )
}

export default App
