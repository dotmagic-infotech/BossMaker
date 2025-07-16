import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../../context/AuthContext";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const { role } = useAuth();

    return (
        <header style={{ backgroundColor: 'transparent', padding: '1rem 20px', display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ marginLeft: "14px" }}>
                <p style={{ fontSize: "21px", fontWeight: "500" }}>Welcome {role}</p>
                <p>Here’s what’s happening with your store today.</p>
            </div>
            <div style={{ backgroundColor: "white", padding: "6px", borderRadius: "50%", cursor: "pointer" }}>
                <FontAwesomeIcon icon={faUser} style={{ margin: '0px 0.3rem' }} />
            </div>
        </header>
    )
};

export default Header;
