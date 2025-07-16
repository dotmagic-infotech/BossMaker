import { Outlet } from "react-router-dom";
import Header from "../HeaderAndSidebar/Header";
import Sidebar from "../HeaderAndSidebar/Sidebar";
import Divider from '@mui/material/Divider';
import Card from "@mui/material/Card";


const MainLayout = ({ children }) => {
    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', backgroundColor: "#f5f5f5" }}>
            <Sidebar />

            <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Header />
                <Divider />
                <Card sx={{ flexGrow: 1, overflow: 'auto', borderRadius: '8px', margin: '1rem' }}>
                    <Outlet />
                </Card>
            </div>
        </div>
    );
};

export default MainLayout;
