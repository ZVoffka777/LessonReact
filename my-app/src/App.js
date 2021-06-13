import React from 'react';
import './App.css';
import './components/Header/Header.module.css';
import './components/Navbar/Navbar.module.css';
import './components/Profile/Profile.module.css';
import './components/Dialogs/Dialogs.module.css';
import './components/Profile/MyPost/MyPost.module.css';
import './components/Profile/MyPost/Post/Post.jsx';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = () => {
	return (
<div className='app-wrapper'>
		<Header/>
		<Navbar/>
		{/*<Profile/>*/}
		<div className='app-wrapper-content'>
			<Dialogs/>
		</div>
</div>);
}

export default App;
