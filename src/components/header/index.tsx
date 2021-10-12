import React from 'react';
import { useComponent } from './useComponent';
import styles from './styles.module.css';
import logo from '../../assets/logo.png';

export const Header: React.FC = () => {
  const { title } = useComponent();

  return (
    <header className={styles.header}>
      <img className={styles.headerLogo} src={logo} alt="Logo of Todo App" />
      <h1 className={styles.headerTitle}>{title}</h1>
    </header>
  );
};
