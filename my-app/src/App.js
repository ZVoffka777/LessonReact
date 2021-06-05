import React from 'react';
import './App.css';
import './components/Header.module.css';
import './components/Navbar.module.css';
import './components/Profile.module.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

const App = () => {
	return (
<div className='app-wrapper'>
		<Header/>
		<Navbar/>
		<Profile/>
</div>);
}

export default App;