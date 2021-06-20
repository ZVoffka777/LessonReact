import React from 'react';
import './App.css';
import './components/Header/Header.module.css';
import './components/Settings/Settings.module.css';
import './components/Music/Music.module.css';
import './components/News/News.module.css';
import './components/Navbar/Navbar.module.css';
import './components/Profile/Profile.module.css';
import './components/Dialogs/Dialogs.module.css';
import './components/Profile/MyPost/MyPost.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Post from './components/Profile/MyPost/Post/Post';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header/>
				<Navbar/>
				<div className='app-wrapper-content'>
					<Route path='/profile'component={Profile}/>
					<Route path='/dialogs'component={Dialogs}/>
					<Route path='/news'component={News}/>
					<Route path='/music'component={Music}/>
					<Route path='/settings'component={Settings}/>
				</div>
			</div>
		</BrowserRouter>);
}

export default App;
