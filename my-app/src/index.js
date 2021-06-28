import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Dialogs from './components/Dialogs/Dialogs';
import reportWebVitals from './reportWebVitals';

	let posts = [
		{id: 1, message: 'Hi, how are you?', likesCount: 14},
		{id: 2, message: 'How is your it-kamasutra?', likesCount: 12},
		{id: 3, message: 'Blabla', likesCount: 12},
		{id: 4, message: 'Dada', likesCount: 12},
	]

	let dialogs = [
		{id: 1, name: 'Dimych'},
		{id: 2, name: 'Andrey'},
		{id: 3, name: 'Sveta'},
		{id: 4, name: 'Sasha'},
		{id: 5, name: 'Viktor'},
		{id: 6, name: 'Valera'},
	]

	let messages =[
		{id: 1, message: 'Hi'},
		{id: 1, message: 'How is your it-kamasutra?'},
		{id: 1, message: 'Hi'},
		{id: 1, message: 'Yo'},
		{id: 1, message: 'Hi'},
		{id: 1, message: 'Yo'},
	]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
