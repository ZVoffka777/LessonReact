import React from 'react';
import logo from './logo.png';
import s from './Header.module.css';

const Header = () => {
	return <header className={s.header}>
			<img src={logo} alt={'logo'} width={40} height={30}/>
		</header>
}
 export default Header;
