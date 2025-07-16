// React Imports
import { useState } from 'react';

// Chakra UI
import { Button } from "@chakra-ui/react"

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faGear, faAddressCard, faCircleLeft, faCircleRight, } from '@fortawesome/free-solid-svg-icons';

// Custom Component
import { useAuth } from '../../context/AuthContext';

// CSS
import "./SidebarHeader.css"

const Sidebar = () => {
  
  // Hooks
  const { role } = useAuth();

  // State
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "0.5rem" }}>
          <span className="logo" style={{ fontSize: "18px", fontWeight: "500", transition: "opacity 0.3s ease", width: "100%", textAlign: "center" }}>
            BOSS MAKER
          </span>
          <Button className='sidebar-switch' colorPalette="teal" variant="solid"
            onClick={() => setCollapsed(!collapsed)}
          >
            <FontAwesomeIcon icon={collapsed ? faCircleRight : faCircleLeft} style={{ margin: '0px 0.3rem' }} />
          </Button>
        </div>
        <ul className="menu">
          {role === 'super_admin' && (
            <>
              <li>
                <FontAwesomeIcon icon={faHome} style={{ margin: '0px 0.3rem' }} />
                <span className="text">DashBoard</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faAddressCard} style={{ margin: '0px 0.3rem' }} />
                <span className="text">About</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faUser} style={{ margin: '0px 0.3rem' }} />
                <span className="text">Table of Content</span>
              </li>
            </>
          )}
          {role === 'bossmaker_member' && (
            <>
              <li>
                <FontAwesomeIcon icon={faHome} style={{ margin: '0px 0.3rem' }} />
                <span className="text">Home</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faAddressCard} style={{ margin: '0px 0.3rem' }} />
                <span className="text">About</span>
              </li>
            </>
          )}
          <li>
            <FontAwesomeIcon icon={faGear} style={{ margin: '0px 0.3rem' }} />
            <span className="text">Settings</span>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
