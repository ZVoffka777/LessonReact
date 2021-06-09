import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = () => {
	return <div> My posts 
		<div>
		<br/>
			<textarea value=""> </textarea>
		<hr/>
			<button>Add post</button>
		</div>
		<br/>
			<div className={s.posts}>
				<Post message='Hi, how are you?' likesCount=' 12'/>
				<Post message="It's my first post" likesCount=' 20'/>
			</div> 
		</div> 
}

export default MyPost;
