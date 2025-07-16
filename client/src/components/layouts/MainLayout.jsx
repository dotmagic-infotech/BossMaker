import { Outlet } from "react-router-dom";
import Header from "../HeaderAndSidebar/Header";
import Sidebar from "../HeaderAndSidebar/Sidebar";

const MainLayout = ({ children }) => {
    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', backgroundColor: "#f5f5f5" }}>
            <Sidebar />

            <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Header />
                <hr />
                <main
                    style={{
                        flexGrow: 1,
                        overflow: 'auto',
                        padding: '1rem',
                        backgroundColor: '#ffffff',
                        borderRadius: '8px',
                        boxShadow: '0 9px 20px #2e235e12',
                        margin: '1rem',
                    }}
                >
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
