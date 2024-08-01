import React from 'react'
import HomeDashboard from "@/components/homedashboard";
import NavBar from '@/components/ui/Navbar';

function Home() {
  return (
    <div>
      <NavBar/>
      <div>
        <HomeDashboard/>
      </div>
    </div>
  )
}

export default Home