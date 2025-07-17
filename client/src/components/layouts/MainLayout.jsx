import { Outlet } from "react-router-dom";
import Header from "../HeaderAndSidebar/Header";
import Sidebar from "../HeaderAndSidebar/Sidebar";
import Divider from '@mui/material/Divider';
import Card from "@mui/material/Card";


const MainLayout = ({ children }) => {
    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', backgroundColor: "rgb(229, 229, 229)" }}>
            <Sidebar />

            <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', padding: "10px" }}>
                <Header />
                <Card sx={{ flexGrow: 1, overflow: 'auto', borderRadius: '1.25rem', boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.125rem 0.25rem 0.0625rem" }}>
                    <Outlet />
                </Card>
            </div>
        </div>
    );
};

export default MainLayout;
