import React from 'react';
import Button from '@mui/material/Button';
import styles from './MyButton.module.scss';

export interface MyButtonProps {
  label: string;
  onClick?: () => void;
}

export const MyButton: React.FC<MyButtonProps> = ({ label, onClick }) => {
  console.log(styles.myButton)
  return (
    <Button className={styles.myButton} variant="contained" onClick={onClick}>
      {label} Test
    </Button>
  );
};