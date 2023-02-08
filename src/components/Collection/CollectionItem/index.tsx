import React, { FC } from 'react';
import styles from './CollectionItem.module.scss';

interface CollectionItemProps {
  isWide?: boolean;
  imgUrl: string;
  heading: string;
  text: string;
}

const CollectionItem: FC<CollectionItemProps> = ({ isWide = false, imgUrl, heading, text }) => {
  return (
    <article
      className={
        isWide
          ? `containerWide ${styles.collectionItem} ${styles.collectionItemWide}`
          : styles.collectionItem
      }
    >
      <img
        className={isWide ? `${styles.img} ${styles.imgWide}` : styles.img}
        src={imgUrl}
        alt=''
      />

      <div className={isWide ? `${styles.text} ${styles.textWide}` : styles.text}>
        <h3 className={styles.textHeading}>{heading}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
};

export default CollectionItem;
