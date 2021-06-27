import React from 'react';
import s from './Dialogs.module.css';
import DialogItems from './DialogItems/DialogItems'
import Message from './Message/Message';
import {NavLink} from "react-router-dom";
import {dialogsData} from "react-router-dom";

const Dialogs = (props) => {
	let dialogsData = [
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

	let dialogsElements = dialogsData.map( d => <DialogItems name={d.name} id={d.id}/>);
	let messageElements = messages.map(m => <Message message={m.message}/>);

	return (<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{ dialogsElements }
			</div>
			<div className={s.messages}>
				{ messageElements }
			</div>
		</div>
	)
}

export default Dialogs;
