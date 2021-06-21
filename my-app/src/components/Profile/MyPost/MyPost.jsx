import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = () => {

	let postData = [
		{id: 1, message: 'Hi, how are you?', likesCount: 14},
		{id: 2, message: 'How is your it-kamasutra?', likesCount: 12},
	]

	return <div className={s.postsBlock}><h3>My posts</h3><div>
		<br/>
			<div>
				<textarea value=""> </textarea>
			</div>
			<div>
				<button>Add post</button>
			</div>
		<hr/>
		</div>
			<div className={s.posts}>
				<Post message={postData[0] .message} likesCount={postData[0] .likesCount}/>
				<Post message={postData[1] .message} likesCount={postData[1] .likesCount}/>
			</div> 
		</div> 
}

export default MyPost;
