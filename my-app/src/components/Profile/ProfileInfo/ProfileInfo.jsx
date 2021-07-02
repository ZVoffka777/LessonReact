import React from 'react';
import content1242 from './content-1242.png';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return <div> 
			<div>
				<div className={`${s.item} ${s.active}`}><img src={content1242} alt={' img'} width={1660} height={70}/></div>
			</div> 
		<div className={s.descriptionBlock}></div>
		</div> 
}

export default ProfileInfo;
