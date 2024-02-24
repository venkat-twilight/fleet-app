import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Loginpage from "../pages/login"
import Dashboard from "../pages/dashboard"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
