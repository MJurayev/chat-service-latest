import { MouseEvent, MouseEventHandler, useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import SidebarItem, { ISidebarUserInfo } from '../Sidebar-item/SidebarItem';
import './Sidebar.css';
import SidebarLoading from './SidebarLoading';
export default function Sidebar() {
  const [users, setUsers] = useState<ISidebarUserInfo[]>([]);
  const usersList: ISidebarUserInfo[] = [
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
  const [isSidebarInfoLoading, SetIsSidebarInfoLoading] = useState<Boolean>(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      SetIsSidebarInfoLoading(false);
      setUsers(usersList);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  return (
    <div
      
      className="sidebarContainer"
    >
      <SidebarLoading visible={isSidebarInfoLoading} />
      {users.length == 0
        ? isSidebarInfoLoading
          ? 'loading'
          : 'No users yet'
        : users.map((user: ISidebarUserInfo, key) => {
            return (
              <Link key={key} className="sidebar__link" to={`/chat/${user.id}`}>
                <SidebarItem user={user} />
              </Link>
            );
          })}
    </div>
  );
}
