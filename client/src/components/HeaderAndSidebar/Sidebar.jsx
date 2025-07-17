// React Imports
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Icons
import GridViewIcon from '@mui/icons-material/GridView';
import PeopleIcon from '@mui/icons-material/People';

// Mui Imports
import { Avatar, Box, Typography } from '@mui/material';

// Custom Component
import { useAuth } from '../../context/AuthContext';

const Sidebar = () => {

  // Hooks
  const { role } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // State


  const SIDEBARLIST = [
    {
      slug: "dashboard",
      name: "Dashboard",
      icon: <GridViewIcon />,
      navigate: "/dashboard"
    },
    {
      slug: "role",
      name: "Roles & Permissions",
      icon: <PeopleIcon />,
      navigate: "/role-user"
    },
    {
      slug: "setting",
      name: "Settings",
      icon: <PeopleIcon />,
      navigate: "/setting"
    },
  ]

  return (
    <div style={{ minWidth: "240px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "75px" }}>
        <span className="logo" style={{ fontSize: "22px", fontWeight: "600", transition: "opacity 0.3s ease", width: "100%", textAlign: "center" }}>
          BOSS MAKER
        </span>
      </div>
      <div style={{ padding: "4px", display: "flex", flexDirection: "column", gap: "2px", height: "calc(100% - 9.3rem)" }}>
        {SIDEBARLIST.map((v, i) => {
          const isActive = location.pathname === v.navigate;
          return (
            <li
              key={i}
              className={isActive ? 'sidebar-list-select' : 'sidebar-list'}
              onClick={() => navigate(v.navigate)}
            >
              {v.icon}
              <Typography fontWeight={500}>{v.name}</Typography>
            </li>
          );
        })}
      </div>
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px", padding: "4px" }}>
        <Avatar alt="user" src="https://cdn.menuonline.com/preview/mycircle-files-1/mycircle-test/225/o3vIBbfmHHf3GsV.JPEG" sx={{ width: "55px", height: "55px" }} />
        <Box>
          <Typography style={{ fontSize: "12px" }}>Good Day</Typography>
          <Typography sx={{ fontWeight: "600" }}>Virat Kohli</Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Sidebar;
