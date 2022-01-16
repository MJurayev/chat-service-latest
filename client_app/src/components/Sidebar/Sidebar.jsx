import { Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDrawer } from '../../layouts/DrawerProvider';
import SidebarItem from '../Sidebar-item/SidebarItem';
import './Sidebar.css';
import SidebarLoading from './SidebarLoading';
export default function Sidebar() {
  const [users, setUsers] = useState([]);
  const usersList = [
    { id: '1', name: 'Mansur Lorem ipsum', surname: "Jo'rayev", imageSrc: '/img/static.jpg' },
    {
      id: '2',
      name: 'Muhiddin Mansur Lorem ipsum Mansur Lorem ipsum',
      surname: 'Malikov',
      imageSrc: '/img/static.jpg',
    },
    { id: '3', name: 'Dilmurod', surname: 'Hasanov', imageSrc: '/img/static.jpg' },
    { id: '4', name: 'Mansur', surname: "Jo'rayev", imageSrc: '/img/static.jpg' },
    { id: '5', name: 'Sodiq', surname: 'Xushmirzayev', imageSrc: '/img/static.jpg' },
    { id: '6', name: 'Solihon', surname: "Jo'rayev", imageSrc: '/img/static.jpg' },
    { id: '7', name: "Ulug'murod", surname: 'Normurodov', imageSrc: '/img/static.jpg' },
    { id: '8', name: 'Behruz', surname: 'Normamatov', imageSrc: '/img/static.jpg' },
    { id: '9', name: 'Behruz', surname: 'Boisxonov', imageSrc: '/img/static.jpg' },
    { id: '10', name: 'Soqivoy', surname: 'Xolmirzayev', imageSrc: '/img/static.jpg' },
    { id: '10', name: 'Soqivoy', surname: 'Xolmirzayev', imageSrc: '/img/static.jpg' },
  ];
  const [isSidebarInfoLoading, SetIsSidebarInfoLoading] = useState(true);
  const [setIsOpen] = useDrawer(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      SetIsSidebarInfoLoading(false);
      setUsers(usersList);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  const toggleDrawer =()=>{
    setIsOpen(state => !state)
  }
  return (
    <div className="sidebarContainer">
      <div className="sidebar__tools">
        <AppBar
          style={{
            height: '100%',
            backgroundColor: '#0A1929',
            width: '100%',
            justifyContent: 'flex-start',
          }}
          position="static"
        >
          <Toolbar style={{ height: '70%', display: 'flex', justifyContent: 'space-between' }}>
            <IconButton
              onClick={toggleDrawer}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <input placeholder='Search' spellCheck={false} type="search" className="search__input" />
          </Toolbar>
        </AppBar>
      </div>

      <div className="sidebar__contacts">
        <SidebarLoading visible={isSidebarInfoLoading} />
        {users.length == 0
          ? isSidebarInfoLoading
            ? 'loading'
            : 'No users yet'
          : users.map((user, key) => {
              return (
                <NavLink
                  key={key}
                  className={(props) =>
                    `${props.isActive ? 'sidebar__link--active' : ''} sidebar__link`
                  }
                  to={`/chat/${user.id}`}
                >
                  <SidebarItem user={user} />
                </NavLink>
              );
            })}
      </div>
    </div>
  );
}
