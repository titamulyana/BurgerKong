import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import SideBar from './SideBar'

export default function Layout({children}) {
   const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/login", { replace: true });
    }
  }, [localStorage.getItem("access_token")]);

  return (
    <div className='row'>
        <SideBar/>
        <div className='col-10 bg-red'>
        {children}
        </div>
    </div>
  )
}
