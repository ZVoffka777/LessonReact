import React from 'react';
import content1242 from './content-1242.png';
import s from './Profile.module.css';

const Profile = () => {
	return <div className={s.content}>
		<div> <img src={content1242} alt={'img'} width={1660} height={70}/> </div>
			<div> ava + description </div>
				<div className={s.posts}> My posts <div>New post</div>
					<div> <div className={s.item}> post1 </div> </div>
					<div> <div className={s.item}> post2 </div> </div>
				</div>{/* END s.post */}
		</div>/* END s.content */
}

export default Profile;
