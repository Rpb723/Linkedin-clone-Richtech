import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./Sidebar.css"

function Sidebar() {
    const user = useSelector(selectUser);


    const recentItem  = (topic) =>(
        <div className="sidebar__recentItem">
            <span className= "sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );


    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img
                    src="https://news.psu.edu/sites/default/files/styles/photo_gallery_large/public/bs%20in%20sweng.jpg?itok=_l6069Lb"
                    alt=""
                />
                <Avatar src={user.photoUrl} className="sidebar__avatar">
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>View on profile</p>
                    <p className="sidebar__statNumber">2,543</p> {/* Statisics Numers*/}
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,543</p> {/* Statisics Numers*/}
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('redux.js')}
                {recentItem('programming')}
                {recentItem('softwareEngineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
    )
}

export default Sidebar
