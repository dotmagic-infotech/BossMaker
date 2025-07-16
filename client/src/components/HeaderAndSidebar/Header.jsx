import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../../context/AuthContext";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import Typography from "@mui/material/Typography";

const Header = () => {
    const { role } = useAuth();
    const navigate = useNavigate();

    return (
        <header
            style={{
                backgroundColor: 'transparent',
                padding: '1rem 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
        >
            <div>
                <Typography sx={{ fontSize: '21px', fontWeight: 500 }}>
                    Welcome {role}
                </Typography>
                <Typography>Here’s what’s happening with your store today.</Typography>
            </div>
            <div
                style={{
                    backgroundColor: 'white',
                    padding: '6px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                }}
                onClick={() => navigate('/profile')}
                role="button"
                aria-label="Go to profile"
            >
                <FontAwesomeIcon icon={faUser} style={{ margin: '0 0.3rem' }} />
            </div>
        </header>
    );
};

export default Header;
