import React from 'react'
import Home from './Home';
import { useNavigate }from 'react-router-dom';

export default function Navbar() {
    const navigate=useNavigate();
    const handleHome=()=>{navigate("/Home")}
    const handlehome=()=>{navigate("/About")}
  return (
    <div>
      
    </div>
  )
}
