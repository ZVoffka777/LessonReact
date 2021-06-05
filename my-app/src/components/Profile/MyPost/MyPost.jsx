import React from 'react';
import s from './MyPost.module.css';

const MyPost = () => {
	return <div className={s.posts}> My posts <div>New post</div>
					<div> <div className={s.item}> post1 </div> </div>
					<div> <div className={s.item}> post2 </div> </div>
	       </div>/* END s.post */
}

export default MyPost;
