import React from 'react';
import s from './Post.module.css';
import unnamed from './unnamed.jpg';

const Post = (props) => {
	return <div className={s.item}>
			<img src={unnamed} alt={'img'} width={88} height={88}/>
			{props.message}
				<div><span>{props.like} like</span></div>
		</div>
}

export default Post;
