import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from './features/userSlice';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


function Header() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const userName = user?.displayName;

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    };
    return (
        <div className='header'>
            {/* <h1>This is the header</h1> */}

            <div className="header__left">
                <img 
                    src="https://firebasestorage.googleapis.com/v0/b/linkedin-clone-b348b.appspot.com/o/RT%20initial%20transparent.png?alt=media&token=2a16cca7-7685-41bd-a90f-401bdf59d4c2" 
                    alt="" 
                    />

                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search"type="text"/>
                </div>

            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption avatar={true}
                title={userName}
                />
                <HeaderOption Icon={ExitToAppIcon} title="LogOut" onClick={logoutOfApp}/>
            </div>
        </div>
    );
}

export default Header;
