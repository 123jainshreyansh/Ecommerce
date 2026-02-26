import React from 'react'
import Nav from '../components/Nav.jsx';
import Sidebar from '../components/Sidebar.jsx';

function Home() {
  return (
    <div className="w-screen h-screen bg-linear-to-r from-[#141414] to-[#0c2025] text-white relative">
      <Nav/>
      <Sidebar/>
    </div>
  );
}

export default Home