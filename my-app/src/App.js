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

const App = (props) => {
	let newAppElement = React.createRef();
	let addApp = () => {
		let text = newAppElement.current.value;
		alert(text);
	}

	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header/>
				<Navbar/>
				<div className='app-wrapper-content'>
					<Route path='/profile' render={ () => <Profile posts={props.state.posts}/>}/>
					<Route path='/dialogs' render={ () => <Dialogs dialogs={props.state.dialogs} messages={props.state.messages}/>}/>
					<Route path='/news' render={ () => <News/>}/>
					<Route path='/music' render={ () => <Music/>}/>
					<Route path='/settings' render={ () => <Settings/>}/>
					<div>
						<textarea ref={newAppElement}></textarea>
					</div>
					<div>
						<button onClick={ addApp }>Add post</button>
					</div>
				</div>
			</div>
		</BrowserRouter>);
}

export default App;
