import React, { FC } from 'react';
import styles from './Heading.module.scss';

interface HeadingProps {
  text: string;
}

const Heading: FC<HeadingProps> = ({ text }) => {
  return <h2 className={styles.heading}>{text}</h2>;
};

export default Heading;
