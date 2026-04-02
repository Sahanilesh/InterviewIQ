import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import axios from 'axios'
import { setUserData } from './redux/userSlice'
import { useDispatch } from 'react-redux'
import InterviewPage from './pages/InterviewPage'
import InterviewHistory from './pages/InterviewHistory'
import Pricing from './pages/Pricing'
import InterviewReport from './pages/InterviewReport'

export const Server_URL = "https://interviewiq-znz9.onrender.com"

function App() {

  const dispatch = useDispatch()

  useEffect(() =>{
    const getUser = async () => {
      try {
        const { data } = await axios.get(
          Server_URL + "/api/user/current-user",
          { withCredentials: true }
        );
        dispatch(setUserData(data.user));          // ← unwrap here
      } catch (err) {
        console.log(err);
        dispatch(setUserData(null));
      }
    }
    getUser()
  },[dispatch])
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/interview' element={<InterviewPage />} />
      <Route path='/history' element={<InterviewHistory />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/report/:id' element={<InterviewReport />} />



    </Routes>
  )
}

export default App
