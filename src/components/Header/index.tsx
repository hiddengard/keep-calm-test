import React, { FC } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import Phone from '../../assets/images/phone.svg';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className='visually-hidden'>Keep calm test</h1>
      <div className={`container ${styles.headerContainer}`}>
        <Link to='/'>
          <img className={styles.headerLogo} src={Logo} alt='logo' />
        </Link>
        <a className={styles.headerPhone} href='tel:+7(495)495-49-54'>
          <span className={styles.headerPhoneNumber}>+7 (495) 495-49-54</span>
          <img className={styles.headerPhoneImg} src={Phone} alt='phone' />
        </a>
      </div>
    </header>
  );
};

export default Header;
