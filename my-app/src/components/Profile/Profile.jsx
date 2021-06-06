import React from 'react';
import content1242 from './content-1242.png';
import s from './Profile.module.css';
import MyPost from './MyPost/MyPost';

const Profile = () => {
	return <div className={s.content}>
		<div> <img src={content1242} alt={'img'} width={1660} height={70}/> </div>
			<div> ava + description </div>
		<MyPost/>
		</div>
}

export default Profile;
