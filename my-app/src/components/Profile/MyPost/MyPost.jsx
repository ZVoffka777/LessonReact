import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = () => {

	let posts = [
		{id: 1, message: 'Hi, how are you?', likesCount: 14},
		{id: 2, message: 'How is your it-kamasutra?', likesCount: 12},
	]

	let postsElements = posts.map (p => <Post message={p.message} likesCount={p.likesCount}/>);

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
				{ postsElements }
			</div> 
	</div> 
}

export default MyPost;
