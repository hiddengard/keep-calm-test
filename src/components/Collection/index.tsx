import React, { FC } from 'react';
import Heading from './Heading';
import CollectionItem from './CollectionItem';
import styles from './Collection.module.scss';

interface CollectionProps {
  heading: string;
  items: {
    id: number;
    imgUrl: string;
    heading: string;
    text: string;
  }[];
}

const Collection: FC<CollectionProps> = ({ heading, items }) => {
  return (
    <section className={styles.collection}>
      <div className='container'>
        <Heading text={heading} />
      </div>

      {items.map((item, index) => {
        return (
          <CollectionItem
            key={item.id}
            imgUrl={item.imgUrl}
            heading={item.heading}
            text={item.text}
            isWide={!(index % 2)}
          />
        );
      })}
    </section>
  );
};

export default Collection;
