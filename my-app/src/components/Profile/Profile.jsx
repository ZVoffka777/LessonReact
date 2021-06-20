import React from 'react';
import content1242 from './content-1242.png';
import s from './Profile.module.css';
import MyPost from './MyPost/MyPost';

const Profile = () => {
	return <div>
		<div className={`${s.item} ${s.active}`}><img src={content1242} alt={'img'} width={1660} height={70}/></div>
		<MyPost/>
		</div>
}

export default Profile;
