import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "bootstrap/dist/css/bootstrap.css"
import {BrowserRouter, Route, Routes} from "react-router-dom"

import Home from "./User/Pages/Home"
import UserBase from "./User/UserBase"
import Register from './User/Pages/Register'
import Profile from './User/Pages/Profile'
import StaffLogin from './Staff/StaffLogin'
import RestaurantManagerControlPanel from './Staff/RestaurantManager'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/restaurant-web-application'>
      <Routes>
        <Route path='/' element={<UserBase element={<Home />} />}/>
        <Route path='/restaurant-web-application/register' element={<UserBase element={<Register />} />}/>
        <Route path='/restaurant-web-application/profile' element={<UserBase element={<Profile />} />}/>
        <Route path='/restaurant-web-application/staff/login' element={<UserBase element={<StaffLogin />} />}/>
        <Route path='/restaurant-web-application/restaurant-manager/control-panel' element={<RestaurantManagerControlPanel />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
