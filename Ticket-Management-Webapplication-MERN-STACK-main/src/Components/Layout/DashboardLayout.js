import React, { useState } from 'react';
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const DashboardLayout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const data = JSON.parse(localStorage.getItem('user'));
  
  return ( 
  <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%" >
      <Sidebar
      user={data || { }}
      isNonMobile={isNonMobile}
      drawerWidth="250px"
      isSidebarOpen={isSidebarOpen}
      setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1} sx={{width: isSidebarOpen ? {sm:`calc(100% - ${250}px)`}: '100%' }}>
        <Navbar user={data || { }} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <Outlet />
      </Box>
  </Box>
  )
}

export default DashboardLayout;

